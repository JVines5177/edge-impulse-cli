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


export class TunerSpaceLearnBlock {
    'id'?: number;
    'title'?: string;
    'type': string;
    'dsp'?: Array<number>;
    'augmentationPolicyImage'?: Array<string>;
    'augmentationPolicySpectrogram'?: object;
    'learningRate'?: Array<number>;
    'trainingCycles'?: Array<number>;
    'model'?: Array<string>;
    'dimension'?: Array<string>;
    'convBaseFilters'?: Array<number>;
    'convLayers'?: Array<number>;
    'dropout'?: Array<number>;
    'denseNeurons'?: Array<number>;
    'denseBaseNeurons'?: Array<number>;
    'denseLayers'?: Array<number>;
    'script'?: string;
    'scriptVariables'?: object;
    'mode'?: string;
    'trainTestSplit'?: number;
    'findLearningRate'?: Array<boolean>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "dsp",
            "baseName": "dsp",
            "type": "Array<number>"
        },
        {
            "name": "augmentationPolicyImage",
            "baseName": "augmentationPolicyImage",
            "type": "Array<string>"
        },
        {
            "name": "augmentationPolicySpectrogram",
            "baseName": "augmentationPolicySpectrogram",
            "type": "object"
        },
        {
            "name": "learningRate",
            "baseName": "learningRate",
            "type": "Array<number>"
        },
        {
            "name": "trainingCycles",
            "baseName": "trainingCycles",
            "type": "Array<number>"
        },
        {
            "name": "model",
            "baseName": "model",
            "type": "Array<string>"
        },
        {
            "name": "dimension",
            "baseName": "dimension",
            "type": "Array<string>"
        },
        {
            "name": "convBaseFilters",
            "baseName": "convBaseFilters",
            "type": "Array<number>"
        },
        {
            "name": "convLayers",
            "baseName": "convLayers",
            "type": "Array<number>"
        },
        {
            "name": "dropout",
            "baseName": "dropout",
            "type": "Array<number>"
        },
        {
            "name": "denseNeurons",
            "baseName": "denseNeurons",
            "type": "Array<number>"
        },
        {
            "name": "denseBaseNeurons",
            "baseName": "denseBaseNeurons",
            "type": "Array<number>"
        },
        {
            "name": "denseLayers",
            "baseName": "denseLayers",
            "type": "Array<number>"
        },
        {
            "name": "script",
            "baseName": "script",
            "type": "string"
        },
        {
            "name": "scriptVariables",
            "baseName": "scriptVariables",
            "type": "object"
        },
        {
            "name": "mode",
            "baseName": "mode",
            "type": "string"
        },
        {
            "name": "trainTestSplit",
            "baseName": "trainTestSplit",
            "type": "number"
        },
        {
            "name": "findLearningRate",
            "baseName": "findLearningRate",
            "type": "Array<boolean>"
        }    ];

    static getAttributeTypeMap() {
        return TunerSpaceLearnBlock.attributeTypeMap;
    }
}
