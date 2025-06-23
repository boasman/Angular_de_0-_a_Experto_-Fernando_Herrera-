import { GifService } from './../../services/gifs.service';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop'
import { GifListComponent } from "../../components/gif-list/gif-list.component";





@Component({
  standalone: true,
  selector: 'app-gifs-history',
  templateUrl: './gifs-history.component.html',
  styleUrls: ['./gifs-history.component.css'],
  imports: [GifListComponent]
})
export default class GifsHistoryComponent implements OnInit {


  gifService= inject(GifService);

  constructor() { }

  ngOnInit() {
  }

  query = toSignal(
    inject(ActivatedRoute).params.pipe(map((params) => params['query']))
  );

  gifsByKey = computed(() => {
    return this.gifService.getHistoryGifs(this.query());
  })







}



