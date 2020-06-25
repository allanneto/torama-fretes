import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import User from '../models/User';

@Entity('intentions')
class Intention {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  zip_code_start: string;

  @Column()
  zip_code_end: string;

  @Column()
  client_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'client_id' })
  client: User;

  @Column()
  lead: boolean;

  @Column()
  freight_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Intention;
