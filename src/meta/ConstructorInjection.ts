/**
 *
 * QuantumTS
 *
 * @author Neil Shirsat
 *
 */

/**
 *
 * @description
 * Provides the Methodology for Parameter Injection into Constructors
 * of the IoC Container
 *
 * @param {T} constructor
 *
 * @return {void}
 *
 */
export function constructorInjection<T extends { new (...args: any[]): C }, C>(constructor: T) : void {

    const metadata = Reflect.getMetadata('design:paramtypes', constructor)

    const args = [];

    // Parameters in the Constructor to be Instanciated
    if (metadata) {
        for (let e of metadata) {
            console.log(e.name)
            if ( e.name === 'String' ) {
                console.log('Instance of String')
                console.log(e);
            }
            else if ( typeof e === 'function' ) {
                args.push(new e())
            }
        }
    }

}
