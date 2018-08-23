import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoteService } from '../../providers/note-service/note-service';
import { Note } from '../../model/note.model';
<<<<<<< HEAD
import { FormGroup, FormControl } from '../../../node_modules/@angular/forms';
=======
import { FormGroup, FormControl } from '@angular/forms';
import { NgModule } from'@angular/core';
@NgModule()
>>>>>>> 8ce015ee7b9cee363a5e190c815694104032b057
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

<<<<<<< HEAD
=======


>>>>>>> 8ce015ee7b9cee363a5e190c815694104032b057
  constructor(public navCtrl: NavController, public navParams: NavParams,
  private NoteService: NoteService) {
    this.formGroup = new FormGroup({
      title: new FormControl(),
      content: new FormControl(),
      date:new FormControl(),
  
<<<<<<< HEAD
    })
=======
    });
>>>>>>> 8ce015ee7b9cee363a5e190c815694104032b057
  }

  saveNote(note: Note){
     this.NoteService.saveNote(note);
     this.navCtrl.pop();
  }
}
