import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Field, ID, InputType, ObjectType } from "type-graphql";


@ObjectType()
@Entity()
export default class Country {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  code: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  flag: string;

 
}

@InputType()
export class CreateCountryInput {
    @Field({ nullable: false })
    code: string;
  
    @Field({ nullable: true })
    name: string;

    @Field({ nullable: false })
    flag: string;

   
 
}