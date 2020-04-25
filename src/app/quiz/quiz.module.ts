import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizRoutingModule } from './quiz-routing.module';
import { QuizComponent } from './quiz.component';
import { MaterialModule } from '../shared/material.module';
import { BooleanComponent } from './boolean/boolean.component';


@NgModule({
	declarations: [QuizComponent, BooleanComponent],
	imports: [
		CommonModule,
		MaterialModule,
		QuizRoutingModule,
	]
})
export class QuizModule {
}
