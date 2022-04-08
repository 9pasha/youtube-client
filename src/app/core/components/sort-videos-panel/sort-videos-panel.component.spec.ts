import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortVideosPanelComponent } from './sort-videos-panel.component';

describe('SortVideosPanelComponent', () => {
  let component: SortVideosPanelComponent;
  let fixture: ComponentFixture<SortVideosPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SortVideosPanelComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortVideosPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
