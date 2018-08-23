<<<<<<< HEAD
webpackJsonp([0],{

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(232);
=======
webpackJsonp([2],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_note_service_note_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
>>>>>>> 8ce015ee7b9cee363a5e190c815694104032b057
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
<<<<<<< HEAD
//import { HttpClient } from '@angular/common/http';


var NoteService = /** @class */ (function () {
    function NoteService(storage) {
        this.storage = storage;
        this.notes = [];
    }
    NoteService.prototype.saveNote = function (note) {
        note.createDate = Date.now();
        this.notes.push(note);
        this.storage.set('notes', this.notes);
    };
    NoteService.prototype.getAllNotes = function () {
        var _this = this;
        return this.storage.get('notes').then(function (notes) {
            _this.notes = notes == null ? [] : notes;
            return _this.notes.slice();
        });
    };
    NoteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], NoteService);
    return NoteService;
}());

//# sourceMappingURL=note-service.js.map

/***/ }),

/***/ 134:
=======





var AddNotePage = /** @class */ (function () {
    function AddNotePage(navCtrl, navParams, NoteService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.NoteService = NoteService;
        this.date = new Date();
        this.title = '';
        this.content = '';
        this.formGroup = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            title: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](),
            content: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](),
            date: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](),
        });
    }
    AddNotePage.prototype.saveNote = function (note) {
        this.NoteService.saveNote(note);
        this.navCtrl.pop();
    };
    AddNotePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-note',template:/*ion-inline-start:"C:\Users\roshu\Desktop\Note-Application\Note-Application\src\pages\add-note\add-note.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Add Note</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n<form [formGroup]="formGroup"(ngSubmit)="saveNote(formGroup.value)" >\n\n \n\n    <ion-item>\n\n        <ion-label> Date</ion-label>\n\n        <ion-datetime displayFormat="MM/DD/YYYY"  formControlName="date"></ion-datetime>\n\n         \n\n    </ion-item>\n\n    <ion-item>\n\n    <ion-label>Title</ion-label>\n\n    <ion-input type="text" name="title" formControlName="title" required></ion-input>\n\n     <div class="alert" *ngIf="!formGroup.controls[\'title\'].valid\n\n     && formGroup.controls[\'title\'].touched">{{ titleAlert }} </div>\n\n     </ion-item>\n\n    <ion-item>\n\n      <ion-label>Note</ion-label>\n\n      <ion-input type="text" name="content" formControlName="content" required></ion-input>\n\n       <div class="alert" *ngIf="!formGroup.controls[\'content\'].valid\n\n       && formGroup.controls[\'content\'].touched">{{ ContentAlert }} </div>\n\n    </ion-item>\n\n<button ion-button type="submit" [disabled]="!formGroup.valid">Save Note</button>\n\n</form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\roshu\Desktop\Note-Application\Note-Application\src\pages\add-note\add-note.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_note_service_note_service__["a" /* NoteService */]])
    ], AddNotePage);
    return AddNotePage;
}());

//# sourceMappingURL=add-note.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewNotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_note_service_note_service__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewNotePage = /** @class */ (function () {
    function ViewNotePage(navCtrl, navParams, noteService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.noteService = noteService;
        this.note = this.navParams.get('note');
    }
    ViewNotePage.prototype.deleteNote = function (createDate) {
        this.noteService.deleteNote(createDate);
        this.navCtrl.pop();
    };
    ViewNotePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-view-note',template:/*ion-inline-start:"C:\Users\roshu\Desktop\Note-Application\Note-Application\src\pages\view-note\view-note.html"*/'<!--\n  Generated template for the ViewNotePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>View-Note</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-card>\n  <ion-card-content>\n    <ion-card-title>\n        {{note.title}}\n    </ion-card-title>\n    <div class="note-date">\n      {{note.date}}\n    </div>\n    <hr />\n    <div> {{note.content}}</div>\n  </ion-card-content>\n</ion-card>\n</ion-content>\n<ion-footer>\n  <button ion-button color="danger" block (click)="deleteNote(note.createDate)">\n    Delete Note\n  </button>\n</ion-footer>'/*ion-inline-end:"C:\Users\roshu\Desktop\Note-Application\Note-Application\src\pages\view-note\view-note.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_note_service_note_service__["a" /* NoteService */]])
    ], ViewNotePage);
    return ViewNotePage;
}());

//# sourceMappingURL=view-note.js.map

/***/ }),

/***/ 111:
>>>>>>> 8ce015ee7b9cee363a5e190c815694104032b057
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
<<<<<<< HEAD
webpackEmptyAsyncContext.id = 134;

