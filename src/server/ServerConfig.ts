/**
 *
 * QuantumTS
 *
 * @author Neil Shirsat
 *
 */

import { HttpServerOptions } from "./HTTP";

export interface ServerConfig {

    port : number;

    hostAddress ?: string;

    ServerOptions : HttpServerOptions,

}
