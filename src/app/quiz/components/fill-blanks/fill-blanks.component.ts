import { Component, Input, OnInit } from '@angular/core';
import { FillBlankProblem } from '../../../model/fill-blank-problem';

@Component({
	selector: 'app-fill-blanks',
	templateUrl: './fill-blanks.component.html',
	styleUrls: ['./fill-blanks.component.scss']
})
export class FillBlanksComponent implements OnInit {
	@Input()
	fillBlankProblems: FillBlankProblem[];

	constructor() {
	}

	ngOnInit(): void {
	}

}
