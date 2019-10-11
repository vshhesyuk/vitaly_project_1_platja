'use strict'
// Class Menu
// Отрисовка меню сайта

class Menu {
  menu = [
    {name: 'Blouses'},
    {name: 'Dress'},
    {name: 'Skirts'},
    {name: 'Trousers'}
  ]

  constructor(element) {
    this.element = element;

    this.render(element);
  }

  render() {
    let ul = `<ul class="menu-site"></ul>`;
    this.element.innerHTML = ul;

    this.menu.forEach(item => {
      let menuSite = document.querySelector('.menu-site');
      let li = `<li class="item"><a href="#">${item.name}</a></li>`;
      menuSite.insertAdjacentHTML('beforeEnd', li);
    });

  }
}

// Global
window.Menu = Menu;