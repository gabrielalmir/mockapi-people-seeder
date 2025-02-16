# MockAPI People Seeder

This project is a NestJS application designed to seed a PostgreSQL database with a large number of mock people data. It includes a REST API to interact with the data.

### Gaussian Time Delay

The following code snippet from `PersonController.ts` demonstrates how to introduce a random sleep duration in your application using a Gaussian distribution:

```ts
async simulateSlowAPI(size: number = 1) {
  const mean = 100 * size;
  const stddev = 30 * size;
  const gaussianSleep = mean + stddev * Math.random();
  const randomSleep = Math.max(0, gaussianSleep);

  await new Promise((resolve) => setTimeout(resolve, randomSleep)); // simulate slow API call
}
```

This code calculates a random sleep duration based on a Gaussian distribution with a specified mean and standard deviation, ensuring the sleep duration is non-negative.
That simulates a more realistic scenario where the response time of the API is not constant.

## Features

- Seed database with mock people data
- REST API to interact with the data
- Docker support for easy deployment

## Requirements

- Node.js
- npm or yarn
- Docker (optional, for containerized deployment)

## Getting Started

### Clone the repository

```sh
git clone https://github.com/gabrielalmir/mockapi-people-seeder.git
cd mockapi-people-seeder
```

### Install dependencies

```sh
pnpm install
```

### Build and Run

#### Using pnpm

```sh
pnpm start:dev
```

#### Using Docker

```sh
docker-compose up --build
```

### API Endpoints

- **GET /person/count**: Get the count of people in the database
- **GET /person?size={size}&page={page}**: Get a list of people with pagination
- **DELETE /person**: Delete all people from the database

### Configuration

The application can be configured using environment variables defined in a `.env` file located in the root directory.

### Example `.env` file

```
DATABASE_URL="postgresql://mock:mock@localhost:5432/mock?schema=public"
POSTGRES_DB=mock
POSTGRES_USER=mock
POSTGRES_PASSWORD=mock
```
