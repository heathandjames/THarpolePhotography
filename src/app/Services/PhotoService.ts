import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class PhotoService {
    constructor(private af:AngularFireDatabase){
        this.af = af;
    }

    getPhotoByID(ID:Number) {
        return this.af.object('/photo/'+ ID);
    }

    getPhotos(){
        return this.af.list('/photo');
    }
}