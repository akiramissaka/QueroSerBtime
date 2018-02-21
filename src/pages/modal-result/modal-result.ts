import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ModalResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
	selector: 'page-modal-result',
	templateUrl: 'modal-result.html',
})
export class ModalResultPage {

	public min: number;
	public max: number;
	public items: number;
	public average: number;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.min = this.navParams.get('min');
		this.max = this.navParams.get('max');
		this.items = this.navParams.get('items');
		this.average = this.navParams.get('average');
	}
	
	public closeModal(){
		this.navCtrl.pop();
	}

}
