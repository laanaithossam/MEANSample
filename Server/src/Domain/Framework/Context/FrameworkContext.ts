import { injectable } from 'inversify';
import { ContextBase } from '../../../ContextBase';
import { Framework } from './../Entity/Framework';
import * as mongoose from 'mongoose';
@injectable()
export class FrameworkContext extends ContextBase<Framework>{
    constructor(){
        super(Framework.name,new Framework());
    }
}