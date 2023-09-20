import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Thought } from './../thought';
import { ThoughtService } from './../thought.service';
import { MockThoughtService } from 'src/app/mock-thought.service';

@Component({
  selector: 'app-update-thought',
  templateUrl: './update-thought.component.html',
  styleUrls: ['./update-thought.component.css'],
})
export class UpdateThoughtComponent implements OnInit {
  thought: Thought = {
    id: 0,
    content: '',
    authorship: '',
    model: '',
  };

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute,
    private mock: MockThoughtService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.thought = this.mock.finById(id);
  }

  updateThought() {
    const id = this.route.snapshot.paramMap.get('id');
    this.mock.update(this.thought);
    this.router.navigate(['/listThought']);
  }

  cancel() {
    this.router.navigate(['/listThought']);
  }
}
