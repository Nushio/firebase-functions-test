import { MockCloudEventAbstractFactory } from '../../types';
import { Change, firestore } from 'firebase-functions';
import { QueryDocumentSnapshot } from 'firebase-admin/firestore';
export declare const firestoreOnDocumentUpdated: MockCloudEventAbstractFactory<firestore.FirestoreEvent<Change<QueryDocumentSnapshot>>>;
