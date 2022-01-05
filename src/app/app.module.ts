import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header';
import { NotFondComponentComponent } from './component/not-fond-component/not-fond-component.component';
import { CheckoutComponent } from './PAGES/checkout/checkout.component';
import { HomeComponent } from './PAGES/home/home';
import { HttpClientModule } from '@angular/common/http';
const routes:Routes=[
  {path:"home",component:HomeComponent},
  {path:"checkout",component:CheckoutComponent},
  {path:"**",component:NotFondComponentComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CheckoutComponent,
    NotFondComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
