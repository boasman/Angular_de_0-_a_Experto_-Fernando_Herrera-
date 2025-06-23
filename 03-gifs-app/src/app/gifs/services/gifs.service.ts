import { Length } from './../../../../node_modules/lightningcss/node/ast.d';
import { Params } from './../../../../node_modules/@types/express-serve-static-core/index.d';
import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { GiphyResponse } from '../interfaces/giphy.interfaces';
import { GifMapper } from '../mapper/git.mapper';
import { Gif } from '../interfaces/gir.interface';
import { map, tap } from 'rxjs';


const loadFromLocalStorage = () => {

  const GIF_KEY = 'gifs'
  const gifsFromLocalStorage = localStorage.getItem(GIF_KEY) ?? '{}';
  const gifs = JSON.parse(gifsFromLocalStorage);
  console.log(gifs);
  return gifs;
};

@Injectable({ providedIn: 'root' })
export class GifService {

  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal(false);
  private trendingPage = signal(0);


  tredingGifGroup = computed<Gif[][]>(() => {
    const groups = [];
    for(let i = 0;  i < this.trendingGifs().length;  i += 3){
      groups.push(this.trendingGifs().slice(i, i+3));
    }

    console.log(groups);
    return groups;
  })

  private http = inject(HttpClient);

  searchHistory = signal<Record<string, Gif[]>>(loadFromLocalStorage());
  searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));

  constructor() {
    this.loadTrendigGifs();
    console.log('Servicio creado');
  }

  saveGisfToLocalStorage = effect(() => {
    localStorage.setItem('GIF_KEY', JSON.stringify(this.searchHistory()));
  });

  loadTrendigGifs() {

    if(this.trendingGifsLoading()) return;

    this.trendingGifsLoading.set(true);


    this.http
      .get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
        params: {
          api_key: environment.giphyApiKey,
          limit: 20,
          offset: this.trendingPage() * 20
        },
      })
      .subscribe((resp) => {
        const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
        this.trendingGifs.update((currentGifs) => [...currentGifs, ...gifs]);
        this.trendingPage.update(x => x + 1);
        this.trendingGifsLoading.set(false);
        console.log({ gifs });
      });
  }

  searchgifs(query: string) {
    return this.http
      .get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`, {
        params: {
          api_key: environment.giphyApiKey,
          limit: 20,
          q: query,
        },
      })
      .pipe(
        map(({ data }) => data),
        map((items) => GifMapper.mapGiphyItemsToGifArray(items)),

        //TODO: Historial
        tap((items: any) => {
          this.searchHistory.update((history) => ({
            ...history,
            [query.toLowerCase()]: items,
          }));
        })
      );
  }

  getHistoryGifs(query: string): Gif[] {
    return loadFromLocalStorage()[query] ?? [];
  }
}
