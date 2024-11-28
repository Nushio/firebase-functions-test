import { MockCloudEventAbstractFactory } from '../../types';
import { CrashlyticsEvent, NewAnrIssuePayload } from 'firebase-functions/alerts/crashlytics';
export declare const alertsCrashlyticsOnNewAnrIssuePublished: MockCloudEventAbstractFactory<CrashlyticsEvent<NewAnrIssuePayload>>;
