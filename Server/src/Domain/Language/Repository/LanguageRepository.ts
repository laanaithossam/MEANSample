import { ContextBase } from '../../../ContextBase';
import {RepositoryBase} from '../../../RepositoryBase';
import { LanguageContext } from '../Context/LanguageContext';
import {Language} from '../Entity/Language';
import {injectable} from "inversify";
@injectable()
export class LanguageRepository extends RepositoryBase<Language>{
    
    constructor(context:LanguageContext){
        super(context);
    }

}