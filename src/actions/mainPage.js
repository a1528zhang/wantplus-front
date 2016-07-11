import {PUT_DATA} from "../constants/constant"

export function putData(text){
  console.log(text);
  return {type:PUT_DATA,
    data:text}
}