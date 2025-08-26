import { Component } from '@angular/core';
import { HeaderComponent } from './core/components/header-component/header-component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App   {

}
