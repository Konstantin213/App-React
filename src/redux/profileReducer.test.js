import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";
import {render} from "@testing-library/react";
import App from "../App";
import React from "react";

let state = {
    posts: [
        {id: 1, message: "Hey, i am noodles", likeCount: "10"},
        {id: 2, message: "Helloy, it lessons", likeCount: "15"},
        {id: 3, message: "Yo", likeCount: "11"},
        {id: 4, message: "Something", likeCount: "5"}
    ],
};

test('length of post should be incremented ', () => {
    // 1. test data
    let action = addPostActionCreator('hello')
      // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect (newState.posts.length).toBe (5);
});
test('message match', () => {
    // 1. test data
    let action = addPostActionCreator('hello')
        // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect (newState.posts[4].message).toBe ('hello');
});


test('delete post', () => {
    // 1. test data
    let action = deletePost(1)
        // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect (newState.posts.length).toBe (3);
});


