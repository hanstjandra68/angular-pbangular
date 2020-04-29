import { Component, OnInit } from '@angular/core';
import{GlobSerService} from '../glob-ser.service'
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
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

  edit(){
    for(let i=0;i<this.datatemp.length;i++){
       if(this.a==this.datatemp[i].nama){
         this.datatemp[i].penjelasan = this.b;
       }
    }
  }
}