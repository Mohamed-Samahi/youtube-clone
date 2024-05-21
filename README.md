# YouTube Clone App

The YouTube Clone App is an interactive and responsive web application that emulates the core features of YouTube. Users can search for videos, explore trending topics, and watch videos seamlessly without leaving the current page by hovering over the video thumbnail. They can also watch the video in a standalone video page, which has video suggestions beside the played video. The app integrates with the YouTube API for video retrieval and is built using React, Material-UI, Axios, React Player, and React Router. It is designed to be fully mobile-responsive, providing a seamless viewing experience on all devices.

## Features

- **Video Search**: Users can search for videos using the search bar.
- **Trending Videos**: Users can explore trending videos.
- **Seamless Video Playback**: Users can watch videos without leaving the current page by hovering over the video thumbnail.
- **Video Suggestions**: When watching a video in the standalone video page, users can see video suggestions beside the played video.

## Tech Stack

- **Frontend**: React.js, Material-UI
- **API Integration**: Axios
- **Video Playback**: React Player
- **Routing**: React Router

## Installation

To run the app locally, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/Mohamed-Samahi/youtube-clone.git
    ```

2. **Navigate to the root directory and install dependencies**:
    ```sh
    cd youtube-clone
    npm install
    ```

3. **Set up the Environment Variables**:
    - Create a `.env` file in the root directory of the project.
    - Add the following environment variables to the `.env` file:

      - `REACT_APP_X_RAPID_API_KEY`: Your RapidAPI key for accessing the YouTube API.
      - `REACT_APP_X_RAPID_API_HOST`: The host for the RapidAPI service (e.g., `youtube-v31.p.rapidapi.com`).
      - `BASE_URL`: The base URL for the YouTube API (e.g., `https://youtube-v31.p.rapidapi.com`).

    Example `.env` file:
    ```env
    REACT_APP_X_RAPID_API_KEY=your_rapidapi_key_here
    REACT_APP_X_RAPID_API_HOST=youtube-v31.p.rapidapi.com
    BASE_URL=https://youtube-v31.p.rapidapi.com
    ```

4. **Run the app**:
    ```sh
    npm start
    ```

## Usage

1. **Search for Videos**: Enter a search query in the search bar to search for videos.
2. **Explore Trending Videos**: Click on the "Trending" tab to explore trending videos.
3. **Watch Videos**: Hover over a video thumbnail to watch the video without leaving the current page.
4. **View Video Suggestions**: When watching a video in the standalone video page, view video suggestions beside the played video.

## Live Demo

View the live demo [here](https://youtube-clone-mohamed-samahi.vercel.app/).

## Contact

For any questions or feedback, please open an issue on GitHub or contact me at [mohamedsamahi.work@gmail.com](mailto:mohamedsamahi.work@gmail.com).

## More Projects

For more projects, visit my portfolio at [https://mohamed-samahi.vercel.app/](https://mohamed-samahi.vercel.app/).
