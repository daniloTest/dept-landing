import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingIndexPage } from './pages/landing-index/landing-index.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { LandingRoutingModule } from './landing-routing.module';
import { HeroComponent } from './components/hero/hero.component';
import { CaseComponent } from './components/case/case.component';
import { CasesGridComponent } from './components/cases-index/cases-grid.component';
import { CasesFeaturedGridComponent } from './components/cases-featured-grid/cases-featured-grid.component';
import { ClientsSectionComponent } from './components/clients-section/clients-section.component';



@NgModule({
  declarations: [
    LandingIndexPage,
    HeroComponent,
    CasesGridComponent,
    CaseComponent,
    CasesFeaturedGridComponent,
    ClientsSectionComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule,

  ]
})
export class LandingModule { }
