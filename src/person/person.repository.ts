import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/db/prisma.service";
import { PersonEntity } from "./person.entity";

@Injectable()
export class PersonRepository {
    constructor(
        private readonly prisma: PrismaService,
    ) {}

    async savePersons(persons: PersonEntity[]) {
        return this.prisma.person.createMany({
            data: persons,
        });
    }

    async findAllPersons(page: number, size: number) {
        return this.prisma.person.findMany({
            skip: (page - 1) * size,
            take: size,
        });
    }

    async countPersons() {
        return this.prisma.person.count();
    }
}
