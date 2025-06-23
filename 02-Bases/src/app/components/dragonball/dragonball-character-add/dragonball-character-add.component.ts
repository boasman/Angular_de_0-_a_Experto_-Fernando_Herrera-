import { Component, OnInit, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interfaces';

@Component({
  standalone: true,
  selector: 'app-dragonball-character-add',
  templateUrl: './dragonball-character-add.component.html',
  styleUrls: ['./dragonball-character-add.component.css']
})
export class DragonballCharacterAddComponent implements OnInit {

    name = signal('');
    power = signal(0);
    newCharacter = output<Character>();


    //   characters = signal<Character[]>([
    //   { id: 1, name: 'Goku', power: 9001 },
    //   // { id: 2, name: 'Vegeta', power: 8000 },
    //   // { id: 4, name: 'Yamcha', power: 500 },
    //   // { id: 3, name: 'Piccolo', power: 3000 },
    // ]);

  constructor() { }

  ngOnInit() {
  }

      addCharacter() {
      if (!this.name() || !this.power() || this.power() <= 0) {
        return;
      }

      const newCharacter: Character = {
        id: Math.floor(Math.random() * 1000), //this.characters().length + 1,
        name: this.name(),
        power: this.power(),
      };

      this.newCharacter.emit(newCharacter);

      console.log('newCharacter', newCharacter);

      // this.characters.update((list: any) => [...list, newCharacter]);
      this.resetFields();
    }

    resetFields() {
      this.name.set('');
      this.power.set(0);
    }

}
