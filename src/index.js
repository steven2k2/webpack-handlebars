import 'bootstrap';
import './main.scss';

import template from './template.hbs';

document.body.innerHTML = template({ title: 'Webpack Handlebars Demo', message: 'This is a demo project that combines Webpack, Handlebars, and Bootstrap 5 to create a modular, modern web application setup.' });