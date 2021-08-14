# QuantumTS

# Description

QuantumTS is a fast and minimalitic framework for creating powerful NodeJS
Applications. It generates IoC Containers and Injects Dependencies into the
different parts of the framework in order to enhance the speed of the
application and maintain consitency in the dependency of the Application.

# Examples

```ts

//Import the Files From QuantumTS
import {
    Application,
    ServerConfig,
    Route,
    HttpRequest,
    HttpResponse,
    CanRoute
} from 'quantumts'

//Create the Application
const app = new Application();

//Create the Server Configuration
const config : ServerConfig = {
    port : 8021,
    ServerOptions : {
        key : '##############',
        cert: '##############',
    }
};

//Start the Server with the Server Configuration
app.start(config);

//Create a Route Handler for Base Path and Get Method
@Route({
    path : '',
    method : 'GET',
})
class DefaultRoute implements CanRoute {
    //Handel the Request
    handle(req: HttpRequest, res: HttpResponse): void {
        res.end('Hello World');
    }
}


```
