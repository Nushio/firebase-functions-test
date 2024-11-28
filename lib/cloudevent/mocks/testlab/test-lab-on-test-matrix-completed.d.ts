import { MockCloudEventAbstractFactory } from '../../types';
import { CloudEvent } from 'firebase-functions';
import { TestMatrixCompletedData } from 'firebase-functions/testLab';
export declare const testLabOnTestMatrixCompleted: MockCloudEventAbstractFactory<CloudEvent<TestMatrixCompletedData>>;
