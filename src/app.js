/* global instantsearch */

import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter";

const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: "zRPkzYm50IlnE0YoV3c9vmkeJhGsgIuE",
    nodes: [
      {
        host: "x3zi0v6cr9kg1u7jp-1.a1.typesense.net",
        port: "443",
        protocol: "https",
      },
    ],
  },
  // The following parameters are directly passed to Typesense's search API endpoint.
  //  So you can pass any parameters supported by the search endpoint below.
  //  queryBy is required.
  //  filterBy is managed and overridden by InstantSearch.js. To set it, you want to use one of the filter widgets like refinementList or use the `configure` widget.
  additionalSearchParameters: {
    queryBy: "title,authors,name",  // Include 'name' in the query for full author names
    queryByWeights: "1,2,3",  // Prioritize 'name' over 'authors'
  },
});

const { searchClient } = typesenseInstantsearchAdapter;

const search = instantsearch({
  searchClient,
  indexName: "research_papers",
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: "#searchbox",
  }),
  instantsearch.widgets.configure({
    hitsPerPage: 8,
  }),
  instantsearch.widgets.hits({
    container: "#hits",
    templates: {
      item(item) {
        return `
        <div>
          <div class="hit-name">
            ${item._highlightResult.title.value}
          </div>
          <div class="hit-authors">
          ${item._highlightResult.authors.map((a) => a.value).join(", ")}
          </div>
          <div class="hit-publication-year">${item.year}</div>
          <div class="hit-citations">${item.citations} citations</div>
          <div class="hit-h-index">${item.h_index} H-index</div>
          <div class="hit-i10-index">${item.i10_index} I10-index</div>
          <div class="hit-title-cites">${item.title_cites} title cites</div>
          <div class="hit-journal">${item.journal}</div>
          <div class="hit-volume">${item.volume}</div>
          <div class="hit-pages">${item.pages}</div>
          <div class="hit-booktitle">${item.booktitle}</div>
          <div class="hit-organization">${item.organization}</div>
          <div class="hit-link"><a href="${item.link}">View Paper</a></div>
        </div>
      `;
      },
    },
  }),
  instantsearch.widgets.pagination({
    container: "#pagination",
  }),
]);

search.start();
