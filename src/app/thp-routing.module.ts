import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { THPHomeComponent } from "app/Home/thp-home.component";
import { THPAboutComponent } from "app/About/thp-about.component";
import { THPGalleryComponent } from "app/Gallery/thp-gallery.component";
import { THPContactComponent } from "app/Contact/thp-contact.component";
import { THPAdminComponent } from "app/Admin/thp-admin.component";

const routes: Routes = [
    {path: 'Home', component: THPHomeComponent},
    {path: 'About', component: THPAboutComponent},
    {path: 'Gallery', component: THPGalleryComponent},
    {path: 'Contact', component: THPContactComponent},
    {path: 'Admin', component: THPAdminComponent},
    {path: '', redirectTo: '/Home', pathMatch: 'full'}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class THPRouter {}
