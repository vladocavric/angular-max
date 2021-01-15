import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('beckaka', 'mesina', 'https://www.recepti.com/images/stories/kuvar/glavna-jela/00447-becka-snicla.jpg'),
    new Recipe('beckaka', 'mesina', 'https://www.recepti.com/images/stories/kuvar/glavna-jela/00447-becka-snicla.jpg')
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
