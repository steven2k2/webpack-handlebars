import 'bootstrap';
import './main.scss';
import template from './template.hbs';

document.body.innerHTML = template({ title: 'Webpack Handlebars Demo + SCSS', message: 'This is a demo project that combines <b>Webpack</b>, <b>Handlebars</b>, and <b>Bootstrap 5</b> to create a modular, modern web application setup.' });