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

import { TunerCreateTrialDSPBlock } from './tunerCreateTrialDSPBlock';
import { TunerCreateTrialInputBlock } from './tunerCreateTrialInputBlock';
import { TunerCreateTrialLearnBlock } from './tunerCreateTrialLearnBlock';

export class TunerCreateTrialImpulse {
    'id'?: string;
    'experiment'?: string;
    'originalTrialId'?: string;
    'inputBlock': TunerCreateTrialInputBlock;
    'dspBlock': TunerCreateTrialDSPBlock;
    'learnBlock': TunerCreateTrialLearnBlock;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "experiment",
            "baseName": "experiment",
            "type": "string"
        },
        {
            "name": "originalTrialId",
            "baseName": "original_trial_id",
            "type": "string"
        },
        {
            "name": "inputBlock",
            "baseName": "inputBlock",
            "type": "TunerCreateTrialInputBlock"
        },
        {
            "name": "dspBlock",
            "baseName": "dspBlock",
            "type": "TunerCreateTrialDSPBlock"
        },
        {
            "name": "learnBlock",
            "baseName": "learnBlock",
            "type": "TunerCreateTrialLearnBlock"
        }    ];

    static getAttributeTypeMap() {
        return TunerCreateTrialImpulse.attributeTypeMap;
    }
}
