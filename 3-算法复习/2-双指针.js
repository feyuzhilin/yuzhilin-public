let nums = [2, 7, 13, 15]
let target = 9
function getarr(nums, target) {
    let startIndex = 0
    let endIndex = 1
    while (nums[startIndex] + nums[endIndex] !== target && endIndex <= nums.length) {
        endIndex++
        if (endIndex === nums.length) {
            startIndex++
        }
    }
    return [startIndex, endIndex]
}
console.log(getarr(nums, target))