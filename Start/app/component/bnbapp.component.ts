import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Baby } from '../model/baby';
import { HeroService } from '../service/baby.service';

@Component({
    selector: 'bnbapp',

    template:`
        <h1>{{title}}</h1>


        <h2>Babylone No Baby</h2>
        <ul class="babies">
            <li *ngFor="let baby of babies"
                [class.selected]="baby === selectedBaby"
                (click)="onSelect(baby)">

                <span class="badge">{{baby.id}}</span> {{baby.name}}
            </li>
        </ul>

        <babydetailview [baby]="selectedBaby"></babydetailview>

    `,
    styles: [`
        .selected {
          background-color: #CFD8DC !important;
          color: white;
        }
        .babies {
          margin: 0 0 2em 0;
          list-style-type: none;
          padding: 0;
          width: 15em;
        }

        .babies li {
          cursor: pointer;
          position: relative;
          left: 0;
          background-color: #EEE;
          margin: .5em;
          padding: .3em 0;
          height: 1.6em;
          border-radius: 4px;
        }

        .babies li.selected:hover {
          background-color: #BBD8DC !important;
          color: white;
        }

        .babies li:hover {
          color: #607D8B;
          background-color: #DDD;
          left: .1em;
        }
        .babies .text {
          position: relative;
          top: -3px;
        }
        .babies .badge {
          display: inline-block;
          font-size: small;
          color: white;
          padding: 0.8em 0.7em 0 0.7em;
          background-color: #607D8B;
          line-height: 1em;
          position: relative;
          left: -1px;
          top: -4px;
          height: 1.8em;
          margin-right: .8em;
          border-radius: 4px 0 0 4px;
        }
    `],

    providers: [BabyService]
})



export class AppComponent implements OnInit {

    /**  Public Variable  **/
    title = 'Babylone No Baby';
    babies: Baby[];
    selectedBaby: Baby;

    /**  Constructor  **/
    constructor(private babyService: BabyService) { }

    /**  Public Method  **/
    onSelect(baby: Baby): void {
        this.selectedBaby = baby;
    }

    /**  Fetch and Load heroes through HeroService  **/
    getBabies(): void {
        this.babyService.getBabies().then(babies => this.babies = babies);
    }

    /**  OnInit Interface  **/
    ngOnInit(): void {
        this.getBabies();
    }
}
