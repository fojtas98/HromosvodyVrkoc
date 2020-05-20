import fs, { createWriteStream } from "fs";
import FeedItem from "../../models/feedItem";
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
      return await FeedItem.findOneAndRemove({ title }, (err, doc) => {
        const path = doc.url.split("http://localhost:5005/");
        fs.unlink(path[1], (err) => {
          console.log(err);
        });
      }).then(() => {
        return true;
      });
    },

    updateItemFeed: async (parent, { _id, feedInput }, { req, res }) => {
      if (!req.session.User_id) {
        throw new Error("musis byt prihlasen");
      }
      console.log(_id);
      if (feedInput.file) {
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
        return FeedItem.findByIdAndUpdate(
          _id,
          {
            title: feedInput.title,
            description: feedInput.description,
            url,
          },
          (err, doc) => {
            const path = doc.url.split("http://localhost:5005/");
            fs.unlink(path[1], (err) => {
              console.log(err);
            });
          }
        )
          .then(() => {
            return true;
          })
          .catch((err) => {
            return err;
          });
      }
      return FeedItem.findByIdAndUpdate(_id, {
        title: feedInput.title,
        description: feedInput.description,
      })
        .then(() => {
          return true;
        })
        .catch((err) => {
          return err;
        });
    },
  },
};
