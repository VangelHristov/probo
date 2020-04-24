import { FunctionModel } from './function.model';
import { Parameter } from './parameter.model';
import { Sample } from './sample.model';

export interface TestCase {
	id?: number;
	problemId?: number;
	description?: string;
	sample?: Sample;
	function?: FunctionModel;
	parameters?: Parameter[];
}
