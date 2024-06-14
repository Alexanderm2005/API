import { Component, OnInit } from '@angular/core';
import { ChuckNorrisService } from '../../services/chuck-norris.service';

@Component({
  standalone: true,
  selector: 'app-chuck-norris-jokes',
  templateUrl: './chuck-norris-jokes.component.html',
  styleUrls: ['./chuck-norris-jokes.component.css']
})
export class ChuckNorrisJokesComponent implements OnInit {

  joke: string = '';

  constructor(private chuckNorrisService: ChuckNorrisService) { }

  ngOnInit(): void {
    this.getJoke();
  }

  getJoke(): void {
    this.chuckNorrisService.getRandomJoke().subscribe(data => {
      this.joke = data.value;
    });
  }

  refreshJoke(): void {
    this.getJoke();
  }
}
