import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from "@angular/core";
import { CdTimerModule } from "angular-cd-timer";

@Component({
    selector: 'bottom-traffic-light-root',
    standalone: true,
    imports: [CdTimerModule],
    templateUrl: './bottom-traffic-light.component.html',
    styleUrl: './bottom-traffic-light.component.css'
  })

export class BottomLight implements OnChanges{

  @Input() public accident = false;

  @Output() public accidentChange = new EventEmitter<boolean>();

  public green;
  public yellow;
  public red;

  public yellowGreenTimer = true;
  public yellowRedTimer = false;
  public greenTimer = false;
  public redTimer = false;

  public btn;
  public btnDis;

  public flash = true;

  public message;

  public changeAccident(){

    this.turnGreen();
    this.accident = false;
    this.accidentChange.emit(this.accident);

  }

  public turnYellow(){

    this.resetColors();
    this.yellow = document.getElementById("bottom-yellow");
    this.yellow.setAttribute("style", "background-color: yellow;");

    if(this.accident) 
      this.showDisBtn();
    else 
      this.hideDisBtn();

  }

  public turnGreen(){

    this.resetColors();
    this.green = document.getElementById("bottom-green");
    this.green?.setAttribute("style", "background-color: green;");

  }

  public turnRed(){
    
    this.resetColors();

    this.red = document.getElementById("bottom-red");
    this.red.setAttribute("style", "background-color: red;");

    this.showDisBtn();

  }

  public flashYellow(){

    if(this.flash)
      {
        this.turnYellow();
        this.flash = false;
      }
    else
      {
        this.resetColors();
        this.flash = true;
      }

  }

  public greenGo(){

    this.yellowGreenTimer = false;
    this.greenTimer = true;
 
    this.hideDisBtn();

  }

  public greenYellowGo(){

    this.yellowRedTimer = true;
    this.greenTimer = false;

  }

  public redGo(){

    this.yellowRedTimer = false;
    this.redTimer = true;

  }

  public redYellowGo(){

    this.redTimer = false;
    this.yellowGreenTimer = true;

  }

  public lookForAccident(){

    if(this.accident) this.resetColorTimers();

  }

  public cross(){

    if(this.yellowGreenTimer || this.yellowRedTimer){
      alert("Неправилно пресичане!");
    }

  }

  private resetColors(){

    this.green = document.getElementById("bottom-green");
    this.green?.setAttribute("style", "background-color: rgb(218, 255, 218);");
    this.yellow = document.getElementById("bottom-yellow");
    this.yellow.setAttribute("style", "background-color: rgb(255, 255, 213);");
    this.red = document.getElementById("bottom-red");
    this.red.setAttribute("style", "background-color: rgb(255, 215, 215);");

  }

  private resetColorTimers(){

    this.yellowGreenTimer = false;
    this.yellowRedTimer = false;
    this.redTimer = false;
    this.greenTimer = false;

  }

  private showDisBtn(){

    this.btn = document.getElementById("bottom-btn");
    this.btn.setAttribute("style", "display: none;");
    this.btnDis = document.getElementById("bottom-btn-dis");
    this.btnDis.setAttribute("style", "display: block;");

  }

  private hideDisBtn(){

    this.btn = document.getElementById("bottom-btn");
    this.btn.setAttribute("style", "display: block;");
    this.btnDis = document.getElementById("bottom-btn-dis");
    this.btnDis.setAttribute("style", "display: none;");

  }

  ngOnChanges(changes: SimpleChanges): void { }
    
}