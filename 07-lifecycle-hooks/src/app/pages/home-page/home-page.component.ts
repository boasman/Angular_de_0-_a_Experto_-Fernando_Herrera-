import { afterNextRender, afterRender, Component, effect, OnInit, signal } from '@angular/core';

const log = (...messages: string[]) => {
  console.log(
    `${messages[0]} %c${messages.slice(1).join(',')} `,
    'color: #bada55'
  );
};

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {

  traditionalProperty = 'Elvis';
  signalProperty = signal('Elvis');

  changeTraditional(){
    this.traditionalProperty = 'Elvis Boasman';
  }

  changeSignal(){
    this.signalProperty.set('Elvis Boasman');
  }


  constructor() {
    log('Constructor llamado');
  }

  ngOnInit() {
    log(
      "ngOnInit: uns once after Angular has initialized all the component's inputs."
    );
  }

  basiEffect =  effect((onCleanup) => {
    console.log('effect:', 'disparar efectos secundario');

    onCleanup( () => {
      log('Oncleanup', 'se ejecuta cuando el efecto va hacer destruido');
    })


  })

  ngOnChanges() {
    log("ngOnChanges: Runs every time the component's inputs have changed.");
  }

  ngDoCheck() {
    log('ngDoCheck: Runs every time this component is checked for changes. ');
  }

  ngAfterContentInit() {
    log(
      "ngAfterContentInit: Runs once after the component's content has been initialized."
    );
  }

  ngAfterContentChecked() {
    log(
      'ngAfterContentChecked: Runs every time this component content has been checked for changes.'
    );
  }

  ngAfterViewInit() {
    log(
      "ngAfterViewInit: Runs once after the component's view has been initialized."
    );
  }
  ngAfterViewChecked() {
    log(
      "ngAfterViewChecked: 	Runs every time the component's view has been checked for changes."
    );
  }

  ngOnDestroy() {
    log('ngOnDestoy: 	Runs once before the component is destroyed.');
  }

  afterNextRenderEffect = afterNextRender(() => {
    log('afterNextRender: 	Runs once the next time that all components have been rendered to the DOM.');
  });

    afterRenderEffect = afterRender(() => {
    log('afterRender: 	Runs once the next time that all components have been rendered to the DOM.');
  });
}
