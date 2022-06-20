import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FomanticUIModule } from 'ngx-fomantic-ui';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizpageComponent } from './quizpage/quizpage.component';
import { AutoFocus } from './common/directives/auto-focus.directive';
import { QuestionsService } from './common/services/questions.service';
import { NgToastModule } from 'ng-angular-popup';

@NgModule({
  declarations: [
    AppComponent,
    QuizpageComponent,
    AutoFocus
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FomanticUIModule,
    FormsModule,
    ReactiveFormsModule,
    NgToastModule
  ],
  providers: [QuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
