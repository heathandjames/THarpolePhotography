import { Component, ElementRef, ViewChild } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";
import { LoginService } from "app/Services/LoginService";
import { Router } from "@angular/router";

@Component({
    selector: 'thp-admin',
    styleUrls: ['./thp-admin.style.css'],
    templateUrl: './thp-admin.template.html'
})
export class THPAdminComponent {
    private imageData = "";
    private loadedImage;
    private filesList = [];
    private overallProgress = 0;
  
    @ViewChild('fileUpload') fileUpload:ElementRef;
    constructor(private router:Router, private af:AngularFireDatabase, private loginService:LoginService){
        this.af = af;
        this.loginService = loginService;
        this.router = router;
        

        this.loginService.getUser().subscribe((u) => {
            if(u == null){
                this.router.navigate(['/Admin']);
            }
        });
    }

    addFiles(){
        this.fileUpload.nativeElement.click()
    }

    generateFilesList(fileUploader){
        for(var i = 0; i < fileUploader.files.length; i++){
            var f = fileUploader.files[i];
            if(!this.filesList.includes(f)){
                f.progress = 0;
                f.thumb = null;
                f.loading = false;
                this.filesList.push(f);
                this.previewFile(f);
            }
        };
        
    }

    previewFile(file) {
        if(file){
            if(!file.thumb){
                var self = this;
                var reader  = new FileReader();

                reader.onloadend = function () {
                    self.thumbnail(reader.result, file.name, 250, file);
                }
                reader.readAsDataURL(file);
            }
        } else {
           return; 
        }
    }

    removeItem(fileItem){
        var index = this.filesList.indexOf(fileItem);
        if(index >= 0 ){
            this.filesList.splice(index, 1);
        }
    }
    thumbnail(base64, fileName, maxWidth, file) {
       var imageData = null;
        // Max size for thumbnail
        if(typeof(maxWidth) === 'undefined')  maxWidth = 300;

        // Create and initialize two canvas
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
        var canvasCopy = document.createElement("canvas");
        var copyContext = canvasCopy.getContext("2d");

        // Create original image
        var img = new Image();
        img.src = base64;
        img.onload = function(){
            // Determine new ratio based on max size
            var ratio = 1;
            if(img.width > maxWidth)
                ratio = maxWidth / img.width;

            // Draw original image in second canvas
            canvasCopy.width = img.width;
            canvasCopy.height = img.height;
            copyContext.drawImage(img, 0, 0);

            // Copy and resize second canvas to first canvas
            canvas.width = img.width * ratio;
            canvas.height = img.height * ratio;
            ctx.drawImage(canvasCopy, 0, 0, canvasCopy.width, canvasCopy.height, 0, 0, canvas.width, canvas.height);

            var imageData = canvas.toDataURL('image/jpeg');
            file.thumb = imageData;
        }
    }


    // loadImageFromFirebase(){
    //     this.loadedImage = document.querySelector('#loadedImg');
    //    this.af.object('photos/-KkRoAYx8pvEJOaG9ISe').subscribe((x) => {
    //          this.loadedImage.src = this.revertToBase64(x.src);
    //     });
    // }
    // sendToDatabase(fileName:string, thumbnail:boolean){
    //     var extract = fileName.split('.')[0] + (thumbnail ? '_thumnail' : '');
    //     if(this.imageData){
    //         var data = this.base64ToString(this.imageData);  
    //         console.log(data);
    //         this.af.list('photos/').push({src: data, date: new Date().getTime(), fileName: fileName});
    //         var thumbImg:any = document.querySelector('#thumbnail');
    //         thumbImg.src = this.revertToBase64(data);
    //     }
    // }

    // base64ToString(base){
    //     var testString = base.replace('data:image/jpeg;base64,/', "");
    //     return btoa(encodeURIComponent(testString).replace(/%([0-9A-F]{2})/g, function toSolidBytes(match, p1){ return String.fromCharCode(parseInt('0x' + p1)); }));
    // }

    // revertToBase64(str){
    //     return 'data:image/jpeg;base64,/' + decodeURIComponent(atob(str).split('').map(function(c) {
    //     return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    //         }).join(''));
    // }
}