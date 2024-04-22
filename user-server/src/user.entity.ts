import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';

  @Entity('users')
  export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({ type: 'varchar', nullable: true })
    username: string;

    @Column({ type: 'varchar', nullable: true })
    password: string;

    @Column({ type: 'varchar', nullable: true })
    name: string;

    @Column({ type: 'timestamp', nullable: true })
    birthday: string;

    @Column({ type: 'int', default:1 })
    role: number;
  
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: string;

    @ManyToMany(()=>User, user=>user.followers,{
      onDelete:"CASCADE"
    })
    @JoinTable()
    followers: User[]
  }
  