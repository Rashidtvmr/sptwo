import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-tbar',
  templateUrl: './tbar.component.html',
  styleUrls: ['./tbar.component.css']
})
export class TbarComponent implements OnInit {
  @ViewChild('loginBtn') @Input() loginBtn:ElementRef;
  constructor() { }

  ngOnInit() {
  }

}
