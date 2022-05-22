import { Injectable } from "@angular/core";
import { DatePipe } from "@angular/common";
import { BehaviorSubject } from "rxjs";
import { FilterEnum } from "../types/filter.enum";
import { TodoInterface } from "../types/todo.interface";


@Injectable()
export class TodoService{

    todos$ = new BehaviorSubject<TodoInterface[]>([]); //not a normal variable, but stream of data
    filter$ = new BehaviorSubject<FilterEnum>(FilterEnum.all)

    //method to add new todo task
    addTodo(text: string, plainText: string, deadline: string): void {
        const newTodo: TodoInterface = {
            id: Math.random().toString(16),
            text,
            isCompleted: false,
            deadline,
            plainText,
        };

        //add new todo to list 
        const updateTodos = [...this.todos$.getValue(), newTodo];
        this.todos$.next(updateTodos);
    }

    toggleAll(isCompleted: boolean, plainText: string, deadline: string): void {
        console.log('isCompleted', isCompleted)
        const updateTodos = this.todos$.getValue().map(todo => {
            return {
                ...todo,
                isCompleted,
                plainText,
                deadline
            }
        })

        this.todos$.next(updateTodos);
    }

    changeFilter(filterName: FilterEnum): void {
        this.filter$.next(filterName);
    }

    changeTodo(id: string, text: string): void {
        const updatedTodos = this.todos$.getValue().map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              text,
            };
          }
    
          return todo;
        });
        this.todos$.next(updatedTodos);
    }

    removeTodo(id: string): void {
        const updatedTodos = this.todos$
          .getValue()
          .filter((todo) => todo.id !== id);
    
        this.todos$.next(updatedTodos);
    }

    toggleTodo(id: string): void {
        const updatedTodos = this.todos$.getValue().map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              isCompleted: !todo.isCompleted,
            };
          }
          return todo;
        });
        this.todos$.next(updatedTodos);
    }

}