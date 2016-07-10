import * as lights from '../constants/constant'

export function getNewData(){
    alert("new");
    return {type:lights.CHANGE_NEW,
        data:"new text"}
}
