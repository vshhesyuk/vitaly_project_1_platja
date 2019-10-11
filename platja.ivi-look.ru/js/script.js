'use strict'

function run() {
  const headerWrapper = document.querySelector('.header');
  const header = new Headers(headerWrapper);

  const menuWrapper = document.querySelector('.menu');
  const menu = new Menu(menuWrapper);
}

run();