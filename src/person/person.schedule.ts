import { Injectable, Logger } from "@nestjs/common";
import { Interval } from "@nestjs/schedule";
import { PersonEntity } from "./person.entity";
import { PersonService } from "./person.service";

@Injectable()
export class PersonSchedule {
    private static readonly MAX_LINES = 1_000_000;
    private static readonly BATCH_SIZE = 1_000;
    private static LIMIT_REACHED = false;

    private readonly logger = new Logger(PersonSchedule.name);

    constructor(
        private readonly personService: PersonService
    ) {}

    @Interval(1000)
    async init() {
        if (PersonSchedule.LIMIT_REACHED) {
            return;
        }

        const batch = new Array<PersonEntity>();
        const batchSize = Math.floor(Math.random() * PersonSchedule.BATCH_SIZE);

        while (batch.length < batchSize) {
            const name = Math.random().toString();
            const age = Math.floor(Math.random() * 82) + 18;
            const birthDate = new Date();
            const height = (1.5 + Math.random() * 0.5);
            const weight = (50 + Math.random() * 70);
            const gender = Math.random() > 0.5 ? 'M' : 'F';
            const documentNumber = Math.abs(Math.random()).toString();

            batch.push(new PersonEntity({ name, age, birthDate, height, weight, gender, documentNumber }));
        }

        this.logger.log(`Scheduled batch with ${batch.length} persons`);
        await this.personService.savePersons(batch);
        batch.length = 0;

        PersonSchedule.LIMIT_REACHED = await this.personService.countPersons() >= PersonSchedule.MAX_LINES;
    }
}
