import { TODO } from './../../../../../node_modules/mini-css-extract-plugin/types/hmr/hotModuleReplacement.d';
import {
  asNativeElements,
  Component,
  ElementRef,
  inject,
  OnInit,
  signal,
  viewChild,
} from '@angular/core';
import { GifService } from '../../services/gifs.service';

@Component({
  standalone: true,
  selector: 'app-trending-page',
  templateUrl: './trending-page.component.html',
  styleUrls: ['./trending-page.component.css'],
  // imports: [GifListComponent],
})
export default class TrendingPageComponent {
  gifService = inject(GifService);
  scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv');

  onScroll(event: Event) {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if (!scrollDiv) return;

    const scrollTop = scrollDiv.scrollTop;
    const clientHeight = scrollDiv.clientHeight;
    const scrollHeigth = scrollDiv.scrollHeight

    console.log({scrollTotal: scrollTop + clientHeight, scrollHeigth});

    const isAtBottom = scrollTop + clientHeight + 300 >= scrollHeigth

    console.log({isAtBottom})

    if(isAtBottom){
      this.gifService.loadTrendigGifs();
    }
  }

  // gifs = signal(imageUrls);
}
