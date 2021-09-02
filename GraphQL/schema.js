const { gql } = require('apollo-server');

const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
  type User @key(fields: "id") {
    id:Int
    email: String
    password: String
    token: String
  }
  input UserInput{
    email: String!
    password: String!
  }
  
  type World @key(fields: "id"){
    id:Int
    accessCode:Int
    name:String
    defaultLogo:String
    password:String
    enablePassword:Boolean
    user:Int
    created:String
    map:Int
  }
  input WorldCreteInput{
    name:String!
    defaultLogo:String!
    user:Int!
    map:Int
  }
  input WorldUpdateInput{
    id:Int!
    user:Int!
    accessCode:Int
    name:String
    defaultLogo:String
    password:String
    enablePassword:Boolean
    created:String
    map:Int
  }

  type Map @key(fields: "id"){
    id:Int
    name: String
    created:String
    user:Int
    fileName:String
    windowsLink:String
    macLink:String
    version:String
  }
  input MapInput {
    name:String
    user:Int
    fileName:String
    windowsLink:String
    macLink:String
    version:String
  }
  input MapUpdateInput{
    id:Int
    name:String
    user:Int
    fileName:String
    windowsLink:String
    macLink:String
    version:String
  }
  type Region @key(fields: "id"){
    id:Int
    map:Int
    name:String
    created:String
  }
  input RegionInput{
    map:Int!
    name:String!
  }
  input RegionUpdateInput{
    id:Int!
    name:String!
    map:Int!
  }
  
  type Screen @key(fields: "id"){
    id:Int
    region:Int
    name:String
    created:String
  }
  input ScreenInput{
    region:Int!
    name:String!
  }
  input ScreenUpdateInput{
    id:Int!
    region:Int!
    name:String!
  }
  
  type Content @key(fields: "id"){
    id:Int
    screen:Int
    world:Int
    type:String
    url:String
    description:String
    title:String
    created:String
  }

  input ContentInput{
    id:Int
    screen:Int
    world:Int
    type:String
    url:String
    description:String
    title:String
  }
  
  type Query {
    getUsers: [User]!
    getUser(id: Int):User
    authUser(input:UserInput):User
    getWorlds:[World]!
    getWorld(id: Int):World
    getUserWorld(user:Int):[World]!
    getMaps:[Map]!
    getUserMaps(user:Int):[Map]!
    getMapRegion(map:Int):[Region]!
    getRegionScreen(region:Int):[Screen]!
    getRegions:[Region]
    getScreenContent(screen:Int,world:Int):[Content]!
  }
  type Mutation{
    createUser(input:UserInput):User
    createWorld(input:WorldCreteInput):[World]!
    updateWorld(input: WorldUpdateInput):[World]!
    deleteWorld(id:Int):[World]!
    createRegion(input:RegionInput):[Region]
    createScreen(input:ScreenInput):[Screen]
    addContent(input:ContentInput):[Content]
    deleteContent(id:Int):[Content]
    createMap(input:MapInput):[Map]!
    updateMap(input:MapUpdateInput):[Map]!
    deleteMap(id:Int):[Map]!
    deleteRegion(id:Int):[Region]!
    updateRegion(input:RegionUpdateInput):[Region]!
    deleteScreen(id:Int):[Screen]!
    updateScreen(input:ScreenUpdateInput):[Screen]!
  }
`;

module.exports = {
  typeDefs
};
