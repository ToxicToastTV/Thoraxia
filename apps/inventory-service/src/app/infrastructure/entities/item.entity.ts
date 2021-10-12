import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'items' })
export class ItemEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ default: null, nullable: true })
  category_id: string | null;

  @Column({ default: null, nullable: true })
  location_id: string | null;

  @Column({ default: null, nullable: true })
  company_id: string | null;

  @Column({ default: null, nullable: true })
  type_id: string | null;

  @Column({ default: null, nullable: true })
  size_id: string | null;

  @Column()
  title: string;

  @Column()
  slug: string;

  @Column({ type: 'integer' })
  quantity: number;

  @Column({ type: 'integer' })
  minSku: number;

  @Column({ type: 'integer' })
  maxSku: number;

  @Column({ default: false, type: 'boolean' })
  active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn({ default: null, nullable: true })
  updated_at?: Date | null;

  @DeleteDateColumn({ default: null, nullable: true })
  deleted_at?: Date | null;
}
