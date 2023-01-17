import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "../employee.service";
import {Employee} from "../employee";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {


  employees!: Employee[]

  constructor(private employeeService: EmployeeService,
              private router: Router) {
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
    this.router.navigate(['/update-employee', employeeId])
  }

  delete(employeeId: number) {
    this.employeeService.deleteEmployee(employeeId).subscribe(data =>
      this.employees = this.employees.filter(employee => employee.employeeId !== employeeId)
    )
  }

  details(employeeId: number) {
    this.router.navigate(['/details-employee', employeeId])
  }
}
