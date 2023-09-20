import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateThoughtComponent } from './components/thoughts/create-thought/create-thought.component';
import { UpdateThoughtComponent } from './components/thoughts/update-thought/update-thought.component';
import { DeleteThoughtComponent } from './components/thoughts/delete-thought/delete-thought.component';
import { ListThoughtComponent } from './components/thoughts/list-thought/list-thought.component';
import { ThoughtComponent } from './components/thoughts/thought/thought.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UpdateThoughtComponent,
    DeleteThoughtComponent,
    ListThoughtComponent,
    ThoughtComponent,
    CreateThoughtComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
