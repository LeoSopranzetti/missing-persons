import { Component, Input, OnInit } from '@angular/core';
import { faCakeCandles, faPersonHalfDress, faSignature  } from '@fortawesome/free-solid-svg-icons';
import { Person } from '../../models/person';
import { ActivatedRoute, Router } from '@angular/router';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faInstagram, faLinkedin, faTwitter, faWhatsapp, faYoutube} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent implements OnInit {

  faCakeCandles = faCakeCandles;
  faPersonHalfDress = faPersonHalfDress;
  faSignature = faSignature;

  faTwitter = faTwitter as IconProp;
  faInstagram = faInstagram as IconProp;;
  faFacebook = faFacebook as IconProp;;
  faWhatsapp = faWhatsapp as IconProp;;

  @Input() person!: Person;
  @Input() isDetails: boolean = false;

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
  }
  
  public goToHome(){
    this.router.navigate(['home'], {relativeTo: this.activateRoute});
  }

}
