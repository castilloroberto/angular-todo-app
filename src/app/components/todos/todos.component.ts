import { Component, OnInit } from '@angular/core';
import {TodoType } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
})
export class TodosComponent implements OnInit {

  todos: TodoType[] = []

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content:'Primer tarea'
      },
      {
        content:'segunda tarea',
        done:true
      },
      {
        content:'Tercer tarea'
      }
    ]
  }
  toggleDone (id:number) {
    this.todos.map((v,i) => {
      if ( i == id) v.done = !v.done

      return v
    })
  }

}
