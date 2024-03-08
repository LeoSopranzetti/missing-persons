import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/person';
import { PublicService } from '../../services/public.service';
import { Subscription, catchError, debounceTime, switchMap, tap } from 'rxjs';
import { ViewportScroller } from '@angular/common';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

const WAIT_TYPE = 300;

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  people!: Person;
  peoples: Person[] = [];
  currentPageIndex: number = 0;
  faChevronRight = faChevronRight as IconProp;
  faChevronLeft = faChevronLeft as IconProp;;
  faMagnifyingGlass = faMagnifyingGlass;
  form!: FormGroup;
  valueChangesSubscription!: Subscription;
  isLoading: boolean = false;
  pageFromApi!: number;
  totalPagesFromApi!: number;

  constructor(
    private publicService: PublicService ,
    private viewportScroller: ViewportScroller,
    private formBuilder: FormBuilder,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.formBuild();
    this.loadPeople();

    this.valueChangesSubscription = this.form.valueChanges.pipe(
      debounceTime(WAIT_TYPE),
      switchMap(async (values: any) => {

        const inputNameValue = values.inputNameActions;
        const inputMinAgeValue = values.inputMinAgeActions;
        const inputMaxAgeValue = values.inputMaxAgeActions;
        const gender = values.gender;

        if (inputNameValue !== '' || inputMinAgeValue !== '' || inputMaxAgeValue !== '' || gender !== '') {

          this.currentPageIndex = 0;

          this.loadPeople();
        } else {
          this.loadPeople();
        }
      })
    ).subscribe();

  }

  formBuild() {
    this.form = this.formBuilder.group({
      inputNameActions: [''],
      inputMinAgeActions: [''],
      inputMaxAgeActions: [''],
      gender: [''] 
    });
  }

  public loadPeople(){
    this.isLoading = true;
    this.publicService.getMissingPeoplesPaginated(this.currentPageIndex, this.form.value).pipe(
      tap((res : any ) => {
        this.pageFromApi = res.number;
        this.totalPagesFromApi = res.totalPages;
        this.peoples = res.content;
        this.isLoading = false;
      }),
      catchError((error)=> {
        this.isLoading = false;
        return error
      })
    ).subscribe();
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

  resetForm() {
    this.form.patchValue({
      inputNameActions: '',
      inputMinAgeActions: '',
      inputMaxAgeActions: '',
      gender: ''
    });
  }

  navigateToDetails(personId: number): void {
    this.router.navigate(['..', 'person', 'details', personId] , {relativeTo: this.activateRoute});
  }

  ngOnDestroy() {
    if (this.valueChangesSubscription) {
      this.valueChangesSubscription.unsubscribe();
    }
  }


}
