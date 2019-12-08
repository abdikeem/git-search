import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { UserService } from './user.service';
import { DateCountPipe } from './date-count-pipe'

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RepoComponent } from './repo/repo.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RepoComponent,
    DateCountPipe
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
