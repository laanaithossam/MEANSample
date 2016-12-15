import {Request, Response} from "express";
import {Controller, Param, Body, Get, Post, Put, Delete,Res,Req} from "routing-controllers";
import {FrameworkService} from '../Domain/Framework/Service/FrameworkService'
import {injectable} from "inversify";

@Controller("/Framework")
@injectable()
export class FrameworkController{

    private _service:FrameworkService;
    constructor(service:FrameworkService){
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