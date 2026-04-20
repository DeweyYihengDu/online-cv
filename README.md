# Yiheng Du Academic Homepage

This repository contains a Jekyll-based academic profile site for Yiheng Du.
It is designed as a modern research homepage rather than a traditional resume,
with sections for research profile, experience, education, projects,
publications, and skills.

## Content editing

Most site content lives in [`_data/data.yml`](_data/data.yml).

Update this file to change:

- sidebar profile and contact details
- research summary and featured links
- experience and education
- projects
- publications and preprints
- skills

## Local preview

Install Ruby and Bundler, then run:

```bash
bundle install
bundle exec jekyll serve
```

The site will be available at `http://localhost:4000`.

## GitHub Pages deployment

This repo includes a GitHub Actions workflow at
[`/.github/workflows/pages.yml`](.github/workflows/pages.yml) for automatic
deployment to GitHub Pages.

To publish:

1. Push the repository to GitHub.
2. In the repository settings, open `Pages`.
3. Set `Source` to `GitHub Actions`.
4. Push to `main` or `master`.

## Base URL configuration

If you deploy this site as a project page such as
`https://username.github.io/repository-name/`, update `baseurl` in
[`_config.yml`](_config.yml).

Example:

```yml
baseurl: "/repository-name"
```
