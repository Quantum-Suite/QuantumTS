/**
 *
 * QuantumTS
 *
 * @author Neil Shirsat
 *
 */


import { readFileSync } from 'fs'
import { KeyObject } from 'tls';
import Router from '../router/Router';
import { createSecureServer, HttpRequest, HttpResponse, HttpServerOptions, HttpsServer, HttpStream, IncomingHttpHeaders } from './HTTP';
import { ServerConfig } from './ServerConfig';


export class Server {

    /**
     *
     * @description
     * Provides the Instance of the Server for the Application
     *
     */
    server : HttpsServer




    /**
     *
     * @description
     * Configuration for the Server
     *
     */
    config : ServerConfig




    /**
     *
     * @description
     * Constructs the Server Object adding the Dependencies
     *
     */
    constructor(
        config : ServerConfig
    ) {
        this.config = config;
    }




    /**
     *
     * @description
     * Starts the HTTP Server and returns a copy of the started
     * HTTP Server
     *
     * @param
     *
     * @returns {Http2SecureServer}
     *
     */
    start(): void {

        this.server = createSecureServer(this.config.ServerOptions);
        this.server.on('request', this.onRequest )
        this.server.on('stream', this.onStream )

    }




    /**
     *
     * @description
     * Starts the Server For Listening allowing the Server to Recieve New
     * Incoming Connections
     *
     *
     */
    listen() {

        this.server.listen( this.config.port, this.config.hostAddress, ()=>{
            console.log(`Server is Running at https://${this.config.hostAddress}:${this.config.port}`)
        });

    }




    /**
     *
     * @description
     * Handles the Incomming Connections coming to the Server and
     * Offloads them to the Router in order to Route to the
     * correct path
     *
     */
    onRequest( req : HttpRequest, res : HttpResponse ) : void {
        Router.route(req, res);
    }

    onStream( stream : HttpStream, header : IncomingHttpHeaders, flags : number ){

    }

}
