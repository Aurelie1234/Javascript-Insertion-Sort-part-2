function insertionSort2(n, arr) {
    
    // Write your code here
  for (let i = 1; i<n; i++) {
     let k = i
        for(let j = i-1; j>=0; j--) {


            if (arr[k] < arr[j]) {
                let temp = arr[j]
                arr[j] = arr[k]
                arr[k] = temp
            }
            k -=1
        }
        console.log(...arr);
    }
  
    
}
