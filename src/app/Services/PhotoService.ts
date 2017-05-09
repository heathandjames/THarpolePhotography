import {Injectable} from '@angular/core';
import {AngularFireModule} from 'angularfire2';

@Injectable()
export class PhotoService {
    constructor(private af:AngularFireModule){

    }
}