import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "../employee.service";
import {Employee} from "../employee";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {


  employees!: Employee[]

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.getEmployees()
  }

  private getEmployees() {
    this.employeeService.getAllEmployees().subscribe(data => {
      this.employees = data
    })
  }


  updateEmployee(employeeId: number) {
    console.log("To implement update")

  }

  delete(employeeId: number) {
   this.employeeService.deleteEmployee(employeeId).subscribe(data =>
     this.employees = this.employees.filter(employee => employee.employeeId !== employeeId)
   )
  }
}
