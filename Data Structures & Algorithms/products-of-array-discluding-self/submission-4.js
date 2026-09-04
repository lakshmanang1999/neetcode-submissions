class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    // productExceptSelf(nums) {
    //     const result = Array.from({length: nums.length},()=> 1);
    //     for(let i in nums){
    //         for(let j=0;j< nums.length;j++){
    //             if(i!=j){
    //             result[i] = result[i] * nums[j]
    //             }
    //         }
    //     }
    //     return result
    // }
      productExceptSelf(nums) {
        const result = Array.from({length: nums.length},()=> 1);
        let productOfAllNonZero = 1;
        let includesZeroIdx = Array.from({length: nums.length},()=> 1);
        let includesZeroMin = [];
        
        for(let i in nums){
            const num = nums[i];
            if(num !=0){
                productOfAllNonZero *= num
            }else{
                includesZeroIdx[i] = 0
                
                includesZeroMin.push(i)
            }
        }
        if(includesZeroMin.length > 1){
            return Array(nums.length).fill(0);
        }

        for(let i in nums){
            const num = nums[i];
            let includesZero = includesZeroMin.length > 0;
            
            if(includesZero){
                result[i]= num === 0? productOfAllNonZero: 0;
            
            }else{
            
                result[i] = productOfAllNonZero/num}
            
        }
        return result
    }
}
