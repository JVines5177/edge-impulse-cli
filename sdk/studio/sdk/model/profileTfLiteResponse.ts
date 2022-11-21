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

import { GenericApiResponse } from './genericApiResponse';
import { ProfileTfLiteResponseAllOf } from './profileTfLiteResponseAllOf';
import { ProfileTfLiteResponseAllOfMemory } from './profileTfLiteResponseAllOfMemory';

export class ProfileTfLiteResponse {
    /**
    * Whether the operation succeeded
    */
    'success': boolean;
    /**
    * Optional error description (set if \'success\' was false)
    */
    'error'?: string;
    'memory'?: ProfileTfLiteResponseAllOfMemory;
    'timePerInferenceMs'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "success",
            "baseName": "success",
            "type": "boolean"
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "string"
        },
        {
            "name": "memory",
            "baseName": "memory",
            "type": "ProfileTfLiteResponseAllOfMemory"
        },
        {
            "name": "timePerInferenceMs",
            "baseName": "timePerInferenceMs",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ProfileTfLiteResponse.attributeTypeMap;
    }
}
