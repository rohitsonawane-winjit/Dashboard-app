import { Component } from '@angular/core';

@Component({
  selector: 'app-user-table',
  standalone: false,
  
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css'
})
export class UserTableComponent {

  dataSource: any;
  displayedColumns: string[] = ["code", "name", "email", "phone", "status", "action"];

  Filterchange(event: any){

  }

  addcustomer(){

  }

  editcustomer(){

  }

  detailcustomer(){

  }

}
