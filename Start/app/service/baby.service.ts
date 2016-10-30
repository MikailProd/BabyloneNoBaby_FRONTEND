import { Injectable } from '@angular/core';

import { Baby } from '../model/baby';
import { BABIES } from '../mock/mockbabies';

@Injectable()
export class BabyService {
    getBabies() : Promise<Baby[]> {
        return Promise.resolve(BABIES);
    }
}