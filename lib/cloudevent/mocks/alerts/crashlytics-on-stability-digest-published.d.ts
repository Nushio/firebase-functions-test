import { MockCloudEventAbstractFactory } from '../../types';
import { CrashlyticsEvent, StabilityDigestPayload } from 'firebase-functions/alerts/crashlytics';
export declare const alertsCrashlyticsOnStabilityDigestPublished: MockCloudEventAbstractFactory<CrashlyticsEvent<StabilityDigestPayload>>;
