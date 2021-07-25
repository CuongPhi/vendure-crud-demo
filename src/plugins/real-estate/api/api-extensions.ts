import { gql } from 'apollo-server-core';

const commonExtensions = gql `
  type RealEstate implements Node {
        id: ID!
		projectName: String!
	    descriptions: String!
        price: String!
	    address: String!
        createdAt: DateTime!
        updatedAt: DateTime!
    }
    
    
  input RealEstateAddInput{
	  projectName:String
	  descriptions:String
      price:String
	  address: String!
  }
`;

export const adminApiExtensions = gql`
	${commonExtensions}
    
	input RealEstateUpdateInput{
	  id: ID!
	  projectName:String!
	  descriptions:String!
      price:String!
	  address: String!
	}
	
	
    extend type Query {
		RealEstate(id:ID!):RealEstate
    }
	
	extend type Mutation {
        addRealEstate(input:RealEstateAddInput!): RealEstate!
		updateRealEstate(input:RealEstateUpdateInput!): RealEstate!
    }
`;
