import { Text } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-online',
  templateUrl: './online.component.html',
  styleUrls: ['./online.component.css']
})
export class OnlineComponent implements OnInit {
  myForm: FormGroup;
  modalForm = true;
  isSubmitted: boolean = false;
  selectedValue: string;
  Enquirys = ['One', 'Two', 'Three'];
  Centers = ['Pune', 'Mumbai', 'Bengaluru'];
  Sources = ['Source1', 'Source2', 'Source3'];
  Courses = ['BE', 'ME', 'MBA'];
  firstName: FormControl;
  email: FormControl;
  enquirytype: FormControl;
  center: FormControl;
  lastName: FormControl;
  mobile: FormControl;
  enquirysource: FormControl;
  course: FormControl;
  remark: FormControl;
  userData: any;
  userlist: any = [];

  @Output() submit1: EventEmitter<any> = new EventEmitter();

  constructor(private form: FormBuilder, public dialogRef: MatDialogRef<OnlineComponent>) { }

  ngOnInit(): void {
    this.createFormControls();
    this.createForm();
    debugger;
    this.submit1.emit(this.userlist);

  }
  createFormControls() {
    this.firstName = new FormControl(" ", [
      Validators.required,
      Validators.pattern('^[a-zA-Z \-\']+'),
    ]);

    this.email = new FormControl("", [
      Validators.required,
      Validators.email,
    ]);

    this.enquirytype = new FormControl("", [
      Validators.required,
    ]);

    this.center = new FormControl("", [
      Validators.required,
    ]);

    this.lastName = new FormControl(" ", [
      Validators.required,
      Validators.pattern('^[A-Za-z0-9 ]+$'),
    ]);

    this.mobile = new FormControl("", [
      Validators.required,
      Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')
    ]);

    this.enquirysource = new FormControl("", [
      Validators.required,
    ]);

    this.course = new FormControl("", [
      Validators.required,
    ]);

    this.remark = new FormControl("", [
      Validators.required,
    ]);
  }

  createForm() {
    this.myForm = new FormGroup({
      firstName: this.firstName,
      email: this.email,
      enquirytype: this.enquirytype,
      center: this.center,
      lastName: this.lastName,
      mobile: this.mobile,
      enquirysource: this.enquirysource,
      course: this.course,
      remark: this.remark
    })
  }


  onSubmit() {
    this.isSubmitted = true;
    if (this.myForm.valid) {
      console.log(this.myForm.value);

      Swal.fire({
        title: "Thank You",
        text: "Data Submitted Successfully",
        icon: "success",
        confirmButtonText: 'Okay',
      })
      this.myForm.reset();
    } else {
      return;
    }
  }
  submit(myuser: any) {
    console.log(this.myForm.value);
    // let userlist: any = [];
    // this.userlist.push(this.myForm.value);
    // myuser.value = " ";
    // console.log(userlist);

    if (this.myForm.valid) {
      this.isSubmitted = true;
      console.log(this.myForm.value);
      this.dialogRef.close();

      // let userData = this.myForm.value;
      // console.log(userData);
      // this.dialogRef.close();


      Swal.fire({
        title: "Thank You",
        text: "Data Submitted Successfully",
        icon: "success",
        confirmButtonText: 'Okay',
      })
    } else {
      Swal.fire({
        title: "Sorry... ",
        text: "Please Enter All Fields",
        icon: "error",
        confirmButtonText: 'Okay'
      })
    }
    if (this.myForm.invalid) {
      return;
    }
  }

  onClose() {
    this.dialogRef.close();
    Swal.fire({
      title: "Are you  want to Close!",
      text: "Do you want to continue",
      icon: "warning",

      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.value == true) {
        this.modalForm = false;
      }
    })
  }

  get f() {
    return this.myForm.controls;
  }
}