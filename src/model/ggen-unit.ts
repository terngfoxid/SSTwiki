import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import 'reflect-metadata';
import { GGenWeapon } from "./ggen-weapon";

@Entity()
export class GGenUnit {
  @PrimaryGeneratedColumn()
  id!: number;

  //Basic Info
  @Column()
  name!: string;

  @Column()
  type!: string;

  @Column()
  rarity!: string;

  @Column()
  icon!: string;

  //Stat
  @Column()
  HP!: number;

  @Column()
  EN!: number;

  @Column()
  ATK!: number;

  @Column()
  DEF!: number;

  @Column()
  MOB!: number;

  @Column()
  MOV!: number;

  //Terrain Capability
  @Column()
  space!: string;

  @Column()
  atmosphere!: string;

  @Column()
  ground!: string;

  @Column()
  surfacewater!: string;

  @Column()
  underwater!: string;

  @ManyToMany(() => GGenWeapon)
  @JoinTable()
  weapons!: GGenWeapon[]
}