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

import { DSPGroupItem } from './dSPGroupItem';
import { TransformationBlockAdditionalMountPoint } from './transformationBlockAdditionalMountPoint';

export class OrganizationTransformationBlock {
    'id': number;
    'name': string;
    'dockerContainer': string;
    'dockerContainerManagedByEdgeImpulse': boolean;
    'created': Date;
    'userId'?: number;
    'userName'?: string;
    'description': string;
    /**
    * These arguments are passed into the container
    */
    'cliArguments': string;
    'indMetadata': boolean;
    'requestsCpu'?: number;
    'requestsMemory'?: number;
    'limitsCpu'?: number;
    'limitsMemory'?: number;
    'additionalMountPoints': Array<TransformationBlockAdditionalMountPoint>;
    'operatesOn': OrganizationTransformationBlockOperatesOnEnum;
    'allowExtraCliArguments': boolean;
    /**
    * List of parameters, spec\'ed according to https://docs.edgeimpulse.com/docs/tips-and-tricks/adding-parameters-to-custom-blocks
    */
    'parameters'?: Array<object>;
    /**
    * List of parameters to be rendered in the UI
    */
    'parametersUI'?: Array<DSPGroupItem>;
    /**
    * 15m for 15 minutes, 2h for 2 hours, 1d for 1 day. If not set, the default is 8 hours.
    */
    'maxRunningTimeStr'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "dockerContainer",
            "baseName": "dockerContainer",
            "type": "string"
        },
        {
            "name": "dockerContainerManagedByEdgeImpulse",
            "baseName": "dockerContainerManagedByEdgeImpulse",
            "type": "boolean"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "Date"
        },
        {
            "name": "userId",
            "baseName": "userId",
            "type": "number"
        },
        {
            "name": "userName",
            "baseName": "userName",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "cliArguments",
            "baseName": "cliArguments",
            "type": "string"
        },
        {
            "name": "indMetadata",
            "baseName": "indMetadata",
            "type": "boolean"
        },
        {
            "name": "requestsCpu",
            "baseName": "requestsCpu",
            "type": "number"
        },
        {
            "name": "requestsMemory",
            "baseName": "requestsMemory",
            "type": "number"
        },
        {
            "name": "limitsCpu",
            "baseName": "limitsCpu",
            "type": "number"
        },
        {
            "name": "limitsMemory",
            "baseName": "limitsMemory",
            "type": "number"
        },
        {
            "name": "additionalMountPoints",
            "baseName": "additionalMountPoints",
            "type": "Array<TransformationBlockAdditionalMountPoint>"
        },
        {
            "name": "operatesOn",
            "baseName": "operatesOn",
            "type": "OrganizationTransformationBlockOperatesOnEnum"
        },
        {
            "name": "allowExtraCliArguments",
            "baseName": "allowExtraCliArguments",
            "type": "boolean"
        },
        {
            "name": "parameters",
            "baseName": "parameters",
            "type": "Array<object>"
        },
        {
            "name": "parametersUI",
            "baseName": "parametersUI",
            "type": "Array<DSPGroupItem>"
        },
        {
            "name": "maxRunningTimeStr",
            "baseName": "maxRunningTimeStr",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return OrganizationTransformationBlock.attributeTypeMap;
    }
}


export type OrganizationTransformationBlockOperatesOnEnum = 'file' | 'dataitem' | 'standalone';
export const OrganizationTransformationBlockOperatesOnEnumValues: string[] = ['file', 'dataitem', 'standalone'];
