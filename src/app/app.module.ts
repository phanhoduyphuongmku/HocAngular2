import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {PostService} from './post.service';
import {IpService} from './ip.service';


import { AppComponent } from './app.component';
import {WordComponent} from './Word/word.component';
import { BookComponent } from './book/book.component';
import { UserComponent } from './user/user.component';
import { StructComponent } from './struct/struct.component';
import { WordsComponent } from './words/words.component';
import { PersonComponent } from './person/person.component';
import { ListPersonComponent } from './list-person/list-person.component';
import {IpComponent} from './ip.component';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    BookComponent,
    UserComponent,
    StructComponent,
    WordsComponent,
    PersonComponent,
    ListPersonComponent,
    IpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PostService,IpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
