import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Thought } from './../thought';
import { ThoughtService } from './../thought.service';
import { MockThoughtService } from 'src/app/mock-thought.service';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css'],
})
export class CreateThoughtComponent implements OnInit {
  thought: Thought = {
    content: '',
    authorship: '',
    model: 'modelo1',
  };

  constructor(
    private service: ThoughtService,
    private router: Router,
    private mock: MockThoughtService
  ) {}

  ngOnInit(): void {}

  createThought() {
    if (this.thought.content && this.thought.authorship && this.thought.model) {
      this.mock.create(this.thought);
      this.router.navigate(['/listThought']);
    }
  }

  cancel() {
    this.router.navigate(['/listThought']);
  }
}
