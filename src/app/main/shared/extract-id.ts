import { HttpResponse } from '@angular/common/http';
import { ApiResponseModel } from '../problems/models/api-response.model';

export const extractId = (res: HttpResponse<ApiResponseModel>): ApiResponseModel => {
	const location = res.headers.get('Location');
	const index = location.lastIndexOf('/') + 1;

	const body = res.body !== null ? res.body : {};
	const bodyClone = JSON.parse(JSON.stringify(body));

	bodyClone.id = parseInt(location.substring(index), 10);
	return bodyClone;
};
