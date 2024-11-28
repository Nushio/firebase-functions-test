import { MockCloudEventAbstractFactory } from '../../types';
import { CrashlyticsEvent, NewFatalIssuePayload } from 'firebase-functions/alerts/crashlytics';
export declare const alertsCrashlyticsOnNewFatalIssuePublished: MockCloudEventAbstractFactory<CrashlyticsEvent<NewFatalIssuePayload>>;
