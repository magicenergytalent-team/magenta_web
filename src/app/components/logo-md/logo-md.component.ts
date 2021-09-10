import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo-md',
  templateUrl: './logo-md.component.html',
  styleUrls: ['./logo-md.component.scss']
})
export class LogoMdComponent implements OnInit {

  @Input() color: string;
  @Input() width: number;
  @Input() height: number;

  constructor() { }

  ngOnInit(): void {
  }

}
