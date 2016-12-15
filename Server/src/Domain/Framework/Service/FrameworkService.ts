import { Framework } from './../Entity/Framework';
import {FrameworkRepository} from '../Repository/FrameworkRepository'
import {injectable} from "inversify";
@injectable()
export class FrameworkService {

    private _repository: FrameworkRepository;
    constructor(repository: FrameworkRepository) {
        this._repository = repository;
    }

    public GetAll(): Promise<Array<Framework>>{
        return this._repository.FindAll<Framework>();
    }

}