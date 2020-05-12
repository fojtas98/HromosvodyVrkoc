import Admin from "../../models/admin";
import { UserInputError } from "apollo-server-express";
import { hash, compare } from "bcryptjs";
export default {
  Query: {
    login: async (root, { adminInput }, { req }) => {
      console.log(adminInput);

      const user = await Admin.findOne({ email: adminInput.email });
      if (!user) {
        throw new UserInputError("neplatny uzivatel");
      }
      if (!(await compare(adminInput.password, user.password))) {
        throw new UserInputError("neplatny uzivatel");
      } else {
        req.session.User_id = user._id;
        return { email: adminInput.email };
      }
    },

    logout: async (root, { adminInput }, { req, res }) => {
      return new Promise((resolve, reject) => {
        req.session.destroy((err) => {
          if (err) reject(err);
          res.clearCookie("sessionId");
          resolve(true);
        });
      });
    },
  },

  Mutation: {
    newAdmin: async (root, { adminInput }) => {
      if (!req.session.sessionId) {
        throw new Error("musis byt prihlasen");
      }
      const existingAdmin = await Admin.findOne({ email: adminInput.email });
      console.log(existingAdmin);
      if (existingAdmin) {
        throw new Error("uzivatel jiz existuje");
      } else {
        const password = await hash(adminInput.password, 12);
        await Admin.create({ email: adminInput.email, password: password });
        return { email: adminInput.email };
      }
    },
  },
};
