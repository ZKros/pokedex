import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PokemonService } from '../../services/pokemon.service';

@Component({
	selector: 'app-pokemon-list',
	templateUrl: './pokemon-list.component.html',
	styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

	constructor(
		public dialogRef: MatDialogRef<PokemonListComponent>
	) { }

	ngOnInit(): void { }

}
