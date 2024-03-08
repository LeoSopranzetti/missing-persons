import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDialogModule } from '@angular/material/dialog';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatDialogModule
  ],
  declarations: [
    NavComponent,
    FooterComponent
  ],
  exports:[
    NavComponent,
    FooterComponent
  ]
})
export class SharedModule { }
