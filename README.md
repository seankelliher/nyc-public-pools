[![MIT License on GitHub](https://img.shields.io/github/license/seankelliher/nyc-public-pools?style=flat-square)](/LICENSE.txt)
## Public Swimming pools in New York City

Information on public swimming pools in New York City.

## Project Screen Shots

* Homepage.
![screen shot of project](/screenshots/nyc-public-pools-screenshot1.png?s=600)

* Pools in Manhattan.
![screen shot of project](/screenshots/nyc-public-pools-screenshot2.png?s=600)

* Message Form.
![screen shot of project](/screenshots/nyc-public-pools-screenshot3.png?s=600)

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`

Compiles and hot-reloads for development:

`npm run serve`

Compiles and minifies for production:

`npm run build`

Lints and fixes files:

`npm run lint`

Customize configuration:

See [Configuration Reference](https://cli.vuejs.org/config/).

For this project, I also used [JSON Server](https://www.npmjs.com/package/json-server) as a local database. To use JSON Server, install the package from NPM, globally is fine. In your repo, the command `npm run start` will both "compile and hot-reload for development" AND activate the JSON Server.

## Reflection

I wanted to build an application where users can explore public swimming pools in New York City. There was no available API to draw data from so I compiled it manually - mostly from the NYC Parks Department - and stored it in Vue's data object. Retrieving data and displaying it on pages was fairly straightforward. Finding a layout and color scheme that worked took a lot of exploring.

The largest technical challenges were creating and validating the form for users to submit messages. I needed to learn vee-validate and yup, and I wanted to use vee-validate's more flexible Composition API over its less flexible, but easier to use, Components. 

I also needed a way to simulate a "real world" database so I could house and retrieve messages during development. I used JSON Server, which also required some time to learn and get running. I used Axios to transfer data between the form and JSON Server. Axios worked well, but I also wondered if writing my own "fetch" API would have been fine too.

Lastly, I wanted to make sure the application met accessibility requirements for visually-impaired users with screen readers. ARIA guidelines, to me anyway, were frequently vague and inconclusive: "better no ARIA than bad ARIA" and you can use ARIA, but maybe semantic HTML5 elements are better! The "Accessibility" feature in Firefox's Developer Tools was invaluable in making me feel more confident that I was meeting accessibility standards.

## Acknowledgments

* Readme guidance from [Brenna Martenson](https://gist.github.com/martensonbj/6bf2ec2ed55f5be723415ea73c4557c4).
* Pool information from [NYC Parks](https://www.nycgovparks.org/highlights/places-to-go/pools).
* Design guidance from Google's [Material Design](https://material.io/design) and [Adobe Color](https://color.adobe.com/trends).
* Form validation with [vee-validate](https://vee-validate.logaretm.com/v4) and [yup](https://www.npmjs.com/package/yup).
* Data transfer with HTTP client [Axios[(https://axios-http.com/docs/intro).
* Local server with [JSON Server](https://www.npmjs.com/package/json-server).
* Shields from [Shields](https://shields.io).