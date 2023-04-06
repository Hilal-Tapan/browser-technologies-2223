# Browser Technologies - Survey
In the Browser Technologies course we will examine what Progressive Enhancement is and how you can apply it to create good, robust, accessible websites. For everyone. The web is for everyone, in this course I will learn how to accomplish this.

For the final assignment you design and create an interactive application according to the principle of Progressive Enhancement. We make sure that all users, with all browsers, can see, hear and/or feel the application as well as possible in every context. The most 'enhanced' version is 'delightful UX', beautiful and pleasant to use.

[Live site](https://hilal-tapan.github.io/browser-technologies-2223/)

## The survey
The user story that I chose is the survey. This is because I always use the basics of html and I wanted to go a little more in dept with the language. 

### Concept
To improve the minor web development, I developed a survey where students can rate it per class. There are 7 classes and when the user is done they get a confirmation page where it thanks the students for filling in the survey.

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

## Core functionalities
* Error messages, when something is entered incorrectly or not filled in at all
* Not all the information at once
* Local storage that lets you pick up where you left off
* Clear interface that indicates where you are in the survey
* Light/ dark mode
* No visible radio buttons
* Clear interface that allows user to return to previous questions

***

## Progressive enhancement
My progressive enhancement is the form validation that I improved. The html form validation is the fallback and I have improved this in the css.

```css
#gegevens input[type="text"]:valid {
    flex: 1;
}

#gegevens label:has(input[type="text"]:valid, input[type="number"]:valid, input[type="email"]:valid)::after {
    content: '✓';
    color: green;
    position: absolute;
    top: 50%;
    right: 1em;
}

#gegevens label:has(input[type="text"]:invalid, input[type="number"]:invalid, input[type="email"]:invalid)::after {
    content: "verplicht veld";
    color: red;
    font-size: .8em;
    padding-left: .5vw;
}
```
![samsung-mobile](https://github.com/Hilal-Tapan/browser-technologies-2223/blob/main/img/samsung-internet.png)

If it happens that the :has selector does not work it has a HTML fallback which makes it still work.

## Form validation
Form validation is a crucial aspect of creating web forms. It ensures that the data submitted through a form meets certain criteria, such as required fields are filled, input format matches expected, and so on.

HTML provides several built-in attributes that you can use to implement form validation without the need for JavaScript or other scripting languages. Some of these attributes are:

* Required: This attribute is used to specify that a field must be filled in before the form can be submitted. For example, you can use this attribute to make sure that users enter a name, email address, or other critical information before submitting the form.

* Pattern: This attribute is used to specify a regular expression that the input value must match. For example, you can use this attribute to validate a phone number or postal code.

* Maxlength: This attribute is used to limit the maximum length of the input value. For example, you can use this attribute to make sure that a password is at least six characters long but no more than twelve characters.

* Min and Max: These attributes are used to specify the minimum and maximum values for a number input field.

* Type: This attribute is used to specify the type of input expected for a form field, such as text, email, password, number, date, and so on.

```html
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>

  <label for="password">Password:</label>
  <input type="password" id="password" name="password" minlength="6" maxlength="12" required>

  <label for="phone">Phone:</label>
  <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required>

  <label for="age">Age:</label>
  <input type="number" id="age" name="age" min="18" max="100" required>

  <input type="submit" value="Submit">
```

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

### Color contrast
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
it is important to be able to tab through a website because it is a key accessibility feature that enables users who have physical or mobility disabilities to navigate through the content using the keyboard.

Some users may not be able to use a mouse or other pointing device to interact with a website, so they rely on the keyboard as their primary means of navigation. By using the tab key to move through links, form fields, and other interactive elements on the page, users with physical or mobility disabilities can access the content and functionality of the website just like any other user.

Furthermore, tabbing through a website can also improve the efficiency of navigation for users who prefer using the keyboard or are simply more comfortable using it. It can be quicker to navigate through the website using the keyboard than constantly moving between the keyboard and the mouse.

Web designers and developers need to ensure that all interactive elements on the website can be accessed using the keyboard, and that the tab order follows a logical sequence that makes it easy for users to move through the content. This is typically achieved by following the accessibility standards set out in the WCAG (Web Content Accessibility Guidelines), which provide guidelines on keyboard accessibility, among other things.

In summary, being able to tab through a website is important because it enables users with physical or mobility disabilities to navigate through the content using the keyboard and improves the efficiency of navigation for all users. It is essential to follow accessibility standards to ensure that all users can access the content and functionality of the website.

My whole survey works without a mouse. You can use your keyboard to do this.

Tab: The focus must move through all interactive elements on the page
Shift + Tab: Same as the Tab key, but in reverse order
Enter/Return: Follows a link, activates (presses) a button
Spacebar: Toggles checkbox values, activates buttons
Arrow Keys: Scroll through content, move/select radio buttons within a group, sometimes move between interactive menu items or tabs.

***

### Screenreader
Screen readers are important because they enable users with visual impairments to access and navigate digital content on websites, mobile apps, and other digital interfaces. Screen readers are software programs that use synthesized speech or braille displays to read the text and other elements on the screen aloud, making it possible for users with visual impairments to understand the content and interact with the interface.

Screen readers are also beneficial for users without visual impairments, such as those with cognitive or learning disabilities. By using screen readers to read the content aloud, users can better comprehend the information and retain it.

Therefore, designing digital interfaces that are accessible to screen readers is essential for creating an inclusive digital environment that is accessible to everyone. By designing with accessibility in mind, developers can create digital experiences that are inclusive, user-friendly, and equitable for all

The first thing i noticed is that my file was english and that clashed with the screenreader, because my survey is in dutch. This caused the screenreader to read the Dutch text very weirdly. When i changed the language of the html files it was resolved. 

The rest of the screenreader test seemed to work fine.

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

## Goals
* you learn what Progressive enhancement is and how you can apply it.
* you learn to research, test and implement Browser Technologies as an enhancement.
* you learn how to do Feature Detection and what to do if a 'feature' does not work or is not supported.

***

## Sources
* https://developer.mozilla.org/en-US/docs/Web/CSS/:not
* https://www.w3schools.com/css/css3_mediaqueries_ex.asp
* https://developer.mozilla.org/en-US/docs/Web/CSS/:has
* https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
* https://www.w3schools.com/js/js_validation.asp
* https://www.the-art-of-web.com/html/html5-form-validation/
* https://www.freecodecamp.org/news/form-validation-with-html5-and-javascript/
* https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
* https://www.w3schools.com/html/html5_webstorage.asp
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

***
