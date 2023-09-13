import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { Vivo1Component } from './vivo1/vivo1.component';
import { Vivo2Component } from './vivo2/vivo2.component';
import { Redmi1Component } from './redmi1/redmi1.component';
import { Redmi2Component } from './redmi2/redmi2.component';
import { Samsungtv1Component } from './samsungtv1/samsungtv1.component';
import { Samsungtv2Component } from './samsungtv2/samsungtv2.component';
import { Fastrack1Component } from './fastrack1/fastrack1.component';
import { Fastrack2Component } from './fastrack2/fastrack2.component';
import { Lgtv1Component } from './lgtv1/lgtv1.component';
import { Lgtv2Component } from './lgtv2/lgtv2.component';
import { PhilipstrimmerComponent } from './philipstrimmer/philipstrimmer.component';
import { NovatrimmerComponent } from './novatrimmer/novatrimmer.component';
import { AboutComponent } from './about/about.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavouriteComponent,
    LoginComponent,
    SearchComponent,
    CartComponent,
    ProductComponent,
    Vivo1Component,
    Vivo2Component,
    Redmi1Component,
    Redmi2Component,
    Samsungtv1Component,
    Samsungtv2Component,
    Fastrack1Component,
    Fastrack2Component,
    Lgtv1Component,
    Lgtv2Component,
    PhilipstrimmerComponent,
    NovatrimmerComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
