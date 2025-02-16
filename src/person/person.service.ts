import { Injectable, Logger } from "@nestjs/common";
import { PersonEntity } from "./person.entity";
import { PersonRepository } from "./person.repository";

@Injectable()
export class PersonService {
    private readonly logger = new Logger(PersonService.name);

    constructor(
        private readonly personRepository: PersonRepository,
    ) {}

    async savePersons(persons: PersonEntity[]) {
        this.logger.log(`Saving ${persons.length} persons`);
        return this.personRepository.savePersons(persons);
    }

    async findAllPersons(page: number, size: number) {
        this.logger.log(`Finding persons with page ${page} and size ${size}`);
        return this.personRepository.findAllPersons(page, size);
    }

    async countPersons() {
        this.logger.log(`Counting persons`);
        return this.personRepository.countPersons();
    }
}
