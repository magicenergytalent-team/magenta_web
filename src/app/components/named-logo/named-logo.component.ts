import { Component, OnInit } from '@angular/core';
import { Colors } from 'src/app/shared/Colors';

@Component({
  selector: 'app-named-logo',
  // templateUrl: './named-logo.component.html',
  template: `
    <span class= "d-flex align-items-center justify-content-start" >
      <div class="p-1">
        <app-logo-md [color]="Colors.magenta" width = "1.3rem" height="1.6rem" > </app-logo-md>
      </div>
      <div class="p-1"> MAGENTA </div>
    </span>`,
  styleUrls: ['./named-logo.component.scss']
})
export class NamedLogoComponent implements OnInit {

  constructor() { }


  public readonly Colors = Colors;
  ngOnInit(): void {
  }

}
