export class Alert {
	pressedBtn: HTMLElement = document.getElementsByClassName('btn')[0] as HTMLElement;
	constructor () {
		this.pressedBtn.addEventListener('click', () => {
      console.log('Button clicked!')
    });
	}

}