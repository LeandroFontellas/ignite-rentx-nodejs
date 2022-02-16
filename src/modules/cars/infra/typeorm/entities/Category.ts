import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 } from "uuid";

export interface ICreateCategory {
  name: string;
  description: string;
  created_at: Date;
}
@Entity("categories")
export class Category {
  @PrimaryColumn()
  id?: string;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @CreateDateColumn()
  created_at!: Date;

  constructor() {
    if (!this.id) {
      this.id = v4();
    }
  }
}
