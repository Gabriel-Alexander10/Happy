// models: representação das tabelas do banco no js (em classes)

import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import Image from './Image';

// usando um decorator
// automaticamente o typeorm entende que essa classe esta associada a tabela 'orphanages'
@Entity('orphanages')
export default class Orphanage {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column() // indica que o elemento logo abaixo é uma coluna no banco de dados
    name: string;

    @Column()
    latitude: number;

    @Column()
    longitude: number;

    @Column()
    about: string;

    @Column()
    instructions: string;

    @Column()
    opening_hours: string;

    @Column()
    open_on_weekends: boolean;

    @OneToMany(() => Image, image => image.orphanage, {
        cascade: ['insert','update'] // cascade permite que automaticamente as imagens relacionadas a esse orfanato sejam atualizadas
    })
    @JoinColumn({ name: 'orphanage_id'})
    images: Image[];
}