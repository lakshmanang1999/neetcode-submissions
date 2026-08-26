class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    isAnagram(s, t) {
       if(s.length !== t.length) return false;
       const hash = {};
       for(let i=0;i<s.length;i++){
        hash[s[i]] = (hash[s[i]] ?? 0) - 1
        hash[t[i]] = (hash[t[i]] ?? 0) - 1
       }
       for(let key in hash){
        const value = hash[key]
            if(value !== 0){
                return false
            }
       }
       return true;
    }
    groupAnagrams(strs) {
        const obj = {};
        for(let i=0;i<strs.length;i++){
            const value = strs[i]
            const sValue = strs[i].split("").sort().join("")
            if(obj.hasOwnProperty(sValue)){
                obj[sValue].push(value);
                continue;
            }
            obj[sValue] = [value]
        }
        return Object.values(obj)
        const result = []
        for(let key in obj){
            result.push(obj[key])
        }
        return result
    }
}
