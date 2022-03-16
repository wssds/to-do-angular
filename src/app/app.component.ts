import { Component } from '@angular/core';


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
  title = 'to do Angular';
  display=false;

  
  public newTask:string='';
  

  list:ToDoItem[]=[];
  newArr:ToDoItem[]=[];
  
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

  removeNewArrTask(i:number){
    this.newArr.splice(i, 1);
  }

  doneTask(i:number){
    this.newArr.push(this.list[i]);
    console.log('new', this.newArr);
    this.list.splice(i, 1);
    // this.list[i].isDone=!this.list[i].isDone; Hintergrundfarbwechsel
    
    console.log(this.list[i].isDone);

    
  }


  backToDo(i:number){
    this.list.unshift(this.newArr[i]);
    this.newArr.splice(i, 1);
  }


}

