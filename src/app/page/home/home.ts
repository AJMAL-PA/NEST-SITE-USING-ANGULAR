import { Component } from '@angular/core';
import { Corosil } from '../../corosil/corosil';
import { Cards } from '../../cards/cards';



@Component({
  selector: 'app-home',
  imports: [Corosil,Cards,],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
