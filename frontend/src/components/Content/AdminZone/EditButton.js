import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import PostInput from "./PostInput";

const callMutation = gql`
  mutation updateItemFeed($feedInput: FeedInputData, $_id: String) {
    updateItemFeed(feedInput: $feedInput, _id: $_id)
  }
`;

const EditButton = (props) => {
  const [editing, setEditing] = useState(false);
  const [updateItemFeed, { data, loading }] = useMutation(callMutation);

  const edit = async () => {
    if (!editing) {
      setEditing(true);
    } else {
      setEditing(false);
    }
  };

  const update = (e, input) => {
    console.log(props._id);
    e.preventDefault();
    updateItemFeed({
      variables: {
        feedInput: {
          title: input.title,
          description: input.description,
          file: input.file,
        },
        _id: props._id,
      },
    }).then(() => {
      props.checkStatus("editBtn");
      setEditing(false);
    });
  };
  return (
    <div>
      {editing ? (
        <div className="editing">
          <div onClick={edit} className="dim"></div>
          <div className="editingForm">
            <PostInput
              editing={editing}
              title={props.title}
              description={props.description}
              update={update}
            />
          </div>
        </div>
      ) : (
        <button onClick={edit}>Edit</button>
      )}
    </div>
  );
};

export default EditButton;
