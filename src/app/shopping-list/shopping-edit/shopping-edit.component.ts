import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() addIngredient = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  addShoppingList(name:string, amount: number){
    this.addIngredient.emit(new Ingredient( name, amount ));
  }

}
