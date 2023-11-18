[![MIT License on GitHub](https://img.shields.io/github/license/seankelliher/nyc-public-pools?style=flat-square)](/LICENSE.txt)
## Public Swimming pools in New York City

Directory of public swimming pools in New York City. [View working component](https://sean-kelliher-nyc-public-pools.netlify.app).

## Project Status

Next steps, I want to do more extensive accessibility and browser testing.

## Project Screen Shots

* Default view - all pools.
![screen shot of project](/screenshots/nyc-public-pools-screenshot1.png?s=600)

* Queens outdoor pools.
![screen shot of project](/screenshots/nyc-public-pools-screenshot2.png?s=600)

* Manhattan indoor pools, Ederle Pool selected.
![screen shot of project](/screenshots/nyc-public-pools-screenshot3.png?s=600)

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`  

To Run Vue:

`npm run dev`   

To Visit App:

Visit the localhost port displayed in the terminal after running `npm run dev`.

## Reflection

I set out to build a searchable directory of public swimming pools in New York City. I wanted users to have several paths to find a pool. Users can search by borough or pool type, individually or combined, and by pool name.

The results are returned at a comfortable pace. Users first see the pools' locations. From there, they can expand an individual pool to show detailed information such as pool dimensions, and other wayfinding details such a cross streets and if the pool is located within a park. Many pools are inside parks.

For accessibility, all interactive elements can be tabbed through and activated with or without a mouse. Before deploying a production version though, I would want to do more testing for screen readers.

## Acknowledgments

* Pool information from [NYC Parks](https://www.nycgovparks.org/highlights/places-to-go/pools).
* Readme guidance from [Brenna Martenson](https://gist.github.com/martensonbj/6bf2ec2ed55f5be723415ea73c4557c4).
* Design guidance from Google's [Material Design](https://material.io/design) and [Adobe Color](https://color.adobe.com/trends).
* Linting guidance from [ESLint](https://eslint.org) and [Stylelint](https://stylelint.io).
* Shields from [Shields](https://shields.io).
