import type {Meta, StoryObj} from "@storybook/react-vite";
import {Fragment} from "react";
import Button from "../src/button/Button";
import type {DescriptionTermProps} from "../src/list/description-term/DescriptionTerm";
import DescriptionTerm from "../src/list/description-term/DescriptionTerm";
import ListItem from "../src/list/item/ListItem";
import List from "../src/list/List";
import StateProvider from "./utils/StateProvider";

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@doe.com"
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane@doe.com"
  },
  {
    id: 3,
    name: "Harry Doe",
    email: "harry@doe.com"
  }
];
const emptyUsers = [];

const terms: DescriptionTermProps[] = [
  {
    id: "1",
    title: "Apple",
    description:
      "The round fruit of a tree of the rose family, which typically has thin green or red skin and crisp flesh."
  },
  {
    id: "2",
    title: "Orange",
    description:
      "A large round juicy citrus fruit with a tough bright reddish-yellow rind."
  },
  {
    id: "3",
    title: "Lemon",
    description:
      "A pale yellow oval citrus fruit with thick skin and fragrant, acidic juice"
  }
];

const style = (
  <style>
    {`
      .list-item {
        margin-bottom: 20px;
        padding: 20px;

        border: 1px solid lightgrey;
      }
    `}
  </style>
);

function renderPlaceholders() {
  return (
    <Fragment>
      <ListItem customClassName={"list-item-placeholder"} />
      <ListItem customClassName={"list-item-placeholder"} />
      <ListItem customClassName={"list-item-placeholder"} />

      <style>
        {`
          .list-item-placeholder {
            height: 60px;

            margin-bottom: 20px;

            background: lightgrey;

            animation: opacityAnimation 1s infinite;
          }

          @keyframes opacityAnimation {
            0% {
              opacity: 1;
            }
          
            50% {
              opacity: 0.7;
            }
          
            100% {
              opacity: 1;
            }
          }
          
        `}
      </style>
    </Fragment>
  );
}

function UserListItem({user}) {
  return (
    <ListItem>
      {user.name} <small>{user.email}</small>
    </ListItem>
  );
}

function ClickableUserListItem({user}) {
  return (
    <StateProvider initialState={{displayEmail: false}}>
      {(state, setState) => (
        <ListItem
          clickableListItemProps={{
            onClick: () => {
              setState({displayEmail: !state.displayEmail});
            }
          }}>
          Click to toggle <em>{user.name}</em>`s email address
          {state.displayEmail && <strong>{` ${user.email}`}</strong>}
        </ListItem>
      )}
    </StateProvider>
  );
}

function RemovableUserListItem({user, onRemove}) {
  return (
    <ListItem>
      <div style={{display: "flex", gap: "16px", alignItems: "center"}}>
        {user.name}

        <Button onClick={onRemove}>{"Remove"}</Button>
      </div>

      {style}
    </ListItem>
  );
}

const meta: Meta = {
  title: "List"
};

export default meta;

export const HasItems: StoryObj = {
  name: "Has Items",
  render: () => (
    <Fragment>
      <List items={users}>{(item) => <UserListItem user={item} />}</List>

      {style}
    </Fragment>
  )
};
export const HasPlaceholder: StoryObj = {
  name: "Has Placeholder",
  render: () => (
    <Fragment>
      <List
        items={emptyUsers}
        placeholderProps={{
          shouldDisplayPlaceholder: true,
          placeholder: renderPlaceholders()
        }}>
        {(item) => <UserListItem user={item} />}
      </List>

      {style}
    </Fragment>
  )
};
export const EmptyState: StoryObj = {
  name: "Empty State",
  render: () => (
    <Fragment>
      <List
        items={emptyUsers}
        emptyStateProps={{
          shouldDisplayEmptyState: true,
          emptyState: "Sorry, there are no users"
        }}>
        {(item) => <UserListItem user={item} />}
      </List>
    </Fragment>
  )
};
export const ClickableItems: StoryObj = {
  name: "Clickable Items",
  render: () => (
    <Fragment>
      <List items={users}>{(item) => <ClickableUserListItem user={item} />}</List>

      {style}
    </Fragment>
  )
};
export const OrderedList: StoryObj = {
  name: "Ordered List",
  render: () => (
    <Fragment>
      <List items={users} type={"ordered"}>
        {(item) => <UserListItem user={item} />}
      </List>

      {style}
    </Fragment>
  )
};
export const DescriptionList: StoryObj = {
  name: "Description List",
  render: () => (
    <Fragment>
      <List items={terms} type={"description"}>
        {(item) => <DescriptionTerm title={item.title} description={item.description} />}
      </List>
    </Fragment>
  )
};
export const RemovableItems: StoryObj = {
  name: "Removable Items",
  render: () => (
    <StateProvider initialState={users}>
      {(state, setState) => (
        <List items={state}>
          {(user) => (
            <RemovableUserListItem
              user={user}
              onRemove={() => setState(state.filter((item) => item.id !== user.id))}
            />
          )}
        </List>
      )}
    </StateProvider>
  )
};
