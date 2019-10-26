import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.less']
})
export class PokemonDetailComponent implements OnInit {
  @Input() pokemon: Pokemon
  constructor() { }

  ngOnInit() {
  }

}
