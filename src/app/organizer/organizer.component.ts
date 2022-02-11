import { TaskService, Task } from './../shared/tasks.service';
import { DateService } from './../shared/date.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.scss']
})
export class OrganizerComponent implements OnInit {

  form!: FormGroup

  constructor(public dateService: DateService,
  public taskService: TaskService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required)
    })
  }


  submit(){
    const{title} = this.form.value

    const task: Task ={
      title,
      date: this.dateService.date.value.format('DD-MM-YYYY')
    }
    this.taskService.create(task).subscribe(task=>{
       this.form.reset()
    }, err=>console.error(err))
    
  }
}
