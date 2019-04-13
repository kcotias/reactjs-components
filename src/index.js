import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './components/CommentDetail';

const App = () => {
    return(
        <div className="ui container comments">
            <CommentDetail
                author="Kaian"
                timeAgo="Today at 2:00AM"
                comment="I know that im gay"
                avatar={faker.image.avatar()}
            />
        </div>
    );
}

ReactDOM.render(<App/>, document.querySelector('#root'));