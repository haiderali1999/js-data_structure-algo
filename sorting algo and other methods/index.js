function bubbleSorting(arr) {
    console.log(arr)
    debugger;
    let arrlen = arr.length;
    for (let i = 0; i <= arrlen; i++) {
        for (let j = 0; j <= arrlen; j++) {
            if (arr[j] > arr[j + 1]) {
                swapThem(arr, j)
            }
        }
    }
    console.log(arr)
    // return arr

}

function swapThem(arr, j) {

    let temp = arr[j]
    arr[j] = arr[j + 1]
    arr[j + 1] = temp

    return arr
}

// bubbleSorting([-101,123,1345134,123])
// pusedo code find smallest in the arr than 
// update smallest and find next smallest than swap

function selectionSort(arr) {
    let arrlen = arr.length;
    let smallest = 0
    for (let i = 0; i < arrlen; i++) {
        for (let j = i; j < arrlen - 1; j++) {
            if (arr[j + 1] < arr[smallest]) {
                console.log(arr[j + 1], arr[smallest])
                smallest = j + 1
            }
        }
        let temp = arr[i]
        arr[i] = arr[smallest]
        arr[smallest] = temp
        smallest = i + 1
    }
    console.log(arr)
    return arr

}

// selectionSort([3,2,1,-1,-2,-3])
// inner loop working in reverse 

function inssertionSort(arr) {
    let arrlen = arr.length

    for (let i = 0; i < arrlen; i++) {
        console.log("outer loop", i)
        for (let j = i + 1; j > 0; j--) {
            console.log("iner")
            // more comparison wrong logic
            if (arr[j] < arr[j - 1]) {
                let temp = arr[j]
                arr[j] = arr[j - 1]
                arr[j - 1] = temp
            }
            // console.log("inner loop", i)

        }
    }
    console.log(arr)
    return arr
}
// haider method
// inssertionSort([3,2,1])

function insertionTeacherSort(arr) {
    let arrlen = arr.length;
    for (let i = 1; i < arrlen; i++) {
        console.log("outer", i)
        let currentValue = arr[i]
        for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
            console.log("inner", j)
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentValue
    }
    console.log(arr)
}

// insertionTeacherSort([3, 2,1])

function insertionAgain(arr) {
    let arrlen = arr.length
    for (let i = 1; i < arrlen; i++) {
        let currentValue = arr[i]
        for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentValue
    }
    console.log(arr)
}

// insertionAgain([2, 1, -1])
function mergeSubArray(arr1, arr2) {
    let i = 0;
    let j = 0;
    let finalArr = []
    while (i < arr1.length && j < arr2.length) {
        console.log(i)
        if (arr1[i] < arr2[j]) {
            finalArr.push(arr1[i])
            i++
        }
        else {
            finalArr.push(arr2[j])
            j++
        }
    }
    while (i < arr1.length) {
        console.log(i)
        finalArr.push(arr1[i])
        i++
    }
    while (j < arr2.length) {
        console.log(i)
        finalArr.push(arr2[j])
        j++
    }
    console.log(finalArr)
    return finalArr
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr

    let midPoint = Math.floor(arr.length / 2)

    let left = mergeSort(arr.slice(0, midPoint))
    let right = mergeSort(arr.slice(midPoint))
    return mergeSubArray(left, right)
}

// mergeSort([3, 2, 1, 0])

// quick sort 

// function quickHelper(arr, start = 0, end = arr.length + 1) {
//     var pivot = arr[start]
//     var swapIdx = start

//     function quickSwap(arr, i, j) {
//         let temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp
//     }

//     for (let i = start + 1; i < arr.length; i++) {
//         if (pivot > arr[i]) {
//             //swapIdx increase because pivot not swap at first other element swap only
//             swapIdx++
//             // we swap the others no which is smaller than pivot pivot is swap at last
//             quickSwap(arr, swapIdx, i)
//         }
//     }
//     // we update the pivot position here
//     quickSwap(arr, start, swapIdx)
//     console.log(arr)
//     return swapIdx
// }

