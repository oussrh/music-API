# AJAX-music-search

### Overview
The learning objective for the exercise is to make use of AJAX (asynchronous javascript) to fetch- and display data and you'll create a simple youtube clone with data from this [API](https://musicdemons.com/api).

### Objectives
There's **two main user stories** to this app:

* A user can search for artists by name and they are displayed as a list so the user can see the search result
* A user can click a search result item and it displays a list of related youtube videos for the user to watch/listen


### Search with autocomplete
Create a search field that allows the users to search for artist. The user will see autocomplete suggestions based on his input.

* Have a look at the [API](https://musicdemons.com/api) and look for the **autocomplete method**.
* Use the user [input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/search) to fetch the autocomplete options. Try to log the results to your console when the user presses enter in the input field.
* Next, display the fetched data in a clickable list under the search field

![search-feature](https://i.gyazo.com/c082c4ba5eb929a45ead06890554a24c.gif)

#### Select Artist
Upon selecting an artist out of the suggestion list, display a list of videos from the selected artist

* Find the correct method to fetch the songs of a selected artist in the [API](https://musicdemons.com/api).
* Try to log the data of the selected artist to the console.
* Dynamically create the list of videos

![search-feature](https://i.gyazo.com/476d5da034d8b3ce8b108e9e3a2dae07.gif)

#### Online example
[Example using fetch](https://thijs-lambert.github.io/AJAX-music-search/)

#### How to get started

Start with the provided boilerplate. The boilerplate has a JS folder which contains a `script.js` that has pre-made functions for the foundations of the project and guiding you in the right direction. And also a css folder with some basic styling to get you started.

### Completion checklist

- [ ] Create an autocomplete search with your AJAX knowledge
- [ ] Display the autocomplete options in a clickable list
- [ ] Allow the user to select an artist
- [ ] Fetch and display the available youtube videos for the selected artist
- [ ] Optional: using the YouTube player API display the lyrics of the song that is playing

