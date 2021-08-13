/**
 *
 * QuantumTS
 *
 * @author Neil Shirsat
 *
 */

import { Http2ServerRequest, Http2ServerResponse } from "http2";

export interface CanRoute {

    handle( req : Http2ServerRequest, res : Http2ServerResponse ) : void;

}
