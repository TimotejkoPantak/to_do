import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { TodosComponent } from "src/app/todos/components/todos/todos.component";
import { ListComponent } from "./components/list/list.component";
import { HeaderComponent } from "./components/todos/header/header.component";
import { TodoService } from "./services/todos.service";
import { CommonModule } from "@angular/common";
import { TodoComponent } from "./components/todo/todo.component";
import { FooterComponent } from "./components/footer/footer.component";


const routes: Routes = [
    {
        path: '',
        component: TodosComponent,
    }
];

@NgModule({
    declarations:
        [TodosComponent,
         HeaderComponent,
         ListComponent,
         TodoComponent,
         FooterComponent,
        ],
    imports: [RouterModule.forChild(routes), FormsModule, ReactiveFormsModule, CommonModule],
    providers: [TodoService],
})

export class TOdosModule {

}