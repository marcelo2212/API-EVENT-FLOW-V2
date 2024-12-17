import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';
import { RoleUserEnum } from '../enums/role-enum';

@Entity('users')
@Unique(['username'])
export class User {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  username: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  password: string;

  @Column({
    type: 'enum',
    enum: RoleUserEnum,
    nullable: false,
    name: 'role',
  })
  role: RoleUserEnum;
}
