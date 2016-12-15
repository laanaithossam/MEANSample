import { EntityBase } from './EntityBase';
import {ContextBase} from './ContextBase';
import {MongoDatabase} from './Infrastructure/Database/MongoDatabase';
import {injectable} from "inversify";
@injectable()
export class RepositoryBase<T extends EntityBase>{
    private _context:ContextBase<T>;
    
    constructor(context:ContextBase<T>){
        this._context=context;
    }

    public FindAll<T>():Promise<Array<T>>{
        return this._context.FindAll<T>();
    }
}