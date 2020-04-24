import {TestCase} from '../../test-cases/models/test-case.model';
import { Problem } from './problem.model';

export interface ApiResponseModel {
	id?: number;
	title?: string;
	detail?: string;
	status?: number;
	content?: Problem[] | TestCase[];
	last?: boolean;
}
