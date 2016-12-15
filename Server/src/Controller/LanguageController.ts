import {Request, Response} from "express";
import {Controller, Param, Body, Get, Post, Put, Delete,Res,Req} from "routing-controllers";
import {LanguageService} from '../Domain/Language/Service/LanguageService'
import {injectable} from "inversify";

@Controller("/Language")
@injectable()
export class LanguageController{

    private _service:LanguageService;
    constructor(service:LanguageService){
        this._service=service;
    }

    @Get("/")
    public GetAll(@Req() request: Request, @Res() response: Response){
        let languages=this._service.GetAll().then((items=>{
            return JSON.stringify(items);
        }))
        
        return languages;
    }

}