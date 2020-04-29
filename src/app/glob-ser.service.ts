import { Injectable } from '@angular/core';

@Injectable()
export class GlobSerService {
  private Data = [{
        nama: 'infor',
        penjelasan:"gege"
      },
      {
        nama:'ibm',
        penjelasan:"geje"
      }
    ];

    public getData(){
      return this.Data;
    }

    public setData(databaru){
      this.Data=databaru;
    }
}