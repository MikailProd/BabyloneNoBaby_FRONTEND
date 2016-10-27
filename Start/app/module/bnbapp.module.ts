import {NgModule}       from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {FormsModule}    from '@angular/forms';

import {BnbAppComponent}   from '../component/bnbapp.component';
import {BabyDetaiViewComponent } from '../component/view/babydetail.view.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],

    declarations: [
        BnbAppComponent,
        BabyDetaiViewComponent
    ],

    bootstrap: [ BnbAppComponent ]
    })


export class BnbAppModule { }