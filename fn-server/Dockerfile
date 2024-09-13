FROM denoland/deno:latest

EXPOSE 9798

COPY . /usr/src/app

WORKDIR /usr/src/app

RUN deno cache app.ts

CMD ["run", "--allow-all", "app.ts"]
