[![MIT License on GitHub](https://img.shields.io/github/license/seankelliher/nyc-public-pools?style=flat-square)](/LICENSE.txt)
## Public Swimming pools in New York City

Directory of public swimming pools in New York City. [View working component](https://sean-kelliher-nyc-public-pools.netlify.app).

## Project Status

TESTING: Testing for browser compatibility and WACG accessibility after making some renovations.

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

The results are returned at a comfortable pace. Users first see a "summary" box of each pool's location. From there, they can expand an individual pool to show detailed information such as pool dimensions, and other way-finding details such a cross streets and if the pool is located within a park. Many pools are inside parks.

Meeting WACG requirements was challenging. Meetings color contrast requirements only took some testing and colors changes. But, ensuring the directory could function with only a keyboard (no mouse) took some thinking. When a user clicks a pool's "summary" box, the box expands to a larger pop-up box. When this happens, I needed to deactivate the now background elements and only allow a user to tab through and activate elements in the foreground "details" box. I used reactive variables and modified their "tab index" state when necessary. Also, I needed to modify the ARIA "role" of clickable figure icons so browsers viewed them as "links" and not "presentation."

## Acknowledgments

* Pool information from [NYC Parks](https://www.nycgovparks.org/highlights/places-to-go/pools).
* Readme guidance from [Brenna Martenson](https://gist.github.com/martensonbj/6bf2ec2ed55f5be723415ea73c4557c4).
* NYC logo [Wikimedia](https://en.wikipedia.org/wiki/File:NYC_Logo_Wolff_Olins.svg).
* Design guidance from Google's [Material Design](https://material.io/design) and [Adobe Color](https://color.adobe.com/trends).
* Linting guidance from [ESLint](https://eslint.org) and [Stylelint](https://stylelint.io).
* Shields from [Shields](https://shields.io).