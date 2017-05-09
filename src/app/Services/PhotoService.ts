import {Injectable} from '@angular/core';
import {AngularFire} from 'angularfire2';

@Injectable()
export class PhotoService {
    constructor(private af:AngularFire){

    }
}