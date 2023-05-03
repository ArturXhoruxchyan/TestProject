//uniqid in talis e mez yurahatuk id ayn gradaran e vory petq e instal anel instal anelu hamr grumenq npm i unicid;
//findIndex metody talis e mez ayn indeksy vory arajiny hamnknum e mer grat paymanin
import { useState } from "react";//vorpesi stana defolt vichak
import { useDispatch, useSelector } from "react-redux";
import SingleComment from "../../components/SingleComments/SingleComments";//import aneluch heto mer komponenty texapoxumenq app.js;
import uniqid from 'uniqid';//yurahatuk id e talis;
import { commentCreate } from "../../redux/about/action";
import './Comments.css'



function Comments() {
    const [textComment, setTextComment] = useState('')
    // console.log('coment props>',props);
    const comments = useSelector(state => {
        // console.log('redux state>',state);
        const { comments } = state;
        return comments.comments//aystexov arden kpahpani bolor komentnery
    });
    console.log('coments>', comments);
    
    const dispatch = useDispatch();

    const hendleInput = (e) => {
        // console.log('input>>>', e.target.value);
        setTextComment(e.target.value)
    }

    const handleSubmit = (e) => {//submiti jamanak menq form i menq atmena
        //enq talis ira defoldayin vichaky
        e.preventDefault();//dra hamar e
        // console.log('textcoment>>>',textComment,id);//uxarkum enq textComment i vichaky
        const id = uniqid();
        dispatch(commentCreate(textComment, id));
        setTextComment(e.target.value = "")

    }

    return (
        <div className="'card-comments">
            <form onSubmit={handleSubmit} className="comment-item-create">
                <input type="text" className="card-input" value={textComment} onChange={hendleInput} />
                <input type="submit" hidden />
            </form>
            {!!comments?.length && comments?.map(e => {
                return <SingleComment key={e.id} data={e} />
            })}
        </div>
    )
}
export default Comments

//velyun talis enq skzbnakan arjeq
//hendleSubmith um dispach enq anum mer eqshny ev poxancum tvyalnery,dranq en henc qomenntnery ev id
//inputneric heto avelacnum enq mer komentnery,vorpesi tesnenq ekranin
//aynuhetev gnum enq SingleComment render enq anum amen mi arandin komenty