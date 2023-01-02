export default function getStudentIdsSum(A) {
    const arr = A.map((d) => {return d.id;});
    const result = arr.reduce((a, b) => {
        return a + b;
    })
    return result;
}
