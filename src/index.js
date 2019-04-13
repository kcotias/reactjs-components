import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './components/CommentDetail';
import ApprovalCard from './components/ApprovalCard';

const App = () => {
    return(
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to get rich?
                </div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Kaian"
                    timeAgo="Today at 2:00AM"
                    comment="I know that im the most handsome guy in the world"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App/>, document.querySelector('#root'));