/***/ }),

/***/ 230:
=======
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-note/add-note.module": [
		275,
		1
	],
	"../pages/view-note/view-note.module": [
		276,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 152;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 197:
>>>>>>> 8ce015ee7b9cee363a5e190c815694104032b057
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_note_add_note__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_note_service_note_service__ = __webpack_require__(125);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_note_add_note__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_note_service_note_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__view_note_view_note__ = __webpack_require__(102);
>>>>>>> 8ce015ee7b9cee363a5e190c815694104032b057
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




<<<<<<< HEAD
=======

>>>>>>> 8ce015ee7b9cee363a5e190c815694104032b057
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, noteService) {
        this.navCtrl = navCtrl;
        this.noteService = noteService;
    }
    HomePage.prototype.ionViewWillEnter = function () {
        this.notes = this.getAllNotes();
    };
    HomePage.prototype.addNote = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_note_add_note__["a" /* AddNotePage */]);
    };
<<<<<<< HEAD
=======
    HomePage.prototype.getNote = function (createDate) {
        var _this = this;
        this.noteService.getNote(createDate).then(function (n) {
            _this.note = n;
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__view_note_view_note__["a" /* ViewNotePage */], { note: _this.note });
        });
    };
>>>>>>> 8ce015ee7b9cee363a5e190c815694104032b057
    HomePage.prototype.getAllNotes = function () {
        return this.noteService.getAllNotes();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-home',template:/*ion-inline-start:"D:\Note-Application-master\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      My Notes\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <button ion-item *ngFor="let note of notes | async">\n      {{note.title}}\n    </button>\n  </ion-list>\n  <button ion-button (click)="addNote()">Add Note</button>\n</ion-content>\n'/*ion-inline-end:"D:\Note-Application-master\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__providers_note_service_note_service__["a" /* NoteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_note_service_note_service__["a" /* NoteService */]) === "function" && _b || Object])
    ], HomePage);
    return HomePage;
    var _a, _b;
=======
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\roshu\Desktop\Note-Application\Note-Application\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      My Notes\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let note of notes | async" (click)="getNote(Note.createDate)">\n\n      {{ note.title }}\n\n    </button>\n\n  </ion-list>\n\n  <button ion-button (click)="addNote()">Add Note</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\roshu\Desktop\Note-Application\Note-Application\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_note_service_note_service__["a" /* NoteService */]])
    ], HomePage);
    return HomePage;
>>>>>>> 8ce015ee7b9cee363a5e190c815694104032b057
}());

//# sourceMappingURL=home.js.map

/***/ }),

<<<<<<< HEAD
/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_note_service_note_service__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_forms__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddNotePage = /** @class */ (function () {
    function AddNotePage(navCtrl, navParams, NoteService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.NoteService = NoteService;
        this.date = new Date();
        this.title = '';
        this.content = '';
        this.formGroup = new __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_forms__["b" /* FormGroup */]({
            title: new __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_forms__["a" /* FormControl */](),
            content: new __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_forms__["a" /* FormControl */](),
            date: new __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_forms__["a" /* FormControl */](),
        });
    }
    AddNotePage.prototype.saveNote = function (note) {
        this.NoteService.saveNote(note);
        this.navCtrl.pop();
    };
    AddNotePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-note',template:/*ion-inline-start:"D:\Note-Application-master\src\pages\add-note\add-note.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Add Note</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<form [formGroup]="forGroup"(ngSubmit)="saveNote"(formGroup.value) >\n \n    <ion-item>\n        <ion-label> Date</ion-label>\n        <ion-datetime displayFormat="MM/DD/YYYY"  formControlname="date"></ion-datetime>\n    </ion-item>\n    <ion-item>\n    <ion-label>Title</ion-label>\n    <ion-input type="text" name="title" formControlname="title" required></ion-input>\n     <div class="alert" *ngIf="!formGroupControl.controls[\'title\'].valid"\n     && "fromGroup.controls[\'title\'].touched">{{ titleAlert }}\n     </ion-item>\n    <ion-item>\n      <ion-label>Note</ion-label>\n      <ion-input type="text" name="content" formControlname="content" required></ion-input>\n       <div class="alert" *ngIf="!formGroupControl.controls[\'content\'].valid"\n       && "fromGroup.controls[\'content\'].touched">{{ titleAlert }}\n    </ion-item>\n<button ion-button type="submit" [disabled]="!formGroup.valid">Save Note</button>\n</form>\n</ion-content>\n'/*ion-inline-end:"D:\Note-Application-master\src\pages\add-note\add-note.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_note_service_note_service__["a" /* NoteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_note_service_note_service__["a" /* NoteService */]) === "function" && _c || Object])
    ], AddNotePage);
    return AddNotePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=add-note.js.map

