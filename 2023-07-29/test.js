const nums = [-1, 0, 1, 2, -1, -4];
let output = [], tempoutput = [];
for (let i = 0; i < nums.length; i++) {
    const fnum = nums[i];
    let snum, tnum, ind;
    tempoutput = [];
    for (let j = i + 1; j < nums.length; j++) {
        snum = nums[j];
        for (let k = j + 1; k < nums.length; k++) {
            tnum = nums[k];
            if (fnum + snum + tnum == 0) {
                
            }
        }
    }
}