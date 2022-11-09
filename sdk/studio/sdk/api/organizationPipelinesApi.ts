/**
 * Edge Impulse API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// tslint:disable-next-line: variable-name, no-var-requires
const PATH = require('path');
// tslint:disable-next-line: no-unsafe-any
module.paths.push(PATH.join(process.cwd(), 'node_modules'));

import localVarRequest = require('request');
import http = require('http');

/* tslint:disable:no-unused-locals */
import { CreatePipelineResponse } from '../model/createPipelineResponse';
import { GenericApiResponse } from '../model/genericApiResponse';
import { GetOrganizationPipelinesResponse } from '../model/getOrganizationPipelinesResponse';
import { ListOrganizationPipelinesResponse } from '../model/listOrganizationPipelinesResponse';
import { OrganizationUpdatePipelineBody } from '../model/organizationUpdatePipelineBody';
import { RunOrganizationPipelineResponse } from '../model/runOrganizationPipelineResponse';

import { ObjectSerializer, Authentication, VoidAuth } from '../model/models';
import { HttpBasicAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://studio.edgeimpulse.com/v1';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum OrganizationPipelinesApiApiKeys {
    ApiKeyAuthentication,
    JWTAuthentication,
    JWTHttpHeaderAuthentication,
}

export class OrganizationPipelinesApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'ApiKeyAuthentication': new ApiKeyAuth('header', 'x-api-key'),
        'JWTAuthentication': new ApiKeyAuth('cookie', 'jwt'),
        'JWTHttpHeaderAuthentication': new ApiKeyAuth('header', 'x-jwt-token'),
    }

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: OrganizationPipelinesApiApiKeys, value: string | undefined) {
        (this.authentications as any)[OrganizationPipelinesApiApiKeys[key]].apiKey = value;
    }

    /**
     * Create an organizational pipelines
     * @summary Create pipeline
     * @param organizationId Organization ID
     * @param organizationUpdatePipelineBody 
     */
    public async createOrganizationPipeline (organizationId: number, organizationUpdatePipelineBody: OrganizationUpdatePipelineBody, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<CreatePipelineResponse> {
        const localVarPath = this.basePath + '/api/organizations/{organizationId}/pipelines'
            .replace('{' + 'organizationId' + '}', encodeURIComponent(String(organizationId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new Error('Required parameter organizationId was null or undefined when calling createOrganizationPipeline.');
        }

        // verify required parameter 'organizationUpdatePipelineBody' is not null or undefined
        if (organizationUpdatePipelineBody === null || organizationUpdatePipelineBody === undefined) {
            throw new Error('Required parameter organizationUpdatePipelineBody was null or undefined when calling createOrganizationPipeline.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            agentOptions: {keepAlive: false},
            json: true,
            body: ObjectSerializer.serialize(organizationUpdatePipelineBody, "OrganizationUpdatePipelineBody")
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.ApiKeyAuthentication.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.JWTAuthentication.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.JWTHttpHeaderAuthentication.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
        return authenticationPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<CreatePipelineResponse>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "CreatePipelineResponse");

                        const errString = `Failed to call "${localVarPath}", returned ${response.statusCode}: ` + response.body;

                        if (typeof body.success === 'boolean' && !body.success) {
                            reject(new Error(body.error || errString));
                        }
                        else if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve(body);
                        }
                        else {
                            reject(errString);
                        }
                    }
                });
            });
        });
    }
    /**
     * Delete an organizational pipelines
     * @summary Delete pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     */
    public async deleteOrganizationPipeline (organizationId: number, pipelineId: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<GenericApiResponse> {
        const localVarPath = this.basePath + '/api/organizations/{organizationId}/pipelines/{pipelineId}'
            .replace('{' + 'organizationId' + '}', encodeURIComponent(String(organizationId)))
            .replace('{' + 'pipelineId' + '}', encodeURIComponent(String(pipelineId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new Error('Required parameter organizationId was null or undefined when calling deleteOrganizationPipeline.');
        }

        // verify required parameter 'pipelineId' is not null or undefined
        if (pipelineId === null || pipelineId === undefined) {
            throw new Error('Required parameter pipelineId was null or undefined when calling deleteOrganizationPipeline.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            agentOptions: {keepAlive: false},
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.ApiKeyAuthentication.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.JWTAuthentication.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.JWTHttpHeaderAuthentication.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
        return authenticationPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<GenericApiResponse>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "GenericApiResponse");

                        const errString = `Failed to call "${localVarPath}", returned ${response.statusCode}: ` + response.body;

                        if (typeof body.success === 'boolean' && !body.success) {
                            reject(new Error(body.error || errString));
                        }
                        else if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve(body);
                        }
                        else {
                            reject(errString);
                        }
                    }
                });
            });
        });
    }
    /**
     * Retrieve an organizational pipelines
     * @summary Get pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     */
    public async getOrganizationPipeline (organizationId: number, pipelineId: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<GetOrganizationPipelinesResponse> {
        const localVarPath = this.basePath + '/api/organizations/{organizationId}/pipelines/{pipelineId}'
            .replace('{' + 'organizationId' + '}', encodeURIComponent(String(organizationId)))
            .replace('{' + 'pipelineId' + '}', encodeURIComponent(String(pipelineId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new Error('Required parameter organizationId was null or undefined when calling getOrganizationPipeline.');
        }

        // verify required parameter 'pipelineId' is not null or undefined
        if (pipelineId === null || pipelineId === undefined) {
            throw new Error('Required parameter pipelineId was null or undefined when calling getOrganizationPipeline.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            agentOptions: {keepAlive: false},
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.ApiKeyAuthentication.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.JWTAuthentication.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.JWTHttpHeaderAuthentication.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
        return authenticationPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<GetOrganizationPipelinesResponse>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "GetOrganizationPipelinesResponse");

                        const errString = `Failed to call "${localVarPath}", returned ${response.statusCode}: ` + response.body;

                        if (typeof body.success === 'boolean' && !body.success) {
                            reject(new Error(body.error || errString));
                        }
                        else if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve(body);
                        }
                        else {
                            reject(errString);
                        }
                    }
                });
            });
        });
    }
    /**
     * Retrieve all archived organizational pipelines
     * @summary List archived pipelines
     * @param organizationId Organization ID
     */
    public async listArchivedOrganizationPipelines (organizationId: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<ListOrganizationPipelinesResponse> {
        const localVarPath = this.basePath + '/api/organizations/{organizationId}/pipelines/archived'
            .replace('{' + 'organizationId' + '}', encodeURIComponent(String(organizationId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new Error('Required parameter organizationId was null or undefined when calling listArchivedOrganizationPipelines.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            agentOptions: {keepAlive: false},
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.ApiKeyAuthentication.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.JWTAuthentication.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.JWTHttpHeaderAuthentication.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
        return authenticationPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<ListOrganizationPipelinesResponse>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ListOrganizationPipelinesResponse");

                        const errString = `Failed to call "${localVarPath}", returned ${response.statusCode}: ` + response.body;

                        if (typeof body.success === 'boolean' && !body.success) {
                            reject(new Error(body.error || errString));
                        }
                        else if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve(body);
                        }
                        else {
                            reject(errString);
                        }
                    }
                });
            });
        });
    }
    /**
     * Retrieve all organizational pipelines
     * @summary List pipelines
     * @param organizationId Organization ID
     */
    public async listOrganizationPipelines (organizationId: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<ListOrganizationPipelinesResponse> {
        const localVarPath = this.basePath + '/api/organizations/{organizationId}/pipelines'
            .replace('{' + 'organizationId' + '}', encodeURIComponent(String(organizationId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new Error('Required parameter organizationId was null or undefined when calling listOrganizationPipelines.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            agentOptions: {keepAlive: false},
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.ApiKeyAuthentication.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.JWTAuthentication.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.JWTHttpHeaderAuthentication.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
        return authenticationPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<ListOrganizationPipelinesResponse>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ListOrganizationPipelinesResponse");

                        const errString = `Failed to call "${localVarPath}", returned ${response.statusCode}: ` + response.body;

                        if (typeof body.success === 'boolean' && !body.success) {
                            reject(new Error(body.error || errString));
                        }
                        else if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve(body);
                        }
                        else {
                            reject(errString);
                        }
                    }
                });
            });
        });
    }
    /**
     * Run an organizational pipeline
     * @summary Run pipelines
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     */
    public async runOrganizationPipeline (organizationId: number, pipelineId: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<RunOrganizationPipelineResponse> {
        const localVarPath = this.basePath + '/api/organizations/{organizationId}/pipelines/{pipelineId}/run'
            .replace('{' + 'organizationId' + '}', encodeURIComponent(String(organizationId)))
            .replace('{' + 'pipelineId' + '}', encodeURIComponent(String(pipelineId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new Error('Required parameter organizationId was null or undefined when calling runOrganizationPipeline.');
        }

        // verify required parameter 'pipelineId' is not null or undefined
        if (pipelineId === null || pipelineId === undefined) {
            throw new Error('Required parameter pipelineId was null or undefined when calling runOrganizationPipeline.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            agentOptions: {keepAlive: false},
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.ApiKeyAuthentication.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.JWTAuthentication.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.JWTHttpHeaderAuthentication.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
        return authenticationPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<RunOrganizationPipelineResponse>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "RunOrganizationPipelineResponse");

                        const errString = `Failed to call "${localVarPath}", returned ${response.statusCode}: ` + response.body;

                        if (typeof body.success === 'boolean' && !body.success) {
                            reject(new Error(body.error || errString));
                        }
                        else if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve(body);
                        }
                        else {
                            reject(errString);
                        }
                    }
                });
            });
        });
    }
    /**
     * Update an organizational pipelines
     * @summary Update pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param organizationUpdatePipelineBody 
     */
    public async updateOrganizationPipeline (organizationId: number, pipelineId: number, organizationUpdatePipelineBody: OrganizationUpdatePipelineBody, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<GenericApiResponse> {
        const localVarPath = this.basePath + '/api/organizations/{organizationId}/pipelines/{pipelineId}'
            .replace('{' + 'organizationId' + '}', encodeURIComponent(String(organizationId)))
            .replace('{' + 'pipelineId' + '}', encodeURIComponent(String(pipelineId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new Error('Required parameter organizationId was null or undefined when calling updateOrganizationPipeline.');
        }

        // verify required parameter 'pipelineId' is not null or undefined
        if (pipelineId === null || pipelineId === undefined) {
            throw new Error('Required parameter pipelineId was null or undefined when calling updateOrganizationPipeline.');
        }

        // verify required parameter 'organizationUpdatePipelineBody' is not null or undefined
        if (organizationUpdatePipelineBody === null || organizationUpdatePipelineBody === undefined) {
            throw new Error('Required parameter organizationUpdatePipelineBody was null or undefined when calling updateOrganizationPipeline.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            agentOptions: {keepAlive: false},
            json: true,
            body: ObjectSerializer.serialize(organizationUpdatePipelineBody, "OrganizationUpdatePipelineBody")
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.ApiKeyAuthentication.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.JWTAuthentication.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.JWTHttpHeaderAuthentication.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
        return authenticationPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<GenericApiResponse>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "GenericApiResponse");

                        const errString = `Failed to call "${localVarPath}", returned ${response.statusCode}: ` + response.body;

                        if (typeof body.success === 'boolean' && !body.success) {
                            reject(new Error(body.error || errString));
                        }
                        else if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve(body);
                        }
                        else {
                            reject(errString);
                        }
                    }
                });
            });
        });
    }
}
