import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map, Observable } from "rxjs";

export interface Task{
  title: string,
  id?: string,
  date?: string
}

@Injectable({providedIn: 'root'})
export class TaskService{
    static  url ="https://angular-organizer-29757-default-rtdb.firebaseio.com/tasks"

    constructor(private http: HttpClient){

    }
    create(task: Task): Observable<Task>{
       return this.http
        .post<any>(`${TaskService.url}/${task.date}.json`, task)
        .pipe(map(res=>{
            console.log('Response',res)
            return res
        }))
    }
}