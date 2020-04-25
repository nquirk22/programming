import { Component, OnInit } from '@angular/core';
import { Quiz } from '../model/quizz';
import { ActivatedRoute, Router } from '@angular/router';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
	selector: 'app-quizz',
	templateUrl: './quiz.component.html',
	styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
	quizzes: Quiz[] = [{name: 'Boolean'}];
	private mediaMatcher: MediaQueryList =
		matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);

	constructor(private router: Router, private route: ActivatedRoute) {
	}

	ngOnInit(): void {
	}

	isScreenSmall(): boolean {
		return this.mediaMatcher.matches;
	}

	quizSelect(quiz: Quiz): void {
		this.router.navigate([quiz.name.toLowerCase()], { relativeTo: this.route });
	}



}
