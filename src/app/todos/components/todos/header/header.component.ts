import { Component } from "@angular/core";
import { TodoService } from "src/app/todos/services/todos.service";

@Component({
    selector: 'app-todos-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent { 

    constructor(private todoService: TodoService ){}

    text: string = '';

    //Change value of text in input
    changeText(event: Event): void{
        const target = event.target as HTMLInputElement;
        this.text = target.value;
    }

    //Add todo task when you hit enter
    addTodo(): void{
        this.todoService.addTodo(this.text);
        this.text = '';
    }
}