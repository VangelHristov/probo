import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'enum'
})
export class EnumPipe implements PipeTransform {
	transform(obj: {}): string[] {
		return Object.keys(obj).reduce((results, prop) => {
			results.push(obj[prop]);
			return results;
		}, []);
	}
}
