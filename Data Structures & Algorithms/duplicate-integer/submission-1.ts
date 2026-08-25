class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const hash = {};
        for(let i of nums){
            if(hash.hasOwnProperty(i)){
                return true;
            }else {
                hash[i] = hash[i] + 1
            }
        }
        return false
    }
    // hasDuplicate(nums: number[]): boolean {
    //     const unique = new Set(nums);
    //     return unique.size < nums.length
        
    // }
}
