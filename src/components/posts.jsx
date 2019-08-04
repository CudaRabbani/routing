import React from 'react';
import queryString from 'query-string';

const Posts = (props) => {
    const location = props.location;
    const query = queryString.parse(location.search);
    console.log(query);
    const {sortBy, approved} = query;
    console.log(sortBy, approved);
    const {year, month} = props.match.params;
    return (
        <div>
            <h1>Posts</h1>
            Year: {year}, Month:{month}
        </div>
    );
};

export default Posts;
