import React from "react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

const callMutation = gql`
  mutation removeFeedItem($title: String!) {
    removeFeedItem(title: $title)
  }
`;
const DeleteButton = (props) => {
  const [removeFeedItem, { notifyOnNetworkStatusChange }] = useMutation(
    callMutation
  );
  const remove = () => {
    removeFeedItem({
      variables: { title: props.title },
      notifyOnNetworkStatusChange: true,
    }).then(() => {
      props.checkStatus("deleteBtn");
    });
  };

  return (
    <div>
      <button onClick={remove}>delete</button>
    </div>
  );
};

export default DeleteButton;
