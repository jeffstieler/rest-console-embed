# REST Console Embed

WordPress shortcode plugin providing an embeddable console for exploring REST APIs in your content.

Based on Automattic's [WordPress.com Console](https://developer.wordpress.com/docs/api/console/).

### Using the shortcode

`[rest-console api_root="http://path/to/api" auth="none" width="100%" height="500px"]`

* `api_root`
  * Root URL of the target API.
* `auth`
  * "none", "oauth", or "proxy".  Using values other than "none" is an exercise left to the reader. ;)
* `width`
  * Width of the containing div, defaults to `100%`.
* `height`
  * Height of the containing div, defaults to `500px`.

### API Compatibility

For the console to work properly, the target API will need to:

* Respond to versioned requests, specified in the URL (e.g. `/api/v1/endpoint`)
* Expose a `/versions` endpoint to provide metadata about the API's different versions
  * See [`https://public-api.wordpress.com/rest/v1.1/versions`](https://public-api.wordpress.com/rest/v1.1/versions)
* Expose a `/help` endpoint to provide metadata about the API's endpoints
  * See [`https://public-api.wordpress.com/rest/v1.1/help`](https://public-api.wordpress.com/rest/v1.1/help) (make sure to request with `Accept: application/json` header)