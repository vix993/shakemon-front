# Shakémon:
## *If Shakespeare wrote the Pokédex*

## Content

1. [Description](#Motivation) 
2. [Requirements](#Requirements)
3. [API](#API)
    - [Pokémon](#Pokémon)
    - [HealthCheck](#HealthCheck)
4. [Additional Notes](#API)

## Status

![Tests](https://github.com/vix993/project-lifeline/actions/workflows/test.yml/badge.svg)  ![Health Check](https://github.com/vix993/project-lifeline/actions/workflows/health_check.yml/badge.svg)

## Description

I was tasked with creating an app that would return a description of a pokemon in the style of William Shakespeare.

The result of this prompt was [`Shakemon`](www.example.com).

This is a single page application that acesses the [`Shakemon API`](https://github.com/vix993/shakemon) and displays a Pokemon chosen by the user, along with a description translated to "Shakesperean language".

The repository containing the back end for this app can be acessed here: https://github.com/vix993/shakemon

You can run it with the following commands: 
- `docker build -t shakemon .`
- `docker run -p 3000:3000 shakemon`

Without docker:
- install [`node.js`](https://nodejs.org/en/download/)
- install [`yarn`](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)
- `yarn`
- `yarn dev`

## Requirements

Go or docker.

## Api
## *Pokémon*

#### GET
Get the Shakespearean description of a pokémon.
#### Endpoint
`GET /pokemon/{name}`
#### Response parameter
##### 200
`{
    "name": "charizard",
    "description": "Charizard is a very stout fire type pokemon. 't is number 6 in the pokedex and hath an average weight of 905. 't is a valorous reinforcement to thy team and is able to learneth attacks like bodkins-dance,  scary-visage and facade. Thy opponents wilt beest regretting facing off with thee. Thee hath't to catcheth those folk all!",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
}`
## *HealthCheck*

#### GET
Get server status.
#### Endpoint
`GET /health-check`
#### Response parameter
##### 200
`{
    "message": "server is running",
}`


# Next.js + Cypress

This example shows how to configure Cypress to work with Next.js.

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) or preview live with [StackBlitz](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-cypress)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-cypress&project-name=with-cypress&repository-name=with-cypress)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-cypress with-cypress-app
# or
yarn create next-app --example with-cypress with-cypress-app
# or
pnpm create next-app -- --example with-cypress with-cypress-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
