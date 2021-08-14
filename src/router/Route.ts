/**
 *
 * QuantumTS
 *
 * @author Neil Shirsat
 *
 */

import IoC from "../meta/IoC";
import { resolver } from "../meta/Resolver";
import { RouteConfiguration } from "./RouteConfig";
import Router from "./Router";
import { CanRoute } from './CanRoute'
import { v5 } from 'uuid'

const namespace = '9b2f276d-9a07-4d0d-bd52-a70966a153f5';

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

        const id = v5( constructor.name + Math.random(), namespace );

        Router.addRoute({
            name : id,
            path : config.path,
            method : config.method,
            temp : config.temp
        })

        IoC.addDependency({
            name : id,
            construct : constructor,
            injectParams : resolver(constructor),
            value : {},
            temp : config.temp,
        })

    }

}
