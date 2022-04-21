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

import { ListVersionsResponseAllOfBucket } from './listVersionsResponseAllOfBucket';

export class ListVersionsResponseAllOfVersions {
    'id': number;
    'version': number;
    'description': string;
    'bucket': ListVersionsResponseAllOfBucket;
    'created': Date;
    'userId'?: number;
    'userName'?: string;
    'userPhoto'?: string;
    'publicProjectId'?: number;
    'publicProjectUrl'?: string;
    'trainingAccuracy'?: number;
    'testAccuracy'?: number;
    'totalSamplesCount'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "bucket",
            "baseName": "bucket",
            "type": "ListVersionsResponseAllOfBucket"
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
            "name": "userPhoto",
            "baseName": "userPhoto",
            "type": "string"
        },
        {
            "name": "publicProjectId",
            "baseName": "publicProjectId",
            "type": "number"
        },
        {
            "name": "publicProjectUrl",
            "baseName": "publicProjectUrl",
            "type": "string"
        },
        {
            "name": "trainingAccuracy",
            "baseName": "trainingAccuracy",
            "type": "number"
        },
        {
            "name": "testAccuracy",
            "baseName": "testAccuracy",
            "type": "number"
        },
        {
            "name": "totalSamplesCount",
            "baseName": "totalSamplesCount",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ListVersionsResponseAllOfVersions.attributeTypeMap;
    }
}

