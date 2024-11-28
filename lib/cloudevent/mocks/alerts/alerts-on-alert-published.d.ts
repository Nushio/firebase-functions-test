import { MockCloudEventAbstractFactory } from '../../types';
import { FirebaseAlertData, AlertEvent } from 'firebase-functions/alerts';
export declare const alertsOnAlertPublished: MockCloudEventAbstractFactory<AlertEvent<FirebaseAlertData>>;
