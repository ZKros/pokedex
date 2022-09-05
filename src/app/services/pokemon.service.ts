import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';

import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class PokemonService {
	private urlPokemons: string = 'https://pokeapi.co/api/v2/pokemon?limit=151';
	constructor(private httpClient: HttpClient) {

	}
	get loadingPokemons(): Observable<any> {
		return this.httpClient.get<any>(this.urlPokemons).pipe(
			tap(res => res),
			tap(res => {
				res.results.map((resPokemons: any) => {
					this.statusPokemon(resPokemons.url).subscribe(
						res => resPokemons.status = res
					)
				})
			})
		)
	}

	public statusPokemon(url: string) {
		return this.httpClient.get<any>(url).pipe(
			map(
				res => res
			)
		)
	}
}
