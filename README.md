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


