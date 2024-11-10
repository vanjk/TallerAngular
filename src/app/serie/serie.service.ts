//Este es el service :) Aqui va la logica que obtiene la series del json
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Serie } from './serie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  private urlxd: string = environment.baseURL;

constructor(private http: HttpClient) { }

  getSeries(): Observable<Serie[]> {
  return this.http.get<Serie[]>(this.urlxd);

}

}
