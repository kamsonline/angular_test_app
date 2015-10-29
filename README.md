## What is this application for?

This application was initially generated from JHipster which I am planning to update it to follow some of the best practices which I have learnt and will be learning in the near future. The plan is to use this application as a practice application for me to upgrade to angular 2 and possibly get some feedback from others on the way.

### What is that I am trying to achieve?

 - AngularJS Application stack suitable for large scale application and it is scalable
 - Modular and flat package structure as much as possible
 - Use of Webpack / JSPM
 - Achieve lazy loading
 - Finally upgrade to Angular 2
 
I might backtrack and take different approaches during this process to understand better and identify suitable path to reach the above outcomes.

## Initial Application stack

Backend
Java 8 
Spring / Spring boot
Maven

Frontend
Angular 1.4.* 
JQuery 2.1.4
gulp
bower
node

## Target Application stack

No changes planned for backend

Frontend
Angular 2
and tools which may be appropriate

## Building this application

Before we can build this project, we must install and configure the following dependencies:
1. Java 8
2. Maven 3.x

3. [Node.js][]: To run a development web server and build the project.
4. [Gulp][]: We use [Gulp][] as our build system. Install gulp command line tool with 
    npm install -g gulp

After installing Node, we should be able to install development tools based on the dependencies in package.json.

    npm install

Run the following commands in two separate terminals to create a blissful development experience where your browser
auto-refreshes when files change on your hard drive.

    mvn
    gulp

## Building for production

To optimize the client for production, run:

    mvn -Pprod clean package

This will concatenate and minify CSS and JavaScript files. It will also modify `index.html` so it references
these new files.

To ensure everything worked, run:

    java -jar target/*.war --spring.profiles.active=prod

Then navigate to [http://localhost:8080](http://localhost:8080) in your browser.

## Testing

Unit tests are run by [Karma][] and written with [Jasmine][]. They're located in `src/test/javascript` and can be run with:

    gulp test

[Node.js]: https://nodejs.org/
[Bower]: http://bower.io/
[Gulp]: http://gulpjs.com/
[BrowserSync]: http://www.browsersync.io/
[Karma]: http://karma-runner.github.io/
[Jasmine]: http://jasmine.github.io/2.0/introduction.html
[Protractor]: https://angular.github.io/protractor/
