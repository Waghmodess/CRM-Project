import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public myForm1: any;

  constructor(private ser: DataService, private fb: FormBuilder, private route: Router,
    public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) {
  }
  ngOnInit(): void {
    // debugger
    this.myForm1 = this.fb.group({
      name: [this.data.data.name],
      age: [this.data.data.age],
      empId: [this.data.data.empId],
      branch: [this.data.data.branch],
      role: [this.data.data.role]
    })
    console.log(this.data)

    // if (this.data) {
    //   this.myForm1.controls['name'].setValue(this.data.name);
    //   this.myForm1.controls['age'].setValue(this.data.age);
    //   this.myForm1.controls['empId'].setValue(this.data.empId);
    //   this.myForm1.controls['branch'].setValue(this.data.branch);
    //   this.myForm1.controls['role'].setValue(this.data.role);
    // }
  }


  onSubmit() {
    console.log(this.data.data.id, this.myForm1.value);
    this.ser.editData(this.data.data.id, this.myForm1.value).subscribe((res) => {
      debugger;
      if(res ){
      debugger;
        this.dialogRef.close(res);
      }

     

      // this.ser.editData(this.data.id, this.myForm1.value).subscribe({
      //   next:(res)=>{
      // alert('Data Updated Successfully');
      //     this.myForm1.reset();
      //     this.dialogRef.close('edit')
      //   }
      // })

      // console.log(res);
      // if (res) {

      // }
      // this.route.navigate(['/landing']);

    })
  }
}
