class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    
    // groupAnagrams(strs) {
    //     const obj = {};
    //     for(let i=0;i<strs.length;i++){
    //         const value = strs[i]
    //         const sValue = strs[i].split("").sort().join("")
    //         if(obj.hasOwnProperty(sValue)){
    //             obj[sValue].push(value);
    //             continue;
    //         }
    //         obj[sValue] = [value]
    //     }
    //     return Object.values(obj)
    // }
    groupAnagrams(strs) {
        const obj = {};
        for(let i=0;i<strs.length;i++){
            const count = Array(26).fill(0);
            const value = strs[i];
            for(let v of value){
                const idx = v.charCodeAt(0)-"a".charCodeAt(0);
                count[idx] = count[idx] + 1
            }
            const groupKey = count.join(",");
            if(obj[groupKey]){
                obj[groupKey].push(value)
            }else {
                obj[groupKey] = [value]
            }
            
        }
        return Object.values(obj)
    }
}
