import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TOdosModule } from 'src/app/todos/todos.modules';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    TOdosModule,
  FormsModule,
ReactiveFormsModule,
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
