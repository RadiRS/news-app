# News Mobile App

This is a simple mobile app for search and read articles. In this app using public API from http://developer.nytimes.com/ and https://uinames.com/.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software

[NPM (Node Package Manager)](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm), [React Native CLI](https://facebook.github.io/react-native/docs/getting-started)

### Installing

Clone the repositori via http or ssh

```
git clone https://github.com/RadiRS/news-app your_app_name
```

```
git clone git@github.com:RadiRS/news-app.git your_app_name
```

Enter into project directory and install all dependencies

```
cd your_app_name && npm install
```

Create .env file and setup your HOST_API and API_KEY

```
API_HOST=https://api.nytimes.com/svc
API_KEY=laidfjoelkajsdoifjekl
```

Run the project via command line

```
npm run android   //android
npm run ios       //ios
```

### Demo

<div align="center">
  <img src="docs/01.gif"/>
  <img src="docs/02.gif"/>
</div>
&nbsp;
<div align="center">
  <img src="docs/03.gif"/>
  <img src="docs/04.gif"/>
</div>

## Running the tests

### Break down into end to end tests

For testing just run script command

```
npm run test
```

## Deployment

### Android

Setup your signed apk by follow [this](https://facebook.github.io/react-native/docs/signed-apk-android) tutorial and run this command

```
npm run build-android
```

## Built With

- [React Native](https://facebook.github.io/react-native/)
- [React Navigation](https://reactnavigation.org/)
- [Redux](https://redux.js.org/)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)
- [Redux Promise Middleware](https://github.com/pburtchaell/redux-promise-middleware)
- [Styled Components](https://www.styled-components.com/)
- [Axios](https://github.com/axios/axios)
- [Jest](https://jestjs.io)

## Authors

- **Radi Rusadi** - _Initial work_ - [Github](https://github.com/RadiRs)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc
