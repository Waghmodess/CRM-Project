import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { EditComponent } from '../edit/edit.component'
import 'sweetalert2/src/sweetalert2.scss'
import Swal from 'sweetalert2'
import { OnlineComponent } from '../online/online.component';
import Landing from '../data';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  userData: any;
  myForm: FormGroup;
  public delete: any;
  public modalForm = true;
  names: any = ['Enrolled', 'Not Called', 'ABC', 'XYZ'];
  isSubmitted: boolean = false;
  allData: any;
  userlist: any[];




  constructor(private ser: DataService, private rout: Router,
    private fb: FormBuilder, public dialog: MatDialog) {
    // this.ser.getData().subscribe((res) => {
    //   console.log(res)
    //   this.userData = res;
    // })

    // this.deleteData()
  }

  openDialog1() {
    this.dialog.open(DialogContentExampleDialog);
  }

  openDialog() {
    this.dialog.open(EditComponent, { width: '500px' });
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      firstName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      enquirytype: ['', [Validators.required]],
      center: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      mobile: ['', [Validators.required, Validators.maxLength(10)]],
      enquirysource: ['', [Validators.required]],
      course: ['', [Validators.required]],
      remark: ['', [Validators.required]],
    })
  }

  // submit(userlist: any) {
  //   this.userlist
  // }

  // onEdit(data: any) {
  //   const dialogRef = this.dialog.open(EditComponent,
  //     { width: '500px', data: { data: data } });
  //   dialogRef.afterClosed().subscribe(result => {
  //     this.ser.getData().subscribe((res) => {
  //       console.log(res);
  //       this.userData = res;

  //     });

  //     console.log('The dialog was closed');
  //   });
  // }

  // deleteData() {
  //   this.ser.getData().subscribe((res) => {
  //     console.log(res)
  //     this.userData = res;
  //   })
  // }

  // onDelete(dt: any) {
  //   this.ser.deleteData(dt.id).subscribe((res) => {
  //     alert('Delete Data');

  //     this.ser.getData().subscribe((res) => {
  //       console.log(res);
  //       this.delete = res;

  //       if (this.delete.length > 0) {
  //         this.deleteData()
  //       }
  //     })
  //   })
  // }

  // get f() {
  //   return this.myForm.controls;
  // }

  // onSubmit() {
  //   this.isSubmitted = true;
  //   console.log(this.myForm.value);
  //   this.myForm.reset(this.myForm.value);
  // }

  // onClose() {
  //   Swal.fire({
  //     title: "Are you  want to Close!",
  //     text: "Do you want to continue",
  //     icon: "warning",

  //     showCancelButton: true,
  //     confirmButtonText: 'Yes',
  //     cancelButtonText: 'No',
  //   }).then((result) => {
  //     if (result.value == true) {
  //       this.modalForm = false;
  //     }
  //   })
  // }

  // submit(myuser: any) {
  //   // console.log(myuser.value);
  //   this.userlist.push(myuser.value);
  //   myuser.value = " ";
  // }

  // submit() {
  //   if (this.myForm.valid) {
  //     this.isSubmitted = true;
  //     console.log(this.myForm.value);
  //     let allData = this.myForm.value;
  //     console.log(allData);

  //     Swal.fire({
  //       title: "Thank You",
  //       text: "Data Submitted Successfully",
  //       icon: "success",
  //       confirmButtonText: 'Okay',
  //     })
  //   } else {
  //     Swal.fire({
  //       title: "Sorry... ",
  //       text: "Please Enter All Fields",
  //       icon: "error",
  //       confirmButtonText: 'Okay'
  //     })
  //   }
  //   if (this.myForm.invalid) {
  //     return;
  //   }
  // }

  // Landing: Landing[] = [
  //   {
  //     firstName: 'Kajal',
  //     email: 'kajal@yopmail.com',
  //     enquirytype: 'one',
  //     center: 'pune',
  //     lastName: 'Parchande',
  //     mobile: '7218176602',
  //     enquirysource: 'source1',
  //     course: 'BE',
  //     remark: 'Vary Good'
  //   },
  //   {
  //     firstName: 'Vikas',
  //     email: 'vikas@yopmail.com',
  //     enquirytype: 'Two',
  //     center: 'Mumbai',
  //     lastName: 'waghmode',
  //     mobile: '7218176602',
  //     enquirysource: 'source2',
  //     course: 'ME',
  //     remark: 'Good'
  //   },
  //   {
  //     firstName: 'Narayan',
  //     email: 'narayan@yopmail.com',
  //     enquirytype: 'one',
  //     center: 'pune',
  //     lastName: 'Sargar',
  //     mobile: '7218176602',
  //     enquirysource: 'source3',
  //     course: 'MBA',
  //     remark: 'Vary Good'
  //   },
  //   {
  //     firstName: 'Ajay',
  //     email: 'ajay@yopmail.com',
  //     enquirytype: 'one',
  //     center: 'Mumbai',
  //     lastName: 'waghmode',
  //     mobile: '7218176602',
  //     enquirysource: 'source1',
  //     course: 'ME',
  //     remark: 'Good'
  //   },
  //   {
  //     firstName: 'Sachin',
  //     email: 'sachin@yopmail.com',
  //     enquirytype: 'Two',
  //     center: 'Bengalore',
  //     lastName: 'waghmode',
  //     mobile: '7218176602',
  //     enquirysource: 'source1',
  //     course: 'BE',
  //     remark: 'Vary Good'
  //   }
  // ];
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog.html',
})
export class DialogContentExampleDialog { }