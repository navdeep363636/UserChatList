import React from "react";
import { ProfileSlider } from "../../components/Slider";
import Post from "../../components/UserProfile/ResponseSection";
const postData = [
  {
    postMessage: {
      first: "Lorem ispume thso fjd fjgn defgfner",
      second: "spume thr",
      third: "Lorem ispume ther"
    }
  },
  {
    postMessage: {
      first: "Lorem ispume thso fjd fjgn defgfner",
      second: "spume thr",
      third: "Lorem ispume ther"
    }
  },
  {
    postMessage: {
      first: "Lorem ispume thso fjd fjgn defgfner",
      second: "spume thr",
      third: "Lorem ispume ther"
    }
  },
  {
    postMessage: {
      first: "Lorem ispume thso fjd fjgn defgfner",
      second: "spume thr",
      third: "Lorem ispume ther"
    }
  },
  {
    postMessage: {
      first: "Lorem ispume thso fjd fjgn defgfner",
      second: "spume thr",
      third: "Lorem ispume ther"
    }
  },
  {
    postMessage: {
      first: "Lorem ispume thso fjd fjgn defgfner",
      second: "spume thr",
      third: "Lorem ispume ther"
    }
  },
  {
    postMessage: {
      first: "Lorem ispume thso fjd fjgn defgfner",
      second: "spume thr",
      third: "Lorem ispume ther"
    }
  },
  {
    postMessage: {
      first: "Lorem ispume thso fjd fjgn defgfner",
      second: "spume thr",
      third: "Lorem ispume ther"
    }
  }
];
export default () => (
  <div>
    <ProfileSlider />
    <Post posts={postData} />
  </div>
);
