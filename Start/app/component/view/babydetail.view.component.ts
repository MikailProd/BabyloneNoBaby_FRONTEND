import { Component, Input } from '@angular/core';

import { Hero } from '../../model/baby';


@Component({
    selector: 'babydetailview',

    template: `
        <div *ngIf="baby">
            <h2>{{baby.name}} details!</h2>
            <div><label>id: </label>{{baby.id}}</div>
            <div>
                <label>name: </label>
                <input [(ngModel)]="baby.name" placeholder="name"/>
            </div>
        </div>
    `
})


export class BabyDetaiViewComponent {
    @Input()
    baby: Baby;
}