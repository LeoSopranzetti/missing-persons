import { Component, OnInit } from '@angular/core';
import { PublicService } from '../../services/public.service';
import { catchError, tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../../models/person';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent implements OnInit {

  personId!: number;
  person!: Person;
  isLoading: boolean = false;

  constructor(
    private publicService: PublicService,
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller
  ) { }

  ngOnInit() {
    this.viewportScroller.scrollToPosition([0, 0]);
    this.route.params.subscribe(params => {
      this.personId = params['id'];
      this.getById(this.personId);
    });
  }

  public getById(id: number){
    this.isLoading = true;
    this.publicService.getPeopleById(id).pipe(
      tap((res : any ) => {
        this.person = res;
        this.isLoading = false;
      }),
      catchError((error)=> {
        this.isLoading = false;
        return error
      })
    ).subscribe();
  }

}
