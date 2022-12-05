import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import {v4 as uuid} from 'uuid'
import { Client } from "./client.entity";

@Entity()
export class Contact{
    @PrimaryColumn('uuid')
    readonly id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    fone: string;

    @Column({default: true})
    isActive: boolean;

    @ManyToOne(()=>Client, client => client.contacts, {eager: true})
    @JoinColumn()
    client: Client


    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}