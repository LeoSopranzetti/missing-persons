import { Component, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faTwitter = faTwitter as IconProp;
  faInstagram = faInstagram as IconProp;;
  faYoutube = faYoutube as IconProp;;
  faFacebook = faFacebook as IconProp;;
  faLinkedin = faLinkedin as IconProp;;


  constructor() { }

  ngOnInit(): void {
  }

}
