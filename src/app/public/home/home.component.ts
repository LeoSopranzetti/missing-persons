import { Component, OnInit } from '@angular/core';
import { People } from '../models/people';
import { PublicService } from '../services/public.service';
import { catchError, tap } from 'rxjs';
import { ViewportScroller } from '@angular/common';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  people!: People;
  peoples: People[] = [];
  currentPageIndex: number = 0;

  faChevronRight = faChevronRight as IconProp;
  faChevronLeft = faChevronLeft as IconProp;;

  constructor(
    private publicService: PublicService ,
    private viewportScroller: ViewportScroller
  ) { }

  ngOnInit() {
    this.loadPeople();
  }

  public loadPeople(){

    this.publicService.getMissingPeoplesPaginated(this.currentPageIndex).pipe(
      tap((res : any ) => {
        console.log(JSON.stringify(res.content, null, 2))
        this.peoples = res.content;
      }),
      catchError((error)=> {
        return error
      })
    ).subscribe()

  }

  nextPage() {
    this.currentPageIndex++;
    this.loadPeople();
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  prevPage() {
    if (this.currentPageIndex > 0) {
      this.currentPageIndex--;
      this.loadPeople();
      this.viewportScroller.scrollToPosition([0, 0]);
    }
  }

}
