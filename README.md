## Install
* git clone \{ rep url \}
* yarn install
* create .env if needed

## Development
* yarn start:dev<br>
~ or ~
* yarn build
* yarn start

## Staging and Production
* yarn build
<br>then
* npm start ~ or ~ node dist/main.js

~ TS to JS build is done with SWC. Declarations are done with TSC.
Because SWC doesn't support declarations.
~ If you don't need declarations (e.g. if your code is JS and not TS) then you can build without them.

# Future
* Source Maps