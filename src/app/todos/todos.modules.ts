import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TodosComponent } from "src/app/todos/components/todos/todos.component";
import { ListComponent } from "./components/list/list.component";
import { HeaderComponent } from "./components/todos/header/header.component";
import { TodoService } from "./services/todos.service";

const routes: Routes = [
    {
        path: '',
        component: TodosComponent,
    }
];

@NgModule({
    declarations: [TodosComponent, HeaderComponent, ListComponent],
    imports: [RouterModule.forChild(routes)],
    providers: [TodoService],
})

export class TOdosModule {

}