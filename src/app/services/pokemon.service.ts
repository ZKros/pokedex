import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class PokemonService {
	public allPokemonsSearch: any;
	private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151';

	constructor(private httpClient: HttpClient) {

	}
	get loadingPokemons(): Observable<any> {
		return this.httpClient.get<any>(this.urlPokemon).pipe(
			tap(res => res),
			tap(res => {
				res.results.map((resPokemons: any) => {
					this.statusPokemon(resPokemons.url).subscribe(
						res => resPokemons.status = res
					)
				})
			})
		)
		//this.pokemons = request.results;
		//console.log(request);
	}

	public statusPokemon(url: string): Observable<any> {
		return this.httpClient.get<any>(url).pipe(
			map(
				res => res
			)
		)
	}
}
