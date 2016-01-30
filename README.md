# Webpack and React Boilerplate

Project setup using a simple project configuration. It is split into two
configurations. A development and production setup.

## Shared Configuration
Has one entry file, `main.js`. Outputs to the `build` path. Uses three module
loaders by default. JSON, Babel for JavaScript, and postcss, css, styles for stylesheets.

Contains the shared configurations for the postcss loader. The plugins for adding a banner to each file produced and using a HTML file as a template.

## Production Configuration

The production configuration contains optimization plugins. It optimizes the
order of our files and prioritizes the most used modules with the smallest ids.
Uses uglify JS to compress and minify. It also moves style sheets out of the
bundle and into separate files.

## Development Configuration

The development configuration uses hot module replacement for faster
updates when working locally. It produces source maps. It also uses the webpack
development server.
