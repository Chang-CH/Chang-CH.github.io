import{j as n,d as i,F as t}from"./index.8c0c9264.js";function r(l){const e=Object.assign({h1:"h1",h2:"h2",ul:"ul",li:"li",p:"p",strong:"strong",ol:"ol",em:"em"},l.components);return i(t,{children:[n(e.h1,{children:"CS2040S notes"}),`
`,n(e.h2,{children:"Asymptotic analysis"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Sequential statements => (cost of first) + (cost of second)"}),`
`,n(e.li,{children:"if/else statements => max(cost of first, cost of second) == (cost of first) + (cost of second)"}),`
`,i(e.li,{children:["Recurrences:",`
`,i(e.ul,{children:[`
`,n(e.li,{children:"fibonacci T(n) = O(1) + T(n - 1) + T(n - 2)  => O(2^n)"}),`
`,n(e.li,{children:"T(N) = 2T(N/2) + O(1) = n           (1 + 2 + 4 + 8 + \u2026 + N)"}),`
`,n(e.li,{children:"T(N) = 2T(N/2) + O(n) = nlogn"}),`
`,n(e.li,{children:"T(N) = T(N/2) + O(1) = logn"}),`
`,n(e.li,{children:"T(N) = T(N/2) + O(n) = n"}),`
`,n(e.li,{children:"1 + 1/2 + 1/3 + .... = O(logn)"}),`
`,n(e.li,{children:"log(1) + log(2) + log(3) ...  = log(n!) = O(nlogn) (Sterling\u2019s Approximation)"}),`
`,n(e.li,{children:"sqrt(n) > log(n)"}),`
`]}),`
`]}),`
`]}),`
`,i(e.p,{children:[n(e.strong,{children:"Trap"}),":** log10n == clog2n -> log10n = log2n/log2(10)"]}),`
`,i(e.p,{children:[n(e.strong,{children:"Trap"}),":** 2^n != 2^2n + n -> 2^2n == 2^n * 2^n, not constant cannot cancel. same for 2^(n^2 + n)"]}),`
`,i(e.p,{children:[n(e.strong,{children:"Trap"}),":** n + n/2 + \u2026 + 1 == 2n-1 Summation of GP"]}),`
`,i(e.p,{children:[n(e.strong,{children:"Trap"}),":** n! != (n-1)!"]}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[`
`,n(e.p,{children:"Time complexity, as function: eg (f(n) = O(n) and g(n) = O(log n))"}),`
`,n(e.p,{children:"directly substitute g(n), f(n) with time complexity"}),`
`,n(e.p,{children:"f(g(n)) -> f(c2logn) -> c1c2logn (treat c2logn as the n in O(n))"}),`
`,n(e.p,{children:"f(n) ^ g(n) -> c1.n ^ c2.logn -> n ^ c2.logn (c2 cannot be cancelled, c1 can)"}),`
`]}),`
`]}),`
`,n(e.h2,{children:"BinSearch (logn)"}),`
`,n(e.p,{children:"search median; if search > median, recurse on right half, else recurse left half. return if only 1 element."}),`
`,n(e.p,{children:"Common errors: check return == element; do not include median for right half, include for left. median = left + (right - left) / 2 BinSearch does not stop if middle == element, only when start == end. Pre-Cond:Sorted"}),`
`,n(e.p,{children:"Loop invariant: if target exists, it will be found after logn ops"}),`
`,n(e.h2,{children:"Sorting"}),`
`,n(e.p,{children:"Pre-Cond: Array of Objects that can be sorted, Post-Cond: Sorted Arr"}),`
`,i(e.ol,{children:[`
`,n(e.li,{children:"Bubble sort O(n^2), omega(n), space(1), stable inplace"}),`
`]}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Start index 1. if arr[n-1] > arr[n] swap. if no swaps made return, else repeat from start. Note that 1 out of place element means O(n^2)"}),`
`,n(e.li,{children:"Loop invariant: after k loops k largest elements sorted at the back."}),`
`]}),`
`,i(e.ol,{start:"2",children:[`
`,n(e.li,{children:"Insertion sort O(n^2), omega(n), space(1), stable inplace"}),`
`]}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Start index 1. while (arr[n-1] > arr[n], swap); index++."}),`
`,n(e.li,{children:"Loop invariant: after k iterations first k elements are sorted."}),`
`]}),`
`,i(e.ol,{start:"3",children:[`
`,n(e.li,{children:"Selection sort O(n^2), omega(n^2), space(1), unstable inplace"}),`
`]}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"For each loop, find next smallest, swap to correct index."}),`
`,n(e.li,{children:"Loop Invariant: after k loops k smallest elements are sorted at the start"}),`
`]}),`
`,i(e.ol,{start:"4",children:[`
`,n(e.li,{children:"QuickSort O(n^2)* or O(nlogn)**, omega(nlogn), space(logn recursive depth), unstable inplace(*non-randomised, ** expected random pivot)"}),`
`]}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Select pivot*(random) swap to index 0, partition: low = 1, high = n, find leftmost low > pivot, rightmost high < pivot, swap. when low == high stop; if low <= pivot swap pivot with low. else swap with low - 1."}),`
`,n(e.li,{children:"Loop invariant: at each depth, the pivot is at the correct index."}),`
`]}),`
`,i(e.ol,{start:"5",children:[`
`,n(e.li,{children:"MergeSort O(nlogn) omega(nlogn) space(n) stable not in place"}),`
`]}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"if length > 1: split array, recurse on left, then right, merge: compare smallest elements, smallest place auxiliary array."}),`
`,n(e.li,{children:"Verify merge sorted array: check every k interval is sorted."}),`
`]}),`
`,n(e.p,{children:"Related techniques:"}),`
`,i(e.ol,{children:[`
`,n(e.li,{children:"QuickSelect: Select kth element of array, O(n) -> n + n/2 + \u2026 = 2n-1"}),`
`,n(e.li,{children:"Partition, if left.length >= k quickselect on left partition else right"}),`
`]}),`
`,n(e.h2,{children:"Data Structures"}),`
`,i(e.ol,{children:[`
`,i(e.li,{children:[`
`,n(e.p,{children:"Traversal - In Order: Left, Root, Right | Pre Order: Root, Left, Right | Post Order: Left, Right, Root | Level Order: Along the same level"}),`
`]}),`
`,i(e.li,{children:[`
`,n(e.p,{children:`AVL Trees (bBST) (Dictionary) *Reversing trees: 1 shift = make inserted branch heavy, 2 shift = 3 nodes up shift towards insert, 2 nodes up shift towards parent
all nodes, left height differs from right height by at most 1.`}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Rotate right: left node becomes parent, original node left takes left node's right (vice versa for left)"}),`
`,n(e.li,{children:"Insert: O(logn) maxRotate: 2 -- insert in, if weight imbalanced max 2 rotate"}),`
`,n(e.li,{children:"Delete: O(logn) maxRotate: logn -- find node, swap with successor, then remove, balance all nodes up."}),`
`,n(e.li,{children:`Conditions for rotation. Node is left heavy ,left child is left heavy RR(node)  Else LR(left child) then RR(node)
Node is right heavy, right child is right heavy LR(node) Else RR(right child) then LR(node)`}),`
`,i(e.li,{children:["Properties:",`
`,i(e.ul,{children:[`
`,n(e.li,{children:"A tree with height h has at most n nodes where n <= 2 ^ (h + 1) - 1"}),`
`,n(e.li,{children:"A height-balanced tree with n nodes has at most height h < 2log(n)"}),`
`,n(e.li,{children:"A height-balanced tree with height h has at least n > 2^(h/2) nodes"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,i(e.li,{children:[`
`,n(e.p,{children:"Tries"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:`Tree with each character of a string as node; Assuming comparing strings take O(L): insert = O(L) [vs AVL O(Llogn)], space complexity O(L) [same for AVL]- flag for termination
(a,b) trees, aka B-Trees`}),`
`,n(e.li,{children:"Trees with a minimum children and b maximum children. All leaves are the same depth from root. B trees are thus balanced."}),`
`,n(e.li,{children:"Insert: if children exceed b: find median in children, promote to parent. recurse if parents exceed b. O(logan)"}),`
`,n(e.li,{children:"Delete: If children under a: demote parent, merge elements. recurse if parents < a. O(logan)"}),`
`,i(e.li,{children:["Rules:",`
`,i(e.ol,{children:[`
`,n(e.li,{children:"Root node [2, b] children, [1, b - 1] keys"}),`
`,n(e.li,{children:"Interval Node [a, b] children, [a - 1, b - 1] keys"}),`
`,n(e.li,{children:"Leaf Node [a - 1, b - 1] keys"}),`
`,n(e.li,{children:"2 <= a <= (b + 1) / 2"}),`
`]}),`
`]}),`
`,n(e.li,{children:"Very fast access due to caching + low depth. However, it may result in very wide trees."}),`
`]}),`
`]}),`
`,i(e.li,{children:[`
`,n(e.p,{children:"Interval Trees: find interval containing x"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Trees with 2 values, start && end. Ordered by start, stores field max end. RUNTIME O(log n)"}),`
`,n(e.li,{children:"Query(x): while(node!=null && x ! in interval) : if(node.left==null) right; elif(x>node.left.max)right; else: left"}),`
`,n(e.li,{children:"SearchIntervals(x): Find interval, remove then search again. Until no more intervals are found. Runtime O(klogn) where k is num of overlapping intervals"}),`
`]}),`
`]}),`
`,i(e.li,{children:[`
`,n(e.p,{children:"Range Trees: find all x within range -- BBST"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Trees with nodes denoting largest in left subtree(Stores largest in left subtree). points are all leaves -- if not leaves, might have cases where node < min parent > min right subchild > min,"}),`
`,n(e.li,{children:"Query(min, max): Find split node: O(log n). Traverse under split node(stop @ leftmost > min, rightmost < max, then enum): O(k) where k is number of leaves. TOTAL => O(log n + k)"}),`
`,n(e.li,{children:"Left Traversal => if(v.key >= low) getAllLeaf(right); traverse left; else traverse right;"}),`
`,n(e.li,{children:"Right Traversal => if(v.key <= high) getAllLeaf(left); traverse right; else traverse left;"}),`
`]}),`
`]}),`
`,i(e.li,{children:[`
`,n(e.p,{children:"Symbol Table: Efficient symbol lookup -- HashMap"}),`
`]}),`
`,i(e.li,{children:[`
`,n(e.p,{children:"Hash Structures: Symbol lookup, get value (aka HashMap, HashTable, HashSet)"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["Stores key value pairs*, uses hashCode() of key to get index of bucket, returns value. Keys",n(e.em,{children:"should"})," be immutable"]}),`
`,n(e.li,{children:"hashMap: Stores KeyValue, allows null key/value, thread unsafe; hashSet: Stores key ONLY, allows null key, thread unsafe, only contains/add; hashTable: NO null key/value, thread safe, slow, allows enumerator to iterate elements. Load Factor: minimum no.keys/buckets for resizing array. Load = n/m, average item/ bucket, n = items m = buckets"}),`
`,n(e.li,{children:"Hash taken to be O(1) most of the time"}),`
`,n(e.li,{children:"Insert: O(hash) chaining, open addressing w/ linear O(hash + n),  double hashing O(hash + 1/(1-load)) -> E(#probes)"}),`
`,n(e.li,{children:"Search O(hash + n) chaining,"}),`
`,n(e.li,{children:"Delete/search: chaining: O(n), E(O(1 + logn), theta(1 + n/m)) open addressing: O(n), E(O(1/(1-load))) -> replace with tombstone flag"}),`
`,n(e.li,{children:"Sorting: O(n^2) -> use enumerator, find smallest, delete;"}),`
`,n(e.li,{children:"Simple Uniform hashing assumption(SUH): All buckets equally likely to be mapped to by key, independent of other keys"}),`
`,n(e.li,{children:"SUH chaining 1 item insert O(hash), search O(n)"}),`
`,n(e.li,{children:"N items insert O(logn) theta(logn/loglogn)"}),`
`,n(e.li,{children:`Recommended hashCode() properties: (Default: checks memory address)
Always returns same value if object is unchanged
If hashCode() ==, then equals() true. Vice versa`}),`
`,n(e.li,{children:`Good hashCode() properties:
Enumerates all possible buckets -> each permutation equally possible, almost no duplicates
Uniform hashing assumption (open addressing): if bucket full, remaining buckets all equally likely to be chosen`}),`
`,i(e.li,{children:["Resolving hash collisions:",`
`,i(e.ol,{children:[`
`,n(e.li,{children:"Chaining: each bucket holds linked list, iterate through to find value;"}),`
`,n(e.li,{children:"Open addressing: if bucket full find next bucket *Cannot insert n>m"}),`
`,n(e.li,{children:"Linear probing: index++; Bad in theory as 1/4 full clusters of size theta(logn) but good in practice due to low overhead, disk caching"}),`
`,n(e.li,{children:"Double hashing: index = ???; expected probes in search = O(1/(1-load)) -- h(value, collisions) = [f(val) + coll * g(val)] mod m; g(val) must be relatively prime to m for all buckets to be hit."}),`
`]}),`
`]}),`
`,n(e.li,{children:"Hash Table VS AVL: Expected time complexity lower, but worst case higher. Elements not sorted, no successor/predecessor queries, enumerating is inefficient"}),`
`,n(e.li,{children:"TABLE RESIZING: consider: 1. cost of inserting(n), 2. total cost of growing, e.g. 2n + n + 1/2n + 1/4n + \u2026 = O(n), amortized O(1): double when load factor (1) hit, halve when \xBC of table filled"}),`
`,i(e.li,{children:["Other hash structs: HashSet: only stores keys, insert/delete/contain;",`
`,i(e.ul,{children:[`
`,i(e.li,{children:["FingerprintHashTable: no keys/equals, chance of false positive fp: P(>=1 fp) = (1-1/m)^n \u2248 (1/e)^(n/m);",`
`,i(e.ul,{children:[`
`,n(e.li,{children:"chance of no false positive: 1 -  (1/e)^(n/m); n/m <= log(1/(1-p)) where p = max tolerable P(fp)"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,i(e.li,{children:[`
`,n(e.p,{children:"Bloom Filter: FHT but stores in multiple(2) buckets to confirm. P(fp) = (1-(1/e) ^ (kn/m)) ^ k; n/m <= (1/2) log (1/(1-root(p)))"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Amortised cost analysis Max(cost/ no of ops) for each iteration of op"}),`
`]}),`
`]}),`
`,i(e.li,{children:[`
`,n(e.p,{children:"Graphs (Need not be connected)"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Diameter: maximum dist b/w 2 nodes furthest apart  |  Degree of graph: max degree of any node"}),`
`,n(e.li,{children:"Clique: complete graph deg(n-1) edge(n(n - 1) / 2)  |  line: diameter/edge(n-1) deg(1)  |  cycle: diameter(n/2 or n/2-1)"}),`
`,n(e.li,{children:"Bipartite:Nodes separable into 2 groups, edges b/w grps, no within grp"}),`
`,n(e.li,{children:"Graph Storage: Adj List: for node store adjacent nodes; Adj Matrix: VxV, if edge v1 -> v2, (v1,v2) = true"}),`
`,n(e.li,{children:"Adj List Space(V+E), find adjacent(s) O(E), Adj matrix Space(V^2), find adjacent O(1), all adjacent O(V)"}),`
`,n(e.li,{children:"Graph traversal **DAG, E>V; Tree, V>E"}),`
`,n(e.li,{children:"BFS O(V+E): While queue !empty deque current; if current == end terminate; for current adj nodes not visited enque(adj);"}),`
`,n(e.li,{children:"DFS O(V+E): if current == end terminate; else recurse all adjacent unvisited } NOT shortest path unless tree (1 path max)"}),`
`,n(e.li,{children:"^assuming adj list, adj matrix O(V^2) since find all adj. Cannot weighted since no weight update"}),`
`,n(e.li,{children:"If destination is always at leaf in a tree, DFS > BFS since full graph wont be explored"}),`
`,i(e.li,{children:["Bellman Ford O(VE) Any weight, no -ve weight cycle. Repeat V-1 times: For each edge, if origin + weight < dest, update; no update terminate. Detects -ve weight cycle: repeat V times, last cycle update -> -ve cycle",`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Best case when edges explore topo-sorted (so within iteration every weight update propagates)"}),`
`]}),`
`]}),`
`,i(e.li,{children:["Toposort -- if b ahead of a, no edge b->a:",`
`,i(e.ol,{children:[`
`,n(e.li,{children:"Post order DFS (prepend node after children processed) O(V+E)"}),`
`,n(e.li,{children:"Kahn's: For edge : destination incoming edges++; For all 0 incEdge nodes, append result, children incEdges-- O(V+E)"}),`
`]}),`
`]}),`
`,n(e.li,{children:`Djisktra O((V + E) logV): BFS, but prio Queue by distance so lowest weighted nodes explored first. NO NEGATIVE
3. current == end ? terminate : for adj E iterations{ if (curr.weight + edge < adj.weight) updateQueue O(logV) or enq new node O(logV), V times} -> O(ELogV + VLogV), E>=V-1 connected -> O(ELogV)
4. Rules: No +ve/-ve mix (cannot early terminate),`}),`
`]}),`
`]}),`
`,i(e.li,{children:[`
`,n(e.p,{children:"Priority Queue/ Heaps"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"PrioQueue: BBST(AVL/minHeap), O(logn): insert, delete, update(ins + del), getMin; contains can be O(1) w/ hashset"}),`
`]}),`
`]}),`
`,i(e.li,{children:[`
`,n(e.p,{children:"Heap: 1.Filled Tree L to R 2.max: parent >= child } as array: Finding Parent => Parent(x) = floor((x - 1) / 2)"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Properties: Height = Floor(logn) -> node height 0;"}),`
`,n(e.li,{children:"Ops: insert -> put at final spot (lowest level leftmost) bubbleUp O(logn)"}),`
`,n(e.li,{children:"delete -> swap w/ last (lowest rightmost) bubbleDown O(logn) -> swap w/ largest child"}),`
`,n(e.li,{children:`HeapSort: Build heap: for i in range(length) bubbleUp[i] O(n); ->  T(n) = \u2211_(h=0)^(lg(n))  (n * h)/2^(h+1) \u2248n Repeat n times Swap (unstable) w/ rightmost heap
element, bubbleDown O(logn) } O(nlogn) Invariant: Last n elements sorted, arr[k] < arr[2k+1 && 2k+2]`}),`
`]}),`
`]}),`
`,i(e.li,{children:[`
`,n(e.p,{children:"UnionFind: Find in same set -- store array, value = index.parent; find(a,b) -> a.root == b.root;"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Quick find: Union(a,b) -> for all nodes w/ parent = a.parent, node.parent = b.parent O(n), find O(1)"}),`
`,n(e.li,{children:"Quick union: Union(a,b) -> a.root.parent = b.root O(n), find O(n)"}),`
`,n(e.li,{children:"Weighted Union: Union(a,b) -> if (b.root.size > a.root.size) a.root.parent = b.root else\u2026; When T1 is merged with T2, the depth of the resulting tree will increase only if size(T1 + T2) > 2size(T1).  Tree height = O(logn); union/find O(logn) O(logn)"}),`
`,n(e.li,{children:"Weighted, Path Compression: After traversal, set all traversed.parent = root (Find root, traverse again set parent). M union/find on N objects, O(n + m\u03B1(m, n)), \u03B1=inv ackermann approx O(1). union/find O(\u03B1(m, n))"}),`
`,n(e.li,{children:"non-weight compress: O(logn) union/find"}),`
`]}),`
`]}),`
`,i(e.li,{children:[`
`,n(e.p,{children:"MST Properties: 1. no cycles 2. split MST, splits are MST themselves 3. For all cycles, heaviest weight not in MST, minimum weight not necessarily in MST. 4. Cut property: for all partitions, min weight edge across cut in MST"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Prims: PQ [reachable vertex, lowest known incoming edge]; extractMin V to explored, for out(V) edge, decreaseKey(dest, weight) if necessary or add vertex if not added. repeat. O((V+E)logV) -> E>=V -> O(ElogV)"}),`
`,n(e.li,{children:"Kruskal: edgeArray, sort, if edge does not close cycle add to MST (union find) O(ELogE) -> E>= V^2, \u2261 O(ELogV)"}),`
`,n(e.li,{children:"Boruvka: edgeArray, sort, for all components, add+connect (union find/quick find) min outgoing edge (BFS/DFS) } O(V+E). Repeats logV times -> each iteration at least n/2 edges added O(ELogV)"}),`
`,i(e.li,{children:["Steiner tree: MST of subset, *non subset == steiner nodes. NP-hard; Approx: gen complete graph of subset, E[v,w] = min weight v to w. MST result edge.",`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Guaranteed O(2opt) MST sum -> let W[node,steiner] = k, W[node,node] =2k,  steiner=kV, MST=2k(V-1), as V->INF, MST/Steiner->2"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,n(e.h2,{children:"DP"}),`
`,i(e.ol,{children:[`
`,n(e.li,{children:"Optimal substructure(has smaller subproblems/base case) -> [min path -ve weight cycle no opt substruct]"}),`
`,n(e.li,{children:"Overlapping subproblems(>1 larger problem rely on same smaller problem e.g. fib(3), fib(2) rely fib(1); General sol: Toposort solve reverse order (Bottom up DP)"}),`
`]}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Longest Incr Subseq: A[i] denotes longest subseq containing A[i]. Solving,A[i] = 1 + longest subseq in (i, n]; Compute back to front 1 + max_len(A(i, n]) O(n^2); nlogn sol: last[], where last[i] = last element of subsequence w/ length i; iterate left to right, binSearch A[i] in last[]. replace last[k] w/ A[i] where last[k+1] > A[i], else last[k+1] = A[i] O(nlogn) maintain parent[] to form original array"}),`
`,n(e.li,{children:"Max path k steps: node[i][k]=max(edge[i->adj] + node[adj][k-1]); Compute node[all][0->k]. ans=max(node[all][k]) O(kE+kV)"}),`
`,n(e.li,{children:"Vertex cover(tree): Find min no. nodes s.t. \u2200edge[i,j] either i/j in set; Soln: A[parent][0] -> min vertex tree w/ node (parent) not included, == sum(A[child\u2026][1]); A[p][1] = w/ parent, == 1 + sum(min(A[child\u2026][0], A[child\u2026][1])) O(2V)"}),`
`,i(e.li,{children:["APSP: naive BFS unweighted O(V(V+E)) djisktra weighted O(V^2LogV) Floyd Warshall: d[v,w,P]=min path v->w using intermediate nodes from set [1,P]; form VxVxP array. Base case arr[a,b,0] -> edge weight a->b, INF if non-existent; arr[a,b,k]=min(arr[a,k,k-1]+arr[k,b,k-1], arr[a,b,k-1]) O(V^3) -> max P = V",`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Variant: APSP, but return if path possible -> arr[a,b,k]=boolean if path a->b w/ 1...k exists (or Matrix multiply^k)"}),`
`]}),`
`]}),`
`]})]})}function o(l={}){const{wrapper:e}=l.components||{};return e?n(e,Object.assign({},l,{children:n(r,l)})):r(l)}export{o as default};
