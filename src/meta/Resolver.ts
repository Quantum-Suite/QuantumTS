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
 * Extracts the Dependencies of the Class and Returns the Metadata
 * for these classes
 *
 * @param {T} constructor
 *
 * @return {void}
 *
 */
export function resolver<T extends { new(...args: any[]): C }, C>(
    constructor: T
): InjectData[] {

    // Get the Parameters of the Contructor
    const metadata : any[] = Reflect.getMetadata('design:paramtypes', constructor)

    const args : InjectData[] = [];

    // If there are Dependencies in the Constructor
    if (metadata) {

        //For Each Dependency
        for (let i = 0; i < metadata.length; i++) {

            //If the Dependency is a String
            if (metadata[i].name === 'String') {

                args.push({
                    param : i,
                    type : 'string',
                    isNotClass : true,
                })

            }

            //If the Dependency is a Class
            else if (typeof metadata[i] === 'function') {

                args.push({
                    param : i,
                    type : metadata[i]
                })

            }

        }

    }

    return args;

}
