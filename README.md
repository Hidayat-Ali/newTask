## Create Rich Text Editor in ReactJS

In this Project, I'm going to show you how we can build rich text editor using React Draft WYSIWYG package. Using this library we can easily create a great text editor with only a few lines of code. This text editor provides a lot of features such as text decorations, font styles, formats, size, text colour,  emojis, lists also you can upload an image or embed any link.  Make sure you watch the whole video in order to understand how to use it.   

This project is done using below npm package.
https://www.npmjs.com/package/react-draft-wysiwyg

Watch Video Tutorial here!
https://youtu.be/PDdZB83_Nrs




This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Instructions

In the project directory, first run:

### `npm install`

For installing all the dependancies. 

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";

export default class TextEditor extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,

    });
  };

  render() {
    const { editorState } = this.state;

    return (
      <div className="txtEditor">
        <Editor
          editorState={editorState}
          onEditorStateChange={this.onEditorStateChange}
        />
      </div>
    );
  }
}