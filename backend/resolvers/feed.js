import fs from "fs";
export default {
  Query: {},

  Mutation: {
    addNewItemToFeed: async (parent, { file }) => {
      const { stream, filename, mimetype, encoding } = await file;
      fs.writeFile(filename);
      return { filename, mimetype, encoding };
    },
  },
};
