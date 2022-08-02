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


export class ListOrganizationApiKeysResponseAllOfApiKeys {
    'id': number;
    'apiKey': string;
    'name': string;
    'created': Date;
    'role': ListOrganizationApiKeysResponseAllOfApiKeysRoleEnum;
    'isTransformationJobKey': boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "apiKey",
            "baseName": "apiKey",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "Date"
        },
        {
            "name": "role",
            "baseName": "role",
            "type": "ListOrganizationApiKeysResponseAllOfApiKeysRoleEnum"
        },
        {
            "name": "isTransformationJobKey",
            "baseName": "isTransformationJobKey",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return ListOrganizationApiKeysResponseAllOfApiKeys.attributeTypeMap;
    }
}


export type ListOrganizationApiKeysResponseAllOfApiKeysRoleEnum = 'admin' | 'member';
export const ListOrganizationApiKeysResponseAllOfApiKeysRoleEnumValues: string[] = ['admin', 'member'];