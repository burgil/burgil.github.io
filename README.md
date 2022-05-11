     ______            _______  _______ _________ _       
    (  ___ \ |\     /|(  ____ )(  ____ \\__   __/( \      
    | (   ) )| )   ( || (    )|| (    \/   ) (   | (      
    | (__/ / | |   | || (____)|| |         | |   | |      
    |  __ (  | |   | ||     __)| | ____    | |   | |      
    | (  \ \ | |   | || (\ (   | | \_  )   | |   | |      
    | )___) )| (___) || ) \ \__| (___) |___) (___| (____/\
    |/ \___/ (_______)|/   \__/(_______)\_______/(_______/
                                                          

# Enjoy!

Idea came from Silicon Valley

* Kanban Board is a really useful method for managing pretty much anything in life, it's built on Agile principles and is part of the Scrum methodology, which is a part of the Agile "framework".

**(I've written all of that in 18 minutes and 36 seconds!)**

## Table of Contents

- [The Story](#the-story)
- [The Problem](#the-problem)
- [First Impressions](#first-impressions)
- [Agile - Scrum - Kanban](#agile-scrum-kanban)
- [Reinventing the Wheel](#reinventing-the-wheel)
- [Bonus](#bonus)
- [Credits](#credits)
- [Installation](#installation)
- [Usage](#usage)
- [How it Works](#how-it-works)
- [Support](#support)
- [Contributing](#contributing)

## The Story

The project was originally created by someone named [GnashHS](https://www.reddit.com/user/GnashHS/) (Reddit) / [remyc95](https://github.com/remyc95) (Github)
I've recently finished watching all 6 Seasons of Silicon Valley and had a great time, during the show I've noticed some stuff were a little too authentic,
I had to google it and there I found this thing called Scrum, and finally had time to learn a bit about Agile, and Kanban Boards.
Owning a large board myself that was usually full of mess, I must say the exprience changed the way I work, Suddenly everything began to be organized.
Finally I was able to see the bigger picture as I was starring at my wall full of those little sticky notes, This is the moment I knew that it will forever change the way I create stuff, or work on stuff.

## The Problem

One tiny problem rised as soon as the next day hit, Some sticky notes started falling off the board! I started to get obsessed about loosing some sticky notes, I was sure I lost some and this is when I realzied this new method isn't so efficient and smart as I initially taught it was.
Well, I was already too invested in it, I said to myself, I can just organized a larger space where no note will ever be lost and get better sticky notes that actually stick, lol, and that will solve the issue right?
But man, I already had all the build right there, getting a new one is just too much, I just want to work on my startups after all, working on how I will work is technically a waste of time according to everyone around me lol.
So while closing some tabs on my browser I found a google search that lead me directly to the [original author masterpiece](https://sv-scrum-board.herokuapp.com/)!

## First Impressions

I was immediatly both amazed and terrified by this site, it was overwhelming to see after what I've been through, I basically saw an exact replica of the board I had in real life.
I also paused the show in the middle, took a screenshot, and used a ruller to divide my board into 6 even parts, and named the columns: ICE BOX, EMERGENCY, IN PROGRESS, TESTING & COMPLETE.
I was amazed by how high quality the board was compared to any other screen shot you can get from the actual show, this was a big work and so big shoutout to the people who made this, I loved it.
Funny enough, I was also terrified as mentioned, and the reason for that is far more complex than one paragraph will be enough to explain, so let's create another headline, that's super fun using [README boilerplate](https://github.com/fraction/readme-boilerplate) made by is [fraction](https://github.com/fraction/readme-boilerplate/blob/master/LICENSE) ([Github Profile](https://github.com/fraction)).

## Agile - Scrum - Kanban

That's just too many things to explore in one day and expect to understand anything, One thing I did understood, is that it all requires a team.
I started googling how I can "solo scrum", lol, but after watching so many videos about those topics I simply found out that using a virtual board like Trello to manage your work really defies what we are trying to do here.
The whole point is that when we finish working on a "virtual" feature on our app or website, we can literally stand up and mark the task as complete on our real world, it's much more powerful when you think about it.
Of course you can use Trello for example, my favorite to-do app, to handle pretty much 10x more information with images, hyperlinks, real time collabration and so much more it may be well be the next social platform for work if you ask me lol.
But this is where things are a little too complex, and defies the agile\scrum methodology!
Think about it and try to understand, you finish work, fixed a large bug in your website for example, you are exahusted, you need a break, your eyes simply can't afford to open Trello and start digging through the thousands of boards and sticky notes filled with information as far as the eye can see.
We need somethign simpler that allowed us to get off our computer for once, and physically change tasks from inprogress to completed, think about that.

## Reinventing the Wheel

Ok so if the wheel has already been invented why the **** do we need to reinvent it, or more like why did I reinvented it?!
Well, nothing is huge enough, smart enough nor good enough.
Everything can be better, success is a float not a boolean, or in human words success is measred by more than just true or false.
One wheel can be better than another, facts are some company businesses is literally to reinvent the wheel.
Ok enough of that, let's talk about what we reinvented here shall we, What wasn't good enough about this awesome project?!

- The notes position and text will not save when you refresh (Fixed)
- The categories were hard to modify via the code (Fixed)
- The categories were literally impossible to modify and move via the interface (Fixed)
- Notes could swallow behind the screen and disapear (Hard Fixed)
- The canvas wasn't so responsive when resizing the window (Semi Fixed) - Notes can be zoomed smoothly but saved at the position of your screen size therefor when you literally move the window into another screen the entire formula will mess up and some notes will be under the fully height, but fixed the designs and made the background table more responsive.
- The project was from 6 years ago, and had no contributions, made on a framework that I could not run, and wasn't made out of pure css, html, and javasscript (Fixed)

Special Feature:
If you downloaded the project instead of using the online version, you can feel free to move this folder anywhere around your PC, the notes will be saved to the local storage on your browser no matter where it is.

## Bonus:
As far as I'm aware, there isn't any way to cause any harm to pc's with just html css and javascript,
but if you want to feel safer, take those libraries called jquery and whatever and find their source or remove them completely,
to be honest I usually never use jquery and manualyl code all animations and whatever using vanilla JS for better performance and just because I like it and hate using the $ sign to code.
The important codes are located in stlye.css, script.js and index.html, everything else is just dependencies you can replace.
I mostly rewrote some of the html, some of the css, removed scss need, and modified 99% of the script.js, it's all fully readable and not obfuscated so you can read and trust it.

## Credits
I would still like to maintain some credits to my original work and make sure it's not resold, I don't know if I have the right to do that but since the author stated the project is open source and free to use I guess I modify it, he did not however put a license and his git repo and therefor the repo is technically protected and can not be copied for commercial use so don't try guys, this is stated by Github somewhere. [Source for statements](https://www.reddit.com/r/SiliconValleyHBO/comments/4lu2i1/silicon_valley_scrum_board/)
therefor nobody can use this work for commercial use unless both the original author and me will approve the use of my rewritten code, or if the original author wish he can simply add a license to his repo and people can start working from there.
I don't think there is anything profitable here just a really cool kanban board, and as the original repo stated it was meant to make the world a better place, so I basically am writing all of this just to let you guys know it will not only be not moral to take this code and sell it for whatever reason, I believe it's also not legal to do so but god who cares let's not share what we don't want to be shared or sold and share what we do, so basically I'm trying to say use at your own risk and all that stuff that protect people who share code and blah blah god forgive me and you and him bye.
Oh and I also did not added a license just to keep the standards (;

## Installation

Open your terminal/command prompt(cmd.exe) and clone the repository:

```sh
git clone https://github.com/burgil/burgil.github.io
```

## Usage

Change directory and start the app:

```sh
cd burgil.github.io
./index.html
```

I created a shortcut on my desktop, put that folder on my documents folder, and put a Board icon on the shortcut.

## How it Works

All notes will be saved inside the local storage of your browser:

1. Open devtools (F12 or CTRL+SHIFT+I or Right Click + Inspect)
2. Go to the Application tab
3. Expand Local Storage and click on file://
4. All the notes data will be inside a key named Notes and the rest of the categories will be located inside the keys Cat1, Cat2, Cat3 and Cat4.

You can also optionally create more categories, I've made it easy to choose their color, simply open the index.html file and locate the cats array at the stop of the file inside the head tag and under the title tag, now simply add a new line containing your category color and name, no need to update the text again as it acts as the default text for the category, you can ofcourse later change the category names and it will be saved in the local storage along with their position!

## Support

Please [open an issue](https://github.com/burgil/burgil.github.io/issues/new) for support.

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/burgil/burgil.github.io/compare/).