import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizComponent } from './quiz.component';
import { BooleanComponent } from './boolean/boolean.component';

const routes: Routes = [
	{
		path: '',
		component: QuizComponent,
		children: [
			{
				path: 'boolean',
				component: BooleanComponent
			},
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class QuizRoutingModule {
}
