import { Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import 'reflect-metadata';

@Entity()
export class GGenWeapon {
  @PrimaryGeneratedColumn()
  id!: number;

  //Basic Info
  @Column()
  name!: string;

  @Column()
  icon!: string;

  //Stat
  @Column()
  minRng!: number;

  @Column()
  maxRng!: number;

  @Column()
  power!: number;

  @Column()
  EN!: number;

  @Column()
  accuracy!: number;

  @Column()
  critical!: number;
}
