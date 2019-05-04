import { NgModule } from '@angular/core';
import { CityListComponent } from './city-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { CityDetailsComponenent  } from './city-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
    declarations: [
        CityListComponent,
        CityDetailsComponenent 
    ],
    imports: [
        BrowserModule,
        NgbModule.forRoot(),
    ],
    exports: [
        CityListComponent,
        CityDetailsComponenent 
    ]
})
export class CityModule {

}
