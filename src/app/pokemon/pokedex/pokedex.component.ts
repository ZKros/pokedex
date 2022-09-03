import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  constructor(
		public dialogRef: MatDialogRef<PokedexComponent>
	) { }

  ngOnInit(): void {
  }

	cancel(): void {
		this.dialogRef.close();
	}
}
