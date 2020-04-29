import React, { useState } from "react";
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

const PostInput = () => {
  const [addNewItemToFeed, { data, loading }] = useMutation(mutationCall);
  const [input, setInput] = useState({
    title: "",
    description: "",
  });
  const [file, setFile] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "file") {
      setFile(e.target.files[0]);
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
    // const fd = new FormData();
    // fd.append("img", file, file.name);
    // console.log(fd);
    console.log(input);
    addNewItemToFeed({
      variables: {
        feedInput: {
          title: input.title,
          description: input.description,
          file: file,
        },
      },
    });
  };

  return (
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
  );
};

export default PostInput;
