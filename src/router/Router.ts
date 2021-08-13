/**
 *
 * QuantumTS
 *
 * @author Neil Shirsat
 *
 */

import { Http2ServerRequest, Http2ServerResponse } from 'http2'
import IoC from '../meta/IoC';
import { CanRoute } from './CanRoute';
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
    route( req : Http2ServerRequest, res : Http2ServerResponse ){

        for ( let e of this.routes ) {
            if ( e.method === req.headers[':method'] && e.path === req.headers[':path'] ) {
                const route : CanRoute = IoC.getDependency( e.name );
                route.handle(req, res);
            }
        }

        res.end("Error");

    }

}

export default new Router();
