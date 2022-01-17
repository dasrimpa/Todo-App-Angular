import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCreate } from './todo-create.component';

describe('ProfileEditorComponent', () => {
  let component: TodoCreate;
  let fixture: ComponentFixture<TodoCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoCreate ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
