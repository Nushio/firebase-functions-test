import { MockCloudEventAbstractFactory } from '../../types';
import { firestore } from 'firebase-functions';
import { QueryDocumentSnapshot } from 'firebase-admin/firestore';
export declare const firestoreOnDocumentDeleted: MockCloudEventAbstractFactory<firestore.FirestoreEvent<QueryDocumentSnapshot>>;
