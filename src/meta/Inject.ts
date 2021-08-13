/**
 *
 * QuantumTS
 *
 * @author Neil Shirsat
 *
 */

import IoC from "./IoC";

/**
 *
 * @description
 * Gets the Metadata and value of the value that needs to be
 * Injected into the class at runtime
 *
 */
export function Inject( value : any ) {

    return function( target: Object, propertyKey: string | symbol, parameterIndex: number ) {

        //Check to See if it is in a constructor
        if (propertyKey === undefined) {

            //Add the Injection Parameter to the IoC Container
            IoC.addDependencyParamData( (target as Function).name, parameterIndex, value );

        }

    }

}
