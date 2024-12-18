import { Change, https, HttpsFunction, Runnable } from 'firebase-functions/v1';
/** Fields of the event context that can be overridden/customized. */
export type EventContextOptions = {
    /** ID of the event. If omitted, a random ID will be generated. */
    eventId?: string;
    /** ISO time string of when the event occurred. If omitted, the current time is used. */
    timestamp?: string;
    /** The values for the wildcards in the reference path that a database or Firestore function is listening to.
     * If omitted, random values will be generated.
     */
    params?: {
        [option: string]: any;
    };
    /** (Only for database functions and https.onCall.) Firebase auth variable representing the user that triggered
     *  the function. Defaults to null.
     */
    auth?: any;
    /** (Only for database and https.onCall functions.) The authentication state of the user that triggered the function.
     * Default is 'UNAUTHENTICATED'.
     */
    authType?: 'ADMIN' | 'USER' | 'UNAUTHENTICATED';
    /** Resource is a standard format for defining a resource (google.rpc.context.AttributeContext.Resource).
     * In Cloud Functions, it is the resource that triggered the function - such as a storage bucket.
     */
    resource?: {
        service: string;
        name: string;
        type?: string;
        labels?: {
            [tag: string]: string;
        };
    };
};
/** Fields of the callable context that can be overridden/customized. */
export type CallableContextOptions = {
    /**
     * The result of decoding and verifying a Firebase AppCheck token.
     */
    app?: any;
    /**
     * The result of decoding and verifying a Firebase Auth ID token.
     */
    auth?: any;
    /**
     * An unverified token for a Firebase Instance ID.
     */
    instanceIdToken?: string;
    /**
     * The raw HTTP request object.
     */
    rawRequest?: https.Request;
};
export type ContextOptions<T = void> = T extends HttpsFunction & Runnable<T> ? CallableContextOptions : EventContextOptions;
/** A function that can be called with test data and optional override values for the event context.
 * It will subsequently invoke the cloud function it wraps with the provided test data and a generated event context.
 */
export type WrappedFunction<T, U = void> = (data: T, options?: ContextOptions<U>) => any | Promise<any>;
/** A scheduled function that can be called with optional override values for the event context.
 * It will subsequently invoke the cloud function it wraps with a generated event context.
 */
export type WrappedScheduledFunction = (options?: ContextOptions) => any | Promise<any>;
/** Takes a cloud function to be tested, and returns a WrappedFunction which can be called in test code. */
export declare function wrapV1<T>(cloudFunction: HttpsFunction & Runnable<T>): WrappedFunction<T, HttpsFunction & Runnable<T>>;
/** Make a Change object to be used as test data for Firestore and real time database onWrite and onUpdate functions. */
export declare function makeChange<T>(before: T, after: T): Change<T>;
/** Mock values returned by `functions.config()`. */
export declare function mockConfig(conf: {
    [key: string]: {
        [key: string]: any;
    };
}): void;
