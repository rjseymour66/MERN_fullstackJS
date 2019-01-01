### Babel CLI install:
- `npm i -D babel-cli babel-loader babel-preset-es2015 babel-preset-stage-2 babel-preset-react`

### eslint
- `npm i -D eslint-plugin-react babel-eslint`

### json Scripts:
  "scripts": {
    "start": "nodemon --exec babel-node server.js --ignore public/",
    "dev": "webpack -wd"
  }

- wd: watch mode, development mode

### webpack.config.js explanation

We'll need to configure webpack to work with our structure, which is a long story, but I'll copy the configurations here and we'll talk about them. In this webpack.config.js file on the root level, we tell webpack to start from the index file under the source directory, and bundle all the modules we depend on inside that file into a bundle.js file under our public directory.

Then for every file that ends with a .js, we want to run the babel-loader on it. The babel-loader will take care of transforming the non-standard JS that we'll be using, like JSX and ES2015 modules, which are not yet supported natively in browsers. To configure Babel to work with our selected presets, we can add the .babelrc file on the root level and add the following code. This instructs Babel to use these three presets: react is used to transform JSX, and the other two presets for us to safely use JavaScript modern features and not worry about browsers that do not understand them.
