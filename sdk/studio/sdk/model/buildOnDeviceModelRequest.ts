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

import { KerasModelTypeEnum } from './kerasModelTypeEnum';

export class BuildOnDeviceModelRequest {
    /**
    * Inferencing engine
    */
    'engine': BuildOnDeviceModelRequestEngineEnum;
    'modelType'?: KerasModelTypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "engine",
            "baseName": "engine",
            "type": "BuildOnDeviceModelRequestEngineEnum"
        },
        {
            "name": "modelType",
            "baseName": "modelType",
            "type": "KerasModelTypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return BuildOnDeviceModelRequest.attributeTypeMap;
    }
}


export type BuildOnDeviceModelRequestEngineEnum = 'tflite' | 'tflite-eon' | 'tensorrt' | 'tensaiflow' | 'drp-ai' | 'tidl';
export const BuildOnDeviceModelRequestEngineEnumValues: string[] = ['tflite', 'tflite-eon', 'tensorrt', 'tensaiflow', 'drp-ai', 'tidl'];
