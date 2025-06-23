import { Component, inject, OnInit, signal } from '@angular/core';
import { GifListComponent } from '../../components/gif-list/gif-list.component';
import { GifService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gir.interface';

@Component({
  standalone: true,
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
  imports: [GifListComponent],
})
export default class SearchPageComponent implements OnInit {
  gifService = inject(GifService);

  gifs = signal<Gif[]>([]);

  constructor() {}

  ngOnInit() {}

  onSearch(query: string) {
    const resp = this.gifService.searchgifs(query).subscribe((resp) => {
      this.gifs.set(resp);
    });
    //  this.gifs.set(resp);
  }
}
