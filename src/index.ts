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
