import { Component, OnInit } from '@angular/core';
import { content } from '../content';
import { IContent } from '../icontent';


@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit{
  content: IContent[] = content;
  content1: IContent[] = content;
  

  constructor() {}

  ngOnInit(): void {
    
  }

}
