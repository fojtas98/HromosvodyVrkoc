import { createWriteStream } from "fs";
import FeedItem from "../models/feedItem";
export default {
  Query: {
    getAllFeed: async (parent, args, { req, res }) => {
      const feedItems = await FeedItem.find();
      return feedItems;
    },
  },

  Mutation: {
    addNewItemToFeed: async (parent, { feedInput }, { req, res }) => {
      if (!req.session.User_id) {
        throw new Error("musis byt prihlasen");
      }
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
    removeFeedItem: async (parent, { title }, { req, res }) => {
      console.log(title);
      const success = await FeedItem.deleteOne({ title }, (err, result) => {
        if (err) {
          throw new Error(err);
        } else {
          return result;
        }
      });
      console.log(success);
      if (success.deletedCount < 1) {
        return false;
      } else {
        return true;
      }
    },
  },
};
