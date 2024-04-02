import {ApolloServer, gql} from 'apollo-server'

const typeDefs = gql`
    type characters {
    id: int!
    name: String!
    image: url!
    species: String!
    gender: String!
    status: String!
    location: object!
}
    type Query {
        allCharacters: [Characters]!
        findCharacters(name: String!): Characters
    }
`
const resolvers = {
    Query: { 
        allCharacters: () => characters,
        findCharacters: (root, args) => characters {
            conts {name} = args;
            return characters.find(characters => characters.name == name)
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})
