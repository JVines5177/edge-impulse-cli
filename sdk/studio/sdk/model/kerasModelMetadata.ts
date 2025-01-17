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
import { ImageInputScaling } from './imageInputScaling';
import { KerasModelLayer } from './kerasModelLayer';
import { KerasModelMetadataAllOf } from './kerasModelMetadataAllOf';
import { KerasModelMetadataMetrics } from './kerasModelMetadataMetrics';
import { KerasModelTypeEnum } from './kerasModelTypeEnum';
import { ObjectDetectionLastLayer } from './objectDetectionLastLayer';

export class KerasModelMetadata {
    /**
    * Whether the operation succeeded
    */
    'success': boolean;
    /**
    * Optional error description (set if \'success\' was false)
    */
    'error'?: string;
    /**
    * Date when the model was trained
    */
    'created': Date;
    /**
    * Layers of the neural network
    */
    'layers': Array<KerasModelLayer>;
    /**
    * Labels for the output layer
    */
    'classNames': Array<string>;
    /**
    * Original labels in the dataset when features were generated, e.g. used to render the feature explorer.
    */
    'labels': Array<string>;
    /**
    * The types of model that are available
    */
    'availableModelTypes': Array<KerasModelTypeEnum>;
    'recommendedModelType': KerasModelTypeEnum;
    /**
    * Metrics for each of the available model types
    */
    'modelValidationMetrics': Array<KerasModelMetadataMetrics>;
    'hasTrainedModel': boolean;
    'mode': KerasModelMetadataModeEnum;
    'objectDetectionLastLayer'?: ObjectDetectionLastLayer;
    'imageInputScaling': ImageInputScaling;

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
            "name": "created",
            "baseName": "created",
            "type": "Date"
        },
        {
            "name": "layers",
            "baseName": "layers",
            "type": "Array<KerasModelLayer>"
        },
        {
            "name": "classNames",
            "baseName": "classNames",
            "type": "Array<string>"
        },
        {
            "name": "labels",
            "baseName": "labels",
            "type": "Array<string>"
        },
        {
            "name": "availableModelTypes",
            "baseName": "availableModelTypes",
            "type": "Array<KerasModelTypeEnum>"
        },
        {
            "name": "recommendedModelType",
            "baseName": "recommendedModelType",
            "type": "KerasModelTypeEnum"
        },
        {
            "name": "modelValidationMetrics",
            "baseName": "modelValidationMetrics",
            "type": "Array<KerasModelMetadataMetrics>"
        },
        {
            "name": "hasTrainedModel",
            "baseName": "hasTrainedModel",
            "type": "boolean"
        },
        {
            "name": "mode",
            "baseName": "mode",
            "type": "KerasModelMetadataModeEnum"
        },
        {
            "name": "objectDetectionLastLayer",
            "baseName": "objectDetectionLastLayer",
            "type": "ObjectDetectionLastLayer"
        },
        {
            "name": "imageInputScaling",
            "baseName": "imageInputScaling",
            "type": "ImageInputScaling"
        }    ];

    static getAttributeTypeMap() {
        return KerasModelMetadata.attributeTypeMap;
    }
}


export type KerasModelMetadataModeEnum = 'classification' | 'regression' | 'object-detection' | 'visual-anomaly';
export const KerasModelMetadataModeEnumValues: string[] = ['classification', 'regression', 'object-detection', 'visual-anomaly'];
