import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PokemonService } from '../../services/pokemon.service';

@Component({
	selector: 'app-pokemon-list',
	templateUrl: './pokemon-list.component.html',
	styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
	@Input() pokemon?: string;
	@Input() numberPokemon!: number;
	private allPokemons: any;
	public allPokemonsSearch: any;

	constructor(
		public service: PokemonService,
		public dialogRef: MatDialogRef<PokemonListComponent>
	) { }

	ngOnInit(): void {
		this.service.loadingPokemons.subscribe(
			res => {
				this.allPokemons = res.results;
				this.allPokemonsSearch = this.allPokemons
			}
		);
	}
	catchImgPokemon() {
		const numberFormat = this.leadingZero(this.numberPokemon);

		return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numberFormat}.png`;
	}

	leadingZero(str: string | number, size = 3): string {
		let s = String(str);

		while (s.length < (size || 2)) {
			s = '0' + s;
		}

		return s;
	}
	search(value: string) {
		const filter = this.allPokemons.filter((res: any) => {
			return !res.name.indexOf(value.toLowerCase());
		})

		this.allPokemonsSearch = filter;
	}
}
