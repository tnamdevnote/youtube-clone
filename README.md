<h1>Youtube Clone Project</h1> <p>
  <a href="https://app.netlify.com/sites/yt-demo/deploys" target="_blank">
    <img src="https://api.netlify.com/api/v1/badges/e0dd0732-ebc1-4ca9-b7c5-dbc6b094a8d3/deploy-status" alt="Netlify Status" />
  </a>
</p>
<p>
  A clone coding project that  <br>
  Built with <a href="https://react.dev/">React</a> and hosted with <a href="https://www.netlify.com/">Netlify</a>.
</p>
<h4>
<a href="https://yt-demo.netlify.app/">Click here to see the demo!</a>
</h4>

### Table of content

-   [About](#about)
-   [Features](#features)
-   [Things I've learned](#things-ive-learned)
-   [Installation & Set up](#installation--set-up)

<br>

---

<br>
<br>

# About

The youtube clone coding project created without tutorial.

# Features

# Things I've learned

# Installation

1. Install the required node packages for the project using [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable).

    ```
    yarn add
    ```

2. Once finished, you would need to configure `.env.local` file and add it to the root directory of the project. Within the `.env.local` file, add following code and save it. (make sure that `.gitignore` file ignore any `.env` or `.local` file format)

    ```
    VITE_YOUTUBE_API_BASE_URL=https://youtube.googleapis.com/youtube/v3
    VITE_YOUTUBE_API_KEY='[Paste your personal Youtube API Key here]'
    ```

    This information required to successfully pull the data from [Youtube Data API](https://www.google.com/search?q=youtube+data+api&oq=youtube+data+api&gs_lcrp=EgZjaHJvbWUyDwgAEEUYORiDARixAxiABDIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBCDI5OThqMGoxqAIAsAIA&sourceid=chrome&ie=UTF-8) endpoints. If you don't have your own youtube api key, follow the instruction [here](https://developers.google.com/youtube/v3/getting-started).

3. Start the project using `yarn dev`.
