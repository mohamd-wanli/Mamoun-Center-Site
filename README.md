# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

## WordPress news

The homepage reads the latest three published WordPress posts in the `news`
category. The newest story is displayed as the large featured card. Article
links open the full post on WordPress; article pages are not rendered by React.

### Connect later

1. Copy `.env.example` to `.env.local` (already ignored by Git).
2. Set `VITE_WORDPRESS_SITE_URL` to the public WordPress installation URL,
   e.g. `https://cms.example.com`. Include any installation subdirectory, but
   do not append `/wp-admin` or `/wp-json`.
3. In WordPress, create a category named `أخبار المركز` with slug `news`.
   A different slug can be set with `VITE_WORDPRESS_NEWS_CATEGORY`.
4. Publish a post in that category, with a title, excerpt, and featured image.
5. Restart the development server. For deployment, set the same public
   environment variables before running `npm run build`, then deploy the build.

Only changing the configuration requires a new build. Publishing news does not:
news is fetched each time the homepage mounts, subject to WordPress/CDN caching.
Visitors already on the page should reload to see newly published stories.

WordPress must expose its public `/wp-json/wp/v2/categories` and
`/wp-json/wp/v2/posts` endpoints. If the frontend uses a different origin,
verify the host allows browser requests from the frontend origin. Use HTTPS
for WordPress when the frontend is served over HTTPS. A private site or a
security plugin that blocks the public REST API requires hosting configuration.
Test the final host before deployment; no live WordPress URL has been configured.

No plugin, password, application password, or API token is required for public
news. Vite environment variables are visible to website visitors: never put
credentials in them. Staff sign in to WordPress separately using an Editor
account created under Users. This integration does not create staff accounts.

With no site URL configured, the existing local news/empty state remains.
A missing category or no published posts produces the empty state. Network or
API failures show an Arabic retry message, rather than claiming there is no news.
