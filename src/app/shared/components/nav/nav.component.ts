import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(
    private router : Router,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  public goToHome(){
    this.router.navigate(['home'], {relativeTo: this.activateRoute});
  }

}
