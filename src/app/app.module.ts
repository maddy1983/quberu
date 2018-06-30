import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';
import { PoAddItemsComponent } from './po-add-items/po-add-items.component';
import { PoAddItemsFormComponent } from './po-add-items/po-add-items-form/po-add-items-form.component';
import { PoActionService } from './shared/poactions.services';

// angular material
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    PoAddItemsComponent,
    PoAddItemsFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    DataTablesModule,
    MatDialogModule,
  ],
  providers: [
    PoActionService,
    // {
    //   provide: DIALOG_DATA, useValue: {}
    // }
    {
      provide: MAT_DIALOG_DATA,
      useValue: {} // Add any data you wish to test if it is passed/used correctly
    },
    {
      provide: MatDialogRef,
      useValue: {} // Add any data you wish to test if it is passed/used correctly
    }
  ],
  entryComponents: [
    PoAddItemsFormComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
