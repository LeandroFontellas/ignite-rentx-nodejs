import { v4 } from "uuid";

export interface ICreateSpecification {
  name: string;
  description: string;
  created_at: Date;
}

export class Specification {
  id?: string;
  name: string;
  description: string;
  created_at: Date;

  constructor({ name, description, created_at }: ICreateSpecification) {
    if (!this.id) {
      this.id = v4();
    }
    this.name = name;
    this.description = description;
    this.created_at = created_at;
  }
}
