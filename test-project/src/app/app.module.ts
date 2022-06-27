import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderComponent } from './header/header.component';
import { GetStartedComponent } from './main-page/components/get-started/get-started.component';
import { ReviewsComponent } from './main-page/components/reviews/reviews.component';
import { FindTheCarComponent } from './main-page/components/find-the-car/find-the-car.component';
import { SellVehicleComponent } from './main-page/components/sell-vehicle/sell-vehicle.component';
import { HowDoesBeepWorkComponent } from './main-page/components/how-does-beep-work/how-does-beep-work.component';
import { BuyingVehicleWithBeepComponent } from './main-page/components/buying-vehicle-with-beep/buying-vehicle-with-beep.component';
import { OurMissionComponent } from './main-page/components/our-mission/our-mission.component';
import { BeepIsDifferentFromTheRestComponent } from './main-page/components/beep-is-different-from-the-rest/beep-is-different-from-the-rest.component';
import { StartAChatComponent } from './main-page/components/start-a-chat/start-a-chat.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    GetStartedComponent,
    ReviewsComponent,
    FindTheCarComponent,
    SellVehicleComponent,
    HowDoesBeepWorkComponent,
    BuyingVehicleWithBeepComponent,
    OurMissionComponent,
    BeepIsDifferentFromTheRestComponent,
    StartAChatComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
