import { MockCloudEventAbstractFactory } from '../../types';
import { CrashlyticsEvent, RegressionAlertPayload } from 'firebase-functions/alerts/crashlytics';
export declare const alertsCrashlyticsOnRegressionAlertPublished: MockCloudEventAbstractFactory<CrashlyticsEvent<RegressionAlertPayload>>;
