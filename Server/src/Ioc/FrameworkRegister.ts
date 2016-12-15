import * as inversify from "inversify";
import { FrameworkContext } from '../Domain/Framework/Context/FrameworkContext';
import { Framework } from '../Domain/Framework/Entity/Framework';
import { FrameworkRepository } from '../Domain/Framework/Repository/FrameworkRepository';
import { FrameworkService } from '../Domain/Framework/Service/FrameworkService';
import { FrameworkController } from '../Controller/FrameworkController';

export class FrameworkRegister{

    public static Register(container:inversify.Container){
        container.bind<FrameworkContext>(FrameworkContext)
            .toConstantValue(new FrameworkContext());
        container.bind<FrameworkRepository>(FrameworkRepository).toSelf();
        container.bind<FrameworkService>(FrameworkService).toSelf();
        container.bind<FrameworkController>(FrameworkController).toSelf();
    }
}