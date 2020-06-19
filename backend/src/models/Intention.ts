import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('intentions')
class Intention {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  zip_code_start: string;

  @Column()
  zip_code_end: string;

  @Column()
  lead: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Intention;
