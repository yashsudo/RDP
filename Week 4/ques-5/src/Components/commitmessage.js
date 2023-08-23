import React, {useState, useEffect} from "react";

function CommitMessage() {
    const [commitMessage, setCommitMessage] = useState('');
  
    useEffect(() => {
      fetch('https://whatthecommit.com/index.json')
        .then(resp => resp.json())
        .then(data => {
          setCommitMessage(data.commit_message);
        });
    }, []);
  
    return (
      <div>
        <p>{commitMessage}</p>
      </div>
    );
  }
  
  export default CommitMessage;