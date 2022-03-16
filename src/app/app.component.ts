import { Component } from '@angular/core';
// https://angular.io/guide/attribute-binding#binding-to-the-class-attribute

export interface ToDoItem {
  
  text:string;
  isDone:boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tallence';
  display=false;

  
  public newTask:string='';
  

  list:ToDoItem[]=[];


  backgroundcolor="white";
  
  toggle(){
    this.display=!this.display;
  }

  addTask(){
    if(this.newTask.length >= 1){
      this.list.push({text:this.newTask, isDone:false})
    } else {
      alert('Deine Notiz muss mindestens 1 Zeichen enthalten');
    }
      
    this.newTask='';
    console.log(this.list);

  }

  removeTask(i:number){
    this.list.splice(i, 1);
  }

  doneTask(i:number){
    this.list[i].isDone=!this.list[i].isDone;
    // if(this.list[i].isDone=true){
    //   this.list[i]['classList'].add('bgChange');
    // }

    console.log(this.list[i].isDone);
  }

  public getSortedList():ToDoItem[]{
    return this.list; 
    
  }

}

