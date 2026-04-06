## Setup

### Configure npm authentication

This project uses the Flexmonster package from the GitHub Package Registry, which requires authentication.

1. Copy `.npmrc.template` to `.npmrc`:
   ```bash
   cp .npmrc.template .npmrc
   ```
2. Replace `${GITHUB_TOKEN}` in `.npmrc` with your personal GitHub token that has `read:packages` scope:
   ```
   //npm.pkg.github.com/:_authToken=YOUR_TOKEN_HERE
   ```
   Or export it as an environment variable so the template works as-is:
   ```bash
   export GITHUB_TOKEN=YOUR_TOKEN_HERE
   ```

> `.npmrc` is listed in `.gitignore` — do not commit it.
