import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Orphanage from './Orphanages'

@Entity('images')
export default class Image {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column() // indica que o elemento logo abaixo é uma coluna no banco de dados
    path: string;

    @ManyToOne(() => Orphanage, orphanage => orphanage.images) // 1 parametro: função que devolve o tipo do retorno, 2 parametro: dada uma imagem, qual campo retorna o relacionamento inverso (o orfanato)
    @JoinColumn({ name: 'orphanage_id' })
    orphanage: Orphanage;

}