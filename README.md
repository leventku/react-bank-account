# nopa-app

## Getting Started

```
	> npm install
	> npm start
```
navigate to `localhost:8080` in browser

## TODO: If more time is given, the following points should be done:
* write tests for components `BankSelector` and `BanksList`
* write tests for banksReducer to handle `BANK_ACTIVATED` and `BANK_CONFIRMED` and other missing actions
* write tests for userReducer to handle `USER_STARTED` and `BANK_SELECTED` and other missing actions types for user authentication
* write tests for action creators `confirmBank` and `activateBank`
* continue including rules under `desktop.less` for desktop version for missing parts
* separate styling files into individual components for scalibility
* add font family Montserrat and Source sans pro to assets
* add partners to `Home` (could be through redux store)
* implement bank logos into `BanksList`
* add routing to the application such as: `/home` `/bank` `/bank-selection` `/login` `/statement`
* add new `LoginForm` component using redux-form to handle validation
* add `loginUser` action creator to send login form data to server
* add `fetchStatement` action.
* handle if user authenticated by a new reducer which will assign appState.user.authenticated = true
* add `Statement` component. 
* if `appState.user.authenticated == true` show statement by `fetchStatement` action which will bring statement data over `STATEMENT_FETCHED` action type and updates `appState.user.statement`
