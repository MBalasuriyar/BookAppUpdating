import { gql } from "@apollo/client";
//     Mutation: {


//         saveBook: async (parent, { bookData }, context) => {
//             if (context.user) {
//                 //   context actually exist here. Neet.
//                 const updatedUser = await User.findOneAndUpdate(
//                     { _id: context.user._id },
//                     { $push: { savedBooks: bookData } },
//                     { new: true }
//                 )

//                 return updatedUser;
//             }
//         },
export const SAVE_BOOK = gql`
  mutation saveBook($bookData: bookInput!) {
    saveBook(bookData: $bookData) {
      _id
      username
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;

//         removeBook: async (parent, args, context) => {
//             if (context.user) {
//                 const updatedUser = await User.findOneAndUpdate(
//                     { _id: context.user._id },
//                     { $pull: { savedBooks: { bookId: args.bookId } } },
//                     { new: true }
//                 );

//                 return updatedUser;
//             }
//             throw new AuthenticationError('Unable to delete book!');

//         },

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      _id
      username
    }
  }
`;

//         addUser: async (parent, args) => {
//             const user = await User.create(args);
//             const token = signToken(user);

//             return { token, user }
//         },

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;


//         login: async (parent, { email, password }) => {
//             //very one way
//             const user = await User.findOne({ email });
//             if (!user) {
//                 throw new AuthenticationError('No user found!')
//             }
//             const correctPw = await user.isCorrectPassword(password);
//             if (!correctPw) {
//                 throw new AuthenticationError('Invalid Password!')
//             }
//             const token = signToken(user);
//             return { token, user };

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

//         }

//     },
// };