# Shakémon:
## *If Shakespeare wrote the Pokédex*

## Content

1. [Description](#Motivation) 
2. [Requirements](#Requirements)
3. [ScreenStates](#API)
    - [HomePage](#Pokémon)
    - [SearchResult](#HealthCheck)

## Status

![Tests](https://github.com/vix993/shakemon-front/actions/workflows/e2e.js.yml/badge.svg)

## Description

I was tasked with creating an app that would return a description of a pokemon in the style of William Shakespeare.

The result of this prompt was [`Shakemon`](https://shakemon.vercel.app/).

This is a single page application that acesses the [`Shakemon API`](https://github.com/vix993/shakemon) and displays a Pokemon chosen by the user, along with a description translated to "Shakesperean language".

*You will need to run the backend* in order to use this tool. The repository containing the back end for this app can be acessed here: https://github.com/vix993/shakemon

You can run it with the following commands: 
- `docker build -t shakemon .`
- `docker run -p 3000:3000 shakemon`

Without docker:
- install [`node.js`](https://nodejs.org/en/download/)
- install [`yarn`](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)
- `yarn`
- `yarn dev`

## Requirements

Node,js or Docker.

## ScreenStates
## *HomePage*

### /
Before a search is executed.
### Screenshots
<img src="./presentation/homepage-mobile.png" />
<img src="./presentation/homepage-web.png" />

## *SearchResult*

### /
After executing a successful search.
### Screenshots
<img src="./presentation/searchresult-mobile.png" />
<img src="./presentation/searchresult-web.png" />

