import { MockCloudEventAbstractFactory } from '../../types';
import { CloudEvent, pubsub } from 'firebase-functions';
export declare const pubsubOnMessagePublished: MockCloudEventAbstractFactory<CloudEvent<pubsub.MessagePublishedData>>;
