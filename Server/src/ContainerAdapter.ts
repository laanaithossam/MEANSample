import * as inversify from "inversify";

export class ContainerAdapter {

    private _container:inversify.Container
    constructor(container:inversify.Container) {
        this._container=container;
    }

    get<T>(someClass : any) : T {
        return this._container.get<T>(someClass);
    }

}