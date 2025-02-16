-- CreateTable
CREATE TABLE "people" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" SMALLINT NOT NULL,
    "birthDate" DATE NOT NULL,
    "height" REAL NOT NULL,
    "weight" REAL NOT NULL,
    "gender" CHAR(1) NOT NULL,
    "documentNumber" TEXT NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "people_pkey" PRIMARY KEY ("id")
);
