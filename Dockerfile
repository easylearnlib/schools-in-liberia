FROM node:17-alpine AS build
WORKDIR /src/frontend
ADD . .
RUN  set -exu \
    && apk update \
    && apk add py3-pip \
    && pip install gdown  \
    && gdown https://drive.google.com/uc?id=1Ig_GUZn222UGk81950Qg8_vjvsqSwm_d  \
    && mkdir data  \
    && mv schools.json data  \
    && npm ci \
    && npm run build \
    && rm -rf data \
    && :

FROM httpd:2.4
# Copy results from build environments
COPY --from=build /src/frontend/out/ /usr/local/apache2/htdocs/
