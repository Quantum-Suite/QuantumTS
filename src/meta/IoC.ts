/**
 *
 * QuantumTS
 *
 * @author Neil Shirsat
 *
 */

import { InjectData } from "../meta/InjectData";
import { DependencyData } from "./DependencyData";

/**
 *
 * @description
 * Provides an IoC Container which Manages the Dependencies
 * of Objects and Dependencies of the Application and conditionally
 * creates and destroys new dependencies for the Application
 *
 */
class IoC {

    /**
     *
     * @description
     * Store the Dependencies of the Application
     *
     */
    dependencies: DependencyData[] = [];





    /**
     *
     * @description
     * Store the Injection Parameters of Values which
     * need to be Injected into the Constructors of
     * Objects in this Application
     *
     */
    injectionParameters: {
        name: string,
        paramIndex: number,
        value: any
    }[] = [];




    /**
     *
     * @description
     * Constructs the IoC Container for the Application
     *
     */
    constructor() { }




    /**
     *
     * @description
     * Adds a Dependency to the IoC container to Manage
     *
     * @param {DependencyData} DependencyData
     */
    addDependency( DependencyData : DependencyData ){
        this.dependencies.push(DependencyData);
    }




    /**
     *
     * @description
     * Adds an Injection Parameter which Needs to be Injected
     * into the Application
     *
     * @param {string} DependencyName
     * @param {number} parmamIndex
     * @param {any} value
     */
    addDependencyParamData( DependencyName : string, parmamIndex : number, value : any ){
        this.injectionParameters.push({
            name: DependencyName,
            paramIndex: parmamIndex,
            value: value
        });
    }




    /**
     *
     * @description
     * Link the Parameters of the Dependencies to the
     * Dependencies themselves
     *
     */
    linkDependencyParam(){

        for (let e of this.dependencies) {

            for (let i of this.injectionParameters) {
                if (e.name == i.name) {
                    e.injectParams[i.paramIndex].value = i.value;
                }
            }

        }

        for (let e of this.dependencies) {

            e.value = new e.construct( ...this.getInitConstructionParam( e.injectParams ) );

        }

    }




    /**
     *
     * @description
     * Gets the Parameters to Construct the Object and
     * return these param
     *
     * @param {InjectData} param
     * @returns {any[]}
     */
    getInitConstructionParam( param : InjectData[] ) : any[] {

        const args : any[] = [];

        //For Each of the Parameters
        for ( let e of param ) {

            //If the Parameters Value is Undefined
            if (e.value === undefined) {

                //Loop Through the Dependencies to Find the Value Dependency
                for (let i of this.dependencies) {

                    //Found the Value
                    if ( e.type.name === i.name ) {

                        //If the Dependency Value is Not Initialized Yet, then Initialize it First
                        if ( i.value === {} && !e.isNotClass ) {

                            //Construct the Dependency Value
                            i.value = new i.construct( ...this.getInitConstructionParam( i.injectParams ) );

                        }

                        //Set the Value to the Dependency Value
                        e.value = i.value;
                    }
                }
            }

            args.push( e.value )

        }

        return args;

    }




    /**
     *
     * @description
     * Gets the Parameters to Construct the Object and
     * return these param
     *
     * @param {InjectData} param
     * @returns {any[]}
     */
    getConstructionParam( param : InjectData[] ) : any[] {

        const args : any[] = [];

        for ( let e of param ) {
            args.push( ( e.value || new e.type() ) )
        }

        return args;

    }




    /**
     *
     * @description
     *
     */
    getDependency( name : string ){
        for ( let e of this.dependencies ) {
            if (e.name === name) {
                if (e.temp) {
                    return new e.construct(...this.getConstructionParam(e.injectParams))
                }
                return e.value;
            }
        }
    }

}

export default new IoC();
