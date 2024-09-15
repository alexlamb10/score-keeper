import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonButton, IonItem, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-new-game',
  standalone: true,
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss'],
  imports: [CommonModule, IonInput, IonItem, IonButton, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonInput, ReactiveFormsModule],
})
export class NewGameComponent implements OnInit {
  playerForm = new FormGroup({
    players: new FormArray([]),
  });

  get players() {
    return this.playerForm.get('players') as FormArray;
  }

  constructor() {}

  ngOnInit() {
    this.addPlayer(); // Initialize with one player
  }

  addPlayer() {
    this.players.push(new FormControl(''));
  }

  removePlayer(index: number) {
    if (this.players.length > 1) {
      this.players.removeAt(index);
    }
  }

  submit() {
    console.log(this.playerForm.value);
  }
}
