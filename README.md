# Webpack Handlebars Demo

This is a demo project that combines **Webpack**, **Handlebars**, and **Bootstrap 5** to create a modular, modern web application setup. It includes Sass for styling and provides a development server for real-time updates.

## Features

- Modular JavaScript with Webpack
- Handlebars as a templating engine
- Bootstrap 5 integration for responsive design
- Sass for styling and Bootstrap customisation
- Webpack Dev Server for live reloading
- Production-ready builds

## Prerequisites

Ensure the following are installed on your system:

- **Node.js** (v16 or later recommended)
- **npm** (comes with Node.js)

## Project Structure

```
webpack-handlebars/
├── dist/                  # Output directory
├── src/
│   ├── index.js           # Main entry point
│   ├── main.scss          # Bootstrap custom styles
│   ├── template.hbs       # Handlebars template
│   └── index.html         # Base HTML template
├── webpack.config.js      # Webpack configuration
├── package.json           # Project dependencies and scripts
```

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/steven2k2/webpack-handlebars.git
cd webpack-handlebars
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm start
```

This will start the development server at `http://localhost:8080`, where you can view your project with live reloading.

### 4. Build for Production

```bash
npm run build
```

The production-ready files will be output to the `dist/` directory.

## Configuration

### Webpack
The `webpack.config.js` file configures Webpack to:
- Process Handlebars templates (`.hbs` files)
- Compile Sass to CSS
- Bundle JavaScript
- Use the `HtmlWebpackPlugin` to inject assets into the HTML

### Bootstrap and Sass
The project imports Bootstrap via Sass, allowing for customisation of variables in `src/main.scss`. Example:

```scss
@import 'bootstrap/scss/bootstrap';

body {
  background-color: #f8f9fa;
  padding: 20px;
}
```

### Handlebars
The project uses Handlebars for templating. Example template (`src/template.hbs`):

```hbs
<div class="container">
  <h1>{{title}}</h1>
  <p>{{message}}</p>
</div>
```

## Scripts

- **`npm start`**: Starts the development server with live reloading.
- **`npm run build`**: Creates a production-ready build in the `dist/` folder.

## Dependencies

### Development
- `webpack`
- `webpack-cli`
- `webpack-dev-server`
- `html-webpack-plugin`
- `handlebars`
- `handlebars-loader`
- `sass`
- `sass-loader`
- `style-loader`
- `css-loader`

### Bootstrap
- `bootstrap`

## Customisation

- Modify Handlebars templates to suit your needs.
- Extend Bootstrap with custom Sass variables in `main.scss`.
- Adjust Webpack configuration for additional loaders or plugins.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.






---

## From scratch

### 1. Set Up Your Project Directory
```bash
mkdir webpack-handlebars
cd webpack-handlebars
npm init -y
```

This creates a new project folder and initialises a package.json file.

---

### 2. Install Dependencies

Install Webpack, Handlebars, Bootstrap, and other necessary packages:

```bash
npm install webpack webpack-cli webpack-dev-server handlebars handlebars-loader bootstrap sass sass-loader css-loader style-loader html-webpack-plugin --save-dev
```
---

- **Webpack:** Core bundling tool.
- Handlebars: Templating engine.
- Bootstrap: CSS/JS framework.
- Sass: For Bootstrap customisation.
- Loaders and plugins for processing templates, styles, and HTML.

---

### 3. Create Project Structure

```bash
mkdir src dist
touch webpack.config.js src/index.js src/index.html src/main.scss src/template.hbs
```

Your structure should look like:

```plaintext
webpack-handlebars/
├── dist/                  # Output directory
├── src/
│   ├── index.js           # Main entry point
│   ├── main.scss          # Bootstrap custom styles
│   ├── template.hbs       # Handlebars template
│   └── index.html         # Base HTML template
├── webpack.config.js      # Webpack configuration
├── package.json
```


---

### 4. Configure Webpack

Edit `webpack.config.js` to set up Webpack for Handlebars, Bootstrap, and Sass:

```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true, // Cleans old files on build
  },
  devServer: {
    static: './dist',
    open: true, // Automatically opens browser
  },
  module: {
    rules: [
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'], // Processes Sass files
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Injects JS into the HTML
    }),
  ],
};
```


---

### 5. Set Up Your Files

**src/index.js**

Import Bootstrap, Sass, and the Handlebars template:


```javascript
import 'bootstrap';
import './main.scss';

import template from './template.hbs';

document.body.innerHTML = template({ title: 'Webpack Handlebars Demo', message: 'Welcome to your project!' });
```
**src/main.scss**

Customise Bootstrap or include its styles:

```scss
@import 'bootstrap/scss/bootstrap';
body {
  background-color: #f8f9fa;
  padding: 20px;
}

```

**src/template.hbs**

Create a simple Handlebars template:

```hbs
<div class="container">
  <h1>{{title}}</h1>
  <p>{{message}}</p>
</div>
```

**src/index.html**

Your basic HTML file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Webpack Handlebars Demo</title>
</head>
<body>
</body>
</html>
```

---

### 6. Add Scripts to package.json

Update scripts to include Webpack commands:

```json
"scripts": {
  "start": "webpack serve --mode development",
  "build": "webpack --mode production"
}
```
---

### 7. Start Development

Run the development server:

```bash
npm start
```

Webpack Dev Server will serve your files at http://localhost:8080.

### 8. Build for Production

Build the production version:

```bash
npm run build
```

The output will be in the dist/ folder.

---

### 9. Customise
- Add more Handlebars partials or helpers as needed.
- Extend Bootstrap using SCSS variables or custom styles.





