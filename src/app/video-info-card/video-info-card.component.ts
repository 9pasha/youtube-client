import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'video-info-card',
  templateUrl: './video-info-card.component.html',
  styleUrls: ['./video-info-card.component.scss'],
})
export class VideoInfoCardComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() imageUrl: string | undefined;
  @Input() likeAmount: string | undefined;
  @Input() dislikeAmount: string | undefined;
  @Input() commentAmount: string | undefined;
  @Input() viewAmount: string | undefined;
  @Input() date: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }
}
