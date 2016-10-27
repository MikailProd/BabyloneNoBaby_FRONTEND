import { Injectable } from '@angular/core';

import { Baby } from '../model/hero';
import { BABIES } from '../mock/mockbabies';

@Injectable()
export class HeroService {
    getBabies() : Promise<Baby[]> {
        return Promise.resolve(BABIES);
    }
}