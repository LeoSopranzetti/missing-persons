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

  getMissingPeoplesPaginated(index: number, form: any){
    let url = `${API}/aberto/filtro?porPagina=12&pagina=${index}`;

    form?.inputNameActions ? url = `${url}&nome=${form.inputNameActions}` : '';
    form?.inputMinAgeActions ? url = `${url}&faixaIdadeInicial=${form.inputMinAgeActions}` : '';
    form?.inputMaxAgeActions ? url = `${url}&faixaIdadeFinal=${form.inputMaxAgeActions}` : '';
    form?.gender ? url = `${url}&sexo=${form.gender}` : '';
      
    return this.httpClient.get(`${url}`)
  }

  
  getPeopleById(id: number) {
    return this.httpClient.get(`${API}/${id}`)
  }

}

