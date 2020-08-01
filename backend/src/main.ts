import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import "reflect-metadata";
import { createConnection } from "typeorm";
import { Comment } from './entities/comment';
import { Publication } from './entities/publication';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    preflightContinue: true,
    optionsSuccessStatus: 204,
    credentials: true,
  };
  app.enableCors(options);
  // app.use((req, res, next) => {
  //   res.header('Access-Control-Allow-Origin', '*');
  //   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  //   res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
  //   next();
  // });
  await app.listen(3000);
  console.log('backend listening on port 3000 :D');
}

createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "admin",
    database: "chorizord",
    entities: [
      Comment,
      Publication
    ],
    synchronize: true,
    logging: false
}).then(connection => {
  const publication = Publication.find().then(
    publication => {
      if(publication.length === 0) {
        const fs = require('fs');
        const posts = JSON.parse(fs.readFileSync('./src/assets/posts.json', 'utf-8'));
        for(let post of posts) {
          Publication.save(post);
        }
      }
    }
  );
  const comment = Comment.find().then(
    comment => {
      if(comment.length === 0) {
        const fs = require('fs');
        const comments = JSON.parse(fs.readFileSync('./src/assets/comments.json', 'utf-8'));
        for(let comment of comments) {
          Comment.save(comment);
        }
      }
    }
  );
}).catch(error => console.log(error));

bootstrap();
