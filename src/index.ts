import { Route } from './router/Route';
import { Server } from './server/Server'
import 'reflect-metadata'
import { Inject } from './meta/Inject';
import Router from './router/Router';
import IoC from './meta/IoC';
import { Application } from './controllers/Application';
import { CanRoute } from './router/CanRoute';
import { Http2ServerRequest, Http2ServerResponse } from 'http2';

@Route({
    path : '/',
    method : 'GET',
})
class RouteA implements CanRoute {

    handle( req : Http2ServerRequest, res : Http2ServerResponse ): void {
        res.end('RouteA')
    }

}

@Route({
    path : '/b',
    method : 'GET'
})
class RouteB implements CanRoute {

    constructor( public x : RouteA,  public y : RouteA, @Inject("Hello") public z : string ){}

    handle( req : Http2ServerRequest, res : Http2ServerResponse ): void {
        res.end('RouteB')
    }

    hello( @Inject( "From Hello Method" ) x : string ){

    }
}

const app = new Application();
app.start();
