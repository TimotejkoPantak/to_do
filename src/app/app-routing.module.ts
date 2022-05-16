import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TOdosModule } from 'src/app/todos/todos.modules';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    TOdosModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
