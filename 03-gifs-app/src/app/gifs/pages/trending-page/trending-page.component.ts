import { TODO } from './../../../../../node_modules/mini-css-extract-plugin/types/hmr/hotModuleReplacement.d';
import {
  AfterViewInit,
  asNativeElements,
  Component,
  ElementRef,
  inject,
  OnInit,
  signal,
  viewChild,
} from '@angular/core';
import { GifService } from '../../services/gifs.service';
import { ScrollStateService } from '../../../shared/services/scroll-state.service';

@Component({
  standalone: true,
  selector: 'app-trending-page',
  templateUrl: './trending-page.component.html',
  styleUrls: ['./trending-page.component.css'],
  // imports: [GifListComponent],
})
export default class TrendingPageComponent implements AfterViewInit {
  gifService = inject(GifService);
  ScrollStateService = inject(ScrollStateService);
  scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv');

  ngAfterViewInit(): void {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if (!scrollDiv) return;

    scrollDiv.scrollTop = this.ScrollStateService.trendingScrollState();

  }

  onScroll(event: Event) {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if (!scrollDiv) return;

    const scrollTop = scrollDiv.scrollTop;
    const clientHeight = scrollDiv.clientHeight;
    const scrollHeigth = scrollDiv.scrollHeight;

    console.log({ scrollTotal: scrollTop + clientHeight, scrollHeigth });

    const isAtBottom = scrollTop + clientHeight + 300 >= scrollHeigth;

    this.ScrollStateService.trendingScrollState.set(scrollTop);

    console.log(
      'propiedad scroll state',
      this.ScrollStateService.trendingScrollState()
    );

    if (isAtBottom) {
      this.gifService.loadTrendigGifs();
    }
  }

  // gifs = signal(imageUrls);
}
