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

import { PortalFile } from './portalFile';

export class ListPortalFilesInFolderResponseAllOf {
    'files'?: Array<PortalFile>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "files",
            "baseName": "files",
            "type": "Array<PortalFile>"
        }    ];

    static getAttributeTypeMap() {
        return ListPortalFilesInFolderResponseAllOf.attributeTypeMap;
    }
}
