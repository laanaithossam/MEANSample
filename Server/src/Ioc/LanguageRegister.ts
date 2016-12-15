import * as inversify from "inversify";
import { LanguageContext } from '../Domain/Language/Context/LanguageContext';
import { Language } from '../Domain/Language/Entity/Language';
import { LanguageRepository } from '../Domain/Language/Repository/LanguageRepository';
import { LanguageService } from '../Domain/Language/Service/LanguageService';
import { LanguageController } from '../Controller/LanguageController';

export class LanguageRegister{

    public static Register(container:inversify.Container){
        container.bind<LanguageContext>(LanguageContext)
            .toConstantValue(new LanguageContext());
        container.bind<LanguageRepository>(LanguageRepository).toSelf();
        container.bind<LanguageService>(LanguageService).toSelf();
        container.bind<LanguageController>(LanguageController).toSelf();
        
    }
}