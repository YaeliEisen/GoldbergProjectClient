import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  hours: string='';
  minutes: string='';
  seconds: string='';

  ngOnInit() {
    setInterval(() => {
      const currentTime = new Date();
      const midnight = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate() + 1, 0, 0, 0);
      const remainingTime = midnight.getTime() - currentTime.getTime();

      this.hours = this.formatTime(Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      this.minutes = this.formatTime(Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60)));
      this.seconds = this.formatTime(Math.floor((remainingTime % (1000 * 60)) / 1000));
    }, 1000);
  }

  formatTime(time: number): string {
    return time < 10 ? `0${time}` : `${time}`;
  }
}