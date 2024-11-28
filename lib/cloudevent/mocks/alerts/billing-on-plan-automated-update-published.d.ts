import { MockCloudEventAbstractFactory } from '../../types';
import { BillingEvent, PlanAutomatedUpdatePayload } from 'firebase-functions/alerts/billing';
export declare const alertsBillingOnPlanAutomatedUpdatePublished: MockCloudEventAbstractFactory<BillingEvent<PlanAutomatedUpdatePayload>>;
