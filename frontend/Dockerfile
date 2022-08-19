FROM node:18 as build

ARG GIT_USERNAME="canbefree"
ARG GIT_EMAIL="4512198757@qq.com"

RUN git config --global user.name "${GIT_USERNAME}"
RUN git config --global user.email "${GIT_EMAIL}"


WORKDIR /workspace

COPY  package.json .
COPY  package-lock.json . 

RUN npm config set registry https://registry.npm.taobao.org & npm install

COPY . .

RUN npm run build

FROM build as development

CMD ["npm","run","start"]

FROM nginx:1.21

ARG env="prod"

COPY ./conf /etc/nginx/conf.d/default.conf

COPY --from=build /workspace/build /www
