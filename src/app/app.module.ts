import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { Comp1Component } from './comp1/comp1.component';
import { Comp11Component } from './comp1/comp11/comp11.component';
import { Comp12Component } from './comp1/comp11/comp12/comp12.component';
import { ServerComponent } from './stage2/assignment/server/server.component';
import { NgModelComponent } from './stage2/ng-model/ng-model.component';
import { ServersComponent } from './stage2/assignment/servers/servers.component';
import { WarningAlert } from './stage2/assignment/warning-alert/warning-alert.component';
import { SuccesAlert } from './stage2/assignment/succes-alert/succes-alert.component';
import { StringInterpolationComponent } from './stage2/string-interpolation/string-interpolation.component';
import { EventBindingComponent } from './stage2/event-binding/event-binding.component';
import { HwInputComponent } from './stage2/assignment/hw-input/hw-input.component';
import { NgIfComponent } from './stage2/ng-if/ng-if.component';
import { NgStyleComponent } from './stage2/ng-style/ng-style.component';


@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp11Component,
    Comp12Component,
    ServerComponent,
    NgModelComponent,
    ServersComponent,
    WarningAlert,
    SuccesAlert,
    StringInterpolationComponent,
    EventBindingComponent,
    HwInputComponent,
    NgIfComponent,
    NgStyleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
