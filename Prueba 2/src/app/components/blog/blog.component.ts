import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  info = [
    {
      image: 'https://www.banderasvdk.com/blog/wp-content/uploads/Bandera-Suiza.jpg',
      title: 'a',
      author: 'a',
      category: 'a',
      date: '2022-2',
      avatar: 'https://i.pinimg.com/originals/f0/05/8e/f0058e56c933aea842f923e7f4d294d2.jpg'
    }, {
      image: 'https://www.banderasvdk.com/blog/wp-content/uploads/Bandera-Suiza.jpg',
      title: 'b',
      author: 'b',
      category: 'b',
      date: '2022-2',
      avatar: 'https://i.pinimg.com/originals/f0/05/8e/f0058e56c933aea842f923e7f4d294d2.jpg'
    }, {
      image: 'https://www.banderasvdk.com/blog/wp-content/uploads/Bandera-Suiza.jpg',
      title: 'c',
      author: 'c',
      category: 'c',
      date: '2022-2',
      avatar: 'https://i.pinimg.com/originals/f0/05/8e/f0058e56c933aea842f923e7f4d294d2.jpg'
    }, {
      image: 'https://www.banderasvdk.com/blog/wp-content/uploads/Bandera-Suiza.jpg',
      title: 'd',
      author: 'd',
      category: 'd',
      date: '2022-2',
      avatar: 'https://i.pinimg.com/originals/f0/05/8e/f0058e56c933aea842f923e7f4d294d2.jpg'
    },{
      image: 'https://www.banderasvdk.com/blog/wp-content/uploads/Bandera-Suiza.jpg',
      title: 'we',
      author: 'e',
      category: 'e',
      date: '2022-2',
      avatar: 'https://i.pinimg.com/originals/f0/05/8e/f0058e56c933aea842f923e7f4d294d2.jpg'
    },{
      image: 'https://www.banderasvdk.com/blog/wp-content/uploads/Bandera-Suiza.jpg',
      title: 'e',
      author: 'f',
      category: 'e',
      date: '2022-2',
      avatar: 'https://i.pinimg.com/originals/f0/05/8e/f0058e56c933aea842f923e7f4d294d2.jpg'
    },{
      image: 'https://www.banderasvdk.com/blog/wp-content/uploads/Bandera-Suiza.jpg',
      title: 'e',
      author: 'f',
      category: 'e',
      date: '2022-2',
      avatar: 'https://i.pinimg.com/originals/f0/05/8e/f0058e56c933aea842f923e7f4d294d2.jpg'
    },{
      image: 'https://www.banderasvdk.com/blog/wp-content/uploads/Bandera-Suiza.jpg',
      title: 'e',
      author: 'f',
      category: 'e',
      date: '2022-2',
      avatar: 'https://i.pinimg.com/originals/f0/05/8e/f0058e56c933aea842f923e7f4d294d2.jpg'
    }
  ]

  @Input() tema = "";

  constructor() { }

  ngOnInit(): void {
  }

}
