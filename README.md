## Vinilus - Store

- E-commerce for selling Vinyls Records.

## Installing

- Fork and clone the project
- Run npm install
- Run npm start , that will start the app on localhost:3000
## Deploy https://TianSeb.github.io/vinilus-store

- Configured Pipeline to build in GH Pages on every deploy (npm run build)
- If you want to set your own Pipeline:
    - Change "homepage" field in package.json, you may also have to set the configurations on your own repository.

## Dependencies

- react-bootstrap for a quick responsive design
- react-router-dom for navigation
- 

## App 

- To simulate a call to a Database, I´m using Promises (both ways, with async and then) with 2s delay. 

- Separation of concerns: I´m setting each set of elements into components folders, except the static / generic ones.

- For now, Database is on a js file, in DATA folder.