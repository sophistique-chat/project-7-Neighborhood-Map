# **Neighborhood Map: Your Ultimate Guide to Moscow (React)**

### This is to accomplish Project 7 for Udacity Nanodegree course (Front-End Web Dev)
**Files:**

| File type | Description | File name |
| ------ | ------ |------ |
| md | modified |  README.md |
| json | React supplied, modified | package.json, /public/manifest.json, package-lock.json |
| Folder | React supplied, modified | /public, /src|
| HTML | React supplied, modified | /public/index.html|
| CSS Files | React supplied, modified | /src/App.css, src/index.css  |
| JS | React supplied, modified | /src/index.js, /src/App.js, /src/App.test.js, registerServiceWorker.js |
| Images | React supplied, modified | /public/favicon.ico, /public/icon.png, /public/icon2.png |
| JS | React Component file | /src/Map.js, /src/List.js, /src/Marker.js, /src/Nav.js |

----
## **Requirements:**
----
##### _Develop a single page application featuring a map of your neighborhood or a neighborhood you would like to visit. Add functionality to this map including highlighted locations, third-party data about those locations and various ways to browse the content._
----
## **How to run the application:**
----
* Download all nessessary files from [here].
* Open your terminal.
* `cd` in the project directory.
* Install all project dependencies with `npm install`.
* Start the development server with `npm start`.
* With your server running, the project will automatically open at the URL: `http://localhost:3002`.
* On the page you will see an embedded Google Map along with navigation menu:
    * use hamburger icon in the left top corner of the page to see the list of popular places in Moscow, Russia;
        * every location in the list is clickable;
        * every location is supplied with basic information about it taken from Wikipedia using asynchronous API request;
    * clicking a location from the list also highlights a corresponding marker on the map;
    * see the address of a chosen location by simply clicking the corresponding marker on the map;
        * every marker is supplied with the address and type of the location taken from Foursquare using asynchronous API request
    * Enjoy the experience of learning about Moscow!

----
#### **NOTE!**

**The code was tested to the best of project author's ability using:**
- Browsers: Google Chrome, Google Chrome Canary and Opera;
- Mobile devices: Android powered, 4.8 & 5.0 inch screens;
 - **That does not unfortunately guarantee that your device will display things as expected**;
 - Elements on the page use the appropriate semantic elements and appropriate `ARIA roles`;
 - Appropriate tabindexes are specified, which allows to browse through the application using only a keyboard;
 - If the list item is clicked and showing the info about the location, the highlighted marker on the map will NOT show its info window unless the corresponding list item is collapsed (this is due to the 'toggle' nature of the synchronous animation between the list item and the marker);
 - Otherwise, the rest of the markers at the same time are functioning as expected;
 - The application is supplied with a service worker, in order to get all the benefits of the responsive app, please create a production build by running `npm run build` in your terminal.
----

----
## **External libraries & sources:**
----
- #### [React]
- #### [Google Map React] to initialize the map
- #### [Google Fonts]
- #### [Foursqure]
- #### [Wikimedia]

----
----
## **Useful Sources:**
----
- [Stackoverflow]
- [W3Schools]
- [MDN]
- [Dillinger]
- [Google]
- [Udacity project guide]
- [WAI-ARIA]
----
**All resources and ideas that needed attribution were either mentioned above or added directly into the code.**

----
_Developed by a proud Grow with Google scholarship recipient (USA, 2018)_

----
[Udacity project guide]: <https://review.udacity.com/#!/rubrics/1351/view>
[here]: <https://github.com/sophistique-chat/project-7-Neighborhood-Map>
[Stackoverflow]: <https://stackoverflow.com/>
[W3Schools]: <www.w3schools.com>
[MDN]: <https://developer.mozilla.org/>
[Dillinger]: <https://dillinger.io/>
[Google]: <www.google.com>
[React]: <https://reactjs.org/>
[Google Fonts]: <https://fonts.google.com/specimen/Bentham>
[Google Map React]:<https://github.com/google-map-react/google-map-react>
[WAI-ARIA]:<https://www.w3.org/TR/wai-aria-practices-1.1/#intro>
[Foursqure]:<https://foursquare.com/>
[Wikimedia]:<https://www.wikimedia.org/>
