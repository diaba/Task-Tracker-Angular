import { Component, OnInit } from '@angular/core';
import { Task } from './../../Task';
import { TASKS } from './../../mock-tasks';
import { TaskService } from 'src/app/service/task.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((x) => (this.tasks = x));
    console.log("tasks:"+this.tasks);
    
  }
  deleteTask(task: Task){
    this.taskService.deleteTask(task).subscribe(
      ()=>(this.tasks = this.tasks.filter((x) => x.id !== task.id))
    )
  }
}
