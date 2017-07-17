import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService{

    constructor(private shoppingListService: ShoppingListService){}

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe( "A Test Recipe", 
        "this is simply a test", 
        "http://myrecipebox.co.nz/wp-content/uploads/2016/07/RecipeCarousel-Coconut-Curry-Soup.jpg",
        [
            new Ingredient("meat", 1),
            new Ingredient("fish", 2)
        ]),
    new Recipe( "Second Test Recipe", 
        "this is simply a test", 
        "http://myrecipebox.co.nz/wp-content/uploads/2016/07/RecipeCarousel-Coconut-Curry-Soup.jpg",
        [
            new Ingredient("Vegetables", 22),
            new Ingredient("Fruits", 4)
        ])
  ];


  getRecipes(){
      return this.recipes.slice(); // return new array, instead of getting the same array
  }

  addIngredientsToSL(ingredients: Ingredient[]){
     this.shoppingListService.addIngredientsToShoppingList(ingredients);
  }

}