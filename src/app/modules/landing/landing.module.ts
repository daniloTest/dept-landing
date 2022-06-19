import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingIndexPage } from './pages/landing-index/landing-index.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { LandingRoutingModule } from './landing-routing.module';
import { HeroComponent } from './components/hero/hero.component';



@NgModule({
  declarations: [
    LandingIndexPage,
    HeroComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule,

  ]
})
export class LandingModule { }
