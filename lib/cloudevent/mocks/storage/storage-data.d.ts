import { storage } from 'firebase-functions';
/** Storage Data */
export declare function getStorageObjectData(bucket: string, filename: string, generation: number): storage.StorageObjectData;
