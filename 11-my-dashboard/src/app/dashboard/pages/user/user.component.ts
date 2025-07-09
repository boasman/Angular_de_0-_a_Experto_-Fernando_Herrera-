import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { User } from '@interfaces/req-response';
import { TitleComponent } from '@shared/title/title.component';
import { subscribeOn, switchMap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { UsersService } from '@services/users.service';

@Component({
  standalone: true,
  imports: [TitleComponent],
  selector: 'app-user',
  template: `
    <app-title [title]="titleLabel()"> </app-title>

    @if(user()){

    <section>
      <img [srcset]="user()!.avatar" [alt]="user()!.first_name" />
    </section>

    <div>
      <h3>{{user()!.first_name}} {{user()!.last_name}}</h3>
      <p>{{user()?.email}}</p>
    </div>

    } @else {
    <p>loading....</p>
    }
  `,
})
export default class UserComponent implements OnInit {
  private route = inject(ActivatedRoute);

  titleLabel = computed( () => {

    if(this.user()){
      return `Informacion del usuario ${this.user()?.first_name} ${this.user()?.last_name}`
    }

    return 'Informarion del usuario'
  });

  private userService = inject(UsersService);

  // public user = signal<User | undefined>(undefined);
  public user = toSignal(
    this.route.params.pipe(
      switchMap(({ id }) => this.userService.getUserById(id))
    )
  );

  ngOnInit() {}
}
