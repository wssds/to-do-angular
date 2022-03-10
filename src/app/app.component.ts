import { Component, ViewChild } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tallence';
  display=false;

  @ViewChild('task') inputText: any;

  list:any[]=[];


  backgroundcolor="white";
  
  toggle(){
    this.display=!this.display;
  }

  addTask(item:string){
    if(item.length >= 1){
      this.list.push({id:this.list.length,name:item})
    } else {
      alert('Deine Notiz muss mindestens 1 Zeichen enthalten');
    }
      
    
    console.log(this.list);

    this.inputText.nativeElement.value='';

  }

  removeTask(id:number){
    console.log(id);
    this.list=this.list.filter(item=>item.id!==id);
  }

  doneTask(){
    this.backgroundcolor="darkgrey";
  }

}


