import { AppComponent } from './app.component';
import { AppLayoutComponent } from './core/layout/app-layout/app-layout.component';
import { AppRoutingModule } from './app-routing.module';
import { BookFormModalComponent } from './core/components/book-form-modal/book-form-modal.component';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './core/components/card/card.component';
import { FooterComponent } from './core/shared/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HeroComponent } from './core/components/hero/hero.component';
import { HomeComponent } from './core/components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './core/components/login/login.component';
import { NavbarComponent } from './core/shared/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './core/components/register/register.component';
import { CategoryComponent } from './core/components/category/category.component';
import { AdminComponent } from './core/components/admin/admin.component';

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
    HeroComponent,
    CategoryComponent,
    AdminComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
