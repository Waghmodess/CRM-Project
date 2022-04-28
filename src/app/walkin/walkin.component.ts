import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout'
@Component({
  selector: 'app-walkin',
  templateUrl: './walkin.component.html',
  styleUrls: ['./walkin.component.css']
})
export class WalkinComponent implements OnInit {


  @ViewChild(MatSidenav)
  sidenav: MatSidenav | undefined

  constructor(private observer: BreakpointObserver) { }

  // ngAfterViewInit() {
  //   this.observer.observe(['max-width: 800px ']).subscribe((res) => {
  //     if (res.matches) {
  //       this.sidenav?.mode = 'over';
  //       this.sidenav?.close();
  //     } else {
  //       this.sidenav?.mode = 'side';
  //       this.sidenav?.open();
  //     }
  //   });
  // }

  ngOnInit(): void {
  }

}
