
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoginService } from './services/login/login.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PredictionComponent } from './prediction/prediction.component';
import { PremiumService } from './services/premium.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    ChatComponent,
    PredictionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    LoginService,
    PremiumService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
