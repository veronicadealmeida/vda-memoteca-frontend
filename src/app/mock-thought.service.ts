import { Injectable } from '@angular/core';
import { Thought } from './components/thoughts/thought';

@Injectable({
  providedIn: 'root',
})
export class MockThoughtService {
  private MockThought = require('src/assets/db.json');

  constructor() {}

  list() {
    return this.MockThought;
  }

  create(thought: Thought) {
    return this.MockThought.push(thought);
  }

  delete(thought: Thought) {
    return (this.MockThought = this.MockThought.filter(
      (t: Thought) => t.id != thought.id
    ));
  }

  update(thought: Thought) {
    this.delete(thought);
    return this.MockThought.push(thought);
  }
}
