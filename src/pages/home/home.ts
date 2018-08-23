import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddNotePage } from '../add-note/add-note';
import { NoteService } from '../../providers/note-service/note-service';
import { Note } from '../../model/note.model';
<<<<<<< HEAD
=======
import { ViewNotePage } from '../view-note/view-note';

>>>>>>> 8ce015ee7b9cee363a5e190c815694104032b057
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

<<<<<<< HEAD
 notes: Promise<Note[]>;

=======
  notes: Promise<Note[]>;
 private note: Note;
>>>>>>> 8ce015ee7b9cee363a5e190c815694104032b057
  constructor(public navCtrl: NavController, private noteService: NoteService) {

  }
  ionViewWillEnter(){
  
    this.notes=this.getAllNotes();
  }
addNote(){
  this.navCtrl.push(AddNotePage);
}
<<<<<<< HEAD
=======
getNote(createDate: number){
  this.noteService.getNote(createDate).then((n) =>{
    this.note=n;
    this.navCtrl.push(ViewNotePage,{note:this.note})
  });

}
>>>>>>> 8ce015ee7b9cee363a5e190c815694104032b057
getAllNotes(){
  return this.noteService.getAllNotes();
}
}
