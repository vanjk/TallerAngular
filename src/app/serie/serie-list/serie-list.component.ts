//AQUÍ VA TODO LO LOGICO DE LA PAGINA DE LISTADO DE SERIES
import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  series: Array<Serie> = [];

  constructor(private serieService: SerieService) {
  }

  getseries() :void {
    this.serieService.getSeries().subscribe(series => {
      this.series = series});
  }

  getPromedio(series: Serie[]): number{
    let promedio = 0;
    for (let i = 0; i < series.length; i++){
      promedio += series[i].seasons;
    }
    return promedio/series.length;
  }


  ngOnInit() {
    this.getseries();
  }

}
