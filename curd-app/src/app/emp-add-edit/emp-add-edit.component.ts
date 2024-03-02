import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent {
  empForm: FormGroup;
education: string[]=[
  'Matric',
  'Intermediate',
  'Diploma',
  'Graduate',
  'Post Graduate'
]

constructor(
  private _fb: FormBuilder , 
  private _empservice:EmployeeService,
   private _dialogRef: MatDialogRef<EmpAddEditComponent>,
   @Inject(MAT_DIALOG_DATA) private data:any
   )
   {
  this.empForm= this._fb.group({
    firstName: '',
    lastName:'',
    email:'',
    dob:'',
    gender:'',
    education:'',
    company:'',
    experiance:'',
    package:''
  })
}

onFormSubmit(){
  if(this.empForm.valid)
  {
     this._empservice.addEmpolyee(this.empForm.value).subscribe({
      next: (val:any)=>{
        console.log(val)
      alert('emp added sucrssfully');
      this._dialogRef.close(true);
      },
      error:(err:any)=>{
        console.error(err);
      }
     })
  }
}
}
