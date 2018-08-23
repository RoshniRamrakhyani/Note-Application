import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoteService } from '../../providers/note-service/note-service';
import { Note } from '../../model/note.model';
import { FormGroup, FormControl } from '@angular/forms';
import { NgModule } from'@angular/core';
@NgModule()
@IonicPage()
@Component({
  selector: 'page-add-note',
  templateUrl: 'add-note.html',
})
export class AddNotePage {
formGroup: FormGroup;
note: Note;
date: Date=new Date();
title: string ='';
content: string='';



  constructor(public navCtrl: NavController, public navParams: NavParams,
  private NoteService: NoteService) {
    this.formGroup = new FormGroup({
      title: new FormControl(),
      content: new FormControl(),
      date:new FormControl(),
  
    });
  }

  saveNote(note: Note){
     this.NoteService.saveNote(note);
     this.navCtrl.pop();
  }
}
