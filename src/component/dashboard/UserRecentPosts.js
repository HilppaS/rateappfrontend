import React from 'react'
import UserRecentPost from './UserRecentPost';
import {CardDeck, CardColumns} from 'react-bootstrap'
export default function UserRecentPosts(props) {
    console.log(props)
    const recentposts = props.data.map(post => {
        return <UserRecentPost post={post} key={post.id}/>
    })
    return (
      <div>
            <CardColumns>
                {recentposts}
        </CardColumns>
      </div>
    );
}
