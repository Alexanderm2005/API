import { Component, OnInit } from '@angular/core';
import { ChuckNorrisJokesComponent } from '../../components/chuck-norris-jokes/chuck-norris-jokes.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  imports: [ChuckNorrisJokesComponent]
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
