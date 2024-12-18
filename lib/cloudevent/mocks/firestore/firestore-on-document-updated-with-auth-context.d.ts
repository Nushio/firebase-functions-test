import { MockCloudEventAbstractFactory } from '../../types';
import { Change, firestore } from 'firebase-functions';
import { QueryDocumentSnapshot } from 'firebase-admin/firestore';
export declare const firestoreOnDocumentUpdatedWithAuthContext: MockCloudEventAbstractFactory<firestore.FirestoreAuthEvent<Change<QueryDocumentSnapshot>>>;
