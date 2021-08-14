import 'reflect-metadata';
import { Route } from './router/Route';
import { Inject } from './meta/Inject';
import { Application } from './controllers/Application';
import { CanRoute } from './router/CanRoute';
import { HttpRequest, HttpResponse } from './server/HTTP';
import { readFileSync } from 'fs';
import { ServerConfig } from './server/ServerConfig';

@Route({
    path : '/',
    method : 'GET',
    temp : true,
})
class RouteA implements CanRoute {

    x = 0;

    handle( req : HttpRequest, res : HttpResponse ): void {
        res.end(`RouteA ${this.x++} `);
    }

}

@Route({
    path : '/b',
    method : 'GET'
})
class RouteB implements CanRoute {

    constructor( public x : RouteA,  public y : RouteA, @Inject("Hello") public z : string ){}

    handle( req : HttpRequest, res : HttpResponse ): void {
        res.end(`Route B Injected Param ${this.z}`)
    }

}

const config : ServerConfig = {
    ServerOptions : {
        key : readFileSync('C:\\Users\\neila\\Documents\\Proxima\\QuantumTS\\src\\keys\\server.key'),
        cert: readFileSync('C:\\Users\\neila\\Documents\\Proxima\\QuantumTS\\src\\keys\\server.cert'),
    }
}

const app = new Application();
app.start(config);