// function quickSort(arr, left = 0, right = arr.length - 1) {
//     if (left < right) {
//         let index = quickHelper(arr, left, right)
//         quickSort(arr, left, index - 1)
//         quickSort(arr, index + 1, right)
//     }
// }

// quickSort([4, 8, 2, 1, 5, 7, 6, 3])

function quickHelper(arr, start = 0, end = arr.length + 1) {
    var pivot = arr[start]
    var pivotIdx = start
    let arrlen = arr.length

    function quickSwap(arr, i, j) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }

    for (let i = start + 1; i < arrlen; i++) {
        if (pivot > arr[i]) {
            pivotIdx++
            quickSwap(arr, pivotIdx, i)
        }
    }
    quickSwap(arr, start, pivotIdx)
    return pivotIdx
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = quickHelper(arr, left, right)
        quickSort(arr, left, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1)
    }
    return arr
}

// quickSort([2,1,3])

function getDigit(num, place) {
    return (Math.floor(Math.abs(num) / Math.pow(10, place) % 10))
}

function digitCount(num) {
    if (num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

function mostDigits(nums) {
    let maxdigit = 0
    let arrlen = nums.length
    for (let i = 0; i < arrlen; i++) {
        maxdigit = Math.max(maxdigit, digitCount(nums[i]))
    }
    return maxdigit
}

function radixSort(nums) {
    let maxDigitCount = mostDigits(nums)
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => [])
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k)
            digitBuckets[digit].push(nums[i])
        }
        nums = [].concat(...digitBuckets)
        console.log(nums)
    }
}
// radixSort(Array.from({ length: 1000 }, () => Math.floor(Math.random() * 10000)))

class Name {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    addTwoNo(no, no2) {
        this.no = no
        this.no2 = no2
        this.sum = this.no + this.no2
        console.log(this)
    }
}

// let sub = new Name(1, 2)
// sub.addTwoNo(12, 12)

// let sub1 = new Name(3, 3)
// sub1.addTwoNo(33, 33)




function reduceFunctions(...funs) {
    let arr = [1, 2, 4]
    funs.forEach(fun => {
        console.log(arr.reduce(fun))
    })
}
let sum = (a, b) => a + b
let mul = (a, b) => a * b
let divide = (a, b) => a * b
let subtract = (a, b) => a * b

// reduceFunctions(sum, mul, divide, subtract)

// generator

function* getPage(list, pageSize = 1) {
    for (let index = 0; index < list.length; index += pageSize) {
        yield list.slice(index, index + pageSize);
    }
}

const list = [1, 2, 3, 4, 5, 6, 7, 8];
const page = getPage(list, 3); // Generator { }

// page.next(); // { value: [1, 2, 3], done: false }
// page.next(); // { value: [4, 5, 6], done: false }
// page.next(); // { value: [7, 8], done: false }
// page.next(); // { value: undefined, done: true }

function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

// const genrator = gen();
// genrator.next(); // { value: 1, done: false }
// genrator.next(); // { value: 2, done: false }
// genrator.next(); // { value: 3, done: false }
// genrator.next(); // { value: undefined, done: true }
// genrator.return(); // { value: undefined, done: true }
// genrator.return(1); // { value: 1, done: true }

function* gen() {
    while (true) {
        try {
            yield 42;
        } catch (e) {
            console.log("Error caught!");
        }
    }
}

// const g = gen();
// g.next();
// // { value: 42, done: false }
// g.throw(new Error("Something went wrong"));
// "Error caught!"
// { value: 42, done: false }


class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        const dx = a.x - b.x
        const dy = a.y - b.y

        return Math.hypot(dx, dy)
    }
}

// const p1 = new Point(5, 5)
// const p2 = new Point(51, 51)
// Point.distance(p2, p1)

// console.log(p1, p2, Point.distance(p2, p1))



