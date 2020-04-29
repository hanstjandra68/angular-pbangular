import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import{GlobSerService} from '../glob-ser.service'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  a="";
  b="";
  datadariglob:any;
  datatemp:any;
  datatambah:any;
  constructor(public variabelglobal: GlobSerService){
    this.datadariglob=this.variabelglobal.getData();
    this.datatemp = this.datadariglob;
  }

  ngOnInit() {
  }

  push(){
    this.datatambah = {
      nama:this.a,
      penjelasan: this.b
    }
    this.datatemp.push(this.datatambah);
    this.variabelglobal.setData(this.datatemp);
    this.datadariglob.getData();
  }
}