import { RecipeService } from './../receipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() selectedRecipe: Recipe;

  constructor(private reciepService: RecipeService) { }

  ngOnInit() {
  }

  onaAddToShoppingList(){
    this.reciepService.addIngredientsToSL(this.selectedRecipe.ingredients);
  }
}
