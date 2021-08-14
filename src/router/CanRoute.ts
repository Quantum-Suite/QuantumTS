/**
 *
 * QuantumTS
 *
 * @author Neil Shirsat
 *
 */

import { HttpRequest, HttpResponse } from "../server/HTTP";

export interface CanRoute {

    handle( req : HttpRequest, res : HttpResponse ) : void;

}
