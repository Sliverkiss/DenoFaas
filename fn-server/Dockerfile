FROM denoland/deno:latest
EXPOSE 1993
COPY . /usr/src/app
RUN deno cache app.ts
CMD ["run", "--allow-net", "--allow-read", "app.ts"]
