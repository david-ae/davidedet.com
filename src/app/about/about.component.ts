import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public solution2(S:string[]){
    if(S.length === 0) return [];
    let index = 0;

    //array container for the resulting array
    let resultingArray = [];

    for(let count = index + 1; count < S.length-1; count++){
      //turn first string to array
      let arrayOfString = this.toArray(S[index]);
      //iterate through string array
      for(let letter of arrayOfString){
        /*get the index of the {letter} string in the next string in
         the next string in array S if it exist
        */
        let indexOfString = S[count].indexOf(letter);
        // if the index is negative, it doesn't exist
        // if it isn't negative, push the index into the resultingArray container
        if(indexOfString >= 0){
          resultingArray.push(indexOfString);      
        }
      }
      index++;
    }

    return resultingArray;
  }

  public toArray(letters: string){
    let arrayOfString = [];
    for(let i = 0; i < letters.length; i++){
      arrayOfString.push(letters[i]);
    } 

    return arrayOfString;
  }

  public getFirstTwoIndices(word1: string, letter: string){
    let indexOfString1 = word1.indexOf(letter);
    return indexOfString1;
  }

  public fib(n:number): number{
    if(n <= 2) return 1;
    return this.fib(n - 1) + this.fib(n - 2);
  }

  public canSum(targetSum: number, array: number[], memo = {}){
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return true;
    if(targetSum < 0) return false;

    for(let num of array){
      const remainder = targetSum - num;
      if(this.canSum(remainder, array, memo)){
        memo[targetSum] = true;
        return true;
      }
    }

    memo[targetSum] = false;
    return false;
  }

  public IsAGoodBinaryString(binaryString: string):boolean{
    if(binaryString.length === 0) return false;
    let parentMemo = {};

    for(let count = 0; count < binaryString.length; count++){   
      let substring = this.formSubString(binaryString, count);
      if(substring === undefined) return false;
      parentMemo[substring] = this.validBinaryString(substring);
    }

    for(let subString in parentMemo){
      if(!parentMemo[subString]) return false;
      else return true;
    }
  }

  public validBinaryString(binarySubString: string):boolean{
    let memo = {};
    for(let count = 0; count < binarySubString.length; count++){
      if(binarySubString[count] in memo) {
        memo[binarySubString[count]]++;
      }else{
        memo[binarySubString[count]] = 1;
      }
    }

    if(memo[1] === memo[0]) 
      return true;
    else return false;
  }

  public formSubString(binaryString: string, index: number): string{
    let substring = binaryString[binaryString.length-1];

    for(let count = 1; count <= index; count++){
      if(!this.IsValidValue(binaryString[count])){
        return undefined;
      } 
      substring += binaryString[count];
    }

    return substring;
  }

  public IsValidValue(subString: string): boolean{
    let subStringNumber = parseInt(subString);
    
    if(subStringNumber <= 1){
      return true;
    }

    return false;
  }

  public tabHowSum(targetSum: number, numbers: number[]){
    const table = Array(targetSum + 1).fill(null);
    table[0] = [];

    for(let count = 0; count <= targetSum; count++){
      if(table[count] !== null){
        for(let num of numbers){
          table[count + num] = [ ...table[count], num];
        }
      }
    }

    return table[targetSum];
  }

  public tabCanContruct(targetString: string, strings: string[]){

  }

  public tabBestSum(targetSum: number, numbers: number[]){
    const table = Array(targetSum + 1).fill(null);
    table[0] = [];

    for(let count = 0; count <= targetSum; count++){
      if(table[count] !== null){
        for(let num of numbers){
          const combination = [ ...table[count], num];
          if(!table[count + num] || table[count + num].length > combination.length){
            table[count + num] = [ ...table[count], num];
          }          
        }
      }
    }

    return table[targetSum];
  }

  public tabCanSum(targetSum: number, numbers: number[]){
    const table = Array(targetSum + 1).fill(false);
    table[0] = true;
    for(let count = 0; count <= targetSum; count++){
      if(table[count] === true){
        for(let num of numbers){
          table[count + num] = true;
        }
      }
    }

    return table[targetSum];
  }

  public howSum(targetSum: number, array: number[], memo = {}){
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;

    for(let num of array){
      const remainder = targetSum - num;
      const remainderResult = this.howSum(remainder, array, memo);
      if(remainderResult !== null){
        memo[targetSum] = [ ...remainderResult, num];
        return memo[targetSum];
      }
    }

    memo[targetSum] = null;
    return null;
  }

  public bestSum(targetSum: number, numbers: number[], memo = {}){
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;

    let shortestCombination = null;

    for(let num of numbers){
      const remainder = targetSum - num;
      const remainderCombination = this.bestSum(remainder, numbers, memo);
      if(remainderCombination !== null){
        const combination = [ ...remainderCombination, num];
        if(shortestCombination === null || combination.length < shortestCombination.length){
          shortestCombination = combination;
        }
      }
    }

    memo[targetSum] = shortestCombination;
    return shortestCombination;
  }

  public canConstruct(targetString: string, wordBank){
    if(targetString === '') return true;

    for(let word of wordBank){
      if(targetString.indexOf(word) === 0){
        const suffix = targetString.slice(word.length);
        if(this.canConstruct(suffix, wordBank)){
          return true;
        }
      }
    }

    return false;
  }

  public main(array: number[]){
    this.selectionSort(array);
    let largestNum = array[array.length-1];
    const result = this.tabSubMain(largestNum, array);
    if(result.length === 0){
      const value = array[array.length-1] + 1;
      result.push(value === 0 ? 1 : value);
    }else{
    }
  }

  public tabSubMain(largestNum: number, array: number[]){
    if(largestNum < 0) return [];
    const absentees = [];

    for(let count = 1; count <= largestNum; count++){
      if(!array.includes(count)){
        absentees.push(count);
      }
    }
    return absentees;
  }

  public submain(largestNum: number, array: number[], memo = {}){
    if(largestNum === 0) return [];
    if(largestNum < 0) return null;

    for(let count = 1; count < largestNum; count++){
      const containedInArray = array.includes(count);
      const result = this.submain(largestNum, array, memo);
      if(!containedInArray && result !== null){
        memo[largestNum] = [ ...result, count];
        return memo[largestNum];
      }
    }    

    memo[largestNum] = null;
    return memo[largestNum];
  }

  public dynamicfib(n:number, memo = {}): number{
    if(n in memo) return memo[n];
    if(n <= 2) return 1;
    memo[n] = this.dynamicfib(n - 1, memo) + this.dynamicfib(n - 2, memo);
    return memo[n];
  }

  public gridTraveler(m:number, n:number, memo = {}){
    const key = m + ',' + n;
    if(key in memo) return memo[key];
    if(m === 1 && n === 1) return 1;
    if(m === 0 || n === 0) return 0;
    memo[key] = this.gridTraveler(m - 1, n, memo) + this.gridTraveler(m, n - 1, memo);
    return memo[key];
  }

  public selectionSort(arr: number[]):void{
    for(let partIndex = arr.length-1; partIndex > 0; partIndex--){
      let largestAt = 0;
      for(let i = 1; i <= partIndex; i++){
        if(arr[i] > arr[largestAt]){
          largestAt = i;
        }
      }
      this.swap(arr, largestAt, partIndex);
    }
  }

  public swap(arr: number[], i: number, j: number): void{
    if(i == j)
      return;
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  public computeLongestIncreasingSubSequence(arr: number[]){
    const tray = Array(arr.length).fill(1);
    for(let count = 0; count <= arr.length; count++){
      let newArr = this.newArray(arr, count);
      this.longestIncreasingSubSequence(newArr, tray);
    }
  }

  public longestIncreasingSubSequence(newArray: number[], tray: number[]){
    let lastValue = newArray[newArray.length-1];
    for(let count = 0; count < newArray.length; count++){
      if(lastValue > newArray[count]){
        if(tray[newArray.length-1] <= tray[count]){
          tray[newArray.length-1] = tray[count]+1;
        }
      }
    }
  }

  public newArray(arr: number[], index: number): number[]{
    let array = [];
    for(let i = 0; i < index; i++){
      array.push(arr[i]);
    }

    return array;
  }

}
