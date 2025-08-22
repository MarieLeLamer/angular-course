import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header-component/header-component';
import { RouterOutlet } from '@angular/router';
import { filter, interval, map, Observable, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet, AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  interval$!: Observable<string>;

  ngOnInit() {
    this.interval$ = interval(1000).pipe(
      filter((value) => value % 3 === 0),
      map((value) =>
        value % 2 === 0
          ? `Je suis ${value} et je suis pair`
          : `Je suis ${value} et je suis impair`
      ), 
      tap(text => this.logger(text))
    );
  }

  logger(text: string) {
    console.log(text);
  }
}
