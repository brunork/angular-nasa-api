import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../shared/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dataNasa: any;
  content: any;

  constructor(private api: HomeService) { }

  ngOnInit() {
    this.api.get('').subscribe((data: any[]) => {
      this.dataImageOfTheDay(data);
    }, err => {
      console.log(err);
    });
  }

  dataImageOfTheDay(data) {
    if (data.url !== '') {
      this.dataNasa = data;
      console.log('JSON from Houston: ', this.dataNasa);
      this.content = true;
    }
  }

}
