/**
 *
 * QuantumTS
 *
 * @author Neil Shirsat
 *
 */

import IoC from "../meta/IoC";
import { resolver } from "../meta/Resolver";
import { InjectableConfig } from "./InjectableConfig";

/**
 *
 * @description
 * Gets the Metadata of Each Route so that the Router Metadata can be assembled
 *
 * @param {RouteConfig} config
 *
 * @returns {Function}
 *
 */
export function Injectable(config: InjectableConfig): Function {

    /**
     *
     * @description
     * Gets the Constructor of the Class so the QuantumTS can inject Dependencies
     * during the class construction phase
     *
     * @param {T} constructor
     *
     * @return {void}
     *
     */
    return function <T extends { new(...args: any[]): C }, C>(constructor: T): void {

        IoC.addDependency({
            name: constructor.name,
            construct: constructor,
            injectParams: resolver(constructor),
            value: {},
            temp: config.temp,
        })

    }

}
