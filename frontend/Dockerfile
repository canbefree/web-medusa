FROM node:18 as build

ARG GIT_USERNAME="gusest"
ARG GIT_EMAIL="example@example.com"

RUN git config --global user.name "${GIT_USERNAME}"
RUN git config --global user.email "${GIT_EMAIL}"


WORKDIR /workspace

COPY  package.json .
COPY  package-lock.json . 


COPY . .

RUN /bin/bash ./fastbuild.sh

RUN npm run build

FROM build as development

CMD ["npm","run","start"]

FROM nginx:1.21

ARG env="prod"

COPY ./conf /etc/nginx/conf.d/default.conf

COPY --from=build /workspace/build /www
