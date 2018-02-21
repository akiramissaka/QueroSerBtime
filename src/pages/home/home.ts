import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { CalculateProvider } from './../../providers/calculate/calculate';
import { ModalResultPage } from './../modal-result/modal-result';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html',
	providers: [CalculateProvider]
})
export class HomePage{
	@ViewChild('numInput') numInput;
	public num: number;
	public arrNumbers: number[] = [];

	constructor(private navCtrl: NavController, private calcProvider: CalculateProvider, private modalCtrl: ModalController,
	private iab: InAppBrowser) {
		this.arrNumbers = this.calcProvider.getArrNumbers();
	}


	public addNumber(){
		this.calcProvider.addNumber(Math.floor(this.num));
		this.num = null;
		this.numInput.setFocus();
	}

	public calculate(){
		if(this.arrNumbers.length > 0){
			let data = {
				min: this.calcProvider.getMin(),
				max: this.calcProvider.getMax(),
				items: this.calcProvider.getLength(),
				average: this.calcProvider.getAverage(),
			}
	
			this.showResult(data);
		}
		
	}

	public openLink(e: Event, link: string){
		e.preventDefault();
		const browser = this.iab.create(link, '_blank');
	}

	public showResult(data){
		let modalResult = this.modalCtrl.create(ModalResultPage, data);
		modalResult.present();
		console.log('modal')
	}

}
