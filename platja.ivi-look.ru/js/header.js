'use strict'

// Class Header
// Отрисовка шапки сайта

class Headers {
  titles = [
    {name: "WOMEN'S DRESS STORE"}
  ]

  constructor(element) {
    this.element = element;

    this.render(element);
  }

  render() {

    let layout = 
    `
      <div class="container">
        <div class="head">
          <h1>${this.titles[0].name}</h1>
        </div>    
      </div>
    `;

    this.element.insertAdjacentHTML('beforeEnd', layout);
  }

}

// Global
window.Headers = Headers;