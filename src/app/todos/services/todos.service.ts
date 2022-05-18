import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { FilterEnum } from "../types/filter.enum";
import { TodoInderface } from "../types/todo.interface";

@Injectable()
export class TodoService{

    todos$ = new BehaviorSubject<TodoInderface[]>([]); //not a normal variable, but stream of data
    filter = new BehaviorSubject<FilterEnum>(FilterEnum.all)

    //method to add new todo task
    addTodo(text: string): void {
        const newTodo: TodoInderface = {
            id: Math.random().toString(16),
            text,
            isCompleted: false
        };

        //add new todo to list 
        const updateTodos = [...this.todos$.getValue(), newTodo];
        this.todos$.next(updateTodos);
    }
}