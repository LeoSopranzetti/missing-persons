import { Injectable } from '@angular/core';
import { environment } from '../../../enviroment/environment';
import { HttpClient } from '@angular/common/http';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class PublicService {


constructor(
  private httpClient: HttpClient
) { }



  getAllMissingPeoples() {
    return this.httpClient.get(`${API}?porPagina=12`)
  }

  getMissingPeoplesPaginated(index: number){
    return this.httpClient.get(`${API}?porPagina=12&pagina=${index}`)
  }

}

