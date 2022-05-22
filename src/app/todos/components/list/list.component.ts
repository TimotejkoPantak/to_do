import { Component} from "@angular/core";
import { filter, map, Observable } from "rxjs";
import { combineLatest,} from "rxjs/internal/observable/combineLatest";
import { TodoService } from "../../services/todos.service";
import { FilterEnum } from "../../types/filter.enum";
import { TodoInterface } from "../../types/todo.interface";

@Component({
    selector: 'app-todos-list',
    templateUrl: './list.component.html'
})
export class ListComponent {
    visibleTodos$: Observable<TodoInterface[]>;
    noTodoClass$: Observable<boolean>;
    isAllTodosSelected$: Observable<boolean>;
    editingId: string | null = null;

    searchedKeyword: string | undefined;
    
    constructor(private todosService: TodoService){
        this.isAllTodosSelected$ = this.todosService.todos$.pipe(map((todos) => todos.every(todo => todo.isCompleted) ));

        this.noTodoClass$ = this.todosService.todos$.pipe(
            map((todos) => todos.length === 0));

        this.visibleTodos$ = combineLatest(
            this.todosService.todos$,
            this.todosService.filter$
        ).pipe(map(([todos, filter]: [TodoInterface[], FilterEnum]) => {
            if (filter === FilterEnum.active){
                return todos.filter(todo => !todo.isCompleted);
            }
            else if (filter === FilterEnum.completed){
                return todos.filter(todo => todo.isCompleted);
            }
            return todos;
        } ));
    }

    // toggleAllTodos(event: Event): void{
    //     const target = event.target as HTMLInputElement
    //     this.todosService.toggleAll(target.checked);
    // }

    setEditingId(editingId: string | null): void {
        this.editingId = editingId;
    }


}