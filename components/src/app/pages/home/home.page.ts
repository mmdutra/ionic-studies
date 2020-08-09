import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import MenuItem from 'src/app/interfaces/MenuItem';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  items: Observable<MenuItem[]>;

  constructor(private service: DataService) { }

  ngOnInit() {
    this.items = this.service.getMenu();
  }

}

interface Item {
  icon: string;
  name: string;
  link: string;
}
