//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
	Generated class for the CalculateProvider provider.

	See https://angular.io/guide/dependency-injection for more info on providers
	and Angular DI.
*/
@Injectable()
export class CalculateProvider {

	private arrNumbers: number[] = [];

	constructor() {
		console.log('Hello CalculateProvider Provider');
	}

	public getArrNumbers(): number[]{
		return this.arrNumbers;
	}

	public addNumber(num: number){
		if(num){
			this.arrNumbers.push(num);
			console.log(this.arrNumbers)
		}
		
	}

	public getMin(): number{
		let min: number = this.arrNumbers.reduce((a, b) => {return Math.min(a, b)});
		return min;
	}

	public getMax(): number{
		let max: number = this.arrNumbers.reduce((a, b) => {return Math.max(a, b)});
		return max;
	}

	public getLength(): number{
		return this.arrNumbers.length;
	}

	public getAverage(): number{
		if(this.arrNumbers.length > 0){
			let sum = this.arrNumbers.reduce((a, b) =>{return a + b;}, 0);
			console.log(sum)
			console.log(this.arrNumbers.length)
            return sum / this.arrNumbers.length;
        }
	}
}
