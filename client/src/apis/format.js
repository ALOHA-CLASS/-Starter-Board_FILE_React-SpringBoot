
// 2023-12-08T01:34:52.000+00:00 ➡ inputDate
export const formatDate = (inputDate) => {
    const date = new Date(inputDate);

    // 포맷 형식 지정하기
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    // 2023/12/25 18:30:20
    return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`
}

