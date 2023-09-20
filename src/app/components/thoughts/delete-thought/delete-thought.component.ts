import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ThoughtService } from './../thought.service';
import { Thought } from './../thought';
import { MockThoughtService } from 'src/app/mock-thought.service';

@Component({
  selector: 'app-delete-thought',
  templateUrl: './delete-thought.component.html',
  styleUrls: ['./delete-thought.component.css'],
})
export class DeleteThoughtComponent implements OnInit {
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
    this.service.getById(parseInt(id!)).subscribe((thought) => {
      this.thought = thought;
    });
  }

  deletethought() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.mock.delete(id);
    this.router.navigate(['/listThought']);
  }

  cancel() {
    this.router.navigate(['/listThought']);
  }
}
