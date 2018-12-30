const defaultState ={
    articleList:[
    // {
    //     id:1,
    //     title:'人生',
    //     desc:'文/麦大人',
    //     imgUrl:'//upload-images.jianshu.io/upload_images/1357217-8a0c78acccfac264.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    // },    
    // {
    //     id:2,
    //     title:'人生',
    //     desc:'文/麦大人',
    //     imgUrl:'//upload-images.jianshu.io/upload_images/1357217-8a0c78acccfac264.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    // },
    // {
    //     id:3,
    //     title:'人生',
    //     desc:'文/麦大人',
    //     imgUrl:'//upload-images.jianshu.io/upload_images/1357217-8a0c78acccfac264.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    // },
]
};

export default (state=defaultState, action) => {
    switch(action.type){
        case 'home/queryArticleList':
            return {
                articleList:action.articleList
            }
        default:
           return state; 
    }
  
}