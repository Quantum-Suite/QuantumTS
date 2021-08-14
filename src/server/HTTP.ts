/**
 *
 * QuantumTS
 *
 * @author Neil Shirsat
 *
 */

export {
    Http2ServerRequest as HttpRequest,
    Http2ServerResponse as HttpResponse,
    Http2SecureServer as HttpsServer,
    createSecureServer as createSecureServer,
    Http2Stream as HttpStream,
    Http2Session as HttpSession,
    ServerOptions as ServerOptions,
    IncomingHttpHeaders as IncomingHttpHeaders,
    IncomingHttpStatusHeader as IncomingHttpStatusHeader,
    SecureServerOptions as HttpServerOptions
} from 'http2'
