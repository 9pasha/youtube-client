import {
  AfterViewInit, Directive, ElementRef, Input,
} from '@angular/core';

@Directive({
  selector: '[highlightBorderWithDate]',
})
export class HighlightBorderWithDateDirective implements AfterViewInit {
  @Input() date: string | undefined;

  private blueColor: string = '#2f80ec';

  private redColor: string = '#eb5757';

  private greenColor: string = '#27ae61';

  private dateNowTimeStamp: number = new Date().getTime();

  private daysInMonth: number = 30;

  private hoursInDay: number = 24;

  private minutesInHour: number = 60;

  private secondsInMinute: number = 60;

  private millisecondsInSecond: number = 1000;

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    if (this.isDateLessThanSevenDays()) {
      this.el.nativeElement.style.borderBottom = this.getBorderStyles(this.blueColor);
    } else if (this.isDateLessThanMonth()) {
      this.el.nativeElement.style.borderBottom = this.getBorderStyles(this.greenColor);
    } else if (this.isDateMoreThanSixMonth()) {
      this.el.nativeElement.style.borderBottom = this.getBorderStyles(this.redColor);
    }
  }

  getDateTimeStamp(date: string) {
    return new Date(date as string).getTime();
  }

  getBorderStyles(color: string) {
    return `5px solid ${color}`;
  }

  isDateLessThanSevenDays() {
    const daysInWeek = 7;
    const weekTimeStamp = daysInWeek * this.hoursInDay
      * this.minutesInHour * this.secondsInMinute * this.millisecondsInSecond;

    const difDates = (this.dateNowTimeStamp - this.getDateTimeStamp(this.date as string));

    return difDates < weekTimeStamp;
  }

  isDateLessThanMonth() {
    const monthTimeStamp = this.daysInMonth * this.hoursInDay
      * this.minutesInHour * this.secondsInMinute * this.millisecondsInSecond;

    const difDates = (this.dateNowTimeStamp - this.getDateTimeStamp(this.date as string));

    return difDates < monthTimeStamp;
  }

  isDateMoreThanSixMonth() {
    const months = 6;
    const sixMonthTimeStamp = months * this.daysInMonth * this.hoursInDay
      * this.minutesInHour * this.secondsInMinute * this.millisecondsInSecond;

    const difDates = (this.dateNowTimeStamp - this.getDateTimeStamp(this.date as string));

    return difDates > sixMonthTimeStamp;
  }
}
