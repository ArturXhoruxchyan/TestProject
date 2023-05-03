import { useState,useEffect } from "react";//Amen anqam erb ga nor teqst menq texavorenq
//popoxakani mej,dra hamar ogtagortum enq hooker
import { useDispatch } from "react-redux";
import {commentDelete} from '../../redux/about/action'
import './SingleComments.css'
//popoxakani mej dra hamar ogtagortumenq hooker



function SingleComment({data}) {//amen komenti hamar stanum enq texty ev Id
    // console.log("single comment props>",props);
    const [commentText,setCommentText]=useState('')
    const {text,id} = data;
    const dispatch=useDispatch();

    const handleUpdate=(e)=>{
        e.preventDefault();
        console.log('submit->>',commentText);
    }

    const handleDelete=(e)=>{
        // console.log('click>>');
        e.preventDefault();
        dispatch(commentDelete(id))
    }

    useEffect(()=>{//aysinqn erb menq kgrenq inchvor ban hin komentic heto ayn avtomat poxancvelu eyntachiq steyt
        //popoxakan comenText-y
       if(text){
        setCommentText(text)
       }

    },[text])

    const hendleInput=(e)=>{//aysinqn erb menq kgrenq incvor ban komentich heto ayn avtomat poxanchum eyntachiq state popoxakan commentText-y
        setCommentText(e.target.value)
    }

    return(
        <form onSubmit={handleUpdate} className="comment-item">
            <span onClick={handleDelete} className="comment-item-delete">X</span>
            <input type="text" value={commentText} onChange={hendleInput} />
            <input type="submit" hidden  />
        </form>
    )
    
}
export default SingleComment;

//erb menq grumenq koment ayn aftomat linum e render ev avelanum
//popoxakan commentText-i mej

//hima uzum enq tarmacrel erb uzum enq mer komenty,
//usti formi mej bacum enq onSubmit funkcian;