/***/ }),

/***/ 233:
=======
/***/ 198:
>>>>>>> 8ce015ee7b9cee363a5e190c815694104032b057
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(256);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);
>>>>>>> 8ce015ee7b9cee363a5e190c815694104032b057


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

<<<<<<< HEAD
/***/ 256:
=======
/***/ 221:
>>>>>>> 8ce015ee7b9cee363a5e190c815694104032b057
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_add_note_add_note__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_note_service_note_service__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(232);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_add_note_add_note__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_note_service_note_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_view_note_view_note__ = __webpack_require__(102);
>>>>>>> 8ce015ee7b9cee363a5e190c815694104032b057
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










<<<<<<< HEAD
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
=======

//import { AddNotePageModule } from '../pages/add-note/add-note.module';

//import { AddNotePageModule } from '../pages/add-note/add-note';
>>>>>>> 8ce015ee7b9cee363a5e190c815694104032b057
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
<<<<<<< HEAD
                __WEBPACK_IMPORTED_MODULE_7__pages_add_note_add_note__["a" /* AddNotePage */]
=======
                __WEBPACK_IMPORTED_MODULE_7__pages_add_note_add_note__["a" /* AddNotePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_view_note_view_note__["a" /* ViewNotePage */]
>>>>>>> 8ce015ee7b9cee363a5e190c815694104032b057
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
<<<<<<< HEAD
                        { loadChildren: '../pages/add-note/add-note.module#AddNotePageModule', name: 'AddNotePage', segment: 'add-note', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["a" /* IonicStorageModule */].forRoot()
=======
                        { loadChildren: '../pages/add-note/add-note.module#AddNotePageModule', name: 'AddNotePage', segment: 'add-note', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-note/view-note.module#ViewNotePageModule', name: 'ViewNotePage', segment: 'view-note', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["f" /* ReactiveFormsModule */],
>>>>>>> 8ce015ee7b9cee363a5e190c815694104032b057
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
<<<<<<< HEAD
                __WEBPACK_IMPORTED_MODULE_7__pages_add_note_add_note__["a" /* AddNotePage */]
=======
                __WEBPACK_IMPORTED_MODULE_7__pages_add_note_add_note__["a" /* AddNotePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_view_note_view_note__["a" /* ViewNotePage */]
>>>>>>> 8ce015ee7b9cee363a5e190c815694104032b057
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_note_service_note_service__["a" /* NoteService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

<<<<<<< HEAD
/***/ 328:
=======
/***/ 274:
>>>>>>> 8ce015ee7b9cee363a5e190c815694104032b057
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(230);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(197);
>>>>>>> 8ce015ee7b9cee363a5e190c815694104032b057
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
<<<<<<< HEAD
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Note-Application-master\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\Note-Application-master\src\app\app.html"*/
=======
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\roshu\Desktop\Note-Application\Note-Application\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\roshu\Desktop\Note-Application\Note-Application\src\app\app.html"*/
>>>>>>> 8ce015ee7b9cee363a5e190c815694104032b057
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

<<<<<<< HEAD
/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-note/add-note.module": [
		528,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 453;
module.exports = webpackAsyncContext;

/***/ })

},[233]);
=======
/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { HttpClient } from '@angular/common/http';


var NoteService = /** @class */ (function () {
    function NoteService(storage) {
        this.storage = storage;
        this.notes = [];
    }
    NoteService.prototype.saveNote = function (note) {
        note.createDate = Date.now();
        this.notes.push(note);
        this.storage.set('notes', this.notes);
    };
    NoteService.prototype.getAllNotes = function () {
        var _this = this;
        return this.storage.get('notes').then(function (notes) {
            _this.notes = notes == null ? [] : notes;
            return _this.notes.slice();
        });
    };
    NoteService.prototype.getNote = function (createDate) {
        var _this = this;
        return this.storage.get('notes').then(function (notes) {
            _this.note = notes.slice().find(function (r) { return r.createDate === createDate; });
            return _this.note;
        });
    };
    NoteService.prototype.deleteNote = function (createDate) {
        this.notes = this.notes.filter(function (note) {
            return note.createDate !== createDate;
        });
        this.storage.set('note', this.notes);
    };
    NoteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], NoteService);
    return NoteService;
}());

//# sourceMappingURL=note-service.js.map

/***/ })

},[198]);
>>>>>>> 8ce015ee7b9cee363a5e190c815694104032b057
//# sourceMappingURL=main.js.map