class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    // isAnagram(s, t) {
    //     if(s.length !== t.length) return false;
    //     const hash = {}
    //     for(let value of s){
    //         hash[value] = (hash[value] ?? 0) + 1
    //     }
    //     for(let value of t){
    //         hash[value] = (hash[value] ?? 0) - 1
    //     }
        
    //     for(let key in hash){
    //         const value = hash[key]
    //         if(value !== 0){
    //             return false
    //         }
    //     }
    //     return true
    // }
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        const sSort = s.split("").sort().join("")
        const tSort = t.split("").sort().join("");
        return sSort === tSort
    }
}
