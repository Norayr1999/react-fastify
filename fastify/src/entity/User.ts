import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("user_list") 
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("text")
  name!: string;
}
