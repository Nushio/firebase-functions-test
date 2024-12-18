import { MockCloudEventAbstractFactory } from '../../types';
import { database } from 'firebase-functions';
import { Change } from 'firebase-functions/v1';
export declare const databaseOnValueWritten: MockCloudEventAbstractFactory<database.DatabaseEvent<Change<database.DataSnapshot>>>;
