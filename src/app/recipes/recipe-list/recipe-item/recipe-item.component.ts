import { RecipeService } from './../../receipe.service';
import { Recipe } from './../../recipe.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe:Recipe;

  constructor( private recipeService : RecipeService ) { 
    
   }

  ngOnInit() {
      
  }

  selectRecipe(){
    this.recipeService.recipeSelected.emit(this.recipe);    
  }

}
