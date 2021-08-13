/**
 *
 * QuantumTS
 *
 * @author Neil Shirsat
 *
 */


import { createSecureServer, Http2SecureServer, Http2ServerRequest, Http2ServerResponse } from 'http2'
import { readFileSync } from 'fs'
import Router from '../router/Router';


export class Server {

    /**
     *
     * @description
     * Constructs the Server Object adding the Dependencies
     *
     */
    constructor() { }




    /**
     *
     * @description
     * Starts the HTTP Server and returns a copy of the started
     * HTTP Server
     *
     * @param {number} PORT
     *
     * @returns {Http2SecureServer}
     *
     */
    start(
    ): Http2SecureServer {

        return createSecureServer();
    }




    /**
     *
     * @description
     * Starts the Server For Listening allowing the Server to Recieve New
     * Incoming Connections
     *
     *
     */
    listen(
        port : number,
        address ?: string,
    ) {

        let server = createSecureServer({
            key : readFileSync('C:\\Users\\neila\\Documents\\Proxima\\QuantumTS\\src\\keys\\server.key'),
            cert : readFileSync('C:\\Users\\neila\\Documents\\Proxima\\QuantumTS\\src\\keys\\server.cert')
        });

        server.on('request', this.handle )

        server.on('error', (err) => console.error(err));

        server.listen( port, ()=>{
            console.log(`Server is Running at https://localhost:${port}`)
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
    handle( req : Http2ServerRequest, res : Http2ServerResponse ) : void {
        Router.route(req, res);
    }

}
