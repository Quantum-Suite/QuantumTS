/**
 *
 * QuantumTS
 *
 * @author Neil Shirsat
 *
 */

import IoC from '../meta/IoC';
import { HttpRequest, HttpResponse } from '../server/HTTP';
import { CanRoute } from './CanRoute';
import { onDestroy } from './onDestroy';
import { RouteConfig } from './RouteConfig'

/**
 *
 */
class Router {




    /**
     *
     */
    routes : RouteConfig[] = [];




    /**
     *
     */
    constructor(){}




    /**
     *
     * @param route
     */
    addRoute( route : RouteConfig ){
        this.routes.push(route);
    }




    /**
     *
     * @description
     * Handles the Incomming Connections coming to the Server and
     * Offloads them to the Router in order to Route to the
     * correct path
     *
     */
    route( req : HttpRequest, res : HttpResponse ){

        for ( let e of this.routes ) {
            if ( e.method === req.headers[':method'] && e.path === req.headers[':path'] ) {
                const route : CanRoute & onDestroy = IoC.getDependency( e.name );
                route.handle(req, res);
                if ( route.onDestroy ) {
                    route.onDestroy();
                }
            }
        }

        res.end("Error");

    }

}

export default new Router();
