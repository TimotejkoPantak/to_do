import { Component } from "@angular/core";
import { Data } from "@angular/router";
import { TodoService } from "src/app/todos/services/todos.service";

@Component({
    selector: 'app-todos-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent { 

    constructor(private todoService: TodoService ){}

    text: string = '';
    plainText: string = '';
    deadline: string = '';

    //Change value of text in input
    changeText(event: Event): void{
        const target = event.target as HTMLInputElement;
        this.text = target.value;
    }

    changePlainText(event: Event): void{
        const target = event.target as HTMLInputElement;
        this.plainText = target.value;
    }

    changeDeadline(event: Event): void{
        const target = event.target as HTMLInputElement;
        this.deadline = target.value.toString();
    }

    //Add todo task when you hit enter
    addTodo(): void{
        this.todoService.addTodo(this.text, this.plainText, this.deadline);
        this.text = '';
        this.plainText = '';
        this.deadline = '';
    }

}