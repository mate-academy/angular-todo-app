import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../types/todo';

const USER_ID = 6548;
const API_URL = 'https://mate.academy/students-api'

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  constructor(
    private http: HttpClient,
  ) { }

  getTodos() {
    return this.http.get<Todo[]>(`${API_URL}/todos?userId=${USER_ID}`);
  }
}
