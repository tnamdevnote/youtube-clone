<h1><img src="src/assets/logo/yt-favicon_rgb.png"/> Youtube Clone Project</h1> <p>

  <a href="https://react.dev/">
    <img src="https://img.shields.io/badge/React-18.2.0-blue" />
  </a>
  <a href="https://app.netlify.com/sites/yt-demo/deploys" target="_blank">
    <img src="https://api.netlify.com/api/v1/badges/e0dd0732-ebc1-4ca9-b7c5-dbc6b094a8d3/deploy-status" alt="Netlify Status" />
  </a>
</p>
<p>
  A Youtube clone coding project that built with <a href="https://react.dev/">React</a> and hosted with <a href="https://www.netlify.com/">Netlify</a>.
</p>
<h4>
  <a href="https://yt-demo.netlify.app/" target="_blank">Click here</a> to see the demo!
</h4>

![Screen Recording 2023-10-05 at 9 41 45 PM](https://github.com/tnamdevnote/youtube-clone/assets/44216709/0e4b5717-2f2c-4071-9551-78041d1b0fa1)

### Table of content

-   [About](#about)
-   [Features](#features)
-   [Things I've learned](#things-ive-learned)
-   [Installation](#installation)
-   [Todo](#todo)

<br>
<br>

# About

### Goal

The main goal of this project was to apply the concepts and lessons I learned about React and Frontend Development in general.
I wanted to challenge myself and see if I could recreate some of the features from [Youtube](https://www.youtube.com/) on my own, <b>without relying on any tutorials</b> <br>

Following are the areas that I wanted to focus on practicing:

-   Implementing clean, polished, and responsive user interface
-   Managing color scheme and themes effectively to achieve consistent look and feel of the overall design
-   Data fetching and handling API endpoints efficiently in the application
-   Apply React Context API and useReducer to handle complicated state management

### Tech Stack

##### Frameworks & Libraries

-   Netlify
-   Vite
-   React

##### Styling

-   TailwindCSS

##### Data Fetching

-   react-query
-   axios

# Features

Following are the list of features within the scope of this project:

#### Responsive Grid Layout

![Screen Recording 2023-10-05 at 10 01 47 PM](https://github.com/tnamdevnote/youtube-clone/assets/44216709/63ff4748-ed9f-4c16-ab36-093b9df161df)

#### Dark Mode

-   Includes option for user's device theme

![Screen Recording 2023-10-05 at 10 09 19 PM](https://github.com/tnamdevnote/youtube-clone/assets/44216709/e20f779d-0e09-458a-aa67-f179fe747af4)

#### Browsing & Streaming

-   Search clips
-   Click on the video cards to play the clips
-   Display list of related videos (update: replaced w/ channel videos)
-   Display channel info and subscriber counts
-   Show more info card

![Screen Recording 2023-10-05 at 10 23 57 PM](https://github.com/tnamdevnote/youtube-clone/assets/44216709/72000151-79cd-47c1-aedc-98742dc7ef74)

<em>\*The features of this project is based on [Youtube](https://www.youtube.com/) on March 7th, 2023.</em>

# Things I've learned

### Key Takeaways

1. **Separating API Layer from the app to improve maintainability** - Dependency Injection & React Context API
2. **Data fetching with ReactQuery (feat. caching)**
3. **Importance of carefully organized color scheme** - Reduce maintenance cost and allow quick modification while preserving consistency in look
4. **Responsive UI isn't always about using media query** - Observing resize event with React
5. **Compound component pattern to enhance reusability and scalability**
6. **"Use device setting" option for dark mode**

# Installation

1. Install the required node packages for the project using [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable).

    ```
    yarn add
    ```

2. Once finished, be sure to add `.env.local` to the root directory of the project. Within the `.env.local` file, add following code and save it. (make sure that `.gitignore` file ignore any `.env` or `.local` file format)

    ```
    VITE_YOUTUBE_API_BASE_URL=https://youtube.googleapis.com/youtube/v3
    VITE_YOUTUBE_API_KEY='[Paste your personal Youtube API Key here]'
    ```

    This information required to successfully pull the data from [Youtube Data API](https://www.google.com/search?q=youtube+data+api&oq=youtube+data+api&gs_lcrp=EgZjaHJvbWUyDwgAEEUYORiDARixAxiABDIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBCDI5OThqMGoxqAIAsAIA&sourceid=chrome&ie=UTF-8) endpoints. If you don't have your own youtube api key, follow the instruction [here](https://developers.google.com/youtube/v3/getting-started).

3. To start the project run:

    ```
    yarn dev
    ```

# TODO

-   [x] Replace deprecated API parameter(`relatedToVideoId`)
    -   As of August 7th, 2023, [Youtube](https://developers.google.com/youtube/v3/revision_history#june-12,-2023) have discontinued their support for `relatedToVideoId` parameter from `search.list` method and it's no longer part of public API. Due to this change, I've redirected API call to retrieve a list of videos from a given channel with `channelId` instead of `relatedToVideoId`.
-   [ ] Add proper loading fallback and 404 page
-   [ ] Fix encoding issues "&#39" on video title
