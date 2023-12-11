import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubProyectsComponent } from './github-proyects.component';

describe('GithubProyectsComponent', () => {
  let component: GithubProyectsComponent;
  let fixture: ComponentFixture<GithubProyectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GithubProyectsComponent]
    });
    fixture = TestBed.createComponent(GithubProyectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
