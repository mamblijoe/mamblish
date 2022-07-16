import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Tasks {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    taskName: string;


    @CreateDateColumn({
        name: 'created_at',
    })
    createdAt: Date;
}
