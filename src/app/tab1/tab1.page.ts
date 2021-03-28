import { ɵDomAdapter } from '@angular/common';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  q1: string = '1';
  q2: string = '1';
  q3: string = '1';
  q4: string = '1';
  q5: string = '1';
  score: number = 0;
  classification: string = 'Scores ≤ 5 suggest an unfavorable cervix. Spontaneous delivery unlikely.';

  check1(event){
    this.q1 = event.target.value;
    this.calculate();
  }
  check2(event){
    this.q2 = event.target.value;
    this.calculate();
  }
  check3(event){
    this.q3 = event.target.value;
    this.calculate();
  }
  check4(event){
    this.q4 = event.target.value;
    this.calculate();
  }
  check5(event){
    this.q5 = event.target.value;
    this.calculate();
  }

  calculate(){
    this.score = -5;
    if (this.q1 == '1'){this.score=this.score+1}
    else if (this.q1 == '2'){this.score=this.score+2}
    else if (this.q1 == '3'){this.score=this.score+3}
    else if (this.q1 == '4'){this.score=this.score+4}
    if (this.q2 == '1'){this.score=this.score+1}
    else if (this.q2 == '2'){this.score=this.score+2}
    else if (this.q2 == '3'){this.score=this.score+3}
    else if (this.q2 == '4'){this.score=this.score+4}
    if (this.q3 == '1'){this.score=this.score+1}
    else if (this.q3 == '2'){this.score=this.score+2}
    else if (this.q3 == '3'){this.score=this.score+3}
    else if (this.q3 == '4'){this.score=this.score+4}
    if (this.q4 == '1'){this.score=this.score+1}
    else if (this.q4 == '2'){this.score=this.score+2}
    else if (this.q4 == '3'){this.score=this.score+3}
    if (this.q5 == '1'){this.score=this.score+1}
    else if (this.q5 == '2'){this.score=this.score+2}
    else if (this.q5 == '3'){this.score=this.score+3}
    if (this.score <= 5){
      this.classification = 'Scores ≤ 5 suggest an unfavorable cervix. Spontaneous delivery unlikely.'
    } else if (this.score <=7){
      this.classification = 'Scores 6-7 do not definitively predict whether or not induction will be successful.'
    } else if (this.score >=8){
      this.classification = 'Scores ≥ 8 suggest favorable for induction. Spontaneous vaginal delivery is more likely.'
    } 
  }
  constructor(public alertController: AlertController) {
  }

}
