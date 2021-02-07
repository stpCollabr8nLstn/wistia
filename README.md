# Wistia Front-end Engineer Coding Exercise

## Overview
Employees at Wistia are encouraged to apply our [values](https://wistia.com/about/values) in everything we do.  As an engineer on our team, you'll be using these values to bring beautiful, accessible, responsive designs to life for our brand and product marketing pages.

We're a collaborative company, and you'll be working closely with the designers on the team.  Though this exercise can't quite capture a true collaborative experience, we'd like you to keep this in mind during the course of this exercise.  Take note of any questions or suggestions you may have for a designer, or any tradeoffs or assumptions you make and make sure to include them in the writeup with your submission.

We use an iterative design process that starts with simple sketches and wireframes and moves to more advanced mockups or clickable prototypes.  We solicit feedback from various stakeholders (including the developers) along the way.  For the purpose of this exercise, you'll be working from a mockup of a Jobs page we'd like to build, and the designer has provided the mockups and other assets required for the page.

## Must Haves

- The page must be fully responsive and accessible
- A clear writeup
    - We put a high value on communication and collaboration.  You'll be working alone, but capture observations, questions, assumptions, and tradeoffs in a writeup that you include with your submission.  Help us understand how you approached the problem
- A link to your github repo or a zip file with your final solution
    - We love to see intermediate work, so we'd prefer a link to a repo

## Getting Started

1. `npm install`
2. `npm run dev`
3. Open http://localhost:3000 in your browser.
4. Check out http://localhost:3000/wistia-assets to see a page in action.
5. http://localhost:3000/jobs is the page that you'll be building based off of the design comp located at [./jobs-design.jpg](https://github.com/wistia/fe-marketing-engineer-code-test/blob/master/jobs-design.jpg)
6. When you are done, send us your submission

## Things to note

- Ensure the page is fully responsive and accessible.
- It should be able to render in modern, evergreen browsers (Chrome, Firefox, iOS Safari, for example).
- As you can tell, this repo pulls lots of stuff from wistia.com, so many of the components, patterns, and utils you see here is part of what's live in production and what you'll be working with.

## Assets and Components

- pages design is at `./jobs-design.jpg`
- page image assets are in `/static/images`
- colors can be found in `/utils/colors.js`
- a set of React components in `/components`
- icons are in componentized SVG form in `/components/icons`

## Questions

We want you to do your best work, so if you have any questions or run into problems, reach out to the hiring manager and we'll try to get you pointed in the right direction.

## Write Up

#### Long-term Company Thinking
These are some notes I made along the way about decisions I made related to the company values

By seperating jobs into content chunks it allows for quick modification or additions to the jobs page in the future.
`perksData.js` allows one place to swap out perks and icons as often as needed without breaking the implementation
#### Creativity
Not all components were provided so I took the liberty of creating a couple component blocks
`Accordion`
I wanted to add a cool transition so it slides out but doing it quick means I sacrifice accessibility which is bad news bears. In a future iteration I would research the best ways to create a smooth collapse/expand transition that doesn't interfere with the content for screen readers.
`Tile`
`BodyText`
#### Simplicity
I've decided to add each section of the page under `components/content` so `pages/jobs` isn't too heavy.
To handle the expand/collapse of the perks I used the `useContext` hook to establish state. It doesn't warrant an app-wide state so I wrapped the provider around the Perks content component only.
#### Presentation
`copy.js` allows devs to quickly swap copy if the message requires changing (i.e. a/b testing proves content A over content B)

