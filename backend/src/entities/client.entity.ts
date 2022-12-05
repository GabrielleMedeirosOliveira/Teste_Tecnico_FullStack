import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import {v4 as uuid} from 'uuid'
import { Contact } from "./contact.entity";


@Entity()
export class Client{
    @PrimaryColumn('uuid')
    readonly id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    fone: string;

    @Column()
    createdAt: Date;

    @OneToMany(()=> Contact, contact => contact.client)
    contacts: Contact[]

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}