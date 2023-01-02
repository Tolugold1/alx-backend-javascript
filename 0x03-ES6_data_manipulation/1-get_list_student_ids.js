export default function getListStudentIds(A) {
    let ids;
    if (Array.isArray(A) === false) {
        ids = [];
    } else {
        ids = A.map((data) => {
            return data.id;
        })
    }
    return ids;
}
