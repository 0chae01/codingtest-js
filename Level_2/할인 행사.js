function solution(want, number, discount) {
    const wantArr = [];
    for (let i = 0; i < want.length; i++) {
        wantArr.push(...Array.from({ length: number[i] }, () => want[i]))
    }
    let count = 0;
    function check(startIndex) {
        const arr = [...wantArr];
        for (let j = startIndex; j < startIndex + 10; j++) {
            const index = arr.indexOf(discount[j]);
            if (index !== -1) {
                arr.splice(index, 1);
                if (arr.length === 0) return true;
                continue;
            }
            if (arr.length === 0) return true;
        }
        if (arr.length === 0) return true;
    }
        
    for (let i = 0; i < discount.length; i++) {
        if (check(i)) count++;
    }

    return count;
}