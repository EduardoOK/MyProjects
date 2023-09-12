class Stopwatch {
  constructor() {
    this.seconds = '00';
    this.tens = '00';
    this.secondsWatch = document.getElementById('seconds');
    this.tensWatch = document.getElementById('tens');
    this.btnStart = document.getElementById('start');
    this.btnStop = document.getElementById('stop');
    this.btnReset = document.getElementById('reset');
    this.Interval;
    this.init();
  }

  buttonStart() {
    clearInterval(this.Interval);
    this.Interval = setInterval(this.startTime.bind(this), 10);
  }
  buttonStop() {
    clearInterval(this.Interval);
  }
  buttonReset() {
    clearInterval(this.Interval, 5000);
    this.seconds = '00';
    this.tens = '00';
    this.secondsWatch.innerHTML = this.seconds;
    this.tensWatch.innerHTML = this.tens;
  }

  startTime() {
    this.tens++;

    if (this.tens <= 9) {
      this.tensWatch.innerHTML = '0' + this.tens;
    }

    if (this.tens > 9) {
      this.tensWatch.innerHTML = this.tens;
    }

    if (this.tens > 99) {
      this.seconds++;
      this.secondsWatch.innerHTML = '0' + this.seconds;
      this.tens = 0;
      this.tensWatch.innerHTML = '0' + 0;
    }

    if (this.seconds > 9) {
      this.secondsWatch.innerHTML = this.seconds;
    }
  }

  init() {
    this.btnStart.addEventListener(
      'click',
      this.buttonStart.bind(this)
    );
    this.btnStop.addEventListener(
      'click',
      this.buttonStop.bind(this)
    );
    this.btnReset.addEventListener(
      'click',
      this.buttonReset.bind(this)
    );
  }
}

const stopwatch = new Stopwatch();
