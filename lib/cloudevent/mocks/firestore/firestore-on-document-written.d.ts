import { MockCloudEventAbstractFactory } from '../../types';
import { Change, firestore } from 'firebase-functions';
import { DocumentSnapshot } from 'firebase-admin/firestore';
export declare const firestoreOnDocumentWritten: MockCloudEventAbstractFactory<firestore.FirestoreEvent<Change<DocumentSnapshot>>>;
