FROM node:18 as build


ARG GIT_USERNAME="gusest"
ARG GIT_EMAIL="example@example.com"


WORKDIR /workspace

COPY  package.json .
COPY  package-lock.json . 

COPY . .

RUN /bin/bash ./fastbuild.sh


# RUN cat 
RUN echo export GIT_EMAIL=${GIT_EMAIL} \\n\
export GIT_USERNAME=${GIT_USERNAME} \\n\
> .init_dev_env.sh

RUN npm run build

FROM build as development

CMD ["npm","run","watch"]

FROM nginx:1.21

ARG env="prod"

COPY ./conf /etc/nginx/conf.d/default.conf

COPY --from=build /workspace/build /www
