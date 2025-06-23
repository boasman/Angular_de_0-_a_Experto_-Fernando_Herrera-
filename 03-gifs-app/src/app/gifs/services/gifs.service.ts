import { Params } from './../../../../node_modules/@types/express-serve-static-core/index.d';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { GiphyResponse } from '../interfaces/giphy.interfaces';
import { GifMapper } from '../mapper/git.mapper';
import { Gif } from '../interfaces/gir.interface';

@Injectable({providedIn: 'root'})
export class GifService {


  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal(true);

  private http = inject(HttpClient);

  constructor(){
    this.loadTrendigGifs();
    console.log("Servicio creado");
  }

loadTrendigGifs(){
  this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`,{
    params: {
      api_key: environment.giphyApiKey,
      limit: 20,
    }
  })
  .subscribe((resp) => {
    const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
    this.trendingGifs.set(gifs);
    this.trendingGifsLoading.set(false);
    console.log({gifs})
  });
}


}
