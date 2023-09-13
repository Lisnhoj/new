import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
const routes: Routes = [{path:'home', component:HomeComponent},
{path:'favourite',component:FavouriteComponent},
{path:'login',component:LoginComponent},
{path:'cart',component:CartComponent},
{path:'product',component:ProductComponent},
{path:'about',component:AboutComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
