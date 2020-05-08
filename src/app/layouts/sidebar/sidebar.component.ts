import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  show: boolean = true;
  tab = [true];

  constructor() { }

  ngOnInit(): void {
  }


  myFunctionOne(){
    console.log('Call Function One from Component One');

    console.log(this.show);
    
    this.tab.push(this.show);


    console.log(this.tab);
    


    if(this.show){
      this.show = false;

    }else{
      this.show = true;
    }
  }


// @Output() exampleOutput = new EventEmitter<any>();

// exampleChild: string = "hello world in sidebar";


// exampleMethodChild(){
//   this.exampleOutput.emit(this.exampleChild);
//   console.log("sidbar");
  
// }

  




}
