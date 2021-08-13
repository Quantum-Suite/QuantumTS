/**
 *
 * QuantumTS
 *
 * @author Neil Shirsat
 *
 */

import IoC from "../meta/IoC";
import { resolver } from "../meta/Resolver";
import { RouteConfig, RouteConfiguration } from "./RouteConfig";
import Router from "./Router";
import { CanRoute } from './CanRoute'

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
export function Route( config : RouteConfiguration ): Function {

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
    return function<T extends { new (...args: any[]): CanRoute }>(constructor: T) : void {

        Router.addRoute({
            name : constructor.name,
            path : config.path,
            method : config.method
        })

        IoC.addDependency({
            name : constructor.name,
            construct : constructor,
            injectParams : resolver(constructor),
        })

    }

}
