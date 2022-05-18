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
  addData: FormGroup;
  modalForm = true;
  isSubmitted: boolean = false;
  selectedValue: string;
  enquirys = ['One', 'Two', 'Three'];
  centers = ['Pune', 'Mumbai', 'Bengaluru'];
  sources = ['Source1', 'Source2', 'Source3'];
  courses = ['BE', 'ME', 'MBA'];
  firstName: FormControl;
  email: FormControl;
  enquiryType: FormControl;
  center: FormControl;
  lastName: FormControl;
  mobile: FormControl;
  enquirySource: FormControl;
  course: FormControl;
  remark: FormControl;
  userData: any;
  userList: string[];

  @Output() submit1: EventEmitter<any> = new EventEmitter();

  constructor(private form: FormBuilder, public dialogRef: MatDialogRef<OnlineComponent>) { }

  ngOnInit(): void {
    this.createFormControls();
    this.createForm();
    debugger;
    this.submit1.emit(this.userList);

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

    this.enquiryType = new FormControl("", [
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

    this.enquirySource = new FormControl("", [
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
    this.addData = new FormGroup({
      firstName: this.firstName,
      email: this.email,
      enquiryType: this.enquiryType,
      center: this.center,
      lastName: this.lastName,
      mobile: this.mobile,
      enquirySource: this.enquirySource,
      course: this.course,
      remark: this.remark
    })
  }


  onSubmit() {
    this.isSubmitted = true;
    if (this.addData.valid) {
      console.log(this.addData.value);

      Swal.fire({
        title: "Thank You",
        text: "Data Submitted Successfully",
        icon: "success",
        confirmButtonText: 'Okay',
      })
      this.addData.reset();
    } else {
      return;
    }
  }
  submit(myuser: any) {
    console.log(this.addData.value);
    // let userList: any = [];
    // this.userList.push(this.addData.value);
    // myuser.value = " ";
    // console.log(userList);

    if (this.addData.valid) {
      this.isSubmitted = true;
      console.log(this.addData.value);
      this.dialogRef.close();

      // let userData = this.addData.value;
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
    if (this.addData.invalid) {
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

  get FormControl() {
    return this.addData.controls;
  }
}