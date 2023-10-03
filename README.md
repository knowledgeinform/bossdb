<h1 align=center><a href="https://bossdb.org">bossdb.org</a></h1>

|  |  |
|--|--|
| [![Deploy Production Website](https://github.com/aplbrain/bossdb.org/actions/workflows/main.yml/badge.svg)](https://github.com/aplbrain/bossdb.org/actions/workflows/main.yml) | The status of the website deploy. If this is red, new merges may not be deployed correctly! |
| [![Compress Images](https://github.com/aplbrain/bossdb.org/actions/workflows/optimize-images.yml/badge.svg)](https://github.com/aplbrain/bossdb.org/actions/workflows/optimize-images.yml) | If this is red, there may be images that are larger than necessary, causing a reduction in SEO. |

# Project Edits

For most project-landing-page editing needs, check out `src/projects.js`, which should be self-explanatory. No new routes need to be created. You can also edit `src/events.js` and `src/publications.js`.

The same should be true of papers/publications, videos, and tools.

## Project Hero Images

To create a project hero image, take a screenshot of the data (generally, in neuroglancer)  with all the bells and whistles and channels enabled (i.e. if we have meshes and segmentation, it's best to render them). If there are images requested by the collaborator/data-creator team, use those — but be aware that images that are included in publications (post-preprint) may have associated copyright / usage restrictions, so don't grab something from a paper without asking who owns the usage rights.

### Hero and image checklist

* Images should be approximately 800px wide at the smallest
* All images should be jpeg encoded in order to reduce filesize
* No single image should be more than 500kb

# Other edits

For now, get in touch with [jordan](mailto:jordan.matelsky@jhuapl.edu) if documentation here doesn't do the trick. This repository is a "vanilla" Vue.js project, so if you are familiar with Vue (or perhaps even React or other component-based libraries) you should be able to improvise.

# Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

## To Deploy a Local Build

### 1. Build the site

```
yarn run build
```

### 2. Deployment

You can deploy to this repo just by pushing to the master branch (which you can do by opening a PR and merging it after review.)

You can also deploy with [colocart](https://github.com/aplbrain/colocart) from a local machine:

You must have a colocart config file (`colocart.cfg`) for this site. If you don't have it, ask Jordan Matelsky for a copy. **You WILL NOT be able to deploy the site without this file.**

```
# set this to the right aws profile for your user:
AWS_PROFILE=bossdb colocart deploy .
```
