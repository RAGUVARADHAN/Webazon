import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './signup/signup.component';
import { ShopComponent } from './home/shop/shop.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { BuyComponent } from './buy/buy.component';
import { CartbuyComponent } from './cart/cartbuy/cartbuy.component';

const routes:Routes=[
  {path:"",redirectTo:'Home',pathMatch:'full'},
  {path:"Home",component:HomeComponent},
  {path:"Contact",component:ContactComponent},
  {path:"About",component:AboutComponent},
  {path:"SignUp",component:SignupComponent},
  {path:"Login",component:LoginComponent},
  {path:"cart/:id",component:CartComponent},
  {path:"cart",component:CartComponent},
  {path:"buy",component:CartbuyComponent},
  {path:"Home/shop/:product/:id",component:ShopComponent},
  {path:"Buy",component:BuyComponent},
  {path:"**",component:ErrorComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    SignupComponent,
    ShopComponent,
    FooterComponent,
    ErrorComponent,
    LoginComponent,
    CartComponent,
    BuyComponent,
    CartbuyComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
