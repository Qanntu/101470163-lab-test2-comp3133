import { Component } from '@angular/core';
import { HarrypotterService, Character } from '../harrypotter.service';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';


import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-characterfilter',
  standalone: true,
  imports: [
    CommonModule,
    MatSelectModule,
    MatCardModule,
    MatFormFieldModule,
    MatToolbarModule,
    RouterModule

  ],
  templateUrl: './characterfilter.component.html',
  styleUrls: ['./characterfilter.component.scss']
})
export class CharacterfilterComponent {
  houses: string[] = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];
  selectedHouse = '';
  characters: Character[] = [];

  constructor(private hpService: HarrypotterService) {}

  filterByHouse(): void {
    if (this.selectedHouse) {
      this.hpService.getCharactersByHouse(this.selectedHouse).subscribe((data) => {
        this.characters = data;
      });
    }
  }
}
