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

📍 **[Separating API Layer from the app to improve maintainability](https://github.com/tnamdevnote/youtube-clone/blob/main/src/context/YoutubeAPIContext.tsx)**
- Use Dependency Injection pattern & React Context API to loosen up dependency between API layer and the application <br>

  <img height="500px" src="https://github.com/tnamdevnote/youtube-clone/assets/44216709/fc82bb79-2497-460f-b067-07aa80927632" />
  <img height="500px" src="https://github.com/tnamdevnote/youtube-clone/assets/44216709/45e93c73-eb46-4c6b-8a35-06cb188f66db" />

📍 **[Data fetching with ReactQuery](https://github.com/tnamdevnote/youtube-clone/blob/main/src/feature/SearchResult/SearchResult.tsx)**

📍 **[Importance of carefully organized color scheme](https://github.com/tnamdevnote/youtube-clone/blob/main/tailwind.config.cjs)**
- Reduce maintenance cost and allow quick modification while preserving consistency in look

📍 **[Responsive UI isn't always about using media query]()** 
- Observing resize event with React

📍 **[Compound component pattern to enhance reusability and scalability](https://github.com/tnamdevnote/youtube-clone/tree/main/src/components/Card)**
- Created reusable `<Card />` component that can be composed into different variations<br>
- `<Card />` has been used to build [`<RelatedCard>`](https://github.com/tnamdevnote/youtube-clone/blob/main/src/feature/Watch/RelatedCard.tsx), [`<ChannelCard />`](https://github.com/tnamdevnote/youtube-clone/blob/main/src/feature/Watch/ChannelCard.tsx), and [other cards](https://github.com/tnamdevnote/youtube-clone/blob/main/src/feature/Home/Home.tsx) used through out the app.

  <img height="300px" src="https://github.com/tnamdevnote/youtube-clone/assets/44216709/96a9b5c4-1a0c-4b1b-a48a-58ba1102741e" />
  <img width="500px" src="https://github.com/tnamdevnote/youtube-clone/assets/44216709/7c794c6c-5e8c-4380-9c30-7360026a1053" />
  <img width="500px" src="https://github.com/tnamdevnote/youtube-clone/assets/44216709/564fd03a-4ec1-431d-8ff3-5d253634118e" />


📍 **["Use device setting" option for dark mode](https://github.com/tnamdevnote/youtube-clone/blob/main/src/context/DarkModeContext.tsx)**

  ![Screen Recording 2023-10-05 at 10 09 19 PM](https://github.com/tnamdevnote/youtube-clone/assets/44216709/e20f779d-0e09-458a-aa67-f179fe747af4)

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
