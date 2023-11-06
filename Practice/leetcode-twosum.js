let nums = [3, 2, 4], target = 6

var twoSum = function (nums, target) {
    let len = nums.length;
    for (i = 0; i < len; i++) {
        for (j = i + 1; j < len; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j]
            }
        }
    }

    return [];
};

let indices = twoSum(nums, target);
console.log(indices);