## Install

- git clone \{ rep url \}
- yarn install
- create .env if needed

## Development

- yarn start:dev<br>
  ~ or ~
- yarn build
- yarn start

## Staging and Production

- yarn build
  <br>then
- yarn start ~ or ~ node dist/main.js

~ TS to JS build is done with SWC. Declarations are done with TSC, and therefore slower.
That's because SWC doesn't support declarations.
~ If you don't need declarations (e.g. if you use this as a module and your code is JS without TS) then you can build without them, with yarn build:src.
