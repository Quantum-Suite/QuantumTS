import 'reflect-metadata';

/**
 *
 *
 *
 *
 *
 * QuantumTS Application
 *
 *
 *
 *
 *
 */
export { Application } from './controllers/Application'


/**
 *
 *
 *
 *
 *
 * QuantumTS IoC
 *
 *
 *
 *
 *
 */
export { default as IoC } from './meta/IoC'
export { constructorInjection } from './meta/ConstructorInjection'
export { DependencyData } from './meta/DependencyData'
export { Inject } from './meta/Inject'
export { InjectData } from './meta/InjectData'
export { Injectable } from './meta/Injectable'
export { InjectableConfig } from './meta/InjectableConfig'
export { resolver } from './meta/Resolver'


/**
 *
 *
 *
 *
 *
 * QuantumTS Server
 *
 *
 *
 *
 *
 */
export { Server } from './server/Server'
export { ServerConfig } from './server/ServerConfig'
export * from './server/HTTP'


/**
 *
 *
 *
 *
 *
 * QuantumTS Routing
 *
 *
 *
 *
 *
 */
export { default as Router } from './router/Router';
export { RouteConfig, RouteConfiguration } from './router/RouteConfig';
export { Route } from './router/Route';
export { CanRoute } from './router/CanRoute';
export { onDestroy } from './router/onDestroy'

/**
 *
 *
 *
 *
 *
 * QuantumTS Default Exports
 *
 *
 *
 *
 *
 */
import { Application } from './controllers/Application'
import { default as IoC } from './meta/IoC'
import { constructorInjection } from './meta/ConstructorInjection'
import { Inject } from './meta/Inject'
import { Injectable } from './meta/Injectable'
import { resolver } from './meta/Resolver'
import { Server } from './server/Server'
import * as Http from './server/HTTP'
import { default as Router } from './router/Router';
import { Route } from './router/Route';

export default {
    Application,
    constructorInjection,
    Inject,
    Injectable,
    resolver,
    Server,
    Http,
    Route,
}
