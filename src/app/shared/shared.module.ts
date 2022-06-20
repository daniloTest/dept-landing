import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { NotFoundPage } from './pages/not-found/not-found.page';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    MenuComponent,
    TopbarComponent,
    NotFoundPage,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NotFoundPage,
    TopbarComponent,
    MenuComponent,
    FooterComponent
  ]
})
export class SharedModule { }
