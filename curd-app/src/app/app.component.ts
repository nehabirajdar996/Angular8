import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { EmployeeService } from './services/employee.service';
import {ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email','dob','gender','education','company','experiance','package','actions'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _dialog: MatDialog, private _empservice:EmployeeService){}

  ngOnInit(): void {
    this.getEmpolyeeList();
  }



  openAddEditEmpForm()
  {
    const DialogRef=this._dialog.open(EmpAddEditComponent)
     DialogRef.afterClosed().subscribe({
      next:(val)=>{
        if(val){
          this.getEmpolyeeList();
        }
      }
     })
  }

  getEmpolyeeList()
  {
    this._empservice.getEmpolyeeList().subscribe({
      next:(res) =>{
       this.dataSource = new MatTableDataSource(res);
       this.dataSource.sort = this.sort;
       this.dataSource.paginator=this.paginator;
          console.log("json data",res)
          
      },
      error:(err) =>{
        console.log(err)
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteEmployee(id:number){
    this._empservice.deleteEmployee(id).subscribe({
      next:(res)=>{
        alert('employee deleted sucessfully')
        this.getEmpolyeeList();
      },
      error:console.log,
    });
  }

  openEditForm(data:any)
  {
    this._dialog.open(EmpAddEditComponent,{
      data,
    })
     
      
  }
}
