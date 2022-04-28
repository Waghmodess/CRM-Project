import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public myForm: any;
  constructor(private ser:DataService,private fb:FormBuilder,private route:Router) { }

  ngOnInit(): void {
    this.myForm=this.fb.group({
      name:[''],
      age:[''],
      empId:[''],
      branch:[''],
      role:[''],
    })
  }
  onSubmite(){
    this.ser.PostData(this.myForm.value).subscribe((res)=>{
      console.log(res)
      if(res){
        this.route.navigate(['/landing'])
      }
    })
  }

}
