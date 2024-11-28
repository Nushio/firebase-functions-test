import { MockCloudEventAbstractFactory } from '../../types';
import { AppDistributionEvent, NewTesterDevicePayload } from 'firebase-functions/alerts/appDistribution';
export declare const alertsAppDistributionOnNewTesterIosDevicePublished: MockCloudEventAbstractFactory<AppDistributionEvent<NewTesterDevicePayload>>;
