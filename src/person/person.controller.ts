import { Controller, Get, Query } from "@nestjs/common";
import { PersonService } from "./person.service";

@Controller('person')
export class PersonController {
    constructor(
        private readonly personService: PersonService,
    ) {}

    @Get()
    async findAllPersons(@Query('page') page: number, @Query('size') size: number) {
        await this.simulateSlowAPI(size);
        const people = await this.personService.findAllPersons(page, size);
        return people;
    }

    @Get('count')
    async countPersons() {
        await this.simulateSlowAPI();
        const count = await this.personService.countPersons();
        return count;
    }

    async simulateSlowAPI(size: number = 1) {
        const mean = 100 * size;
        const stddev = 30 * size;
        const gaussianSleep = mean + stddev * Math.random();
        const randomSleep = Math.max(0, gaussianSleep);

        await new Promise((resolve) => setTimeout(resolve, randomSleep)); // simulate slow API call
    }
}
