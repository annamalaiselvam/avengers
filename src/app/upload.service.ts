import { Injectable } from '@angular/core';
import {Uploads} from '../app/uploads';
import * as firebase from 'firebase/app';
import {AngularFireStorage} from '@angular/fire/storage';
@Injectable({
  providedIn: 'root'
})
export class UploadService {
  constructor(private db:AngularFireStorage) { }
  private basePath:string ;
 push(f:any,name:string){
  const id = Math.random().toString(36).substring(2);
  let type='bio'
  if(name==type){
    this.basePath= '/bio/'+id;
    const task = this.db.upload(this.basePath, f);
  }else{
    this.basePath= '/Non_bio/'+id;
    const task = this.db.upload(this.basePath, f);  
  }
 }

}
