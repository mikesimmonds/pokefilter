# PokeFilter

## Notes on development:

 - The Pokemon types where generated using chatGPT and carefully checked afterwards.
 - I did have codePilot and used it where sensible.
 - I ran out of time so the app is not feature complete, or refactored to a suitable standard.

## Notes on running out of time:
Unfortunately I ran out of time quite badly. I think it is worth explaining here my intentions going forward.
 - Finish off and refactor the filters
   - Currently the app gets all of the available filter types from the API - many of these are irrelevant as the 151 original pokemon may not have those attributes. It would be better to extract the attributes from the 151 pokemon themselves.
   - There is a lot of manual mapping of data in the filters section: Although this would refactored out before the feature is considered complete, it is much easier to refactor and improve the codebase once the feature is functional. Covering service methods in tests and then refactoring them can only be done once there is some working data to test with. If unit testing is not suitable - simply knowing that the feature should work gives you an endpoint to the refactoring process.
 - No search has been applied. The intention here was to have a search text input that would filter the pokemon in a similar way to the filters.
 - No styling has been applied, as I prefer to get the data sorted first - so I know for sure what I need to style.
 - A details view for each pokemon would be expected in normal circumstances.
 - I have come to realise: as the filter values would be extraced from the Pokemon themselves only the requests to get the list of Pokemon is actually required. In this specific case an APP_INITIALIZER function could be considered to fetch all the app-data, before the app loads, whilst displaying a application loading screen. Generally speaking delaying the app initialization in this way would not be sensible however.
 - The reactive nature of the data handling using RxJs is probably unnecessary in this case as it is a static API. I should have realised this earlier - in most cases API's are not static, so my habit is to handle things dynamically wherever possible.


All in all I am disappointed not to have a complete app available to show - but the timeframe was very tight but I hope the explainations above show my intent.

### Thanks for taking the time to look at this. Mike
