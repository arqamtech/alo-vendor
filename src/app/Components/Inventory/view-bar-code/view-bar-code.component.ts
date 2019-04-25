import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-bar-code',
  templateUrl: './view-bar-code.component.html',
  styleUrls: ['./view-bar-code.component.scss'],
})
export class ViewBarCodeComponent implements OnInit {

  prodId;

  constructor(
    private router: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.prodId = params['id'];
    });
    console.log(this.prodId);
  }

}
