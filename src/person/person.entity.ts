import { Person } from "@prisma/client";

export class PersonEntity implements Omit<Person, 'id' | 'createdAt'>  {
    name: string;
    age: number;
    birthDate: Date;
    height: number;
    weight: number;
    gender: string;
    documentNumber: string;

    constructor(props: Partial<PersonEntity>) {
        Object.assign(this, props);
    }
}
