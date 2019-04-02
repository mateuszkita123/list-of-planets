export class Planet {
	id: number = this.genId();
	name: string;
	diameter: string;
	gravity: string;
	population: string;
	climate: string;
	terrain: string;
	url: string;

	constructor() {
		let txt = this.url;
		let num = txt.replace(/\D/g,'');
		this.id = parseInt(num,10);
		console.log(this.id);
	}

	genId() {
		let txt = this.url;
		let num = txt.replace(/\D/g,'');
		let id;
		return id;
	}
}