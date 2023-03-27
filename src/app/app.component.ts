import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from './types/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  todos = [
    { id: 1, title: 'HTML + CSS', completed: true },
    { id: 2, title: 'JS', completed: false },
    { id: 3, title: 'React', completed: false },
    { id: 4, title: 'Angular', completed: false },
  ];

  todoForm = new FormGroup({
    title: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
      ],
    }),
  });

  get title() {
    return this.todoForm.get('title') as FormControl;
  }

  get activeTodos() {
    return this.todos.filter(todo => !todo.completed);
  }

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.todos[1] = { ...this.todos[1], title: 'qwerty' };
    }, 3000);
  }

  trackById(i: number, todo: Todo) {
    return todo.id;
  }

  addTodo() {
    if (this.todoForm.invalid) {
      return;
    }

    const newTodo: Todo = {
      id: Date.now(),
      title: this.title.value,
      completed: false,
    };

    this.todos.push(newTodo);
    this.todoForm.reset();
  }
}
