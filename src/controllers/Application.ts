/**
 *
 * QuantumTS
 *
 * @author Neil Shirsat
 *
 */

import IoC from "../meta/IoC";
import { Server } from '../server/Server'
import { ServerConfig } from "../server/ServerConfig";

export class Application {

    server : Server;

    constructor() {}

    start(
        serverConfig : ServerConfig
    ){
        IoC.linkDependencyParam();
        this.server = new Server(serverConfig);
        this.server.start();
        this.server.listen();
    }

}
