import { Component, OnInit} from '@angular/core';
import {student} from './student'
@Component({
  selector: 'app-student-managment',
  templateUrl: './student-managment.component.html',
  styleUrls: ['./student-managment.component.css']
})
export class StudentManagmentComponent implements OnInit {
Student:student[];
constructor() { 
this.Student = [new student("Gia","Lashauri",0o1010)];
}


onClick(name:HTMLInputElement,lastName:HTMLInputElement,id:HTMLInputElement):boolean{
this.Student.push(new student(name.value,lastName.value,id.value));
return false;

}
  ngOnInit() {
  }

}
