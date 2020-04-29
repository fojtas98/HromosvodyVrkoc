import { createWriteStream } from "fs";
import FeedItem from "../models/feedItem";
export default {
  Query: {},

  Mutation: {
    addNewItemToFeed: async (parent, { feedInput }) => {
      const {
        createReadStream,
        filename,
        mimetype,
        encoding,
      } = await feedInput.file;
      const stream = createReadStream();
      const path = `./img/${filename}`;

      await new Promise((resolve, reject) => {
        stream
          .on("error", (error) => {
            unlink(path, () => {
              reject(error);
            });
          })
          .pipe(createWriteStream(path))
          .on("error", reject)
          .on("finish", resolve);
      });
      const url = `http://localhost:5005/img/${filename}`;
      await FeedItem.create({
        url,
        title: feedInput.title,
        description: feedInput.description,
      });
      return {
        url,
        title: feedInput.title,
        description: feedInput.description,
      };
    },
  },
};
