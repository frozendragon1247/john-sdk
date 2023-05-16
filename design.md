# SDK Design

- All the API endpoints were made into its own class.
- Each of those classes contain their own methods that request the information needed based on the parameters given to them.
- Each of the options are dynamically placed on the request URL but are defaulted to a certain value or an empty string for faster and easier user input if they plan on adding any options.
- Custom error handling message for each method call for quicker debugging.
- Used Axios to request the data from the API rather than fetch due to its automatic transformation of JSON data.
