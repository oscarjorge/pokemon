import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { PokemonService } from '../../services/pokemon.service';
import { Subscription } from 'rxjs';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.less']
})
export class PokemonSearchComponent implements OnInit {
  form: FormGroup;
  getPokemonSubscription: Subscription;
  getPokemonErrorSubscription: Subscription;
  pokemon: Pokemon;
  constructor(private fb: FormBuilder, public pokemonService: PokemonService) { }

  ngOnInit() {
    this.form = this.fb.group({
      idOrName: new FormControl('', [Validators.required]),
    });
    this.getPokemonSubscription = this.pokemonService.getPokemon$.subscribe(
      pokemon=>{
        this.pokemon = pokemon;
      }
    );
    this.getPokemonErrorSubscription = this.pokemonService.getPokemonError$.subscribe(
      err=>{

      }
    );
  }
  search(){
    if(this.form.valid)
      this.pokemonService.getById(this.form.get('idOrName').value)
  }
}
