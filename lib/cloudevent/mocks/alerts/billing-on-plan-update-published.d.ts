import { MockCloudEventAbstractFactory } from '../../types';
import { BillingEvent, PlanUpdatePayload } from 'firebase-functions/alerts/billing';
export declare const alertsBillingOnPlanUpdatePublished: MockCloudEventAbstractFactory<BillingEvent<PlanUpdatePayload>>;
