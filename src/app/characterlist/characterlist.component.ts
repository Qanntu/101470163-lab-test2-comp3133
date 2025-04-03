import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { HarrypotterService, Character } from '../harrypotter.service';

@Component({
  selector: 'app-characterlist',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    RouterModule
  ],
  templateUrl: './characterlist.component.html',
  styleUrls: ['./characterlist.component.scss']
})
export class CharacterlistComponent implements OnInit {
  characters: Character[] = [];

  constructor(private hpService: HarrypotterService) {}

  ngOnInit(): void {
    this.hpService.getAllCharacters().subscribe((data) => {
      this.characters = data;
    });
  }
}
