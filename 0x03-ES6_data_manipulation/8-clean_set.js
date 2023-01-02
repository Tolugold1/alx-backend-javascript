export default function cleanSet(set, startString) {
    let restOfString = [];
    set.forEach((e) => {
        if (e.startsWith(startString) === true) {
            restOfString.push(e.slice(startString.length))
        }
    })
    return restOfString.join('-');
}