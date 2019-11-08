import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../reducers';
import { Increment, Decrement } from '../actions/counter.actions';
import { getCount } from '../selectors/counter.selector';
import { Observable, interval } from 'rxjs';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

    newTodo: string;
    todos: any;
    todoObj: any;
    name = 'Angular & NgRx';
    count$: Observable<number>;

    constructor(private store: Store<AppState>) {
      this.newTodo = '';
      this.todos = [];
      this.count$ = this.store.pipe(select(getCount))
    }

    addTodo(event) {
      this.todoObj = {
        newTodo: this.newTodo,
        completed: false
      };
      this.todos.push(this.todoObj);
      this.newTodo = '';
      event.preventDefault();
    }

    deleteTodo(index) {
      this.todos.splice(index, 1);
    }

    deleteSelectedTodos() {
      for (let i = (this.todos.length - 1); i > -1; i--) {
        if (this.todos[i].completed) {
          this.todos.splice(i, 1);
        }
      }
    }
  ngOnInit() {
    localStorage.removeItem('name');
    localStorage.removeItem('passwrd');
    localStorage.removeItem('emaildata');
    this.increment();
  }

decrement(): void {
  this.store.dispatch(new Decrement());
}
increment(): void {
  this.store.dispatch(new Increment());
}

}
