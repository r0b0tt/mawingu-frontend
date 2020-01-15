# Mawingu Frontend

## Running the application locally
1. Clone this repository.
2. Run `yarn install` to install dependencies.
3. In the project root, change the BASE URL endpoint in the `helpers/configjs` file.
4. Run `yarn start` to run the application.

## Deploying the application.
1. Run `yarn build` to create an optimized production build. The files will be stored in a folder named `build` in the root of the project.
2. The `build/` folder contains static files so you can serve them with a static file server such as [serve](https://github.com/zeit/serve).
3. After installing `serve`, you can run your production build using the following command:   
``` 
serve -s build
```
4. You can basically serve the files with any other static file server e.g AWS Amplify or Google AppEngine