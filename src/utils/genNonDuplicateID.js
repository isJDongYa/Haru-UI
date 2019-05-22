export default function genNonDuplicateID(randomLength){
  return 'ha-id-' + Number(Math.random().toString().substr(3,randomLength) + Date.now()).toString(36)
}