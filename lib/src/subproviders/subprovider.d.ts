import { JSONRPCRequestPayload, JSONRPCResponsePayload, Provider } from 'ethereum-types';
import { Callback, ErrorCallback, JSONRPCRequestPayloadWithMethod } from '../types';
/**
 * A altered version of the base class Subprovider found in [web3-provider-engine](https://github.com/MetaMask/provider-engine).
 * This one has an async/await `emitPayloadAsync` and also defined types.
 */
export declare abstract class Subprovider {
    private engine;
    protected static _createFinalPayload(payload: Partial<JSONRPCRequestPayloadWithMethod>): Partial<JSONRPCRequestPayloadWithMethod>;
    private static _getRandomId;
    abstract handleRequest(payload: JSONRPCRequestPayload, next: Callback, end: ErrorCallback): Promise<void>;
    /**
     * Emits a JSON RPC payload that will then be handled by the ProviderEngine instance
     * this subprovider is a part of. The payload will cascade down the subprovider middleware
     * stack until finding the responsible entity for handling the request.
     * @param payload JSON RPC payload
     * @returns JSON RPC response payload
     */
    emitPayloadAsync(payload: Partial<JSONRPCRequestPayloadWithMethod>): Promise<JSONRPCResponsePayload>;
    /**
     * Set's the subprovider's engine to the ProviderEngine it is added to.
     * This is only called within the ProviderEngine source code, do not call
     * directly.
     */
    setEngine(engine: Provider): void;
}
//# sourceMappingURL=subprovider.d.ts.map