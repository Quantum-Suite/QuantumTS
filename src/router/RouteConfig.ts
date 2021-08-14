/**
 *
 * QuantumTS
 *
 * @author Neil Shirsat
 *
 */

export type RouteConfiguration = {

    path : string;

    method : 'GET' | 'POST' | 'PUT' | 'DELETE';

    temp ?: boolean;

}

/**
 *
 * @description
 * Types the Route Config that a Route can pass
 *
 */
export type RouteConfig = RouteConfiguration & {

    name : string;

}
