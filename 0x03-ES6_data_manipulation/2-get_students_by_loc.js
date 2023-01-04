export default function getStudentsByLocation(A, B) {
    const result = A.filter((a) => {
        if (a.location === B) {
            return a;
        }
    })
    return result;
}
