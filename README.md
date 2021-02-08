## Write Up
These are some notes I made along the way about decisions I made related to the company values
#### Long-term Company Thinking
By seperating jobs into content chunks it allows for quick modification or additions to the jobs page in the future.

`perksData.js` allows one place to swap out perks and icons as often as needed without breaking the implementation
#### Creativity
Not all components were provided so I took the liberty of creating a couple component blocks
`List` This one includes a fun transition effect
`Tile`
`BodyText`
`TitleText`
#### Simplicity
I've decided to add each section of the page under `components/content` so `pages/jobs` isn't too heavy.
To handle the expand/collapse of the perks I used the `useState` hook.
#### Presentation
`copy.js` allows devs to quickly swap copy if the message requires changing (i.e. a/b testing proves content A over content B)

