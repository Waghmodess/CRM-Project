import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { EditComponent } from '../edit/edit.component'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  public userData: any;
  public myForm: any;
  public delete: any;
  names: any = ['Enrolled', 'Not Called', 'ABC', 'XYZ'];
  isSubmitted: boolean = false;


  constructor(private ser: DataService, private rout: Router, private fb: FormBuilder, public dialog: MatDialog) {
    // this.ser.getData().subscribe((res) => {
    //   console.log(res)
    //   this.userData = res;
    // })
    this.deleteData()
  }

  openDialog() {
    this.dialog.open(EditComponent, { width: '500px' });
  }


  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      age: [''],
      empId: [''],
      branch: [''],
      role: [''],
    })
  }

  onEdit(data: any) {
    // debugger
    const dialogRef = this.dialog.open(EditComponent,
      { width: '500px', data: { data: data } });
    dialogRef.afterClosed().subscribe(result => {
      debugger;
      // this.userData = this.userData.filter((value:any)=>{
      //   if(value.id == result.id){
      //     value.name = result.name;
      //     value.age = result.age;
      //     value.empId = result.empId;
      //     value.branch = result.branch;
      //     value.role = result.role;
      //   }
      //   return true;
      // });
      // let index = this.userData.indexOf(result);

      // for(let i=0; i< this.userData.length;i++){
      //   this.userData[i].id === result.id;
      //   this.userData[index] = result
      // }

      // const userIndex = this.userData.findIndex((x:any) => x.empId = result.empId);
      // this.userData[userIndex]=result;
      //  if (userIndex != null && userIndex != undefined) { this.userData [userIndex] = result; }

      this.ser.getData().subscribe((res) => {
        console.log(res);
        this.userData = res;

      });

      console.log('The dialog was closed');
    });
  }

  deleteData() {
    this.ser.getData().subscribe((res) => {
      console.log(res)
      this.userData = res;
    })
  }

  onDelete(dt: any) {
    this.ser.deleteData(dt.id).subscribe((res) => {
      alert('Delete Data');

      this.ser.getData().subscribe((res) => {
        console.log(res);
        this.delete = res;

        if (this.delete.length > 0) {
          this.deleteData()
        }
      })
    })
  }

  onSubmit() {
    this.ser.PostData(this.myForm.value).subscribe((res) => {
      console.log(res);
      this.isSubmitted = true;
      if (res) {
        this.deleteData()
      }
    })
  }

  get f() {
    return this.myForm.controls;
  }
}
