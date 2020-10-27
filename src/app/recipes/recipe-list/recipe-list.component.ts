import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes:Recipe[]=[
new Recipe('One','Test Recipe','https://images.pexels.com/photos/207983/pexels-photo-207983.jpeg?cs=srgb&dl=pexels-pixabay-207983.jpg&fm=jpg'),
new Recipe('Two','Test Recipe','https://images.pexels.com/photos/207983/pexels-photo-207983.jpeg?cs=srgb&dl=pexels-pixabay-207983.jpg&fm=jpg'),
new Recipe('Three','Test Recipe','https://images.pexels.com/photos/207983/pexels-photo-207983.jpeg?cs=srgb&dl=pexels-pixabay-207983.jpg&fm=jpg'),
new Recipe('Four','Test Recipe','https://images.pexels.com/photos/207983/pexels-photo-207983.jpeg?cs=srgb&dl=pexels-pixabay-207983.jpg&fm=jpg'),
]
  

  constructor() { 
    console.log(this.recipes)
  }

  ngOnInit(): void {
  }

}
