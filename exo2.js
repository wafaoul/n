const DrawBar = class DrawBar {
    constructor(sum, segement) {
        this.sum = sum;
        this.segement = segement;
        this.progessbar = '';
        this.compute = (100 * this.segement) / this.sum;

        this.el = document.body;
    }

    render() {
        return `
        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar" style="width: ${this.compute}%"></div>
        </div>
      `;
    }

    run() {
        this.el.innerHTML = this.render();
    }
};

export default DrawBar;
