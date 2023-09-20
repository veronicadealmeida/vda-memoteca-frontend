import { Component, OnInit } from '@angular/core';

import { Thought } from './../thought';
import { ThoughtService } from './../thought.service';
import { MockThoughtService } from 'src/app/mock-thought.service';

@Component({
  selector: 'app-list-thought',
  templateUrl: './list-thought.component.html',
  styleUrls: ['./list-thought.component.css'],
})
export class ListThoughtComponent implements OnInit {
  listThoughts: Thought[] = [];

  constructor(
    private service: ThoughtService,
    private mock: MockThoughtService
  ) {}

  ngOnInit(): void {
    // this.service.list().subscribe((listThoughts) => {
    // const ThoughtMock = require('src/assets/db.json');
    this.listThoughts = this.mock.list();
  }
}
