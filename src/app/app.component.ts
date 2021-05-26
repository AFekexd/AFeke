import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { TitleService } from './services/routing/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private titleService: TitleService, private store: AngularFirestore) {
    this.titleService.refreshTitle();
  }
}
