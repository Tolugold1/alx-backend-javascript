export default function groceriesList() {
    const arr = [["Apples", 10], ["Tomatoes", 10], ["Pasta", 1], ["Rice", 1], ["Banana", 5]];
    const groceries = new Map();
    arr.forEach((e) => { return groceries.set(e[0], e[1])} )
    return groceries;
}