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

  delete(id: any) {
    this.MockThought = this.MockThought.filter((t: Thought) => t.id != id);
    return this.MockThought;
  }

  update(thought: Thought) {
    console.log('thought');
    console.log(thought);
    this.delete(thought.id);
    this.MockThought.push(thought);
    return this.MockThought;
  }

  finById(id: any) {
    const MockUpdate = this.MockThought.filter((t: Thought) => t.id == id);
    console.log(MockUpdate);
    return MockUpdate[0];
  }
}
