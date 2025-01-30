import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-top-creators',
  imports: [NgStyle],
  templateUrl: './top-creators.component.html',
  styleUrl: './top-creators.component.css',
})
export class TopCreatorsComponent {
  creators = [
    {
      name: 'Ivan Ivanov',
      img: 'https://braverplayers.org/wp-content/uploads/2022/09/blank-pfp-300x300.png',
    },
    {
      name: 'Vasilena Petrova',
      img: 'https://braverplayers.org/wp-content/uploads/2022/09/blank-pfp-300x300.png',
    },
    {
      name: 'Ivaila Kukusheva',
      img: 'https://braverplayers.org/wp-content/uploads/2022/09/blank-pfp-300x300.png',
    },
    {
      name: 'Stoilka Ivanov',
      img: 'https://braverplayers.org/wp-content/uploads/2022/09/blank-pfp-300x300.png',
    },
    {
      name: 'Ivan Terziev',
      img: 'https://braverplayers.org/wp-content/uploads/2022/09/blank-pfp-300x300.png',
    },
  ];
}
