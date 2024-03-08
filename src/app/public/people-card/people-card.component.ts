import { Component, Input, OnInit } from '@angular/core';
import { faCakeCandles, faPersonHalfDress, faSignature  } from '@fortawesome/free-solid-svg-icons';
import { People } from '../models/people';

@Component({
  selector: 'people-card',
  templateUrl: './people-card.component.html',
  styleUrls: ['./people-card.component.scss']
})
export class PeopleCardComponent implements OnInit {

  faCakeCandles = faCakeCandles;
  faPersonHalfDress = faPersonHalfDress;
  faSignature = faSignature;

  @Input() people!: People;

  constructor() { }

  ngOnInit() {
  }

}
