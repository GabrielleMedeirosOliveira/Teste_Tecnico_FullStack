import { Entity, Column, PrimaryColumn } from "typeorm";
import {v4 as uuid} from 'uuid'

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

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}