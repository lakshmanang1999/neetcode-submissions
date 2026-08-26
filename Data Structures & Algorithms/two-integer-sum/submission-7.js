class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    // twoSum(nums, target) {
    //     const min = nums[0];
    //     const max = nums[nums.length -1];
    //     for(let i = 0; i<nums.length;i++){
    //         const currentValue = nums[i]
    //         // if(target <= currentValue) continue;
    //         const nextValue =target- currentValue;
    //         if(nextValue < 0 || nextValue < min) continue;
    //         const nextIndex = nums.findIndex((value,idx) => value == nextValue && idx !== i);
    //         if(nextIndex == -1) continue;
    //         return [i,nextIndex].sort()
    //     }
    //     return []
    // }
     twoSum(nums, target) {
        const prevMap = new Map();

        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            if (prevMap.has(diff)) {
                return [prevMap.get(diff), i];
            }

            prevMap.set(nums[i], i);
        }

        return [];
    }
    //  twoSum(nums, target) {
    //     const prevMap = {};

    //     for (let i = 0; i < nums.length; i++) {
    //         const diff = target - nums[i];
    //         if (prevMap.hasOwnProperty(diff)) {
    //             return [prevMap[diff], i];
    //         }

    //         prevMap[nums[i]] = i;
    //     }

    //     return [];
    // }
}
