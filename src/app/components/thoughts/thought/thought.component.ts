import { Component, Input, OnInit } from '@angular/core';

import { Thought } from './../thought';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css'],
})
export class ThoughtComponent implements OnInit {
  @Input() thought: Thought = {
    id: 0,
    content: 'I Love Angular',
    authorship: 'Vê',
    model: 'modelo3',
  };

  constructor() {}

  ngOnInit(): void {}

  widthThought(): string {
    if (this.thought.content.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }
}
