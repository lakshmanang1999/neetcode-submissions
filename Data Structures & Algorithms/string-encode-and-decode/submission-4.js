class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        // const sanitized = strs.map((str) => {
        //     if(!str)
        // })
        // return strs.join(",1$")
        return JSON.stringify(strs)
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        // if(!str) return []
        // return str.split(",1$")
        return JSON.parse(str)
    }
}
