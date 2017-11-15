import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroBirthday1Component } from './hero-birthday1/hero-birthday1.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'hero-birthday1', component: HeroBirthday1Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
