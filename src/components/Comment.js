import React from "react";
import {useParams, Link} from "react-router-dom"

function Comment({comment}){
    return(
        <li>
            {comment.comment}
        </li>
    );
}

export default Comment;