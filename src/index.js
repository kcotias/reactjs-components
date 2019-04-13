import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './components/CommentDetail';
import ApprovalCard from './components/ApprovalCard';

const App = () => {
    return(
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Kaian"
                    timeAgo="Today at 2:00AM"
                    comment="I know that im gay"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App/>, document.querySelector('#root'));