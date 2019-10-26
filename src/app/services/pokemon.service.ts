import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { ApiService } from './api.service';
import { Pokemon } from '../models/pokemon';
import { map } from 'rxjs/operators';
import { POKEMON_URL } from '../constants/constants';


@Injectable({
  providedIn: 'root'
})
export class PokemonService{
  public getPokemon$ = new Subject<Pokemon>();
  public getPokemonError$ = new Subject<any>();
    constructor(private apiService: ApiService) {

    }
    getById(id: string){
      this.apiService.get<Pokemon>(`${POKEMON_URL}${id}`)
      .pipe(
        map(res => {
          return new Pokemon(res);
        })
      ).subscribe(
        res => {
          this.getPokemon$.next(res);
        },
        err => {
          this.getPokemonError$.next(err);
        }
      )
    }

}
