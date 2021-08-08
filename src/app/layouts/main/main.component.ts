import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  toolbarLinks = [
    { title: 'Tasks', link: '/app/tasks' },
    { title: 'Users', link: '/app/users' },
  ];
  constructor() {}

  ngOnInit() {}
}
