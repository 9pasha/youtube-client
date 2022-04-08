import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoInfoCardsListComponent } from './video-info-cards-list.component';

describe('VideoInfoCardsListComponent', () => {
  let component: VideoInfoCardsListComponent;
  let fixture: ComponentFixture<VideoInfoCardsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideoInfoCardsListComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoInfoCardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
