const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const jwt = require('jsonwebtoken');
const storage = require('../model/sequelize');

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
    content: String
  }

  type Mutation {
    createFile(name: String, content:String): mutationResult
    updateFile(name:String, content:String): mutationResult
    deleteFile(name:String): mutationResult
  }

  type mutationResult {
    msg: String
  }

`);

const root = (req) => {
  return {
    info: async () => {
      const token = req.token;
      const decoded = jwt.verify(token, 'jwSecret');
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
    },

    file: async (obj) => {
      let content;
      const name = obj.name;
      const token = req.token;
      const decoded = jwt.verify(token, 'jwSecret');
      try {
        content = await storage.getFile(decoded.id, name);
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
    },

    createFile: ({ name, content }) => {
      const token = req.token;
      const decoded = jwt.verify(token, 'jwSecret');
      try {
        storage.createFile(decoded.id, name, content);
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

    updateFile: ({ name, content }) => {
      const token = req.token;
      const decoded = jwt.verify(token, 'jwSecret');
      try {
        storage.updateFile(decoded.id, name, content);
      } catch (err) {
        console.log(err);
        return {
          errors: [err],
        };
      }

      return { msg: 'success' };
    },

    deleteFile: ({ name }) => {
      const token = req.token;
      const decoded = jwt.verify(token, 'jwSecret');

      try {
        // fileModel.deleteFile(decoded.id, name);
      } catch (err) {
        console.log(err);
        return {
          errors: [err],
        };
      }
      return { msg: 'success' };
    },
  };
};

const router = graphqlHTTP((req) => {
  return {
    schema: schema,
    rootValue: root(req),
    graphiql: true,
  };
});

module.exports = router;
