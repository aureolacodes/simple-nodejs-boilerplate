# Simple NodeJS (ES6) Boilerplate

## About

This is a really simple boilerplate I use for NodeJS packages. It compiles
ES6 scripts located inside the src folder into ES2015 compatible scripts.
There is a testsuite in place which uses Mocha & Chai to run tests and create
coverage reports. ESDoc is used to create a documentation from your comments.

I like my workflow as simple as possible, so you won't find any Grunt, Gulp or
Make usage in this boilerplate. All scripts are defined inside the package.json.

## Usage

| Command | Description |
| --- | --- |
| `npm install` | Install dependencies & do initial compilation. |
| `npm run compile` | Run tests & compile the application. |
| `npm run test` | Run tests. |
| `npm run docs` | Create documentation & coverage reports. |
| `npm run watch` | Starts a watcher listening to changes inside the src folder. |
| `npm run reinstall` | Remove and reinstall all local node modules. |

## Structure

| Folder | Description |
| --- | --- |
| `./src` | Sources folder, should contain all your ES6 files. |
| `./src/config` | Holds the apps configuration files, if necessary. |
| `./test` | Folder for test specifications. |
| `./documentation` | The generated documentation will be placed here. |
| `./coverage` | The coverage reports will be placed here. |
| `./dist` | Holds the compiled script files. |
