# joni.cool

Within this document, the website [joni.cool](joni.cool) will be discussed. If you're reading this you might be interested in working with me. If so, feel free to shoot me an email at [moin@joni.cool](mailto:moin@joni.cool).

## Introduction

The website is a [React](https://reactjs.org/) application written in [TypeScript](https://www.typescriptlang.org/). You can reach the entire content of this site by scrolling so there is no router or anything of that sort. The site is responsive and has three breakpoints.

## Structure

To strucutre the components, I followed Brad Frost's [atomic design](http://bradfrost.com/blog/post/atomic-web-design/). Since there is only one page, I skipped the templates. The following overview is there to help you to navigate through the code. For the sake of simplicity, some mandatory files (like a package.json, .gitignore, ...) are left out.

```
├── dist                    # this is where the builds are stored, won't be there before your first build
├── public                  # all of the files that need to accompany the bundled app go here
├── src                     # contains the source code
    ├── atoms
    ├── constants           # contains some constants like colors and font sizes
    ├── molecules
    ├── organisms
    ├── services            # some logic that may be shared among components
    ├── translations        # json files for translating the site
    ├── utility             # some utility functions
    ├── app.tsx             # this where the structure of the application is defined
    ├── index.tsx           # the starting point of the application
└── README.md               # this is the file you're reading right now ;)
```

## Prerequisites

First things first, you'll need to have [node and npm](https://nodejs.org/en/) installed, preferably the LTS version. Clone the repository and run `yarn`/`npm i` to install the dependencies.

## Run

Run `yarn dev`/`npm run dev` to run the application locally. This will create a dev server that hosts the site on `localhost:3000`. Additionally, this will hot reload the page, if you're making changes to the source code.

## Build

Run `yarn build`/`npm run build` to create a build in the `dist` directory.

## Deploy

To deploy the site, run `yarn deploy`/`npm run deploy`.

> **Note:** Since the script targets an S3 bucket you'll probably don't have any writing access to, this won't work out of the box. If you really won't to deploy the site, you'd have create your own bucket and change the script in the `package.json` accordingly.
