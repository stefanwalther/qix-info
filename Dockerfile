# -------------------------------------------------------------------
#                               BASE NODE
# -------------------------------------------------------------------
# We need full node as we need git to download from some GitHub repos.
# -------------------------------------------------------------------
FROM node:8.11.3@sha256:38953a117b8f794426429314126af19ff17bbfaa5449c1829b9a8412b8ef4536 as BASE
MAINTAINER Stefan Walther <swr-nixda@gmail.com>

ARG BASE_VERSION="0.1.1"

WORKDIR /opt/qix-info

RUN npm install qix-info@$BASE_VERSION -g

## -------------------------------------------------------------------
##                                RELEASE
## -------------------------------------------------------------------
FROM node:8.11.3-alpine@sha256:d3ecde67a30db99d10a32173cc2fee8766bb42430feb2f819179c8dcf494dac1 as RELEASE

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
