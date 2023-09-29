import FontAwesome from 'react-native-vector-icons/FontAwesome';
export const GetRating=(rating)=>{
const ratingStar=[];
const fullStar=<FontAwesome name='star' size={10} color='gold'/>
const halfStar=<FontAwesome name='star-half-empty' size={10} color='gold'/>
const emptyStar=<FontAwesome name='star-o' size={10} color='gold'/>

for(i=0; i<5; i++){
    if(i<rating){
        ratingStar.push(fullStar)
    }else{
        ratingStar.push(emptyStar)
    }
}
if(rating % 1 !==0){
    ratingStar[Math.floor(rating)]=halfStar;
}
return ratingStar
}