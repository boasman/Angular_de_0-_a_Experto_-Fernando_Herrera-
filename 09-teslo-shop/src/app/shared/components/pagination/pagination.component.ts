import { Component, computed, input, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'shared-pagination',
  templateUrl: './pagination.component.html',

})
export class PaginationComponent  {

  pages = input(0);
  currentPage = input<number>(1);


  getPagesList = computed(() => {
    //ver como funciona esto
    return Array.from({length: this.pages()}, (_,i) => i + 1 );
  })

}
