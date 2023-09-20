import { Component, OnInit } from '@angular/core';

import { Thought } from './../thought';
import { ThoughtService } from './../thought.service';

@Component({
  selector: 'app-list-thought',
  templateUrl: './list-thought.component.html',
  styleUrls: ['./list-thought.component.css'],
})
export class ListThoughtComponent implements OnInit {
  listThoughts: Thought[] = [];

  constructor(private service: ThoughtService) {}

  ngOnInit(): void {
    this.service.list().subscribe((listThoughts) => {
      this.listThoughts = listThoughts;
    });
  }
}
