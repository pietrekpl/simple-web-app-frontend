import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {EmployeeService} from "../employee.service";
import {MatDialog} from '@angular/material/dialog';
import {Employee} from "../employee";
import {Router} from "@angular/router";


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  @ViewChild('myCityDialog') cityDialog = {} as TemplateRef<Employee>;

  employees!: Employee[]
  displayStyle = "none";
  dialogRef: any;
  employeeById? = new Employee()


  constructor(private employeeService: EmployeeService,
              private router: Router,
              private dialog: MatDialog) {
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

  openCityDialog(index: number) {
    let employee = this.employees.find(num => num.employeeId == index);
    this.employeeById = employee
    this.dialogRef = this.dialog.open(this.cityDialog,
      {height: '400px', width: '350px'});

    this.dialogRef.afterClosed().subscribe((result: Employee) => {
    });
  }
}
