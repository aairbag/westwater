import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingamabobberComponent } from './thingamabobber.component';

describe('ThingamabobberComponent', () => {
  let component: ThingamabobberComponent;
  let fixture: ComponentFixture<ThingamabobberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThingamabobberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingamabobberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
