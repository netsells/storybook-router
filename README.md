# @netsells/storybook-router

This package provides an easy and convenient way to provide routes to your Vue-based stories.

## Installation

```sh
$ yarn add -D @netsells/storybook-router
``` 

## Usage

### Setup

Provide the decorator in your storybook decorators config:

```js
import withStorybookRouter from '@netsells/storybook-router';

export default [
    withStorybookRouter,
];
```

### Stories

To register a route for your stories, you can simply provide an array of routes to the `router.routes` parameter like so:

```js
export default {
    parameters: {
        router: {
            routes: [
                {
                    name: 'account',
                    path: '/account',
                },
            ],
        },
    },
};
```

You can also provide routes to specific stories if required: 

```js
story.parameters = {
    router: {
        routes: [
            {
                name: 'account',
                path: '/account',
            },
        ],
    },
};
```

#### Vue router config

You can adjust config values used in the set up of `VueRouter` by passing a `config` object in your parameters.

```js
export default {
    parameters: {
        router: {
            config: {
                mode: 'history',
            },
            routes: [],
        },
    },
};
```

### Testing

When used with the [@netsells/vue-storybook-test-utils](https://github.com/netsells/vue-storybook-test-utils) package, routes will automatically be registered for your tests based on the routes provided in this parameter. This means you don't have to maintain routes for both your tests and stories, and reduces the time spent setting up said tests.
