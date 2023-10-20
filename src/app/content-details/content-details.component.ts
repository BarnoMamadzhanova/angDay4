import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { content } from '../content';
import { IContent } from '../icontent';

@Component({
  selector: 'app-content-details',
  templateUrl: './content-details.component.html',
  styleUrls: ['./content-details.component.scss']
})
export class ContentDetailsComponent implements OnInit{
  content: IContent = {} as IContent;
  id: number = 0;

  constructor(private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['contentId'];
      this.content = content[this.id];
    });
    // console.log(this.id);
    
  }
}
