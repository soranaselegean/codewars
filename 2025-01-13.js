// Implement a difference function, which subtracts one list from another and returns the result. It should remove all values from list a, which are present in list b keeping their order.

function arrayDiff(a, b){
    return a.filter(e => !b.includes(e))
}