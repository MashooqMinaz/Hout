import { Component } from '@angular/core';

@Component({
  selector: 'app-order-tracking',
  templateUrl: './order-tracking.component.html',
  styleUrls: ['./order-tracking.component.scss']
})
export class OrderTrackingComponent {

  ordered:boolean = true
  shipped:boolean = true
  delivered:boolean = false

  price="$36.00"
}
