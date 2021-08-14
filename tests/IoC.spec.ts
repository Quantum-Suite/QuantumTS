import { expect, Test, TestSuite } from 'testyts'
import { Application, IoC, Server } from '../src'

import './routes/TestRouteA';
import './routes/TestRouteB';

@TestSuite()
export class IoCTestSuite {

    @Test()
    IoCNamesDistinct() {

        const app = new Application();
        console.log(IoC.dependencies);

    }

    @Test()
    ServerStartsSuccessfully() {

    }


}
