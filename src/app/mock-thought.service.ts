import { Injectable } from '@angular/core';
import { Thought } from './components/thoughts/thought';

@Injectable({
  providedIn: 'root',
})
export class MockThoughtService {
  private MockThought = require('src/assets/db.json');
  private id = 15;

  constructor() {}

  list() {
    return this.MockThought.sort(this.sortMock);
  }

  create(thought: Thought) {
    thought['id'] = this.id;
    return this.MockThought.push(thought);
    this.id++;
  }

  delete(id: any) {
    this.MockThought = this.MockThought.filter((t: Thought) => t.id != id);
    return this.MockThought.sort(this.sortMock);
  }

  update(thought: Thought) {
    this.delete(thought.id);
    this.MockThought.push(thought);
    return this.MockThought.sort(this.sortMock);
  }

  finById(id: any) {
    const MockUpdate = this.MockThought.filter((t: Thought) => t.id == id);
    return MockUpdate[0];
  }

  sortMock(a: any, b: any) {
    if (a.id < b.id) {
      return 1;
    }
    if (a.id > b.id) {
      return -1;
    }
    return 0;
  }
}
