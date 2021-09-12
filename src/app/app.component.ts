import { Component } from '@angular/core';
import { CountdownConfig } from 'ngx-countdown';
import { CONFIGS } from './CONFIGS';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  day_config: CountdownConfig = {
    stopTime: new Date(CONFIGS.END_COUNTDOWN_COUNTER).getTime(),
    format: "dd"
  };

  hours_config: CountdownConfig = {
    stopTime: new Date(CONFIGS.END_COUNTDOWN_COUNTER).getTime(),
    format: "HH"
  };

  minutes_config: CountdownConfig = {
    stopTime: new Date(CONFIGS.END_COUNTDOWN_COUNTER).getTime(),
    format: "mm"
  };

  handleEvent(params) {
    console.log(params);

  }

}
