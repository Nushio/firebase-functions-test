import { MockCloudEventAbstractFactory } from '../../types';
import { CrashlyticsEvent, NewNonfatalIssuePayload } from 'firebase-functions/alerts/crashlytics';
export declare const alertsCrashlyticsOnNewNonfatalIssuePublished: MockCloudEventAbstractFactory<CrashlyticsEvent<NewNonfatalIssuePayload>>;
