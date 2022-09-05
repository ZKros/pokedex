import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';


@Component({
	selector: 'app-pokemon-list',
	templateUrl: './pokemon-list.component.html',
	styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
	private allPokemons: any;

	constructor(
		public dialogRef: MatDialogRef<PokemonListComponent>,
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

	openPokemonStatus() {
		this.dialog.open(PokemonCardComponent, {
			height: '600px',
			width: '1000px',
		},
		)
	}
}
