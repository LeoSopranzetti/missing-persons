import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PeopleCardComponent } from './people-card/people-card.component';

@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    MatDialogModule,
    FontAwesomeModule
  ],
  declarations: [
    HomeComponent,
    PeopleCardComponent
  ]
})
export class PublicModule { }
