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

import { OrganizationCreateProject } from './organizationCreateProject';
import { OrganizationCreateProjectCreatedByUser } from './organizationCreateProjectCreatedByUser';
import { OrganizationCreateProjectTransformationSummary } from './organizationCreateProjectTransformationSummary';
import { OrganizationCreateProjectWithFilesAllOf } from './organizationCreateProjectWithFilesAllOf';
import { OrganizationCreateProjectWithFilesAllOfFiles } from './organizationCreateProjectWithFilesAllOfFiles';
import { TransformationJobStatusEnum } from './transformationJobStatusEnum';

export class OrganizationCreateProjectWithFiles {
    'id': number;
    'organizationId': number;
    'name': string;
    'uploadType': OrganizationCreateProjectWithFilesUploadTypeEnum;
    'status': TransformationJobStatusEnum;
    'transformJobStatus': TransformationJobStatusEnum;
    'uploadJobId'?: number;
    'uploadJobStatus': TransformationJobStatusEnum;
    'uploadJobFilesUploaded'?: number;
    'projectOwner'?: string;
    'projectId'?: number;
    'projectName'?: string;
    'transformationBlockId'?: number;
    'builtinTransformationBlock'?: object;
    'transformationBlockName'?: string;
    'category': OrganizationCreateProjectWithFilesCategoryEnum;
    'created': Date;
    'outputDatasetName'?: string;
    'outputDatasetBucketId'?: number;
    'outputDatasetBucketPath'?: string;
    'totalDownloadFileCount': number;
    'totalDownloadFileSize': number;
    'totalDownloadFileSizeString': string;
    'totalUploadFileCount': number;
    /**
    * Number of transformation jobs that can be ran in parallel
    */
    'transformationParallel': number;
    'transformationSummary': OrganizationCreateProjectTransformationSummary;
    'inProgress': boolean;
    'label'?: string;
    'filterQuery'?: string;
    'emailRecipientUids'?: Array<number>;
    'pipelineId'?: number;
    'pipelineName'?: string;
    'pipelineRunId'?: number;
    'pipelineStep'?: number;
    'operatesOn': OrganizationCreateProjectWithFilesOperatesOnEnum;
    /**
    * Total amount of compute used for this job (in seconds)
    */
    'totalTimeSpentSeconds': number;
    /**
    * Total amount of compute used (friendly string)
    */
    'totalTimeSpentString': string;
    'createdByUser'?: OrganizationCreateProjectCreatedByUser;
    'files': Array<OrganizationCreateProjectWithFilesAllOfFiles>;
    'fileCountForFilter': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "organizationId",
            "baseName": "organizationId",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "uploadType",
            "baseName": "uploadType",
            "type": "OrganizationCreateProjectWithFilesUploadTypeEnum"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "TransformationJobStatusEnum"
        },
        {
            "name": "transformJobStatus",
            "baseName": "transformJobStatus",
            "type": "TransformationJobStatusEnum"
        },
        {
            "name": "uploadJobId",
            "baseName": "uploadJobId",
            "type": "number"
        },
        {
            "name": "uploadJobStatus",
            "baseName": "uploadJobStatus",
            "type": "TransformationJobStatusEnum"
        },
        {
            "name": "uploadJobFilesUploaded",
            "baseName": "uploadJobFilesUploaded",
            "type": "number"
        },
        {
            "name": "projectOwner",
            "baseName": "projectOwner",
            "type": "string"
        },
        {
            "name": "projectId",
            "baseName": "projectId",
            "type": "number"
        },
        {
            "name": "projectName",
            "baseName": "projectName",
            "type": "string"
        },
        {
            "name": "transformationBlockId",
            "baseName": "transformationBlockId",
            "type": "number"
        },
        {
            "name": "builtinTransformationBlock",
            "baseName": "builtinTransformationBlock",
            "type": "object"
        },
        {
            "name": "transformationBlockName",
            "baseName": "transformationBlockName",
            "type": "string"
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "OrganizationCreateProjectWithFilesCategoryEnum"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "Date"
        },
        {
            "name": "outputDatasetName",
            "baseName": "outputDatasetName",
            "type": "string"
        },
        {
            "name": "outputDatasetBucketId",
            "baseName": "outputDatasetBucketId",
            "type": "number"
        },
        {
            "name": "outputDatasetBucketPath",
            "baseName": "outputDatasetBucketPath",
            "type": "string"
        },
        {
            "name": "totalDownloadFileCount",
            "baseName": "totalDownloadFileCount",
            "type": "number"
        },
        {
            "name": "totalDownloadFileSize",
            "baseName": "totalDownloadFileSize",
            "type": "number"
        },
        {
            "name": "totalDownloadFileSizeString",
            "baseName": "totalDownloadFileSizeString",
            "type": "string"
        },
        {
            "name": "totalUploadFileCount",
            "baseName": "totalUploadFileCount",
            "type": "number"
        },
        {
            "name": "transformationParallel",
            "baseName": "transformationParallel",
            "type": "number"
        },
        {
            "name": "transformationSummary",
            "baseName": "transformationSummary",
            "type": "OrganizationCreateProjectTransformationSummary"
        },
        {
            "name": "inProgress",
            "baseName": "inProgress",
            "type": "boolean"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string"
        },
        {
            "name": "filterQuery",
            "baseName": "filterQuery",
            "type": "string"
        },
        {
            "name": "emailRecipientUids",
            "baseName": "emailRecipientUids",
            "type": "Array<number>"
        },
        {
            "name": "pipelineId",
            "baseName": "pipelineId",
            "type": "number"
        },
        {
            "name": "pipelineName",
            "baseName": "pipelineName",
            "type": "string"
        },
        {
            "name": "pipelineRunId",
            "baseName": "pipelineRunId",
            "type": "number"
        },
        {
            "name": "pipelineStep",
            "baseName": "pipelineStep",
            "type": "number"
        },
        {
            "name": "operatesOn",
            "baseName": "operatesOn",
            "type": "OrganizationCreateProjectWithFilesOperatesOnEnum"
        },
        {
            "name": "totalTimeSpentSeconds",
            "baseName": "totalTimeSpentSeconds",
            "type": "number"
        },
        {
            "name": "totalTimeSpentString",
            "baseName": "totalTimeSpentString",
            "type": "string"
        },
        {
            "name": "createdByUser",
            "baseName": "createdByUser",
            "type": "OrganizationCreateProjectCreatedByUser"
        },
        {
            "name": "files",
            "baseName": "files",
            "type": "Array<OrganizationCreateProjectWithFilesAllOfFiles>"
        },
        {
            "name": "fileCountForFilter",
            "baseName": "fileCountForFilter",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return OrganizationCreateProjectWithFiles.attributeTypeMap;
    }
}


export type OrganizationCreateProjectWithFilesUploadTypeEnum = 'dataset' | 'project';
export const OrganizationCreateProjectWithFilesUploadTypeEnumValues: string[] = ['dataset', 'project'];

export type OrganizationCreateProjectWithFilesCategoryEnum = 'training' | 'testing' | 'split';
export const OrganizationCreateProjectWithFilesCategoryEnumValues: string[] = ['training', 'testing', 'split'];

export type OrganizationCreateProjectWithFilesOperatesOnEnum = 'file' | 'dataitem' | 'standalone';
export const OrganizationCreateProjectWithFilesOperatesOnEnumValues: string[] = ['file', 'dataitem', 'standalone'];
