const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id });
                return userData;
            }
            throw new AuthenticationError('You need to be logged in!');
        }
    },

    //   pulled and modified from project

    Mutation: {


        saveBook: async (parent, { bookData }, context) => {
            if (context.user) {
                //   context actually exist here. Neet.
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $push: { savedBooks: bookData } },
                    { new: true }
                )

                return updatedUser;
            }
        },
        removeBook: async (parent, args, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedBooks: { bookId: args.bookId } } },
                    { new: true }
                );

                return updatedUser;
            }
            throw new AuthenticationError('Unable to delete book!');

        },

        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user }
        },

        login: async (parent, { email, password }) => {
            //very one way
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('No user found!')
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Invalid Password!')
            }
            const token = signToken(user);
            return { token, user };

        }

    },
};

module.exports = resolvers;