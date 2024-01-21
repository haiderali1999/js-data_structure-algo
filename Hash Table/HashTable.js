function hashTable(str, arrLen) {
    let total = 0;
    for (let key of str) {
        let value = key.charCodeAt(0) - 96;
        total = (total + value) % arrLen;
    }
    return total
}

// hashTable("pink", 10)
// hashTable("orange", 10)
// hashTable("blue", 10)
// hashTable("red", 10)

function improveHash(str, arrLen) {
    let total = 0;
    let primeNo = 31;

    for (let i = 0; i < Math.min(str.length, 100); i++) {
        const value = str[i].charCodeAt(0) - 96;
        total = (total * primeNo + value) % arrLen;
    }
    return total
}

// improveHash("red", 13)

class HashMap {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }
    _hash(key) {
        let total = 0;
        let primeNo = 31;
        let length = key?.length
        for (let i = 0; i < Math.min(length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * primeNo + value) % this.keyMap.length;
        }
        return Math.abs(total);
    }
    set(key, value) {
        let index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }
    get(key) {
        let index = this._hash(key)
        for (let i = 0; i < this.keyMap[index].length; i++) {
            if (this.keyMap[index][i][0] === key) {
                console.log(this.keyMap[index][i][1])
                return this.keyMap[index][i][1]
            }
        }
        // let keyPair;
        // for (let value of this.keyMap[index]) {
        //     if (value.includes(key)) {
        //         keyPair = value
        //     }
        // }
        return undefined
    }
    keys() {
        let result = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            for (let j = 0; j < this.keyMap[i].length; j++) {
                if (!result.includes(this.keyMap[i][j][0])) {
                    result.push(this.keyMap[i][j][0])
                }
            }
        }
        console.log(result)
        return result
    }
    // keys() {
    //     let result = [];
    //     for (let i = 0; i < this.keyMap.length; i++) {
    //         for (let j = 0; j < this.keyMap[i].length; j++) {
    //             result.push(this.keyMap[i][j][0])
    //         }
    //     }
    //     let obj = {}
    //     for (let value of result) {
    //         obj[value] = value
    //     }
    //     console.log(obj)
    //     console.log(Object.values(obj))
    //     console.log(result)
    //     return result
    // }
    values() {
        let result = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            for (let j = 0; j < this.keyMap[i].length; j++) {
                result.push(this.keyMap[i][j][1])
            }
        }
        console.log(result)
        return result
    }
    showArr() {
        console.log(this.keyMap);
        console.log(this.keyMap[0]);
    }
}

let hashMap = new HashMap(4);
hashMap.set("key1", "value1")
hashMap.set("key1", "value1")
hashMap.set("key1 updated", "value1")
hashMap.set("key2", "value1")
hashMap.set("key3", "value1")
hashMap.set("key4", "value1")
hashMap.keys()
console.log(hashMap.keyMap)
// hashMap.values()
// hashMap.get("key1 updated")
// hashMap.showArr();



