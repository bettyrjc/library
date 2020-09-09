FROM node:12

ENV TZ=America/Caracas
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN apt-get update
RUN apt-get install -y \
  build-essential \
  libfontconfig \
  vim \
  && rm -rf /var/lib/apt/lists/*


RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app


COPY . .

RUN yarn install --network-timeout=80000

EXPOSE 3000

CMD [ "yarn", "start" ]