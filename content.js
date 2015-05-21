InboxSDK.load(1, 'search-suggestions').then(function(sdk) {
	sdk.Search.registerSearchSuggestionsProvider(function(query) {

		return [
			{
				name: 'Search Google for: "' + query + '"',
				externalURL: 'https://www.google.com/#q=' + query
			},
			{
				name: 'Search Bing for: "' + query + '"',
				externalURL: 'https://www.bing.com/search?q=' + query
			}
		];
	});
});
