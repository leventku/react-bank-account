# nopa-app

## Getting Started

```
	> npm install
	> npm start
```
navigate to `localhost:8080` in browser

## TODO: If more time is given, the following points should be done:
* fix svg and png proplem with jest test runner
* write tests for components BankSelector and BanksList
* write tests for banksReducer to handle `BANK_ACTIVATED` and `BANK_CONFIRMED` and other missing actions
* write tests for userReducer to handle `USER_STARTED` and `BANK_SELECTED` and other missing actions
* write tests for action creators `confirmBank` and `confirmBank`
* include media query for min-width: 360px for desktop version for missing parts
* separate styling files to individual components
* add font family Montserrat and Source sans pro to assets
* add partners to Home (could be even through redux store)
* implement bank logos into BanksList
* add routing
* add LoginForm component using redux-form to handle validation
* add loginUser action
* add fetchStatement action
* handle if user authenticated by a new reducer which will add appState.user.authenticated = true
* add Statement component. if appState.user.authenticated == true show statement by
