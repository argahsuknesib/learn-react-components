import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./components/CommentDetail";
import faker from "faker";
import ApprovalCard from "./components/ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>WARNING!</h4>Are you sure you want to approve this?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Kushagra"
          timeAgo="Today at 10:00"
          content="Great!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="John"
          timeAgo="Today at 13:00"
          content="Okayish"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Pranshu"
          timeAgo="Yesterday at 15:00"
          content="Not that great"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Sting"
          timeAgo="Today at 16:00"
          content="Could have been better"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Undertaker"
          timeAgo="Yesterday at 12:00"
          content="Thanks for posting"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
