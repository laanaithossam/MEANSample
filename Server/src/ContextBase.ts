import { injectable } from 'inversify';
import * as mongoose from 'mongoose';
import { EntityBase } from './EntityBase';
@injectable()
export abstract class ContextBase<T extends EntityBase> {
    private _model: mongoose.Model<mongoose.Document>;

    constructor(name: string, schema: T) {
        this._model = mongoose.model(name, new mongoose.Schema(schema));
    }

    public FindAll<T>(): Promise<Array<T>> {
        let items: Array<T>;
        let query = this._model.find(function (err, docs) { });

        return query.exec((err, docs) => {
            return <Array<T>>(<any>docs);
        });
    }
}