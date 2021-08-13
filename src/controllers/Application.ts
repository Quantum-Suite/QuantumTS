/**
 *
 * QuantumTS
 *
 * @author Neil Shirsat
 *
 */

import { InjectData } from "../meta/InjectData";
import IoC from "../meta/IoC";
import Router from "../router/Router";
import { Server } from '../server/Server'

export class Application {

    server : Server;

    constructor() {

        this.server = new Server();

    }

    start(){
        IoC.linkDependencyParam();
        this.server.listen( 8021 );
    }

}
