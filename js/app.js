export const minimum = (arr) => {
  let mini = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < mini) {
      mini = arr[i];
    }
  }
  return mini;
}

export const moyenne = (Array) => {
  let moyenn = 0;
  for (let i = 0; i < Array.length; i++) {
    moyenn + Array[i];
  }
  return moyenn / Array.length;
}

export function sanslesstring(arr) {
  let arr = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] != "string") {
      arr.push(arr[i]);
    }
  }
  return arr;
}

export const impairetPair = (arr) => {
  let array = [[], []];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1 || arr[i] % 2 == -1) {
      array[0].push(arr[i]);
    } else {
      array[1].push(arr[i]);
    }
  }
  return array;
}
