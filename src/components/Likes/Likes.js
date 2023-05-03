import { decrementLikes, incrementLikes } from "../../redux/about/action";
import { connect } from "react-redux";
import './Likes.css'



function Likes(props) {
    // console.log("render>",props);
    return (
        <div className="button-controls" >
            <button onClick={props.onIcrementLikes} >❤️‍🔥{props.likes}</button>
            <button disabled={props.likes === 0} onClick={props.onDecrementLikes} >👎</button>
        </div>
    )
}
function mapStateToProps(state) {
    const { likes } = state;
    return {
        likes: likes.likes
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIcrementLikes: () => dispatch(incrementLikes()),
        onDecrementLikes:()=> dispatch(decrementLikes())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Likes);

//ayspes stanum enq mer funkcian mapDispatchToProps
//aystex miacnum enq mer komponenty redux-in hatuk funkciayov connect
//ogtagortum enq hatuk funcia mapStateToProps,vorpezi karoxananq uxarkel mer pahestic redux
//mer komponentin
//nuyn anum enq mer metodneri het ev ogtagortum enq mapDispatchToProps