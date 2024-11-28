import { MockCloudEventAbstractFactory } from '../../types';
import { database } from 'firebase-functions';
export declare const databaseOnValueCreated: MockCloudEventAbstractFactory<database.DatabaseEvent<database.DataSnapshot>>;
