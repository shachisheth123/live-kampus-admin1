import { NgModule } from '@angular/core';
import { EventList } from './event-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { EventDetailsComponents } from './event-details.component';
//import { CityDetailsComponent } from './city-details.component';
//import { NgbdTabsetPills } from './event-list.component';

@NgModule({
    declarations: [
        EventList,
        EventDetailsComponents,
       // NgbdTabsetPills
       
       // CityDetailsComponent
    ],
    imports: [
        BrowserModule
    ],

    exports: [
       EventList,
       EventDetailsComponents,
      // NgbdTabsetPills
        //CityDetailsComponent
    ]
   
})
export class EventModule {

}
