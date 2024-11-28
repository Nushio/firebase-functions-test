import { MockCloudEventAbstractFactory } from '../../types';
import { database } from 'firebase-functions';
export declare const databaseOnValueDeleted: MockCloudEventAbstractFactory<database.DatabaseEvent<database.DataSnapshot>>;
