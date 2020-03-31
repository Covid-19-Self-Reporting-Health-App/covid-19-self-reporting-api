# COVID-19 Self-Reporting API

## Requirements

### Containerized Edition

- [Docker](https://www.docker.com/)

### Local

- [NodeJS](https://nodejs.org/)
- [Redis](https://redis.io/)

## Running in Docker

```bash
$ docker-compose up -d
Starting covid-19-self-reporting-api_redis_1 ... done
Starting covid-19-self-reporting-api_app_1   ... done
```

## Running Locally

```bash
$ yarn
# yarn output
$ yarn watch
Server listening on port 3000
Your secret authorization token is [SECRET_TOKEN]
```
