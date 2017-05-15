import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingamabodyComponent } from './thingamabody.component';

describe('ThingamabodyComponent', () => {
  let component: ThingamabodyComponent;
  let fixture: ComponentFixture<ThingamabodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThingamabodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingamabodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
