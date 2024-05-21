import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopLight } from '../top-traffic-light/top-traffic-light.component';
import { LeftLight } from '../left-traffic-light/left-traffic-light.component';
import { RightLight } from '../right-traffic-light/right-traffic-light.component';
import { BottomLight } from '../bottom-traffic-light/bottom-traffic-light.component';
import { CdTimerComponent, CdTimerModule } from 'angular-cd-timer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: 
    [
      RouterOutlet,
      TopLight,
      LeftLight,
      RightLight,
      BottomLight,
      CdTimerModule
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{

  public btnsChange = false;
  public accBtn;
  public disAccBtn;
  
  public accidentTop = false;
  public accidentBottom = false;
  public accidentLeft = false;
  public accidentRight = false;

  public Accident(){

    this.accidentBottom = true;
    this.accidentLeft = true;
    this.accidentRight = true;
    this.accidentTop = true;

    this.accBtn = document.getElementById("acc-btn");
    this.accBtn.setAttribute("style", "display: none;");

    this.disAccBtn = document.getElementById("dis-acc-btn");
    this.disAccBtn.setAttribute("style", "display: block;");

    this.btnsChange = true;
    
  }

  public changeBtns(){

    this.accBtn = document.getElementById("acc-btn");
    this.accBtn.setAttribute("style", "display: block;");

    this.disAccBtn = document.getElementById("dis-acc-btn");
    this.disAccBtn.setAttribute("style", "display: none;");
    
    this.btnsChange = false;
  }


}
