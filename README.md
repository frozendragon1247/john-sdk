# John Inzalaco - SDK

An SDK for the [Lord of the Rings](https://the-one-api.dev/) API.

## Installation

```
npm i john-sdk
```

## Usage

There are 2 different API endpoints to choose from:

- movie
- quote

## Rules

Each endpoint is set as a class. To use its methods, first create a new instance of the class you want and set as a variable.

All the endpoints except (book) require an access token. To obtain an access token, you must create an account on the [website](https://the-one-api.dev/).

- Pass the token as an argument when creating a new instance of an API class.

Invoke the methods to grab the data that you need then log the result to the console to view it.

To handle the async nature of grabbing the data, input a `.then` and `.catch` after the call.

- Within the `.then` console.log the response object and access its `data.docs` property to view the data.
- Within the `.catch` console.log an error message to display an errors if problem occurs.

### Movie API

There are 3 different methods to choose from:

- getAllMovies()

  - Is used to request all the movies from the API.
  - Has the option of a parameter (object) for inputting filters.

- getSpecificMovie(id)

  - Is used to request a specific movie based on the id.
  - Requires a valid id (string) of the movie.

- getSpecificMovieQuotes(id)
  - Is used to request all quotes of one specific movie.
  - Requires a valid id (string) of the book.
  - Has the option of a second parameter (object) for inputting filters.
  - Note: this only works for the Lord of the Rings trilogy.

### Quote API

There are 2 different methods to choose from:

- getAllQuotes()

  - Is used to request all the movie quotes from the API.
  - Has the option of a parameter (object) for inputting filters.

- getSpecificQuoteFromMovie(id)
  - Is used to request a specific movie quote based on the id.
  - Requires a valid id (string) of the quote.

### Options

There is an option for filtering your requests by adding pagination, sorting, and filters.

#### Rules for using options:

- Must be an object.
- For multiple filtering in one request, separate each key value filter pair by comma.
  - Ex: `{limit: 200, symbol: 'budgetInMillions<100'}`

### Pagination

| Property | Description                                                   | Type   | Default value | Example        |
| -------- | ------------------------------------------------------------- | ------ | ------------- | -------------- |
| limit    | Controls the maximum number of items that may be returned     | number | 100           | `{limit: 200}` |
| page     | Controls what page you want returned                          | number | 1             | `{page: 2}`    |
| offset   | Controls the starting point within the collection of resource | number | 0             | `{offset: 2}`  |

### Sorting

| Property | Description                                                | Type   | Default value | Example                |
| -------- | ---------------------------------------------------------- | ------ | ------------- | ---------------------- |
| asc      | Controls if what is returned should be in ascending order  | string | ''            | `{sort: 'name:asc' }`  |
| desc     | Controls if what is returned should be in descending order | string | ''            | `{sort: 'name:desc' }` |

### Filtering

| Property                | Description                                                       | Type   | Default value | Example                                                                                                 |
| ----------------------- | ----------------------------------------------------------------- | ------ | ------------- | ------------------------------------------------------------------------------------------------------- |
| match or negate match   | Returns data that matches or doesn't match the filter             | string | ''            | `{match: 'budgetInMillions=200'}, {match: 'budgetInMillions!=200'}`                                     |
| include or exclude      | Returns data that includes or excludes the filter                 | string | ''            | `{include: 'race=Hobbit'}, {include: 'race!=Hobbit'}`                                                   |
| exists or doesn't exist | Returns data that exists or doesn't exist according to the filter | string | ''            | `{exists: 'name=Isembold Took'}, {exists: 'name!=Isembold Took'}`                                       |
| regex                   | Returns data that passes or doesn't pass the regex                | string | ''            | `{regex: 'name=/foot/i'}, {regex: 'name!=/foot/i'}`                                                     |
| < or > or >=            | Returns data that is filtered from the symbol                     | string | ''            | `{symbol: 'budgetInMillions<100'}, {symbol: 'budgetInMillions>100'}, {symbol: 'budgetInMillions>=100'}` |

## Example Setup

```
import {
	MovieApi,
	QuoteApi,
  } from 'john-sdk'

// token must be in string format
const token = 'put-your-access-token-here';

const grabFromMovies = new MovieApi(token);

const grabFromQuotes = new QuoteApi(token);


//Example requests for movies
// grabFromMovies.getAllMovies()
// 	.then(response => console.log(response.data.docs))
// 	.catch(error => console.log('There was an error when grabbing all the movies!', error))

// grabFromMovies.getAllMovies({symbol: 'budgetInMillions>100'})
// 	.then(response => console.log(response.data.docs))
// 	.catch(error => console.log('There was an error when grabbing all the movies!', error))

// grabFromMovies.getSpecificMovie('5cd95395de30eff6ebccde58')
// 	.then(response => console.log(response.data.docs))
// 	.catch(error => console.log('There was an error when grabbing a specific movie!', error))

// grabFromMovies.getSpecificMovieQuotes('5cd95395de30eff6ebccde5c')
// 	.then(response => console.log(response.data.docs))
// 	.catch(error => console.log('There was an error when grabbing quotes from a specific movie!', error))

// grabFromMovies.getAllMovies({match: 'budgetInMillions=200'})
// 	.then(response => console.log(response.data.docs))
// 	.catch(error => console.log('There was an error when grabbing all the movies!', error))


// Example requests for quotes
// grabFromQuotes.getAllQuotes()
// 	.then(response => console.log(response.data.docs))
// 	.catch(error => console.log('There was an error when grabbing all the movie quotes!', error))

// grabFromQuotes.getSpecificQuoteFromMovie('5cd96e05de30eff6ebcce84b')
// 	.then(response => console.log(response.data.docs))
// 	.catch(error => console.log('There was an error when grabbing a specific quote from a movie!', error))
```
