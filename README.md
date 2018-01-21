# qix-info

[![CircleCI](https://circleci.com/gh/stefanwalther/qix-info.svg?style=svg)](https://circleci.com/gh/stefanwalther/qix-info)

> Library & CLI to get some information from QIX using enigma.js.

---

## About

A super simple & minimalistic library & CLI to get some information out of the QIX engine.  
Ideal for some prototyping work.

## Installation

### As a library

```
$ npm install qix-info --save-dev
```

### As a command line tool
```
$ npm install qix-info -g
```

## Usage

### As a library

```js
const QixInfo = require('qix-info');

(async () => {
  let qixInfo = new QixInfo();
  let apps = await qixInfo.listApps();
  console.log(`Amount of apps: ${apps.length}`);
})();
```

### CLI

List all apps:
```
$ qix-info --host localhost:9076 list-apps
```

![Command: list-apps](docs/media/list-apps.gif)

## Roadmap

I might want to add more functionality over time (e.g. such as the `healthcheck` endpoint, listing extensions, etc.), but only as needed.  

Feel free to extend this library and adding a pull request.

## Author
**Stefan Walther**

* [twitter](http://twitter.com/waltherstefan)  
* [github.com/stefanwalther](http://github.com/stefanwalther) 
* [LinkedIn](https://www.linkedin.com/in/stefanwalther/) 
* [qliksite.io](http://qliksite.io)

## License
MIT

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.6.0, on January 21, 2018._

