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

This project also uses an Express server and a MongoDB Atlas database to store form submissions.

To start the Express server:

`npm run start`

## Reflection

I wanted to build an application where users could explore public swimming pools in New York City. There was no available API to draw data from so I compiled it manually - mostly from the NYC Parks Department - and stored it in Vue's data object.

I included a form where users can submit messages. This was the largest technical challenge. I created an Express server and MongoDB Atlas database to transmit and store messages. Also, on the form itself, I validated fields using Vee-Validate and Yup. In retrospect, I questioned if Vee-Validate and Yup were more trouble than they were worth for a simple form. Maybe using Regex would have been easier.

Lastly, I wanted to make sure the form as well as other parts of the application met accessibility requirements for visually-impaired users with screen readers. ARIA guidelines, to me anyway, were frequently vague and inconclusive: "better no ARIA than bad ARIA" and you can use ARIA, but maybe semantic HTML5 elements are better! The "Accessibility" feature in Firefox's Developer Tools was invaluable in making me feel more confident that I was meeting accessibility standards.

## Acknowledgments

* Pool information from [NYC Parks](https://www.nycgovparks.org/highlights/places-to-go/pools).
* Readme guidance from [Brenna Martenson](https://gist.github.com/martensonbj/6bf2ec2ed55f5be723415ea73c4557c4).
* Design guidance from Google's [Material Design](https://material.io/design) and [Adobe Color](https://color.adobe.com/trends).
* Linting guidance from [ESLint](https://eslint.org) and [Stylelint](https://stylelint.io).
* Form validation with [vee-validate](https://vee-validate.logaretm.com/v4) and [yup](https://www.npmjs.com/package/yup).
* Shields from [Shields](https://shields.io).