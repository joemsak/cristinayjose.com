// tslint:disable
// this is an auto generated file. This will be overwritten

export const getRsvp = `query GetRsvp($id: ID!) {
  getRsvp(id: $id) {
    id
    name
    email
    howMany
    streetAddress
    streetAddress2
    city
    state
    postalCode
    country
  }
}
`;
export const listRsvps = `query ListRsvps(
  $filter: ModelRsvpFilterInput
  $limit: Int
  $nextToken: String
) {
  listRsvps(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      email
      howMany
      streetAddress
      streetAddress2
      city
      state
      postalCode
      country
    }
    nextToken
  }
}
`;
