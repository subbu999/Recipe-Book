import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe('Chilly Chicken','Chilli Chicken with guntur mirchi','http://www.tasty-indian-recipes.com/wp-content/uploads/2015/03/Chilli-Chicken-Recipe-620x400.jpg'),
    new Recipe('Mutton Curry','Boneless ang juicy mutton curry','https://files.hungryforever.com/wp-content/uploads/2017/06/14115253/mutton-gravy-recipes.png')
    ];
  constructor() {
    console.log(this.recipes);
   }

  ngOnInit() {
  }

}
