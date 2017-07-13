import { Recipe } from '../recipe.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe( "A Test Recipe", "this is simply a test", "http://myrecipebox.co.nz/wp-content/uploads/2016/07/RecipeCarousel-Coconut-Curry-Soup.jpg"),
    new Recipe( "A Test Recipe", "this is simply a test", "http://myrecipebox.co.nz/wp-content/uploads/2016/07/RecipeCarousel-Coconut-Curry-Soup.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

}
