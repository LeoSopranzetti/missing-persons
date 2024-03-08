import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDialogModule } from '@angular/material/dialog';
import { FooterComponent } from './components/footer/footer.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatDialogModule
  ],
  declarations: [
    NavComponent,
    FooterComponent,
    LoadingComponent
  ],
  exports:[
    NavComponent,
    FooterComponent,
    LoadingComponent
  ]
})
export class SharedModule { }
