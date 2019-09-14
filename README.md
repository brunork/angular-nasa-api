# Angular 8 + NASA Api Integration

## Get Your API Key

https://api.nasa.gov/index.html#apply-for-an-api-key

## Setup you API in the project
Go to `environments/environment.ts` and setup a url of the api
`
export const environment = {
  production: false,
  url:  'https://api.nasa.gov/planetary/apod?api_key='
};
`

Go to `shared/services/home.service.ts` and insert your key.

`
  private apiKey = 'YOUR_API_KEY_HERE';
`

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


