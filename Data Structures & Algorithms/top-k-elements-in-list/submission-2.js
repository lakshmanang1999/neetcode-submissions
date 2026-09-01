class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const obj = {};
        for(let value of nums){
            if(obj.hasOwnProperty(value)){
                obj[value] = [value,obj[value][1] + 1]
            } else {
                obj[value] = [value,1]
            }
        }
        return Object.values(obj).sort((a,b) => b[1] - a[1]).slice(0,k).map((value) => value[0])
    }
}
