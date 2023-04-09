import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCodeBlockComponent } from './custom-code-block.component';

describe('CustomCodeBlockComponent', () => {
  let component: CustomCodeBlockComponent;
  let fixture: ComponentFixture<CustomCodeBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomCodeBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomCodeBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
