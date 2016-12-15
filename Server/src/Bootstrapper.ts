import "reflect-metadata";
import { MongoDatabase } from './Infrastructure/Database/MongoDatabase';
import * as inversify from "inversify";
import { LanguageRegister } from './Ioc/LanguageRegister';
import { FrameworkRegister } from './Ioc/FrameworkRegister';

export class Bootstrapper{

    public static Boot():inversify.Container{
        let container:inversify.Container=new inversify.Container();
        container.bind<MongoDatabase>(MongoDatabase).toSelf();
        container.get<MongoDatabase>(MongoDatabase).Connect("mongodb://localhost/Sample");
        LanguageRegister.Register(container);
        FrameworkRegister.Register(container);
        return container;
    }
}