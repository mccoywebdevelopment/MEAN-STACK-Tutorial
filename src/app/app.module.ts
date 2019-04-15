import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { FirstAssignmentComponent } from './first-assignment/first-assignment.component';
import { ProjectOneMainComponent } from './project-one/project-one-main/project-one-main.component';
import { HeaderComponent } from './project-one/header/header.component';
import { ShoppingListComponent } from './project-one/shopping-list/shopping-list.component';
import { RecipeBookComponent } from './project-one/recipe-book/recipe-book.component';
import { ShoppingListEditComponent } from './project-one/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './project-one/recipe-book/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './project-one/recipe-book/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './project-one/recipe-book/recipe-item/recipe-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    FirstAssignmentComponent,
    ProjectOneMainComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipeBookComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
