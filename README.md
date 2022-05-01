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

![Tests](https://github.com/vix993/shakemon-front/actions/workflows/e2e.js.yml/badge.svg)

## Description

I was tasked with creating an app that would return a description of a pokemon in the style of William Shakespeare.

The result of this prompt was [`Shakemon`](https://shakemon.vercel.app/).

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
