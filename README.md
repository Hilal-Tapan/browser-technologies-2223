# Browser Technologies - Survey
In the Browser Technologies course we will examine what Progressive Enhancement is and how you can apply it to create good, robust, accessible websites. For everyone. The web is for everyone, in this course I will learn how to accomplish this.

For the final assignment you design and create an interactive application according to the principle of Progressive Enhancement. We make sure that all users, with all browsers, can see, hear and/or feel the application as well as possible in every context. The most 'enhanced' version is 'delightful UX', beautiful and pleasant to use.

[Live site](https://hilal-tapan.github.io/browser-technologies-2223/)


## The survey
The user story that I chose is the survey. This is because I always use the basics of html and I wanted to go a little more in dept with the language. 

***

### Requirements
* Student data (name + number) required
* By subject:
* name
* teacher(s)
* weeks in which you did the course
* rating on a scale of 1-10 from:
1. material (how hard is it)
2. explanation (how clearly is it explained)
3. own insight (how well do you understand it)

***

## Functionalities
* Error messages, when something is entered incorrectly or not filled in at all
* Not all the information at once
* Local storage that lets you pick up where you left off
* Clear interface that indicates where you are in the survey
* Light/ dark mode
* No visible radio buttons
* Clear interface that allows user to return to previous questions

***

## Tests
### Turning CSS off
Without CSS the whole survey works just fine. 
Things that are not working are:
- The color and user input feedback is also not available. 
- Radio buttons are visible.
- The progress menu is shown below each other.

The things that are working well are:
- Required form fields
- To fill in a form
- Get feedback with the browser's fallback error messages
- The default dark and light mode of the browser.

![zonder css](https://github.com/Hilal-Tapan/browser-technologies-2223/blob/main/img/zonder%20css.png)
![zonder css](https://github.com/Hilal-Tapan/browser-technologies-2223/blob/main/img/zonder-css-lightdark.png)
![zonder css](https://github.com/Hilal-Tapan/browser-technologies-2223/blob/main/img/zonder%20css%20-2.png)

***

### Turning JS off
The browser consists largely of javascript. Javascript ensures that your website becomes much more interactive and dynamic. But there is a group where some browsers don't support javascript for example lynx or people who have javascript off by default or people with devices that can't function very well with javascript. Gladly it is still possible to use the survey when javascript is disabled.

What is not possible when javascript is disabled:
- Data is not stored in the browser's localstorage

This is not the biggest problem since the user can still use the survey. They can only not pick up where they left off.

***

### Colorcontrast
Contrast is important on websites because it affects readability, accessibility, and the overall user experience.
When there is insufficient contrast between the text and the background, it can be difficult for users, especially those with visual impairments, to read the content. This can lead to eye strain, fatigue, and even discourage users from staying on the site.

Furthermore, contrast plays an important role in accessibility for users with color vision deficiencies. Designers need to ensure that there is sufficient contrast between all colors used on the website, not just between the text and background. This can be achieved by following WCAG (Web Content Accessibility Guidelines) contrast standards, which specify the minimum contrast ratio required between foreground and background colors.

Lastly, contrast can also be used strategically to draw attention to important elements on the website, such as calls to action or headings. By using contrast effectively, designers can guide users through the content and make it easier for them to find what they are looking for.

In summary, contrast is important on websites because it improves readability, accessibility, and user experience. It is essential to follow contrast standards and use contrast strategically to create a website that is both aesthetically pleasing and functional.

To check the contrast I used the inspect mode to hover over items and check if the contrast level was green. This was the case. 

![contrast check](https://github.com/Hilal-Tapan/browser-technologies-2223/blob/main/img/contrast%201.png)

To double check i used a web contrast checker. My survey also passed this test. Which is good news!
![contrast check](https://github.com/Hilal-Tapan/browser-technologies-2223/blob/main/img/contrast.png)


***

### Mouse does not work


***

### Screenreader

***


### Browsers that I'm going to use
* Google Chrome: desktop and mobile
* Firefox: desktop and mobile
* Safari: desktop and Iphone
* Samsung Internet: mobile
* UC browser/PrinceXML

***

#### Google Chrome
**Desktop**
* :has() selector is supported
* Form validation with css works as it should
* Light mode and dark mode is supported
* Data is stored in local storage

**Mobile**
* :has() selector is supported
* Form validation with css works as it should
* Light mode and dark mode is supported
* Data is stored in local storage

***

#### Firefox
**Desktop**
* :has() selector is not supported, for this we have the html **required fallback**.
* Light mode and dark mode is supported
* Data is stored in local storage
* The weeks you have to fill in manually

![firefox](https://github.com/Hilal-Tapan/browser-technologies-2223/blob/main/img/firefox.png)

![firefox-weeks](https://github.com/Hilal-Tapan/browser-technologies-2223/blob/main/img/firefox-week-formfield.png)

**Mobile**
* :has() selector is not supported, for this we have the html **required fallback**.
* Light mode and dark mode is supported
* Data is stored in local storage

***

#### Safari
**Desktop**

<ins>Old version</ins>

I happen to have a very old version of safari on my laptop because my macbook is very old. This was perfect for testing!
* I noticed some CSS things did not work like the :has selector. This is why the css form validation is not visible, only the HTML fallback is visible.
* Light dark mode is working
* Data is stored in local storage

![safari-old](https://github.com/Hilal-Tapan/browser-technologies-2223/blob/main/img/firefox-week-formfield.png)


<ins>New version</ins>

Obviously I had to test on a new version of safari as well and here everything seemed to work! 
* The :has selector is working
* Light dark mode is working
* Data is stored in local storage
* Form validation with css works as it should

![safari-new](https://github.com/Hilal-Tapan/browser-technologies-2223/blob/main/img/safari-new.png)


**Mobile**
* :has() selector is supported
* Form validation with css works as it should
* Light mode and dark mode is supported
* Data is stored in local storage

***

#### Samsung internet

**Mobile**

* :has() selector is supported
* Form validation with css works as it should
* Light mode and dark mode is supported
* Data is stored in local storage

![samsung-mobile](https://github.com/Hilal-Tapan/browser-technologies-2223/blob/main/img/samsung-internet.png)


***

#### PrinceXML
Finally, I had to choose an obscure browser. The browser i chose for this is princeXML. PrinceXML is a browser where you can convert HTML pages and CSS into a PDF file. I installed the free version on my windows computer and then made a pdf output of it with the terminal. On their site they also have a generator where you can throw in html pages and css files. The browser will then generate a PDF file for you.

The first thing i noticed are the unsupported properties you get to see in your terminal.

![prince-xml](https://github.com/Hilal-Tapan/browser-technologies-2223/blob/main/img/Prince-xml.png)

When i opened the pdf i noticed the form is not centered, which is fine because it is still visible and usable. Another thing i've noticed is that the navigation links go to the web browser and not to another file in the PDF. But i guess this is normal.

![prince-xml](https://github.com/Hilal-Tapan/browser-technologies-2223/blob/main/img/princeXML.png)


***

## Sources
* https://developer.mozilla.org/en-US/docs/Web/CSS/:not





- [De eindopdracht - Progressive Enhanced Browser Technologie](assignments/eindopdracht.md)


### Leerdoelen
- _je leert wat Progressive enhancement is en hoe je dit kan toepassen._
- _je leert Browser Technologies te onderzoeken, testen en implementeren als enhancement._
- _je leert hoe je Feature Detection doet en wat je kan doen als een 'feature' niet werkt of wordt ondersteund._

[Rubric](https://icthva.sharepoint.com/:x:/s/FDMCI_EDU_CMD_Minor_Web_Design__Development/ET8k_fDG3VVPvqMkqx2uCusBR5-yeGaKo01meb9bDorLuQ?e=0hbmOk)

## Planning & programma
| Planning  | Woensdag  |  Donderdag | Vrijdag  |
|---|---|---|---|
| [Week 1](#week-1)  | Intro, College + briefing opdracht 1 | Presentaties opdracht 1, briefing eindopdracht, college | Voortgangsgesprekken |
| [Week 2](#week-2)  | College + Briefing De eindopdracht  | College + werken aan de opdracht | Feedbackgesprekken  |
| [Week 3](#week-3)  | Beoordelingen!  |

### Week 1
Het web is voor iedereen: Deze week gaan we onderzoeken wat Progressive Enhancement is en kennismaken met testen en het device lab.

#### Woensdag 22 maart
Browser Technolgies begint op woensdag. In het eerste college krijg je uitleg over het programma en over het nut van Progressive Enancement. Wat is dat eigenlijk? De meeste CMD studenten hebben dit waarschijnlijk al eens gehoord en misschien iets mee gedaan in blok Tech. Progressive Enhancement, oftewel PE, is een manier hoe je je de code van een website kan bouwen zodat alle gebruikers met alle browsers je website zo goed mogelijk te zien krijgen. Met PE kun je robuuste websites bouwen die het altijd doen. PE is een manier van denken.

| Woensdag 22/3 | Wat  |
|---|---|
| 9:30 | College les 1 over het vak, wie, wat, waar en waarom |
|  | [Briefing Opdracht 1 🛹 NPM install Progressive-Enhancement](assignments/opdracht-1.md) |
| 16:00 | Weekly Nerd |

##### Lezen voor les 1 📖
- [Everyone has JavaScript, right? by Stuart Langridge](https://kryogenix.org/code/browser/everyonehasjs.html)


#### Donderdag 23 maart
Donderdag gaan we opdracht 1 bekijken en bespreken. Als het goed is heb je een beeld gevormd van Progressive Enhancement. Tijdens de les duiken we hier met zijn allen dieper op in, gebaseerd op de resultaten van jullie onderzoek.

Zorg dat je de bevindingen van je onderzoek online kan presenteren. We gaan de hele feature lijst doorlopen en alle studenten kunnen laten zien wat ze hebben onderzocht, met voorbeelden, de problemen, cijfers en/of meningen. Bedenk ook hoe je de problemen zou kunnen oplossen.

Daarna krijg je uitleg over opdracht 2. Voor deze opdracht ga je proberen het web te laten 'breken' door (browser) features bewust uit te zetten. Wat gebeurt er als images, custom fonts, JavaScript, kleur, breedband internet niet optimaal werken?

| Donderdag 23/3 | Wat  |
|---|---|
| 9:30 | Opdracht 1 bespreken 🛹 |
| 10:30 | [Briefing eindopdracht](assignments/eindopdracht.md) |
| 15:30 | College les 2 over de UX van HTML |
| 16:00 | Checkout per team |

Lezen voor les 2 📖

- [The unreasonable effectiveness of simple HTML by Terence Eden](https://shkspr.mobi/blog/2021/01/the-unreasonable-effectiveness-of-simple-html/)

#### Vrijdag 25 maart
Vrijdag is het eerste voortgangsgesprek. Je bespreekt met de docent je keuze voor de eindopdracht. Er is alle tijd voor vragen, natuurlijk.

| Vrijdag 25/3 | Wat  |
|---|---|
| 9:30 | Voortgangsgesprekken |
| 16:00 | Work Hard Play Hard |

### Week 2
In week 2 ga je verder met de eindopdracht. We hebben in week 1 onderzocht wat PE is en welke feautures wel of niet goed worden ondersteund. Deze week gaan we leren hoe je een interactieve toepassing in 3 lagen kan ontwerpen en wat je kan doen als een browser een 'enhancement' niet kan tonen.

#### Woensdag 29 maart
Woensdag krijg je een college over browsers, en alles (!) wat daarbij hoort. Daarna gaan we aan de slag: als je een interactieve toepassing ontwerpt die alle gebruikers, met alle browsers moeten kunnen zien, dan zul je moeten bedenken hoe je de toepassing in 3 lagen kan opbouwen, eerst bepaal je de core functionaliteit en de user-delight ... schetsen maar!

| Woensdag 29/3 | Wat  |
|---|---|
| 9:30 | College van PPK over browsers! |
| 16:00 | Checkout per team |

#### Donderdag 30 maart
Donderdag eindigt de les laat! Onze gastspreker kan pas om 18:00. Je kan de hele dag verder werken aan je eindopdracht.

| Donderdag 30/3 | Wat  |
|---|---|
| 9:30 | Aan de slag |
| 11:30 | Uitleg beoordelingen |
| 18:00 | Gastcollege Aaron Gustafson |

Lezen voor les 4 📖

- [Be progressive by Jeremy Keith](https://adactio.com/journal/7706)

#### Vrijdag 31 maart
Vrijdag bespreken we in groepjes de vorderingen voor de eindopdracht. Zorg dat je vandaag weet welke browsers (en devices) jij gaat testen.

| Vrijdag 31/3 | Wat  |
|---|---|
| 9:30 | Vorderingen bespreken & feedback in groepjes |
| 16:00 | Work Hard Play Hard |


### bronnen
* https://stackoverflow.com/questions/17087636/how-to-save-data-from-a-form-with-html5-local-storage 
* https://blog.teamtreehouse.com/storing-data-on-the-client-with-localstorage 
* https://www.w3schools.com/jquery/sel_not.asp 
* https://www.toptal.com/designers/htmlarrows/symbols/check-mark/ 
* https://developer.mozilla.org/en-US/docs/Web/CSS/content 
* https://css-tricks.com/how-to-disable-links/ 
* https://developer.mozilla.org/en-US/docs/Web/CSS/filter 
* https://www.youtube.com/watch?v=UShd9wHTR-o 
* https://www.youtube.com/watch?v=n3lcjY4Mm00 
* https://www.w3schools.com/tags/tag_legend.ASP 
