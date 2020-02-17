import { Component } from '@angular/core';
import {Uploads} from '../app/uploads';
import { UploadService} from './upload.service';
import { interval } from 'rxjs';
import { timeout } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./app.component.scss']
})
export class AppComponent {
  title = 'tool'; show:boolean;
  type:string;
    ITEMS: Uploads[] = [
      {
          value:'Bio-Degradable Waste'
      },
      {
        value:'Non-Biodegradable Waste'
    }
    ]
    radioSel:any;file_input:string;
  radioSelected:string; name:string;
  radioSelectedString:string;
  constructor(private up:UploadService){
      this.radioSelected = 'Bio-Degradable Waste';this.show=false;
      this.getSelecteditem();
  }
  
  getSelecteditem(){
    this.radioSel = this.ITEMS.find(Item => Item.value === this.radioSelected);
    this.radioSelectedString = this.radioSel;
  }

  onItemChange(item){
    this.getSelecteditem();
  }
  upload(event){
    let type= this.radioSelectedString['value'];
  let str='Bio-Degradable Waste'
  const file = event.target.files[0];
      if(type==str){
      this.name= 'bio';
      this.up.push(file,this.name);
    }else{
      this.name= 'non_bio';
      this.up.push(file,this.name);
    }
    this.show=true;
    this.file_input='';
  
  }
  
}
