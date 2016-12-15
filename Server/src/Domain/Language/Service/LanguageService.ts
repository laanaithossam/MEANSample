import { Language } from './../Entity/Language';
import {LanguageRepository} from '../Repository/LanguageRepository'
import {injectable} from "inversify";
@injectable()
export class LanguageService {

    private _repository: LanguageRepository;
    constructor(repository: LanguageRepository) {
        this._repository = repository;
    }

    public GetAll(): Promise<Array<Language>>{
        return this._repository.FindAll<Language>();
    }

}