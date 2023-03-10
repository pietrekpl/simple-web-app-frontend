import {Component} from '@angular/core';
import {Employee} from "../employee";
import {EmployeeService} from "../employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {

  employee: Employee = new Employee()

  constructor(private employeeService: EmployeeService,
              private router: Router) {
  }

  getBackToMainPage() {
    this.router.navigate([''])
  }

  onSubmit() {
    if (this.validateEmployeeAge(this.employee.dateOfBirth) || this.isNegativeDepartmentId(this.employee.departmentId)) {
      return
    }
    this.employeeService.createEmployee(this.employee).subscribe(data => {
      console.log(data)
    })
    this.getBackToMainPage()
  }

  validateEmployeeAge(dateOfBirth: string) {
    return this.employeeService.validateEmployeeAge(dateOfBirth)
  }

  isNegativeDepartmentId(departmentId: number) {
    return departmentId < 0
  }
}
