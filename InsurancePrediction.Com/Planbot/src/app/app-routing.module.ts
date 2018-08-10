import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login.component';
import { PredictionComponent} from './prediction/prediction.component';

const routes: Routes = [
  { path: 'chat', component: ChatComponent, pathMatch: 'full'},
  { path: '', component: LoginComponent, pathMatch: 'full'},
  { path: 'login', component: LoginComponent, pathMatch: 'full'},
  { path: 'home', component: HomeComponent, pathMatch: 'full'},
  { path: 'prediction', component: PredictionComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
