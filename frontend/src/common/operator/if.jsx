/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default props => {
    if(props.test) {
        return props.children
    } else {
        return false
    }
}