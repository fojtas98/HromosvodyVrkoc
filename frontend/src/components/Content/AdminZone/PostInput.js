import React, { useState, useEffect } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

const mutationCall = gql`
  mutation addNewItemToFeed($feedInput: feedInputData!) {
    addNewItemToFeed(feedInput: $feedInput) {
      title
      description
      url
    }
  }
`;

const PostInput = (props) => {
  const [addNewItemToFeed, { data, loading }] = useMutation(mutationCall);

  const [input, setInput] = useState({
    title: "",
    description: "",
    file: [],
  });

  useEffect(() => {
    if (props.editing) {
      setInput({ title: props.title, description: props.description });
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "file") {
      setInput({ ...input, [name]: e.target.files[0] });
    } else if (name !== "file") {
      setInput(() => {
        return {
          ...input,
          [name]: value,
        };
      });
    }
  };
  const submit = (e) => {
    e.preventDefault();
    addNewItemToFeed({
      variables: {
        feedInput: {
          title: input.title,
          description: input.description,
          file: input.file,
        },
      },
    }).then(() => {
      props.checkStatus("postBtn");
    });
  };

  const updatePost = (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <div>
      {props.editing ? (
        <div>
          <h2>Edit post</h2>
          <form onSubmit={updatePost}>
            <input
              type="text"
              name="title"
              placeholder="nadpis"
              onChange={handleInputChange}
              value={input.title}
              // defaultValue={input.title}
            />
            <br />
            <textarea
              name="description"
              cols="30"
              rows="10"
              placeholder="popis"
              onChange={handleInputChange}
              value={input.description}
              // defaultValue={props.description}
            ></textarea>
            <br />
            <input type="file" name="file" onChange={handleInputChange} />
            <br />
            <button>poslat</button>
          </form>
        </div>
      ) : (
        <div>
          <h2>Post Input</h2>
          <form onSubmit={submit}>
            <input
              type="text"
              name="title"
              placeholder="nadpis"
              onChange={handleInputChange}
              value={input.title}
            />
            <br />
            <textarea
              name="description"
              cols="30"
              rows="10"
              placeholder="popis"
              onChange={handleInputChange}
              value={input.description}
            ></textarea>
            <br />
            <input type="file" name="file" onChange={handleInputChange} />
            <br />
            <button>poslat</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default PostInput;
