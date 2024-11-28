import { MockCloudEventAbstractFactory } from '../../types';
import { CrashlyticsEvent, VelocityAlertPayload } from 'firebase-functions/alerts/crashlytics';
export declare const alertsCrashlyticsOnVelocityAlertPublished: MockCloudEventAbstractFactory<CrashlyticsEvent<VelocityAlertPayload>>;
