import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPage } from 'src/app/shared/pages/not-found/not-found.page';
import { LandingIndexPage } from './pages/landing-index/landing-index.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LandingIndexPage
  },
  {
    path: '404',
    component: NotFoundPage,
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
