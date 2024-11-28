import { MockCloudEventAbstractFactory } from '../../types';
import { CloudEvent } from 'firebase-functions';
import { ConfigUpdateData } from 'firebase-functions/remoteConfig';
export declare const remoteConfigOnConfigUpdated: MockCloudEventAbstractFactory<CloudEvent<ConfigUpdateData>>;
