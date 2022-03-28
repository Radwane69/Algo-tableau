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

export function sanslesstring(arra) {
    let arra = [];
    for (let i = 0; i < arra.length; i++) {
        if (typeof arra[i] != 'string') {
            arra.push(arra[i]);
        }
    }
    return arra;
}