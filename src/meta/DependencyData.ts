/**
 *
 * QuantumTS
 *
 * @author Neil Shirsat
 *
 */

import { InjectData } from "./InjectData";

/**
 *
 * @description
 * Provides the Metadata for the Parameters and Values that
 * need to be Injected into the IoC containers and Methods
 *
 */
export type DependencyData = {

    name : string,

    construct : { new (...args: any[]) : any },

    injectParams : InjectData[],

    value : any,

    temp ?: boolean

}
