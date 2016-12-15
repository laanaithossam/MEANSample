import { injectable } from 'inversify';
import * as mongoose from 'mongoose';
@injectable()
export class MongoDatabase{
    public MongoConnection:mongoose.Connection;

    public Connect(dbConnectionString:string){
        mongoose.connect(dbConnectionString);
    }
}