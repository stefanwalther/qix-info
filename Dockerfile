# -------------------------------------------------------------------
#                               BASE NODE
# -------------------------------------------------------------------
# We need full node as we need git to download from some GitHub repos.
# -------------------------------------------------------------------
FROM node:8.9.4@sha256:068a0746d03a072cddbe8c49082bcf80ede9d5f57839ad775df85d07228b2e6d as BASE
MAINTAINER Stefan Walther <swr-nixda@gmail.com>

ARG BASE_VERSION="0.1.1"

WORKDIR /opt/qix-info

RUN npm install qix-info@$BASE_VERSION -g

## -------------------------------------------------------------------
##                                RELEASE
## -------------------------------------------------------------------
FROM node:8.9.4-alpine@sha256:14b627a91c92566d489d9d9073e465563be0e0c598c9537aa32e871a812018f5 as RELEASE

RUN apk update
RUN apk add bash

# Enables colored output
ENV FORCE_COLOR=true

WORKDIR /opt/qix-info

# OK, here we have to copy the symbolic link
# use npm config get prefix to get the node.js prefix https://stackoverflow.com/questions/18383476/how-to-get-the-npm-global-path-prefix

# Create the symbolic link
RUN ln -s /usr/local/lib/node_modules/qix-info/bin/cli.js /usr/local/bin/qix-info

# Copy the global packages previously being installed
COPY --from=BASE /usr/local/lib/node_modules /usr/local/lib/node_modules

COPY ./docker-entrypoint.sh /

ENTRYPOINT ["/docker-entrypoint.sh"]
