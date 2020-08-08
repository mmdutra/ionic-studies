import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  items: Item[] = [
    {icon: 'attach-outline', name: 'alert', link: '/alert'},
    {icon: 'airplane-outline', name: 'action-sheet', link: '/action-sheet'}
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Item {
  icon: string;
  name: string;
  link: string;
}
