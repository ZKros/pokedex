import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { forkJoin } from 'rxjs';
import { PokemonService } from '../../services/pokemon.service';

@Component({
	selector: 'app-pokemon-card',
	templateUrl: './pokemon-card.component.html',
	styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

	public pokemonDetails: any;
	private urlPokemon: string = 'https:/pokeapi.co/api/v2/pokemon';


	constructor(
		public service: PokemonService,
		public dialogRef: MatDialogRef<PokemonCardComponent>,
		@Inject(MAT_DIALOG_DATA) public id: number,
	) {

	}

	ngOnInit(): void {
		this.pokemon();
	}

	public pokemon() {
		const pokemon = this.service.statusPokemon(`${this.urlPokemon}/${this.id}`);

		return forkJoin([pokemon]).subscribe(
			res => {
				this.pokemonDetails = res;
				console.log(this.pokemonDetails);
			}
		)
	}

	leadingZero(str: string | number, size = 3): string {
		let s = String(str);

		while (s.length < (size || 2)) {
			s = '0' + s;
		}

		return s;
	}
}
