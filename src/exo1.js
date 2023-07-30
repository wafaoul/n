const GridGenerator = class GridGenerator {
    constructor(xAxis, yAxis) {
        this.el = document.body;
        this.xAxis = xAxis;
        this.yAxis = yAxis;
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    randomColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }

    renderGrid() {
        const table = document.createElement('table');

        for (let i = 0; i <= this.xAxis; i += 1) {
            const tr = document.createElement('tr');

            for (let j = 0; j <= this.yAxis; j += 1) {
                const td = document.createElement('td');

                setInterval(() => {
                    td.style.background = this.randomColor();
                }, this.getRandomInt(2000));

                tr.appendChild(td);
            }

            table.appendChild(tr);
        }

        return table;
    }

    run() {
        this.el.appendChild(this.renderGrid());
    }
};

export default GridGenerator;
