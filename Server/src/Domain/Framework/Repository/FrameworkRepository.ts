import { ContextBase } from '../../../ContextBase';
import {RepositoryBase} from '../../../RepositoryBase';
import { FrameworkContext } from '../Context/FrameworkContext';
import {Framework} from '../Entity/Framework';
import {injectable} from "inversify";
@injectable()
export class FrameworkRepository extends RepositoryBase<Framework>{
    
    constructor(context:FrameworkContext){
        super(context);
    }

}