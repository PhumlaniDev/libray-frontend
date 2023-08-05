import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './core/components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './core/components/login/login.component';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './core/components/register/register.component';
import { BookFormModalComponent } from './core/components/book-form-modal/book-form-modal.component';
import { NavbarComponent } from './core/shared/navbar/navbar.component';
import { FooterComponent } from './core/shared/footer/footer.component';
import { AppLayoutComponent } from './core/layout/app-layout/app-layout.component';
import { CardComponent } from './core/components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BookFormModalComponent,
    NavbarComponent,
    FooterComponent,
    AppLayoutComponent,
    CardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
