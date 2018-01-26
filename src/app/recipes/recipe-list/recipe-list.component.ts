import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

recipes: Recipe[] = [
  new Recipe('TestRecipe', 'TestDescription', 'http://www.cookuk.co.uk/images/children_spaghetti_face/children-recipe-pic1-smaller.gif'),
  new Recipe('TestRecipe', 'TestDescription', 'http://www.cookuk.co.uk/images/children_spaghetti_face/children-recipe-pic1-smaller.gif')
];

  constructor() { }

  ngOnInit() {
  }

}
