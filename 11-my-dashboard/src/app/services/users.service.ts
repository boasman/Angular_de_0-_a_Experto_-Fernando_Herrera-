import { HttpClient, HttpHeaders } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { User, UserResponse, UsersResponse } from '@interfaces/req-response';
import { DatePipe } from '@angular/common';
import { delay, map, Observable } from 'rxjs';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private http = inject(HttpClient);

  //el asterico hace la propiedad privada
  #state = signal<State>({
    loading: true,
    users: [],
  });

  private headers = new HttpHeaders({
    'x-api-key': 'reqres-free-v1',
  });

  public users = computed(() => this.#state().users);
  public loading = computed(() => this.#state().loading);

  constructor() {
    this.http
      .get<UsersResponse>('https://reqres.in/api/users', {
        headers: this.headers,
      })
      .pipe(delay(1500))
      .subscribe((res) => {
        console.log(res);

        this.#state.set({
          loading: false,
          users: res.data,
        });
      });
  }

  getUserById(id: string) {
    return this.http
      .get<UserResponse>(`https://reqres.in/api/users/${id}`, {
        headers: this.headers,
      })
      .pipe(
        delay(1500),
        map((resp) => resp.data)
      );
  }
}
