/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateRsvpInput = {
  id?: string | null,
  name: string,
  email: string,
  howMany: number,
  streetAddress: string,
  streetAddress2?: string | null,
  city: string,
  state: string,
  postalCode: string,
  country: string,
};

export type UpdateRsvpInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  howMany?: number | null,
  streetAddress?: string | null,
  streetAddress2?: string | null,
  city?: string | null,
  state?: string | null,
  postalCode?: string | null,
  country?: string | null,
};

export type DeleteRsvpInput = {
  id?: string | null,
};

export type ModelRsvpFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  email?: ModelStringFilterInput | null,
  howMany?: ModelIntFilterInput | null,
  streetAddress?: ModelStringFilterInput | null,
  streetAddress2?: ModelStringFilterInput | null,
  city?: ModelStringFilterInput | null,
  state?: ModelStringFilterInput | null,
  postalCode?: ModelStringFilterInput | null,
  country?: ModelStringFilterInput | null,
  and?: Array< ModelRsvpFilterInput | null > | null,
  or?: Array< ModelRsvpFilterInput | null > | null,
  not?: ModelRsvpFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelIntFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type CreateRsvpMutationVariables = {
  input: CreateRsvpInput,
};

export type CreateRsvpMutation = {
  createRsvp:  {
    __typename: "Rsvp",
    id: string,
    name: string,
    email: string,
    howMany: number,
    streetAddress: string,
    streetAddress2: string | null,
    city: string,
    state: string,
    postalCode: string,
    country: string,
  } | null,
};

export type UpdateRsvpMutationVariables = {
  input: UpdateRsvpInput,
};

export type UpdateRsvpMutation = {
  updateRsvp:  {
    __typename: "Rsvp",
    id: string,
    name: string,
    email: string,
    howMany: number,
    streetAddress: string,
    streetAddress2: string | null,
    city: string,
    state: string,
    postalCode: string,
    country: string,
  } | null,
};

export type DeleteRsvpMutationVariables = {
  input: DeleteRsvpInput,
};

export type DeleteRsvpMutation = {
  deleteRsvp:  {
    __typename: "Rsvp",
    id: string,
    name: string,
    email: string,
    howMany: number,
    streetAddress: string,
    streetAddress2: string | null,
    city: string,
    state: string,
    postalCode: string,
    country: string,
  } | null,
};

export type GetRsvpQueryVariables = {
  id: string,
};

export type GetRsvpQuery = {
  getRsvp:  {
    __typename: "Rsvp",
    id: string,
    name: string,
    email: string,
    howMany: number,
    streetAddress: string,
    streetAddress2: string | null,
    city: string,
    state: string,
    postalCode: string,
    country: string,
  } | null,
};

export type ListRsvpsQueryVariables = {
  filter?: ModelRsvpFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRsvpsQuery = {
  listRsvps:  {
    __typename: "ModelRsvpConnection",
    items:  Array< {
      __typename: "Rsvp",
      id: string,
      name: string,
      email: string,
      howMany: number,
      streetAddress: string,
      streetAddress2: string | null,
      city: string,
      state: string,
      postalCode: string,
      country: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateRsvpSubscription = {
  onCreateRsvp:  {
    __typename: "Rsvp",
    id: string,
    name: string,
    email: string,
    howMany: number,
    streetAddress: string,
    streetAddress2: string | null,
    city: string,
    state: string,
    postalCode: string,
    country: string,
  } | null,
};

export type OnUpdateRsvpSubscription = {
  onUpdateRsvp:  {
    __typename: "Rsvp",
    id: string,
    name: string,
    email: string,
    howMany: number,
    streetAddress: string,
    streetAddress2: string | null,
    city: string,
    state: string,
    postalCode: string,
    country: string,
  } | null,
};

export type OnDeleteRsvpSubscription = {
  onDeleteRsvp:  {
    __typename: "Rsvp",
    id: string,
    name: string,
    email: string,
    howMany: number,
    streetAddress: string,
    streetAddress2: string | null,
    city: string,
    state: string,
    postalCode: string,
    country: string,
  } | null,
};
