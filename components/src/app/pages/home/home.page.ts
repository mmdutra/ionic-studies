import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  items: Item[] = [
    {icon: 'attach-outline', name: 'alert', link: '/alert'},
    {icon: 'airplane-outline', name: 'action-sheet', link: '/action-sheet'},
    {icon: 'people-outline', name: 'cards', link: '/cards'},
    {icon: 'calendar-outline', name: 'date', link: '/dates'},
    {icon: 'git-commit-outline', name: 'ranges', link: '/ranges'},
    {icon: 'list-outline', name: 'grids', link: '/grids'}
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
