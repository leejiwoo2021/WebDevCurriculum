import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import jwt from 'jsonwebtoken';
import * as storage from '../model/sequelize.js';

const schema = buildSchema(`
  type Query {
    info: info
    file(name: String!): file
  }

  type info {
    list: [String]
    lastFile: String
  }

  type file {
    name: String
    content: [String]
  }

  type Mutation {
    createFile(name: String, content:[String]): mutationResult
    updateFile(name:String, content:[String]): mutationResult
    deleteFile(name:String): mutationResult
  }

  type mutationResult {
    msg: String
  }

`);

interface FileProps {
  name: string;
  content: string;
}

const root = (req: express.Request): any => {
  return {
    info: async () => {
      const token = req.token;
      if (token) {
        const decoded = jwt.verify(token, 'jwSecret') as jwt.JwtPayload;
        let fileList, lastFile;

        try {
          const info = await storage.getFileList(decoded.id);
          fileList = info.fileList;
          lastFile = info.lastFile;
        } catch (err) {
          console.log(err);
          return {
            errors: [err],
          };
        }

        return {
          list: fileList,
          lastFile,
        };
      }
    },

    file: async (obj: any) => {
      let content;
      const name = obj.name;
      const token = req.token;

      if (token) {
        const decoded = jwt.verify(token, 'jwSecret') as jwt.JwtPayload;
        try {
          content = await storage.getFile(decoded.id, name);
          content = JSON.parse(content);
        } catch (err) {
          console.log(err);
          return {
            errors: [err],
          };
        }

        return {
          name: name,
          content: content,
        };
      }
    },

    createFile: ({ name, content }: FileProps) => {
      const token = req.token;

      try {
        if (token) {
          const decoded = jwt.verify(token, 'jwSecret') as jwt.JwtPayload;
          storage.createFile(decoded.id, name, JSON.stringify(content));
        }
      } catch (err) {
        console.log(err);
        return {
          errors: [err],
        };
      }

      return {
        msg: 'success',
      };
    },

    updateFile: ({ name, content }: FileProps) => {
      const token = req.token;
      try {
        if (token) {
          const decoded = jwt.verify(token, 'jwSecret') as jwt.JwtPayload;
          storage.updateFile(decoded.id, name, JSON.stringify(content));
        }
      } catch (err) {
        console.log(err);
        return {
          errors: [err],
        };
      }

      return { msg: 'success' };
    },

    // deleteFile: ({ name }) => {
    //   const token = req.token;
    //   const decoded = jwt.verify(token, 'jwSecret');

    //   try {
    //     // fileModel.deleteFile(decoded.id, name);
    //   } catch (err) {
    //     console.log(err);
    //     return {
    //       errors: [err],
    //     };
    //   }
    //   return { msg: 'success' };
    // },
  };
};

const router = graphqlHTTP((req: any) => {
  return {
    schema: schema,
    rootValue: root(req),
    graphiql: true,
  };
});

export default router;
export { root };
