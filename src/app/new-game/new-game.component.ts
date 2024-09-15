import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonButton, IonItem, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-new-game',
  standalone: true,
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss'],
  imports: [IonInput, IonItem, IonButton, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonInput],
})

export class NewGameComponent  implements OnInit {

  private activatedRoute = inject(ActivatedRoute);
  constructor() { }

  ngOnInit() {
    console.log('new-game')
  }

  addPlayer() {
    console.log('add player')
  }

}
