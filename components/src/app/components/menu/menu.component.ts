import { DataService } from './../../services/data.service';
import MenuItem from './../../interfaces/MenuItem';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  items: Observable<MenuItem[]>;

  constructor(private service: DataService) { }

  ngOnInit() {
    this.items = this.service.getMenu();
  }

}
