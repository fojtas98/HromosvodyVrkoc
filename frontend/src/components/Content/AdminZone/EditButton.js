import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import PostInput from "./PostInput";

const EditButton = (props) => {
  const [editing, setEditing] = useState(false);

  const edit = async () => {
    if (!editing) {
      setEditing(true);
    } else {
      setEditing(false);
    }
    props.checkIfEditing(!editing);
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
