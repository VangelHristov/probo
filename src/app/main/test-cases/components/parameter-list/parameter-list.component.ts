import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { Parameter } from '../../models/parameter.model';
import { ParameterDataService } from '../../services/parameter-data.service';

@Component({
	selector: 'app-parameter-list',
	templateUrl: './parameter-list.component.html',
	styleUrls: ['./parameter-list.component.scss']
})
export class ParameterListComponent implements OnInit {
	parameter: Parameter;
	showModal: boolean;
	submitParameterSubject: Subject<boolean>;
	disableParameterFormSubmit: boolean;

	@Input() functionId: number;
	@Input() sampleId: number;
	@Input() parameters: Parameter[];

	@Output() done: EventEmitter<boolean>;

	constructor(private parameterDataService: ParameterDataService, private modalService: NzModalService) {
		this.showModal = false;
		this.parameter = {};
		this.submitParameterSubject = new Subject<boolean>();
		this.done = new EventEmitter<boolean>();
		this.disableParameterFormSubmit = true;
	}

	ngOnInit(): void {
		this.parameterDataService
			.getBySampleId(this.sampleId)
			.pipe(take(1))
			.subscribe((parameters: Parameter[]) => (this.parameters = parameters));
	}

	openParameterForm(parameter: Parameter): void {
		this.showModal = true;
		this.parameter = parameter;
	}

	showDeleteConfirm(parameterId: number): void {
		this.modalService.confirm({
			nzTitle: 'Are you sure you want to delete this parameter?',
			nzOkText: 'Yes',
			nzOkType: 'danger',
			nzOnOk: () => this.deleteParameter(parameterId),
			nzCancelText: 'No'
		});
	}

	onOk(): void {
		this.submitParameterSubject.next(true);
	}

	onParameterSaved(): void {
		this.showModal = false;
		this.parameterDataService
			.getBySampleId(this.sampleId)
			.pipe(take(1))
			.subscribe((parameters: Parameter[]) => (this.parameters = parameters));
	}

	onDone(): void {
		this.done.emit(true);
	}

	onInvalidForm(value): void {
		this.disableParameterFormSubmit = value;
	}

	private deleteParameter(parameterId): void {
		this.parameterDataService
			.delete(parameterId)
			.pipe(take(1))
			.subscribe(() => (this.parameters = this.parameters.filter(p => p.id !== parameterId)));
	}
}
