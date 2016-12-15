import { injectable } from 'inversify';
import { ContextBase } from '../../../ContextBase';
import { Language } from './../Entity/Language';
import * as mongoose from 'mongoose';
@injectable()
export class LanguageContext extends ContextBase<Language>{
    constructor(){
        super(Language.name,new Language());
    }
}