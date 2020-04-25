import { Component, OnInit } from '@angular/core';
import { FillBlankProblem } from '../../model/fill-blank-problem';

@Component({
	selector: 'app-boolean',
	templateUrl: './boolean.component.html',
	styleUrls: ['./boolean.component.scss']
})
export class BooleanComponent implements OnInit {
	fillBlankProblems: FillBlankProblem[] = [
		{answerDescription: 'operator', arguments: ['2', '\'2\''], answer: '=='}
	];

	constructor() {
	}

	ngOnInit(): void {
	}

}
