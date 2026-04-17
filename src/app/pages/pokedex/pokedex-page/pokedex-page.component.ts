import { Component } from '@angular/core';
import { PokemonListComponent } from "../pokemon-list/pokemon-list.component";
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';


@Component({
  selector: 'app-pokedex-page',
  imports: [PokemonListComponent, PokemonDetailComponent],
  templateUrl: './pokedex-page.component.html'
})
export class PokedexPageComponent {

}
