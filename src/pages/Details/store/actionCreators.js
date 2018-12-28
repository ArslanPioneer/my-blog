import axios from 'axios';

const changeDetail =(title,content)=>({
    type:'detail/getDetail',
    title,
    content

})

export const getDetail=()=>{
    return (dispatch)=>
    {
        axios.get('https://easy-mock.com/mock/5c2624b4bc1add21289512be/blog/blog/titleDetail').then((response)=>{
            console.log(response);
            dispatch(changeDetail(response.title,response.content))
        })
    }

}