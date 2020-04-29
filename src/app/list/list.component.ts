import { Component, OnInit } from '@angular/core';
import{GlobSerService} from '../glob-ser.service'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  datatambah:any;
  datadariglob:any;
  datatemp:any;
  constructor(public variabelglobal: GlobSerService){
    this.datadariglob=this.variabelglobal.getData();
    this.datatemp = this.datadariglob;
  }
  
  ngOnInit() {
  }

}