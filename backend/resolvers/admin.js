import Admin from "../models/admin";
import { hash, compare } from "bcryptjs";
export default {
  Query: {
    login: async (root, { adminInput }, { req }) => {
      //   console.log(adminInput);

      const user = await Admin.findOne({ email: adminInput.email });
      if (!user) {
        throw new Error("neplatny uzivatel");
      }
      if (!(await compare(adminInput.password, user.password))) {
        throw new Error("neplatny uzivatel");
      } else {
        req.session.User_id = user._id;
        return { email: adminInput.email };
      }
    },
  },

  Mutation: {
    newAdmin: async (root, { adminInput }) => {
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
