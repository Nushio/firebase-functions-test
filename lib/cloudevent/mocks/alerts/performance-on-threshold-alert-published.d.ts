import { MockCloudEventAbstractFactory } from '../../types';
import { PerformanceEvent, ThresholdAlertPayload } from 'firebase-functions/alerts/performance';
export declare const performanceThresholdOnThresholdAlertPublished: MockCloudEventAbstractFactory<PerformanceEvent<ThresholdAlertPayload>>;
