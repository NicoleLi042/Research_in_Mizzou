import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm, FormGroupDirective} from "@angular/forms"

declare var generateChart: any;
declare var updatePoint: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  programForm = this.fb.group({
    up: new FormControl(0),
    down: new FormControl(0),
    left: new FormControl(0),
    right: new FormControl(0),
    forward: new FormControl(0),
    backward: new FormControl(0)
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    generateChart();
  }

  onSubmit() {
    var up = this.programForm.get('up').value;
    var down = this.programForm.get('down').value;
    var left = this.programForm.get('left').value;
    var right = this.programForm.get('right').value;
    var forward = this.programForm.get('forward').value;
    var backward = this.programForm.get('backward').value;

    updatePoint(up,down,left,right,forward,backward);
    generateChart();

  }

}
