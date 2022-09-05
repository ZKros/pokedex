import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
	selector: 'app-pokemon-card',
	templateUrl: './pokemon-card.component.html',
	styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

	constructor(
		public service: PokemonService
	) { }

	ngOnInit(): void {}

}
