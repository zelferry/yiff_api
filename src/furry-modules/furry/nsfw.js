const { EventEmitter } = require('events');


var Yiffy = require('yiffy');
const y = new Yiffy();

class yiff extends EventEmitter {
	constructor() {
		super();
		this.yiffdata = y;
	}
	async gay() {
		let { yiffdata } = this;

		let result = await yiffdata.furry.yiff.gay('json');
		return result[0];
	}
	async straight() {
		let { yiffdata } = this;

		let result = await yiffdata.furry.yiff.straight('json');
		return result[0];
	}
	async lesbian() {
		let { yiffdata } = this;

		let result = await yiffdata.furry.yiff.lesbian('json');
		return result[0];
	}
	async synormorph() {
		let { yiffdata } = this;

		let result = await yiffdata.furry.yiff.gynomorph('json');
		return result[0];
	}
}

module.exports = yiff;
