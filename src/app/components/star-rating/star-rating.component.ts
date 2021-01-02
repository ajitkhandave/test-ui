import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {
  @Input() selectedValue:number;
  @Input() stars:number[];
  @Output() selectedStar = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  countStar(star) {
    this.selectedStar.emit(star);
  }

}
