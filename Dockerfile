# STAGE 1: Base
FROM node:alpine AS base
WORKDIR /app

# STAGE 2: Development
FROM base AS development
COPY ./package.json ./yarn.lock ./tsconfig.json ./

# Install production dependencies and store them in tmp
RUN yarn --pure-lockfile --production
RUN cp -R node_modules /tmp/node_modules

# Install dev dependencies for building
RUN yarn install --pure-lockfile
COPY . .

# Stage 3: Build
FROM development AS builder
RUN yarn lint
RUN yarn build

# STAGE 4: Run
FROM base AS prod

WORKDIR /app

COPY --from=builder /tmp/node_modules ./node_modules
COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json ./

CMD ["yarn", "run", "start:prod"]x