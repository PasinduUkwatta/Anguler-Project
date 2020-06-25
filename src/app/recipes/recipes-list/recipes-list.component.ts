import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes:Recipe[] =[
    new Recipe('A Test Recipe','This is a simply a test','https://live.staticflickr.com/5496/31479301445_cb53c0f4e9_b.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
