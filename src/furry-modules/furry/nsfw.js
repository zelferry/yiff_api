const { EventEmitter } = require('events');

const ops = { method: 'GET', headers: { 'User-Agent': 'crosdid/1.0' } };
const fetch = require('node-fetch');

var Yiffy = require('yiffy');
const y = new Yiffy();

//y.furry.hug("json")

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
