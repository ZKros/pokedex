import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PokemonService } from 'src/app/services/pokemon.service';


@Component({
	selector: 'app-pokemon-list',
	templateUrl: './pokemon-list.component.html',
	styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
	private allPokemons: any;
	public allPokemonsSearch: any;

	constructor(
		public dialogRef: MatDialogRef<PokemonListComponent>,
		public service: PokemonService,

	) { }

	ngOnInit(): void {
		this.service.loadingPokemons.subscribe(
			res => {
				this.allPokemons = res.results;
				this.allPokemonsSearch = this.allPokemons
			}
		);
	}

	search(value: string) {
		const filter = this.allPokemons.filter((res: any) => {
			return !res.name.indexOf(value.toLowerCase());
		})

		this.allPokemonsSearch = filter;
	}
}
