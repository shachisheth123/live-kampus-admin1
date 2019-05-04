import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
        // CityListComponent,
        // CityDetailsComponenent 
        ProfileComponent
    ],
    imports: [
        BrowserModule
        // NgbModule.forRoot(),
    ],
    exports: [
        // CityListComponent,
        // CityDetailsComponenent 
        ProfileComponent
    ]

})
export class ProfileModule {



}