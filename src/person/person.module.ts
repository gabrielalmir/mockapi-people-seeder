import { Module } from "@nestjs/common";
import { PersonController } from "./person.controller";
import { PersonRepository } from "./person.repository";
import { PersonSchedule } from "./person.schedule";
import { PersonService } from "./person.service";

@Module({
    controllers: [PersonController],
    providers: [PersonService, PersonRepository, PersonSchedule],
})
export class PersonModule {}
