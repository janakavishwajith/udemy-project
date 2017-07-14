import { Recipe } from '../recipe.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() showRecipeSelection = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe( "A Test Recipe", "this is simply a test", "http://myrecipebox.co.nz/wp-content/uploads/2016/07/RecipeCarousel-Coconut-Curry-Soup.jpg"),
    new Recipe( "Second Test Recipe", "this is simply a test", "http://myrecipebox.co.nz/wp-content/uploads/2016/07/RecipeCarousel-Coconut-Curry-Soup.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.showRecipeSelection.emit( recipe );
  }
}
