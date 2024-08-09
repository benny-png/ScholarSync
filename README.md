# typesense-instantsearch-demo

This is a demo that shows you a quick search interface that was built with [typesense-instantsearch-adapter](https://github.com/typesense/typesense-instantsearch-adapter).

Read the accompanying walk-through here: [https://typesense.org/docs/latest/guide/search-ui-components.html](https://typesense.org/docs/latest/guide/search-ui-components.html).

Here are more live demos that use the Instantsearch adapter: [https://typesense.org/docs/overview/demos.html](https://typesense.org/docs/overview/demos.html)

## Get started

To run this project locally, install [Docker](https://docs.docker.com/engine/install/) and [Docker Compose](https://docs.docker.com/compose/install/), start Typesense Server, populate the index and run the app server:

```sh
$ npm install
$ npm run typesenseServer
```

```sh
$ npm run populateTypesenseIndex
$ npm start
```

Open http://localhost:3000 to see your app.


fnm env --use-on-cd | Out-String | Invoke-Expression

fnm use --install-if-missing 20

npm start
