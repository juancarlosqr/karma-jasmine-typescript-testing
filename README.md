[ ![Codeship Status for juancarlosqr/karma-jasmine-typescript-testing](https://codeship.com/projects/194cee90-12da-0133-5aee-225b415ea37b/status?branch=master)](https://codeship.com/projects/92645) [![Build Status](https://travis-ci.org/juancarlosqr/karma-jasmine-typescript-testing.svg?branch=master)](https://travis-ci.org/juancarlosqr/karma-jasmine-typescript-testing) [![Build Status](https://drone.io/github.com/juancarlosqr/karma-jasmine-typescript-testing/status.png)](https://drone.io/github.com/juancarlosqr/karma-jasmine-typescript-testing/latest)

# Testing Typescript with Jasmine on Karma

The main goal of this repo is to play with the next

- [npm](http://www.sitepoint.com/beginners-guide-node-package-manager/)
- [Typescript](https://www.sitepen.com/blog/2013/12/31/definitive-guide-to-typescript/)
- [DefinitelyTyped](https://github.com/borisyankov/DefinitelyTyped) & [TSD](http://webstackoflove.com/use-typescript-definition-manager-for-adding-type-definitions-to-your-project/)
- [Jasmine](https://blog.rainforestqa.com/2014-10-06-test-your-javascript-with-jasmine-part-2/)
- [Jasmine jQuery](http://matthewroach.me/basic-jquery-testing-with-jasmine-part-1/)
- [Karma Runner](http://karma-runner.github.io/)
- [Karma Typescript Preprocessor](https://www.npmjs.com/package/karma-typescript-preprocessor)
- [Karma Jasmine HTML Reporter](https://www.npmjs.com/package/karma-jasmine-html-reporter)
- [Typedoc](http://typedoc.io/)
- [PhantomJS](http://www.sitepoint.com/headless-webkit-and-phantomjs/)
- [Travis CI](http://docs.travis-ci.com/)
- [Codeship CI](https://codeship.com)
- [Drone CI](http://docs.drone.io/quickstart.html)

**With this setup we are looking forward to write code and jasmine tests in typescript, and then run the tests on karma**

## Prerequisites

**Node and npm should be installed**

If not, google it!

**Typescript, TSD, Typedoc, Karma-CLI and PhantomJS should be installed in npm as global packages**

To install them, do the following

```
$ npm i -g typescript tsd typedoc karma-cli phantomjs 
```

## Install npm packages

Just run

```
$ npm i
```

## Running the tests

Run the following on command line

```
$ npm test
```

## Generate the documentation

```
$ npm run docsgen
```

This is a npm shorcut, that runs 'karma start karma.config.js' as is definied in the package.json file

## More resources

- [npm](https://blog.cesarandreu.com/posts/give_npm_scripts_a_chance)
- [npm](http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/)
- [npm](http://www.jayway.com/2014/03/28/running-scripts-with-npm/)
- [Typescript](http://www.typescriptlang.org/Handbook)
- [Typescript](http://basarat.gitbooks.io/typescript/content/docs/getting-started.html)
- [Typescript](http://weblogs.asp.net/dwahlin/getting-started-with-typescript-classes-static-types-and-interfaces)
- [DefinitelyTyped](http://definitelytyped.org/)
- [TSD](https://www.npmjs.com/package/tsd)
- [TSD](http://bengale.io/typescript/grunt/javascript/tools/2015/01/20/Using-TSD.html)
- [Jasmine](http://jasmine.github.io/edge/introduction.html)
- [Jasmine](http://www.webdesignermag.co.uk/how-good-is-your-javscript-test-with-jasmine/)
- [Jasmine](https://www.npmjs.com/package/karma-jasmine)
- [Jasmine jQuery](https://github.com/velesin/jasmine-jquery)
- [Jasmine jQuery](https://www.npmjs.com/package/karma-jasmine-jquery)
- [Karma Runner](https://www.npmjs.com/package/karma-cli)
- [Karma Runner](https://coderwall.com/p/uvxnmq/testing-your-javascript-with-karma-runner)
- [Karma Runner](http://paislee.io/testing-angularjs-with-grunt-karma-and-jasmine/)
- [PhantomJS](http://thejsguy.com/2015/02/28/end-to-end-testing-with-phantomsjs-and-casperjs.html)

## What's next

Add 

- [VS Karma Adapter](https://visualstudiogallery.msdn.microsoft.com/4cd59e4a-82e8-4b4e-8302-d102fc81b090)
- [gulp](https://www.npmjs.com/package/gulp-karma-runner)
- [gulp](https://www.airpair.com/typescript/posts/typescript-development-with-gulp-and-sublime-text)
- [tslint](https://www.npmjs.com/package/tslint)
- [coverage](https://github.com/karma-runner/karma-coverage)
