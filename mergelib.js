const merge = require('concat');

const files = [
    './dist/AngularElements/runtime-es2015.js',

    './dist/AngularElements/polyfills-es2015.js',

    './dist/AngularElements/scripts.js',

    './dist/AngularElements/main-es2015.js',
]

merge(files, './dist/AngularElements/demo.js');
console.log("file generated");
