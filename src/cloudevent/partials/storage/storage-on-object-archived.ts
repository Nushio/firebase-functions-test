import {DeepPartial, MockCloudEventPartials} from '../../types';
import {CloudEvent, CloudFunction, storage} from 'firebase-functions/v2';
import {FILENAME, getEventFilters, getEventType} from '../helpers';
import {getStorageObjectData} from './storage-data';

export const storageOnObjectArchived:
  MockCloudEventPartials<storage.StorageObjectData> = {
  generatePartial(
    cloudFunction: CloudFunction<storage.StorageObjectData>): DeepPartial<CloudEvent<storage.StorageObjectData>> {
    const bucket = getEventFilters(cloudFunction)?.bucket || 'bucket_name';
    const source = `//storage.googleapis.com/projects/_/buckets/${bucket}`;
    const subject = `objects/${FILENAME}`;

    return {
      source,
      subject,
      data: getStorageObjectData(bucket, FILENAME, 1),
    };
  },
  match(cloudFunction: CloudFunction<unknown>): boolean {
    return getEventType(cloudFunction) === 'google.cloud.storage.object.v1.archived';
  },
};
