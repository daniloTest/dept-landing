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
import { SectionContactComponent } from './components/section-contact/section-contact.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LandingIndexPage,
    HeroComponent,
    CasesGridComponent,
    CaseComponent,
    CasesFeaturedGridComponent,
    ClientsSectionComponent,
    SectionContactComponent,
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule,
    RouterModule,

    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule

  ]
})
export class LandingModule { }
