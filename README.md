# Rails and React Heroku Demo App

This app uses a Rails API and React frontend that can be deployed to a single
domain. For ease of deployment, both projects are contained in the same
repository. All React code is in the `/client` directory during development.

When the application is deployed, the production version of the React application
will be generated on the server and placed in the `public` directory of the Rails
application, where we can use Rails to serve it.

## Setup

To run the app locally, install the Rails and React dependencies and set up the
database:

```sh
bundle install
rails db:create db:migrate db:seed
npm install --prefix client
```

Install Heroku CLI (if you don't already have it):

```sh
brew tap heroku/brew && brew install heroku
```

## Running the App in Development

Configuration for running in development is in the `Procfile.dev` file. Run this
command to start the frontend and backend servers:

```sh
heroku local -f Procfile.dev
```

In development, requests from the React app are
[proxied][create-react-app proxy], so you can write something like this (without
using a domain):

```js
fetch("/me").then((r) => r.json());
```

Since our deployed app will run on the same domain, this is a good way to
simulate a similar environment in development.

## Deploying

Login to Heroku:

```sh
heroku login
```

Create new Heroku app:

```sh
heroku create
```

Add [buildpacks][buildpacks] for Heroku to run:

- Rails app on Ruby
- React app on Node

```sh
heroku buildpacks:add heroku/nodejs --index 1
heroku buildpacks:add heroku/ruby --index 2
```

Deploy:

```sh
git push heroku main
```

## Code Explanations

There are a few areas of the code that differ from the typical Rails API
setup that merit explanation.

### Cookies/Sessions Setup

By default, when generating a new Rails app in API mode, the middleware for
cookies and sessions isn't included. We can add it back in (and specify the
`SameSite` policy for our cookies for protection):

```rb
# config/application.rb

# Adding back cookies and session middleware
config.middleware.use ActionDispatch::Cookies
config.middleware.use ActionDispatch::Session::CookieStore

# Use SameSite=Strict for all cookies to help protect against CSRF
config.action_dispatch.cookies_same_site_protection = :strict
```

We also need to include helpers for sessions/cookies in our controllers:

```rb
# app/controllers/application_controller.rb

class ApplicationController < ActionController::API
  include ActionController::Cookies
end
```

Now, we can set a session cookie for users when they log in:

```rb
def create
  user = User.find_by(username: params[:username]).authenticate(params[:password])
  session[:user_id] = user.id
  render json: user
end
```

### Deploying Setup Explained

We'll deploy our frontend and backend to Heroku on one single app. There are a
couple key pieces to this configuration. First, the [`Procfile`][`procfile`]:

```txt
web: bundle exec rails s
release: bin/rake db:migrate
```

This gives Heroku instructions on commands to run on **release** (run our
migrations), and **web** (run rails server).

Second, the `package.json` file in the **root** directory (not the one in the
**client** directory):

```json
{
  "name": "phase-4-deploying-app-demo",
  "description": "Build scripts for Heroku",
  "engines": {
    "node": "16.x"
  },
  "scripts": {
    "build": "npm install --prefix client && npm run build --prefix client",
    "clean": "rm -rf public",
    "deploy": "cp -a client/build/. public/",
    "heroku-postbuild": "npm run clean && npm run build && npm run deploy"
  }
}
```

The [`heroku-postbuild`][`heroku-postbuild`] script will run when our app has
been deployed. This will build the production version of our React app. It does
the following:

- removes any old versions of the React code by deleting the `public` directory
- installs the frontend dependencies with `npm install`
- builds a production version of the React application with `npm build` in the
  `client/build` directory
- copies the built version of the React code into the `public` directory

When a request comes to our server, we can decide if it's request for an API
resource, or a request to view the React application. If it's an API request, we
can send back JSON data from the controller. Otherwise, we can send back the
`index.html` file from our `public` directory and run the React application.

### React Router

For our deployed app, we need non-API requests to pass through to our React
application. Otherwise, routes that would normally be handled by React Router
will be handled by Rails instead.

Setup routes fallback (make sure this is the last route defined in the
`routes.rb` file):

```rb
# config/routes.rb
get '*path', to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
```

Add controller action:

```rb
class FallbackController < ActionController::Base

  def index
    render file: 'public/index.html'
  end
end
```

Note: this controller must inherit from `ActionController::Base` instead of
`ApplicationController`, since `ApplicationController` inherits from
`ActionController::API`. API controllers can't render HTML. Plus, we don't need
any of the auth logic in this controller.

[`samesite` explained]: https://web.dev/samesite-cookies-explained/
[`samesite` owasp]: https://owasp.org/www-community/SameSite
[`samesite` and csrf]: https://security.stackexchange.com/questions/121971/will-same-site-cookies-be-sufficent-protection-against-csrf-and-xss
[`foreman`]: https://github.com/ddollar/foreman
[create-react-app proxy]: https://create-react-app.dev/docs/proxying-api-requests-in-development/
[buildpacks]: https://devcenter.heroku.com/articles/using-multiple-buildpacks-for-an-app
[`procfile`]: https://devcenter.heroku.com/articles/procfile
[`heroku-postbuild`]: https://devcenter.heroku.com/articles/nodejs-support#customizing-the-build-process
