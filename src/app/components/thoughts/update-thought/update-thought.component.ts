import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Thought } from './../thought';
import { ThoughtService } from './../thought.service';

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
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getById(parseInt(id!)).subscribe((thought) => {
      this.thought = thought;
    });
  }

  updateThought() {
    this.service.update(this.thought).subscribe(() => {
      this.router.navigate(['/listThought']);
    });
  }

  cancel() {
    this.router.navigate(['/listThought']);
  }
}
