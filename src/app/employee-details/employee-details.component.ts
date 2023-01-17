import {Component, OnInit} from '@angular/core';
import {Employee} from "../employee";
import {EmployeeService} from "../employee.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit{


  employee: Employee = new Employee()
  employeeId!: number

  constructor(private employeeService: EmployeeService,
              private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.employeeId = this.route.snapshot.params['employeeId']
    this.employeeService.getEmployeeById(this.employeeId).subscribe(data =>
    this.employee = data)
  }

}
