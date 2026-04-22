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

# Angular pivot table | Flexmonster 3.0 (preview) sample project with Angular

Website: [prerelease.flexmonster.com](https://prerelease.flexmonster.com/?r=sample_30_ang)

[![Github Stars](https://img.shields.io/github/stars/flexmonster?style=social)](https://github.com/flexmonster) [![Twitter](https://img.shields.io/twitter/follow/Flexmonster?style=social)](https://x.com/Flexmonster)

Flexmonster 3.0 is an upcoming major update for [Flexmonster Pivot Table & Charts](https://www.flexmonster.com/?r=sample_30_ang), a powerful JavaScript pivot table component. Check out the [Flexmonster 3.0 roadmap](https://prerelease.flexmonster.com/roadmap?r=sample_30_ang#current) and keep track of the latest updates.

This repository contains a sample [Angular](https://angular.dev/) project for Flexmonster Pivot 3.0 (preview).

Table of contents:

* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [What is inside the project](#what-is-inside-the-project)
* [Related Flexmonster docs](#related-flexmonster-docs)
* [Support and feedback](#support-and-feedback)
* [Flexmonster licensing](#flexmonster-licensing)
* [Social media](#social-media)

## Prerequisites

- [Node.js 20 or later](https://nodejs.org/en/)

## Installation

1. Download a `.zip` archive with the sample project or clone it from GitHub with the following command:

```bash
git clone https://github.com/flexmonster/angular-sample.git && cd angular-sample
```

2. Install the npm dependencies described in `package.json`:

```bash
npm install
```

3. Run the sample project:

```bash
npm start
```

The project will be automatically opened in your browser.

## What is inside the project

The Angular sample project contains a basic example of Flexmonster Pivot 3.0 usage.

## Related Flexmonster docs

- [Embed the Flexmonster UI](https://prerelease.flexmonster.com/doc/angular/embed-flexmonster-ui/?r=sample_30_ang) — learn how to integrate Flexmonster into an Angular project.

## Support and feedback

In case of any issues, visit our [Troubleshooting](https://prerelease.flexmonster.com/doc/angular/troubleshooting/?r=sample_30_ang) section and look through the list of [common issues](https://prerelease.flexmonster.com/doc/angular/common-client-side-issues/?r=sample_30_ang).

To share your feedback or ask questions, contact our Tech team by raising a ticket on our [Help Center](https://www.flexmonster.com/help-center/?r=sample_30_ang).

## Flexmonster licensing

This sample project is released under the MIT license (free and open-source). Also, it uses the [Flexmonster 3.0 (preview) wrapper for Angular](https://github.com/flexmonster/angular), which is governed by the Flexmonster Software License Agreement: [https://www.flexmonster.com/software-license-agreement/](https://www.flexmonster.com/software-license-agreement/?r=sample_30_ang).

Flexmonster offers a 30-day free trial so you can evaluate our product. Pricing for commercial license models can be found on the [Flexmonster pricing page](https://www.flexmonster.com/pivot-table-editions-and-pricing/?r=sample_30_ang).

If you need any help with your license, fill out our [Contact form](https://www.flexmonster.com/contact-our-team/?r=sample_30_ang), and we will get in touch with you.

## Social media

Follow us on social media and stay updated on our development process!

[![YouTube](https://img.shields.io/badge/YouTube-red?style=for-the-badge&logo=youtube&logoColor=white&logoSize=auto)](https://youtube.com/user/FlexMonsterPivot) [![X](https://img.shields.io/badge/@Flexmonster-black?style=for-the-badge&logo=x&logoColor=white&logoSize=auto)](https://x.com/flexmonster) [![LinkedIn](https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/company/flexmonster)
