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

```plaintext
webpack-handlebars/
├── dist/                  # Output directory for production build
├── src/                   # Source files
│   ├── assets/            # Static assets like images, fonts, etc.
│   │   ├── images/        # Images
│   │   ├── fonts/         # Fonts
│   │   └── icons/         # Icons
│   ├── styles/            # SCSS or CSS styles
│   │   ├── main.scss      # Main SCSS entry point
│   │   ├── _variables.scss# SCSS variables
│   │   └── _mixins.scss   # SCSS mixins
│   ├── js/                # JavaScript files
│   │   ├── index.js       # Main JS entry point
│   │   ├── utils/         # Utility/helper scripts
│   │   └── components/    # Reusable JS components
│   ├── templates/         # Handlebars templates
│   │   ├── layouts/       # Layout files (e.g., base.hbs)
│   │   ├── partials/      # Reusable Handlebars partials
│   │   ├── pages/         # Page-specific templates (e.g., home.hbs)
│   │   └── helpers/       # Custom Handlebars helpers (optional)
│   ├── index.html         # Base HTML file used by Webpack
│   └── data/              # JSON or JS data files for templates
│       ├── global.json    # Global data
│       └── pages.json     # Page-specific data
├── webpack.config.js      # Webpack configuration
├── package.json           # Project dependencies and scripts
└── README.md              # Project documentation
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

## From Scratch

### 1. Set Up Your Project Directory

```bash
mkdir webpack-handlebars
cd webpack-handlebars
npm init -y
```

This creates a new project folder and initializes a `package.json` file.

---

### 2. Install Dependencies

Install Webpack, Handlebars, Bootstrap, and other necessary packages:

```bash
npm install webpack webpack-cli webpack-dev-server handlebars handlebars-loader bootstrap sass sass-loader css-loader style-loader html-webpack-plugin --save-dev
```

---

- **Webpack:** Core bundling tool.
- **Handlebars:** Templating engine.
- **Bootstrap:** CSS/JS framework.
- **Sass:** For Bootstrap customization.
- **Loaders and plugins:** For processing templates, styles, and HTML.

---

### 3. Create Project Structure

Change to the `src` directory to simplify the commands:

```bash
mkdir src dist
cd src
mkdir assets styles js templates templates/layouts templates/partials data

touch js/index.js styles/main.scss templates/layouts/base.hbs templates/pages/home.hbs templates/partials/header.hbs templates/partials/footer.hbs index.html data/global.json
```

Return to the root directory after creating the structure:

```bash
cd ..
```

Your project structure should now look like:

```plaintext
webpack-handlebars/
├── dist/                  # Output directory
├── src/                   # Source files
│   ├── assets/            # Static assets
│   ├── styles/            # SCSS or CSS styles
│   │   └── main.scss      # Main SCSS entry point
│   ├── js/                # JavaScript files
│   │   └── index.js       # Main JS entry point
│   ├── templates/         # Handlebars templates
│   │   ├── layouts/       # Layouts (e.g., base.hbs)
│   │   ├── pages/         # Page-specific templates (e.g., home.hbs)
│   │   ├── partials/      # Partials (e.g., header.hbs, footer.hbs)
│   └── data/              # JSON or JS data for templates
│       └── global.json    # Global template data
│   └── index.html         # Base HTML template used by Webpack
├── webpack.config.js      # Webpack configuration
├── package.json           # Project dependencies and scripts
```

---

### 4. Configure Webpack

Edit `webpack.config.js` to set up Webpack for Handlebars, SCSS, and Bootstrap:

```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
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
        options: {
          partialDirs: path.resolve(__dirname, 'src/templates/partials'),
        },
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'], // Processes SCSS files
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/i, // Static assets (images)
        type: 'asset/resource',
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

### 5. Build and Run the Project

1. Add scripts to `package.json`:

```json
"scripts": {
  "start": "webpack serve --mode development",
  "build": "webpack --mode production"
}
```

2. Run the development server:

```bash
npm start
```

This will launch the project in your default browser, with hot-reloading enabled for rapid development.

---

### 6. Add Handlebars Partials and Pages

Use `partials` for reusable template components like headers and footers. Reference them in `home.hbs` or other page templates like this:

```hbs
{{> header }}
<h1>Welcome to Webpack-Handlebars!</h1>
<p>This is a sample page template.</p>
{{> footer }}
```

---

With this setup, your project structure and workflow are ready to support scalable and modular Handlebars development with Webpack.


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
  
- 
- 
- 
- testing: Changed GitHub permissions. CHANGES





