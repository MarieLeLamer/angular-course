import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpInterceptorProviders } from './interceptors';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [HttpInterceptorProviders],
})
export class CoreModule {}
