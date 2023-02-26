import{j as e,d as l,F as s}from"./index.19eef1f8.js";function a(r){const n=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code"},r.components);return l(s,{children:[e(n.h1,{children:"CS1101S"}),`
`,e(n.h2,{children:"ARR"}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`function arr_to_list(arr){
    let temp = null;
    for(let i = array_length(arr) - 1; i >= 0; i = i - 1){
        temp = pair(arr[i], temp);
    }
    return temp;
}
`})}),`
`,e(n.h2,{children:"LIST"}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`function list_to_arr(lst){
    let arr = [];
    let index = 0;
    while(!is_null(lst)){
        arr[index] = head(lst);
        lst = tail(lst);
        index = index + 1;
    }	
    return arr;
}
`})}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`function list_to_int(x){
    let temp = 0;
    while(!is_null(x) && is_number(head(x))){
        temp = temp * 10 + head(x);
        x = tail(x);
    }
    return temp;
}
`})}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`function list_to_str(x){
    let temp = "";
    while(!is_null(x)){
        temp = temp + stringify(head(x));
        x = tail(x);
    }
    return temp;
}
`})}),`
`,e(n.h2,{children:"INT"}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`function int_to_list(n) {
    function helper(k, initial) {
        return k < 10
            ? pair(k, initial)
            : helper((k - (k % 10)) / 10, pair(k % 10, initial));
    }
    return helper(n, null);
}
`})}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`function binary_converter(x){
    function bin_counter(x, number){
        return x === 0
                ? number
                : bin_counter(math_floor(x/2) , pair(x % 2, number));
    }
    return bin_counter(x, null);
}
`})}),`
`,e(n.h2,{children:"TREE"}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`function flatten_tree(xs_org) {
    function helper(xs, initial){
        return is_null(xs)
            ? initial
            : !is_list(head(xs))
            ? helper(tail(xs), pair(head(xs), initial))
            : helper(tail(xs), append(initial, helper(head(xs), null)));
    }
    return helper(xs_org, initial);
}
`})}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`function flatten_bst(bst) {
    return is_empty_tree(bst)
        ? null
        : append(flatten_bst(left_branch(bst)), 
            pair(entry(bst), flatten_bst(right_branch(bst))));
}
`})}),`
`,e(n.h2,{children:"SEARCHING"}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`function member_l(v, xs) {
     return is_null(xs) 
        ? null 
        : equal(v, head(xs)) 
        ? xs 
        : member_l(v, tail(xs));
}
`})}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`function member_nested(v, xs) {
    if (is_null(xs)){
        return null;
    } else if (equal(v, head(xs))){
        return xs;
    } else if (is_list(head(xs))){
        const temp = member_nested(v, head(xs));
        return is_null(temp) 
            ? member_nested(v, tail(xs))
            : temp;
    } else {
        return member_nested(v, tail(xs));
    }
}
`})}),`
`,e(n.h2,{children:"EDITING"}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`function drop(xs, n) {
    return n === 0
        ? xs
        : drop(tail(xs), n - 1);
}
`})}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`function take(xs, n) {
    return n === 0 
        ? null 
        : pair(head(xs), take(tail(xs), n - 1));
}
`})}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`function nested_map(f, xs){
    return is_list(xs)? map(x => nested_map(f,x), xs) : f(xs);
}
`})}),`
`,e(n.h2,{children:"ARRAY_FUNC"}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`function array_equal(arr1, arr2){
    let bool = true;
    if (!is_array(arr1) || !is_array(arr2)){
        return equal(arr1, arr2);
    } else {}
    
    for(let i = 0; i < math_max(array_length(arr1), array_length(arr2)); i = i + 1){
        if (!equal(arr1[i],arr2[i]) || !array_equal(arr1[i], arr2[i])){
            bool = false;
        } else {}
    }
    return bool;
}
`})}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`function array_map(func, arr){
    let new_arr = [];
    for (let i = 0; i < array_length(arr); i = i + 1){
            new_arr[i] = func(arr[i]);
    }
    return new_arr;
}
`})}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`function nested_map_arr(func, arr){
    return is_array(arr) 
        ? array_map(x => nested_map_arr(func, x), arr) 
        : func(arr);
}
`})}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`// front to back accum
function array_accum(func, base, arr){
    for (let i = 0; i < array_length(arr); i = i + 1){
        base = func(arr[i], base);
    }
    return base;
}
`})}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`function array_reverse(arr){
    let new_arr = [];
    for(let i = 0; i < array_length(arr); i = i + 1){
        new_arr[i] = arr[array_length(arr) - i - 1];
    }
    return new_arr;
}
`})}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`function array_dappend(arr1, arr2){
    const arr1_len = array_length(arr1);
    for (let i = 0; i < array_length(arr2); i = i + 1){
        arr1[arr1_len + i] = arr2[i];
    }
    return arr1;
}
`})}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`// destructive
function array_insert(arr, value, index){
    let new_val = arr[index];
    arr[index] = value;
    return is_undefined(new_val) ? arr : array_insert(arr, new_val, index + 1);
}
`})}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`// non destructive
function array_remove(arr, value){
    let new_arr = [];
    let del_flag = false;
    for (let i = 0; i < array_length(arr); i = i + 1){
        if (!del_flag && arr[i] !== value){
            new_arr[i] = arr[i];
        } else if (del_flag){
            new_arr[i - 1] = arr[i];
        } else {
            del_flag = true;
        }
    }
    return new_arr;
}
`})}),`
`,e(n.h2,{children:"SORTING"}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`function insert(x, xs) {
    return is_null(xs) 
        ? list(x)
        : x <= head(xs) 
        ? pair(x,xs)
        : pair(head(xs), insert(x, tail(xs)));
}
`})}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`function insertion_sort(xs) {
    return is_null(xs) 
        ? xs
        : insert(head(xs),
            insertion_sort(tail(xs)));
}
`})}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`function split_list(xs, index){
    function inner_split(xs, index, accum){
        return is_null (xs) 
            ? null 
            : index === 0 
                ? pair(xs, accum)
                : inner_split(tail(xs), index - 1, pair(head(xs), accum));
    }
    return inner_split(xs, index, null);
}
`})}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`function mergesort(xs){
    //CPS on accum.
    function merge_up(xs, ys, accum){
        return is_null(xs) 
            ? accum(ys)
            : is_null (ys) 
                ? accum(xs)
                : head(xs) < head(ys) 
                    ? merge_up(tail(xs), ys, t => accum(pair(head(xs), t)))
                    : merge_up(xs, tail(ys), t => accum(pair(head(ys), t)));
    }
    
    function merge_down(xs, length){
        if (length < 2){
            return xs;
        } else{
            const low = math_floor(length / 2);
            const splitted = split_list(xs, low);
            return tail(merge_up(
                merge_down(head(splitted), length - low), 
                    merge_down(tail(splitted), low), t => pair(0, t)));
        }
    }
    return merge_down(xs, length(xs));
}
`})}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`function quicksort(xs) {
    return is_null(xs) || length(xs) === 1
            ? xs
            : append(quicksort(head(partition(tail(xs),head(xs)))), 
                 pair(head(xs), quicksort(tail(partition(tail(xs),
                    head(xs))))));
}
`})}),`
`,e(n.h2,{children:"Combinatorics"}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`function permutations(xs) {
    if (is_null(xs)) {
        return list(null);
    } else {
        return accumulate(append, null,
                        map(x => 
                            map(permutation => 
                                pair(x, permutation),
                                permutations(remove(x, xs))),
                             xs));
    }
}
`})}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`//chooses r from xs
function combinations(xs, r) {
    if ( (r !== 0 && xs === null) || r < 0) {
        return null; 
    } else if (r === 0) {
        return list(null); 
    } else {
        const no_choose = combinations(tail(xs), r); 
        const yes_choose = combinations(tail(xs), r - 1); 
        const yes_item = map(x => pair(head(xs), x), yes_choose); 
        return append(no_choose, yes_item); 
    }
}
`})}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`function factorial(n){
    let sum = 1;
    while(n > 0){
        sum = sum * n;
        n = n - 1;
    }
    return sum;
}
`})}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`function nPr(n, r){
    return factorial(n) / factorial(n - r);
}
`})}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`function nCr(n, r){
    return factorial(n) / factorial(n - r) / factorial(r);
}
`})}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`function makeup_amount(x, coins) { 
    if (x === 0) { 
        return list(null); 
    } else if (x < 0 || is_null(coins)) {
        return null; 
    } else {
        const combi_A = makeup_amount(x, tail(coins)); 
        const combi_B = makeup_amount(x - head(coins), tail(coins));
        const combi_C = map(x => pair(head(coins), x), combi_B); 
        return append(combi_A, combi_C); 
    }
}
`})}),`
`,e(n.h2,{children:"STREAM FUNCS"}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`// memoize function
function memo(fun) {        
    let already_run = false;
    let result = undefined;
    return () => {
                     if (!already_run) {
                         result = fun();
                         already_run = true;
                         return result;
                     } else {
                         return result;
                     }
             };
}
`})}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`function stream_map_optimized(f, s) {
    return is_null(s)
           ? null
           : pair(f(head(s)),
                  memo( () => stream_map_optimized(
                                 f, stream_tail(s)) ));
}
`})}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`function stream_combine(f, s1, s2) {
    return is_null(s1) && is_null(s2)
        ? null
        : is_null(s1) || is_null(s2)
        ? error(null, "unexpected argument -- stream_combine")
        : pair(f(head(s1),head(s2)), 
               memo(() => stream_combine(f, stream_tail(s1),
                                         stream_tail(s2))));
}
`})}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`function add_streams(s1, s2) {
    return stream_combine((x1, x2) => x1 + x2, s1, s2);
}
`})}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`function scale_stream(stream, factor) {
    return stream_map(x => x * factor,
                      stream);
}
`})}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`function merge(s1, s2) {
    if (is_null(s1)) {
        return s2;
    } else if (is_null(s2)) {
        return s1;
    } else {
        const s1head = head(s1);
        const s2head = head(s2);
        return s1head < s2head
               ? pair(s1head,
                      () => merge(stream_tail(s1), s2))
               : s1head > s2head
                 ? pair(s2head,
                        () => merge(s1, stream_tail(s2)))
                 : pair(s1head,
                        () => merge(stream_tail(s1), stream_tail(s2)));
    }
}
`})}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`// stacks 1,2,3,4 -> 1, 1 + 2, 1 + 2 + 3, ...
function partial_sums(s) {
    return pair(head(s),
                () => add_streams(stream_tail(s),
                                  partial_sums(s)));
}
`})}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`function interleave(s1, s2) {
    return is_null(s1)
        ? s2
        : pair(head(s1), 
               () => interleave(s2, stream_tail(s1))
              );
}
`})}),`
`,e(n.h2,{children:"MATRIX OPS"}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`function flip_about_vert(arr){
    let a = [];
    const width = array_length(arr);
    const height = array_length(arr[0])-1;
    for(let x = 0; x < width; x = x +1){
        a[x] = [];
        for(let y = 0; y <= height; y = y +1){
            a[x][y] = arr[x][height - y];
        }
    }
    return a;
}
`})}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`function flip_about_horizontal(arr){ //flip around the middle array
    let a = [];
    const width = array_length(arr)-1;
    const height = array_length(arr[0]);
    for(let x = 0; x <= width; x = x +1){
        a[x] = [];
        for(let y = 0; y < height; y = y +1){
            a[x][y] = arr[width-x][y];
        }
    }
    return a;
}
`})}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`function swap2d(A, i, j) {
    const temp = A[i][j];
    A[i][j] = A[j][i];
    A[j][i] = temp;
}
`})}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`function transpose(arr){ // flip about 0,0 to n,n
    let counter = 0;
    const width = array_length(arr);
    const height = array_length(arr[0]);
    for(let x = 0; x < width; x = x +1){
        counter = x;
        for(counter; counter < height; counter = counter +1){
            swap2d(arr,x ,counter);
        }
    }
    return arr;
}
`})}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`function turn_anticlockwise(arr){
    let a = [];
    let height = array_length(arr);
    let width = array_length(arr[0]);
    for(let x = 0; x < width; x = x +1){
        a[x] = [];
        for(let y = 0; y < height; y = y +1){
            a[x][y] = arr[y][x];
        }
    }
    return flip_about_vert(a);
}
`})})]})}function t(r={}){const{wrapper:n}=r.components||{};return n?e(n,Object.assign({},r,{children:e(a,r)})):a(r)}export{t as default};
