const MyMorpionXO = class MyMorpionXO {
    constructor() {
        this.el = document.body;
        this.bord = [['', '', ''], ['', '', ''], ['', '', '']];
        this.renderGrid = '';

        renderGrid(tab); {
            const tab = document.createElement('tab');
            for (let i = 0; i < tab.length; i += 1) {
                let txt = '';
                for (let j = 0; j < tab[i].length; j += 2) {
                    if (tab[i][j] === 0) txt += '| |';
                    else if (tab[i][j] === 1) txt += '|x|';
                    else if (tab[i][j] === 2) txt += '|0|';
                }
            }
            return table;
        }
        run(); {
            this.el.innerHTML = (this.renderGrid());
        }
    };

};
export default MyMorpionXO;


//  render() {
//   return `
//<div class="container">
//${this.bord.map((line)=> line.map(case =>('<div class="case">' + case + '</div>'))).join('\n')

//}
//</div > `;
 // }

 // run() {
  //  this.el.innerHTML = this.render();
 // } */