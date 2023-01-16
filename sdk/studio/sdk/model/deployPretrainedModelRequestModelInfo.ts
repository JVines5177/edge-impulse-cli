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


import { DeployPretrainedModelInputTimeSeries, DeployPretrainedModelInputImage, DeployPretrainedModelInputNone } from './models'; import { DeployPretrainedModelModelClassification, DeployPretrainedModelModelRegression, DeployPretrainedModelModelObjectDetection } from './models'; export class DeployPretrainedModelRequestModelInfo {
    'input': DeployPretrainedModelInputTimeSeries | DeployPretrainedModelInputImage | DeployPretrainedModelInputNone;
    'model': DeployPretrainedModelModelClassification | DeployPretrainedModelModelRegression | DeployPretrainedModelModelObjectDetection;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "input",
            "baseName": "input",
            "type": "object"
        },
        {
            "name": "model",
            "baseName": "model",
            "type": "object"
        }    ];

    static getAttributeTypeMap() {
        return DeployPretrainedModelRequestModelInfo.attributeTypeMap;
    }
}

