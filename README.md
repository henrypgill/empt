
# How to run

- install packages
```bash
yarn
```

- start the app
```bash
yarn start
```
- The app can then be loaded on ```http://localhost:5173/```
- The JSON Server runs on ```http://localhost:3000/```

# Summary
I approached the challenge first by identifying exactly what features would be required and how they could be represented. This was then used to come up with some sketches of a UI design as well as a basic user flow.

The designs and user flow, as well as technical requirements of the app then influenced the decisions around technologies based on what would be needed.

Originally I intended to develop a Figma design/prototype from the UI/UX sketches, but due to the small size of the project and it being just myself working on it, I decided this would not be a good use of time.

## Technologies/Libraries Used
- React
- TypeScript
- JSON Server
- React Router
- TailwindCSS
- React Redux Toolkit
- Axios
- Ant Design

Typescript was chosen for type safety and improved developer experience, along with Node and Yarn for easy deployment and their popularity meaning more people are familiar with and able to use them. Originally I opted for bun as the runtime and package manager over Node and Yarn due to personally finding it to have a better developer experience, but then swapped it out for the reasons stated.

The nature of the app not needing to be crawled means it doesn't benefit from SSR, thus I opted for Vite over something like Next.js. Vite was also chosen as I have used it before, and it would allow me to set up the project more quickly, without sacrificing anything in the way of performance.

React Router was chosen as my intention was for the challenge to mimic being a part of a much larger piece of software, within which React Router would have been an appropriate choice. The same applies to Tailwind for the ease it's utility classes provide for styling. I opted for RTK over something such as MobX or Zustand because I have used it extensively and integrating something else would have been a poor use of time.

Ant Design was chosen so that the app matched the styling of Encords product, and becuase it was an opportunity to learn and use a new component libarary.


## Improvements
- Implement table scrolling and limit the height of the tables.
- implement searching through tables by file name and the clear all filters button.
- Overlays on the prediction would be interactive, showing alternative predictions for that image with lower scores.
- Functionality for regenerating the prediction for a given image.
- GitHub actions caching.
- Use environment variables and setup the API class to change it's base url based on whether its in the development/production environment
- Implement testing for functions and E2E testing for the app
- Enable a user to view the prediction for an already predicted image from the images tab directly.
- Functionality to edit the title and description of a prediction (and regenerate the prediction if they are used to predict the image).
- Prediction history for images that have been predicted more than once.
- Improve the ui of the upload modal to include drag and drop and better visual elements.
- Functionality for deleting predictions and images.
- Rewrite the code for the upload functionality to actually upload the image, and then provide feedback to the user on the progress and result.