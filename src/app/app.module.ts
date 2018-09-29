import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AmexioWidgetModule} from 'amexio-ng-extensions';
import {ProductCatlogueComponent} from './product-catlog/product.catlog.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { APP_ROUTE } from './app.routes';

import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './product-details/product.details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCatlogueComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AmexioWidgetModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTE,{useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
