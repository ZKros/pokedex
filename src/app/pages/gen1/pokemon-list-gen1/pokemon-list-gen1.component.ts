import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';


@Component({
	selector: 'app-pokemon-list-gen1',
	templateUrl: './pokemon-list-gen1.component.html',
	styleUrls: ['./pokemon-list-gen1.component.css']
})
export class PokemonListGen1Component implements OnInit {
	private allPokemons: any;

	constructor(
		public dialogRef: MatDialogRef<PokemonListGen1Component>,
		public service: PokemonService,
		public dialog: MatDialog,

	) { }

	ngOnInit(): void {
		this.service.loadingPokemons.subscribe(
			res => {
				this.allPokemons = res.results;
				this.service.allPokemonsSearch = this.allPokemons
			}
		);
	}
	search(value: string) {
		const filter = this.allPokemons.filter((res: any) => {
			return !res.name.indexOf(value.toLowerCase());
		})

		this.service.allPokemonsSearch = filter;
	}
	openPokemonStatus(id: number) {
		this.dialog.open(PokemonCardComponent, {
			data: id,
			height: '545px',
			width: '1000px',
			panelClass: 'my-class',
		},
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
