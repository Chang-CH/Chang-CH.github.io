import{j as n,d as i,F as r}from"./index.9d0d6e4c.js";function o(l){const e=Object.assign({h2:"h2",ul:"ul",li:"li",pre:"pre",code:"code",strong:"strong",h3:"h3",img:"img",p:"p",ol:"ol",em:"em"},l.components);return i(r,{children:[n(e.h2,{children:"stable matching"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"input: given 2 distinct groups of people each with their own rankings of people from the opposite group"}),`
`,n(e.li,{children:`output: stable matching of people: there does not exist 2 pairs (x1, y1), (x2, y2) such that x1 likes y2 more than y1 and y2 likes x1 more than x2
Gale-shapley algorithm:`}),`
`]}),`
`,n(e.pre,{children:n(e.code,{className:"language-py",children:`while # exists free man, m, that has not proposed to every woman:
  w = # first woman on m's list not he has not proposed to yet
  if w.status = free:
    engage(w, m)
  else if # w prefer m over current partner m_old:
    engage(w, m)
    free(m_old)
  else:
    continue # w rejects m
`})}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"men optimal: gale shapely always returns arrangement where men get their best possible stable matching \u2192 reason because men always propose from highest down, if highest is stable already will not change"}),`
`,n(e.li,{children:"women pessimality: gale shapely always returns worst stable matching for women"}),`
`]}),`
`,n(e.h2,{children:"Asymptotic analysis"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[n(e.strong,{children:"Word ram model"}),": RAM = array of words; runtime counts instructions (e.g. mul = 1), ignore compiler optimizations/ OS multithreading etc."]}),`
`,i(e.li,{children:["Notations: for function ",n(e.code,{children:"f(n)"})," w/ asymptotic ",n(e.code,{children:"(n^2)"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["Big O: ",n(e.code,{children:"O(n^2)"})," \u2192 ",n(e.code,{children:"0 <= f(n) <= c*(n^2)"})," for some constant ",n(e.code,{children:"c"})," and where ",n(e.code,{children:"n > k"}),", for some constant ",n(e.code,{children:"k"}),"."]}),`
`,i(e.li,{children:["Big Omega: ",n(e.code,{children:"\u03A9(n^2)"})," \u2192 ",n(e.code,{children:"0 <= c*(n^2) <= f(n)"})," for some constant ",n(e.code,{children:"c"})," and where ",n(e.code,{children:"n > k"}),", for some constant ",n(e.code,{children:"k"}),"."]}),`
`,i(e.li,{children:["Big Theta: ",n(e.code,{children:"\u0398(n^2)"})," \u2192 ",n(e.code,{children:"0 <= a*(n^2) <= f(n) <= b*(n^2)"})," for some constant ",n(e.code,{children:"a"}),", ",n(e.code,{children:"b"}),"and where ",n(e.code,{children:"n > k"}),", for some constant ",n(e.code,{children:"k"}),"."]}),`
`,i(e.li,{children:["small o ",n(e.code,{children:"o(n^2)"}),", omega ",n(e.code,{children:"\u03C9(n^2)"}),": like big notation, but ",n(e.strong,{children:"not equal"})," \u2192 ",n(e.code,{children:"o(n^2)"}),", ",n(e.code,{children:"f(n) < c*(n^2)"})," for all values ",n(e.code,{children:"c"}),", when ",n(e.code,{children:"n > k"})," for some constant ",n(e.code,{children:"k"})]}),`
`]}),`
`]}),`
`,i(e.li,{children:["Limit method: as n \u2192 infinity, ",n(e.code,{children:"f(n)/g(n)"})," \u2192 ",n(e.code,{children:"x"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[n(e.code,{children:"x == 0"}),": ",n(e.code,{children:"f(n) = o(g(n))"}),", since ",n(e.code,{children:"f(n)/g(n) = 0"}),", ",n(e.code,{children:"f(n)/g(n) < k"}),", ",n(e.code,{children:"f(n) < k*g(n)"}),"."]}),`
`,i(e.li,{children:[n(e.code,{children:"x < infinity"}),": ",n(e.code,{children:"f(n) = O(g(n))"}),"."]}),`
`,i(e.li,{children:[n(e.code,{children:"x < infinity, x > 0"}),": ",n(e.code,{children:"f(n) = \u0398(g(n))"}),"."]}),`
`,i(e.li,{children:[n(e.code,{children:"x > 0"}),": ",n(e.code,{children:"f(n) = \u03A9(g(n))"}),"."]}),`
`,i(e.li,{children:[n(e.code,{children:"x == infinity"}),": ",n(e.code,{children:"f(n) = \u03C9(g(n))"}),"."]}),`
`]}),`
`]}),`
`]}),`
`,n(e.h3,{children:"Asymptotic useful shit"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[n(e.strong,{children:"Stirling approximation"}),": ",n(e.code,{children:"log(n!) = \u0398(nlogn)"}),"; also, ",n(e.code,{children:"log(a) * log(b) = log(ab)"}),"."]}),`
`,i(e.li,{children:[n(e.code,{children:"e^x"})," >= ",n(e.code,{children:"1 + x"})]}),`
`,i(e.li,{children:[n(e.code,{children:"k^n"})," > ",n(e.code,{children:"n^a"}),", for any ",n(e.code,{children:"k"})," > 1, and ",n(e.code,{children:"a"}),"."]}),`
`,i(e.li,{children:[n(e.code,{children:"lg^2(n) == (lgn)^2 != lglgn"}),", ",n(e.code,{children:"lg(ab) == lga + lgb"}),", ",n(e.code,{children:"lg(a^n) == nlga"}),", ",n(e.code,{children:"logb(a) == 1/loga(b)"}),", ",n(e.code,{children:"a^logb(c) == c^logb(a)"}),"."]}),`
`,i(e.li,{children:["1 + 1/2 + 1/3 + ... 1/n = ",n(e.code,{children:"ln(n) + O(1)"})," (Harmonic), 1 + 2 + ... n = ",n(e.code,{children:"n(n + 1)/2"})," (AP), 1 + x + x^2 + ... x^n = ",n(e.code,{children:"(x^(n + 1) - 1)/(x - 1)"})," (GP)."]}),`
`,i(e.li,{children:["L'hopitals: lim x \u2192 infinity, ",n(e.code,{children:"f(x)/g(x) == f'(x)/g'(x)"}),", e.g. (",n(e.code,{children:"logn/n == 1/n/1"}),`)
`,n(e.img,{src:"./derivatives.PNG",alt:"fn"})," ",n(e.img,{src:"taylor.PNG",alt:"fn"})]}),`
`]}),`
`,n(e.h2,{children:"Correctness"}),`
`,i(e.p,{children:["Using a loop invariant (e.g. ",n(e.code,{children:"array [1 .. j] sorted after j iterations"}),")"]}),`
`,i(e.ol,{children:[`
`,n(e.li,{children:"initialization: show loop invariant true before iteration"}),`
`,n(e.li,{children:"mantenance: show if invariant true before iteration, remain true after 1 iteration"}),`
`,i(e.li,{children:["termination: when algo terminates, can be used as property to show correctness (e.g. ",n(e.code,{children:"array [1..n-1] is sorted and no element gt [n] exists"}),", imply whole array sorted)"]}),`
`]}),`
`,n(e.h3,{children:"solving recurrence"}),`
`,i(e.ol,{children:[`
`,n(e.li,{children:"Recursion tree: draw whole recursion tree, e.g. merge sort; lgn levels each level n ops, total nlgn"}),`
`,i(e.li,{children:["master method: ",n(e.code,{children:"T(n) = aT(n/b) + f(n)"})," where ",n(e.code,{children:"a"})," >= 1, ",n(e.code,{children:"b"})," > 1, ",n(e.code,{children:"f"})," asymptotic positive. compare ",n(e.code,{children:"f(n)"})," w/ ",n(e.code,{children:"n^(log(a)baseb)"}),".",`
`,i(e.ol,{children:[`
`,i(e.li,{children:[n(e.code,{children:"f(n) = O(n^(log a base b - k))"})," for some constant ",n(e.code,{children:"k > 0"}),": ",n(e.code,{children:"T(n) = \u0398(n ^ (log a base b))"}),`, fn grows polynomially slower than n ^ log a base b (by n ^ k factor)
`,n(e.img,{src:"master1_test.PNG",alt:"fn"})," ",n(e.img,{src:"master1_res.PNG",alt:"fn"})]}),`
`,i(e.li,{children:[n(e.code,{children:"f(n) = \u0398(n^(log a base b) * lg ^ k(n))"}),", ",n(e.code,{children:"k >= 0"}),", (e.g. k = 2 \u2192 (lgn)^2), then ",n(e.code,{children:"T(n) = \u0398(n ^ (log a base b) * lg ^ (k + 1)(n))"}),`, both grow at similar rates
`,n(e.img,{src:"master2_test.PNG",alt:"fn"})," ",n(e.img,{src:"master2_res.PNG",alt:"fn"})]}),`
`,i(e.li,{children:[n(e.code,{children:"f(n) = \u03A9(n^(log a base b + k))"}),", ",n(e.code,{children:"k > 0"}),", ",n(e.code,{children:"T(n) = \u0398(f(n))"}),", ",n(e.code,{children:"f(n)"})," grows faster by ",n(e.code,{children:"n ^ k"}),", ",n(e.strong,{children:"satisfies regularity condition"})," ",n(e.code,{children:"af(n/b) <= cf(n)"}),` for some c
`,n(e.img,{src:"master3_test.PNG",alt:"fn"})," ",n(e.img,{src:"master3_res.PNG",alt:"fn"})]}),`
`]}),`
`]}),`
`,i(e.li,{children:["substitution method:",`
`,i(e.ol,{children:[`
`,i(e.li,{children:["guess a time complexity, e.g. ",n(e.code,{children:"T(n) = n^2"}),", so T(n) <= cn^2 for some c"]}),`
`,i(e.li,{children:["substitute recurring ",n(e.code,{children:"T"}),"'s with eqn: ",n(e.code,{children:"T(n) = T(n/2)"})," \u2192 ",n(e.code,{children:"T(n) = c(n^2)/4"}),"."]}),`
`,i(e.li,{children:["show result is less than guess: ",n(e.code,{children:"c(n^2)/4 <= cn^2"}),"."]}),`
`]}),`
`]}),`
`]}),`
`,n(e.h2,{children:"Randomized algorithms"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Basis works on E(X) = sum(All possible cases * probability of each case)"}),`
`,n(e.li,{children:"Ex: quicksort, let Ai be a permutation where the ith largest element is the first index (i.e. picked as pivot). E(X) = sum(Expected Ai runtime) / n"}),`
`,n(e.li,{children:"Randomized algorithms usually are simple, can approximate good solutions much faster than deterministic"}),`
`,n(e.li,{children:"Bernoulli trial: success probability, p, failure 1 - p. # of bernoulli trials before first success, expected = 1 / p."}),`
`]}),`
`,n(e.h2,{children:"Hashing"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[n(e.code,{children:"U"}),": universe, all possible values to be hashed, ",n(e.code,{children:"M"}),": the size of array to be mapped to, ",n(e.code,{children:"N"}),": number of stored items"]}),`
`,n(e.li,{children:"Randomization: randomize the hash function used, so we do not keep colliding on specific indexes"}),`
`,i(e.li,{children:["Universal hashing: suppose randomized hash function, set of all hash functions = ",n(e.code,{children:"H"}),". Universal hashing \u2192 ",n(e.code,{children:"|h(x) == h(y)|/|H| <= 1/M"}),": for all ",n(e.code,{children:"x"}),", ",n(e.code,{children:"y"})," where ",n(e.code,{children:"x != y"}),", number of hash functions ",n(e.code,{children:"h"})," that collide / number of hash functions total <= ",n(e.code,{children:"1/M"}),"."]}),`
`,n(e.li,{children:"pairwise independent: Pr(h(x) = a, h(y) = b) = 1/M^2, for all x, y, h."}),`
`,n(e.li,{children:"For any universal set of hash functions mapping U \u2192 M, for any N elements the expected number of collisions < N/M"}),`
`,n(e.li,{children:"For any universal set of hash functions,if M >= N, expected cost for N insertion/deletion/queries = O(N) \u2192 for each in N expected cost O(N/M) = O(1) each"}),`
`,i(e.li,{children:["Perfect hashing: expected worst case constant time, if ",n(e.code,{children:"M=N^2"}),", expected num collisions < 1. (",n(e.strong,{children:"Theorem: there exists hash function U \u2192 M where |M| = N^2 with no collisions"}),")",`
`,i(e.ul,{children:[`
`,i(e.li,{children:["2 level scheme: each index is another hash map. at each index choose second level hash function with no collisions (",n(e.code,{children:"M=N^2"}),")"]}),`
`,n(e.li,{children:"if H is universal, Expected size of all secondary arrays in 2 level scheme < 2n"}),`
`]}),`
`]}),`
`]}),`
`,n(e.h3,{children:"Amortized analysis"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[n(e.code,{children:"O(n)"})," = worst case of a single operation; Amortized worst case = average each case in worst case running all k operations."]}),`
`,i(e.li,{children:[n(e.strong,{children:"NOT the same as average case analysis"}),"."]}),`
`,i(e.li,{children:["Aggregate method",`
`,i(e.ul,{children:[`
`,n(e.li,{children:"sum worst possible k operations, divide by k. (if many diff operations pick worst possible permuation of operations)"}),`
`,n(e.li,{children:"tedious, provide upper bound on true cost. cannot provide amortized cost of each operation, only of whole set of operations"}),`
`]}),`
`]}),`
`,i(e.li,{children:["Accounting/ Bankers method",`
`,i(e.ul,{children:[`
`,i(e.li,{children:["Assign common, low cost ops a higher cost, which pays off higher cost, less common operations e.g. increase ",n(e.code,{children:"INSERT"})," cost by 1 so ",n(e.code,{children:"DELETE ALL"})," cost can be 0"]}),`
`,n(e.li,{children:"Actual cost must be <= amortized cost"}),`
`,n(e.li,{children:"show bank never decreases below 0"}),`
`]}),`
`]}),`
`,i(e.li,{children:["Potential method",`
`,i(e.ul,{children:[`
`,i(e.li,{children:["define potential function \u03D5(i) wuch that \u03D5(i) >= 0 for all i,  \u03D5(i) = potential at the end of ith operation. Try to select \u03D5 such that costly operation, ",n(e.code,{children:"\u2206\u03D5"})," is negative, negates actual expensive cost. (find decreasing qty during operation)"]}),`
`,i(e.li,{children:["Amortized cost of ith operation = ",n(e.code,{children:"actual_cost(i) +  \u03D5(i) -  \u03D5(i - 1)"}),".(potential difference, ",n(e.code,{children:"\u2206\u03D5(i)"})," = ",n(e.code,{children:"\u03D5(i) -  \u03D5(i - 1)"}),")"]}),`
`,i(e.li,{children:["Amortized cost n operations = actual cost n ops + ",n(e.code,{children:"\u03D5(n) - \u03D5(0)"}),"."]}),`
`,i(e.li,{children:["To show actual cos n ops = ",n(e.code,{children:"O(f(n) + \u03D5(0))"}),", just show amortized ",n(e.code,{children:"O(f(n))"}),"."]}),`
`,i(e.li,{children:["e.g. binary addition, expensive operation, flip k bits to 0, longest suffix of 1's decrease. ",n(e.code,{children:"\u03D5(i) = 1 + length longest suffix"}),"."]}),`
`,i(e.li,{children:["draw table, columns ",n(e.code,{children:"actual cost"}),", ",n(e.code,{children:"\u2206\u03D5"}),", ",n(e.code,{children:"amortized cost"}),". each row = 1 case, e.g. expensive case + normal case. show amortized cost still same, total cost = n * amortized cost."]}),`
`]}),`
`]}),`
`]}),`
`,n(e.h3,{children:"Longest Common Subsequence"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"definition: subsequence = sequence of chars in A, can skip chars e.g. ACE = subsequence of ABCDE"}),`
`,n(e.li,{children:"if LCS last character at A[n], B[m], then LCS(n,m) = LCS(n-1,m-1) + A[n]"}),`
`,n(e.li,{children:"DP solution: make mxn array of 0. if ai = bj, then T[i,j] = T[i-1, j-1] + 1, else T[i,j] = max(T[i, j-1], T[i-1, j])"}),`
`]}),`
`,n(e.h3,{children:"Knapsack/ coin change"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["for each item, either take or do not take: recursive ",n(e.code,{children:"return max(func(weights[1:n-1], free - weights[n]), func(weights[1:n-1], free))"}),"."]}),`
`,i(e.li,{children:["maximize value, ",n(e.code,{children:"v"}),"."]}),`
`,i(e.li,{children:["DP: ",n(e.code,{children:"A[i, weight]"})," = max value given weight. ",n(e.code,{children:"for i, j: A[i, j] = max(A[i, j - weight[i]] + value[i], A[i-1,j], A[i,j-1])"}),"."]}),`
`]}),`
`,n(e.h3,{children:"DP requirements"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"express problem recursively (optimal substructure: optimal solution involves optimal for smaller problems)"}),`
`,n(e.li,{children:"show small/polynomial number of subproblems"}),`
`,n(e.li,{children:"show overlapping subproblems"}),`
`]}),`
`,n(e.h3,{children:"Greedy algorithms"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"recast problem so only 1 subproblem to be solved at each step. beats divide n conquer, DP. e.g. sorting, take the smallest item each time"}),`
`,i(e.li,{children:[n(e.strong,{children:"Show greedy"}),": greedy property: optimal solution to original problem uses greedy choice, e.g. selection sort"]}),`
`,n(e.li,{children:"Minimum Spanning Tree: Prim's algorithm \u2192 optimal substructure, given MST T, remove 1 edge, both subtrees are MST. Least weight edge between 2 sets of subtrees must be in MST."}),`
`]}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`# For each vertex not connected yet, sort by the minimum weight edge connecting it to alr connected vertices
prio_queue = vertices
prio_queue = vertices.map(x => Vertex(x, INFINITY))
decrease_weight(prio_queue[0], 0)
while prio_queue.length > 0:
  minimum = prio_queue.heappop()
  for neighbour in minimum.adjacent():
    if neighbour in prio_queue && weight(minimum, neighbour) < neighbour.min_weight:
      decrease_weight(neighbour, weight(minimum, neighbour))
      edge[neighbour] = minimum
`})}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["Time complexity:V ",i(e.em,{children:[n(e.code,{children:"heappop"})," + E"]})," ",n(e.code,{children:"decrease_weight"}),".",`
`,i(e.ul,{children:[`
`,i(e.li,{children:["array(",n(e.code,{children:"heappop"}),": O(V), ",n(e.code,{children:"decrease_weight"}),": O(1), total: O(V^2))"]}),`
`,i(e.li,{children:["binary heap: array(",n(e.code,{children:"heappop"}),": O(lgV), ",n(e.code,{children:"decrease_weight"}),": O(lgV), total: O(ElgV))"]}),`
`,i(e.li,{children:["fib heap: array(",n(e.code,{children:"heappop"}),": O(lgV) amortized, ",n(e.code,{children:"decrease_weight"}),": O(1) amortized, total: O(E + VlgV))"]}),`
`]}),`
`]}),`
`]}),`
`,n(e.h3,{children:"Network flows/ incremental algorithm"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Digraph (V,E), each edge (u,v) has capacity c(u,v), want to maximize flow f(u,v). flow conservation, input into vertex = output from vertex"}),`
`,i(e.li,{children:["Ford Fulkerson algorithm O(V * E^2)",`
`,i(e.ol,{children:[`
`,n(e.li,{children:"Find a path from s to t (t = only incoming, goal node) (withour going through 0 capacity edges)"}),`
`,n(e.li,{children:"max capacity = highest capacity (bottleneck) of path. residual capacity of each edge = original capacity - max capacity of path"}),`
`,n(e.li,{children:"decrement (u,v) by max cap, increment (v,u) by max cap"}),`
`,n(e.li,{children:"stop when no more path to t"}),`
`]}),`
`]}),`
`,n(e.li,{children:"maximal flow =  (informally) sum of all incoming edges to s in residual graph; or form flow graph (sum of all residual capacity outgoing from S)"}),`
`,i(e.li,{children:["minimal cuts: S = {nodes reachable from S in residual graph}, T = {nodes reachable from t in residual}",`
`,i(e.ul,{children:[`
`,i(e.li,{children:["For each edge (u,v) w/ u in S v in T, ",n(e.code,{children:"flow(u,v) == capacity(u,v)"}),"; (v,u), ",n(e.code,{children:"flow(v,u) == 0"}),"."]}),`
`,n(e.li,{children:"represent the bottleneck, maximal flow."}),`
`,n(e.li,{children:"Given any cut w/ 2 sets A, B: sum of capacities from A \u2192 B >= capacities S \u2192 T"}),`
`]}),`
`]}),`
`]}),`
`,n(e.h3,{children:"Linear programming"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["Goal: ",n(e.strong,{children:"maximize"})," equation (must be maximize)"]}),`
`,i(e.li,{children:["Format: 1. objective: maximise (x + 2y) 2. variables: x, y >= 0 3. constraints: x <= 10, -y <= 15 etc.",`
`,i(e.ul,{children:[`
`,n(e.li,{children:"can use summation eqn: sum(i member E) xi <= 1"}),`
`]}),`
`]}),`
`,i(e.li,{children:["subject to many contraints (each linear eqn a1*x1 + a2*x2 ... ",n(e.strong,{children:"<="})," bi), must be <="]}),`
`,n(e.li,{children:"graph of parameters e.g. xi, form a graph, based on constraints, optimal point must be in contained area."}),`
`,n(e.li,{children:"Compute in polynomial n,m time, e.g. max flow polynomial |V|,|E|."}),`
`,n(e.li,{children:"Simplex algorithm for linear programming: each solution must be a intersection/vertex (x <= 20 intersect y <= 10). efficient in practice, exponential worst case theoretical (exponential vertices)"}),`
`]}),`
`,n(e.pre,{children:n(e.code,{className:"language-py",children:`start = feasible_vertexes()[0]
for neighbour in start.neighbour_vertexes:
  if calculate_obj(neighbour) > calculate_obj(start):
    start = neighbour
    restart()
return start
`})}),`
`,n(e.h3,{children:"Reductions"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[n(e.code,{children:"A reduces to B"}),": Problem A w/ instance \u{1D6FC}, convert \u{1D6FC} to instance \u{1D6FD} from problem B, solve problem \u{1D6FD}, then use solution to find solution to \u{1D6FC}",`
`,i(e.ul,{children:[`
`,i(e.li,{children:[n(e.strong,{children:"Prove can reduce"}),": A has solution iff B has solution (A is a YES instance iff B is a YES instance)"]}),`
`]}),`
`]}),`
`,i(e.li,{children:[n(e.code,{children:"A has p(n) reduction to B"}),": A <=p B \u{1D6FC} to instance \u{1D6FD} takes p(n), solve \u{1D6FD}, convert back to \u{1D6FC} in p(n) time. (n == no. of bits)",`
`,i(e.ul,{children:[`
`,n(e.li,{children:"for p(n) reduction if T(n) solution to \u{1D6FD}, runtime = O(T(p(n)) + O(p(n))): \u{1D6FC} to \u{1D6FD} at most p(n) elements output, so solution takes T(p(n))"}),`
`]}),`
`]}),`
`,i(e.li,{children:["pseudo polynomial algorithms: poly time in numeric value of input (or length of input), exponential in length of input representation (no. of bits required to represent the entire input) \u2192 input 123 O(1), in binary form is O(logM)",`
`,i(e.ul,{children:[`
`,n(e.li,{children:"e.g.: selection sort list on n integers: input representation length x = 32n (4 bytes int), runtime O(n^2), O(x^2) [constants removed]"}),`
`,n(e.li,{children:"e.g.: naive isPrime: check if integer n is prime. numeric representation time = O(n) [ignore mod cost], input representation length x = logn, input rep time = O(2^x), non poly. pseudo poly time."}),`
`,n(e.li,{children:"e.g.: Knapsack DP, O(NW), N = no elem, W = max weight. W length x = logW. total time O(N*2^x)"}),`
`,i(e.li,{children:["note: suppose input = array size N, each integer size logk. encoding length L = Nlogk. if algo = O(Nk) == O(c ^ logk ",n(e.em,{children:"N) == O(c ^ L/N"})," N), pseudo poly."]}),`
`]}),`
`]}),`
`]}),`
`,n(e.h3,{children:"Intractability"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"decision problem = given input a, output T/F. Optimization problem = e.g. MST"}),`
`,n(e.li,{children:"decision problem reduces to optimization. If cannot solve decision in poly, cannot solve optimization in poly."}),`
`,n(e.li,{children:"decision reduction to decision: \u{1D6FC} = T iff \u{1D6FD} = T; \u{1D6FC} to \u{1D6FD} transformation takes poly(\u{1D6FC}) time"}),`
`]}),`
`,n(e.h3,{children:"P vs NP"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[`
`,n(e.p,{children:"P: solvable in poly time"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"P subset NP: if problem can be solved in P, then verifier can just be the algorithm, certificate = input"}),`
`]}),`
`]}),`
`,i(e.li,{children:[`
`,n(e.p,{children:"NP (Non deterministic Polynomial): problems that poly time reduces to 3SAT (e.g. vertex cover, independent set, set cover)"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"NP proof: there exists a poly time verification algorithm: check if certificate (derived in poly time from output) + instance is legit."}),`
`,n(e.li,{children:'certificate can be full solution: "Check if TSP possible" \u2192 output boolean possible/not, certificate can be TSP cycle.'}),`
`,n(e.li,{children:"even if problem is boolean (e.g. check if subset exists), certificate can be the subset."}),`
`]}),`
`]}),`
`,i(e.li,{children:[`
`,n(e.p,{children:"co - NP: poly time verifiable certificates (counter examples) of NO instances exist"}),`
`]}),`
`,i(e.li,{children:[`
`,n(e.p,{children:"NP-complete: problems computationally equivalent to 3SAT. NP-hard + in NP"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Proof: X is in NP, and 3SAT/any NP-complete reduces to X in poly time"}),`
`]}),`
`]}),`
`,i(e.li,{children:[`
`,n(e.p,{children:"NP-hard: any problem B in NP can reduce to A, then A == NP hard. hardest problems in NP"}),`
`]}),`
`,i(e.li,{children:[`
`,n(e.p,{children:"P = NP, NP problems can be solved in poly time. P != NP, no poly algo exists for NP-complete"}),`
`]}),`
`,i(e.li,{children:[`
`,n(e.p,{children:"Problems:"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"SAT (NP-Complete): boolean satisfiability, check if exists a assignment of T/F to  variables s.t. boolean statement = True"}),`
`]}),`
`]}),`
`,i(e.li,{children:[`
`,n(e.p,{children:"NP-hards:"}),`
`,i(e.ol,{children:[`
`,n(e.li,{children:"3SAT (NP-Complete): each clause (CNF (x V y V z) ^ (a V b V c))) has exactly 3 literals, reduces to a lot of problems"}),`
`,n(e.li,{children:"Independent set (NP-Complete): find subset at least size k where no vertices adjacent"}),`
`,n(e.li,{children:"Vertex cover (NP-Complete): find minimal set of vertices such that each edge at least 1 vertex picked"}),`
`,n(e.li,{children:"Partition (NP-Complete): given array of numbers partition numbers such that difference in total sums is minimized. (cannot greedy: try 16 14 13 13 12 10)"}),`
`,n(e.li,{children:"Set cover (NP-Complete): Given collection of subsets of S, find at most k subsets that when union give back S"}),`
`,n(e.li,{children:"INT program (NP-Complete): given constraints {a*x1 + ... f*x5 <= b1, g*x2 + ... k*x69 <= b2, ...} check if x1 ... can be assigned values {0,1} (0 or 1) s.t. all constraints satisfied"}),`
`,n(e.li,{children:"(Directed) Hamilton cycle (NP-Complete): check if there is a cycle that visits every vertex exactly once"}),`
`,n(e.li,{children:"Subset sum (NP-Complete): determine if there is a subset that sums up to t."}),`
`,n(e.li,{children:"Knapsack (NP-Complete, pseudo poly NW): given an array of items with weight w and value v, find max value that can fit into bag of capacity C."}),`
`]}),`
`]}),`
`]}),`
`,n(e.h3,{children:"approximation"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Approximation ratio: Approx solution C / Actual solution C* (minimization problem. Flipped for maximizing)"}),`
`,n(e.li,{children:"Approx vertex cover: pick an edge add both vertices, remove all adjacent edges. repeat until no more edges. Approx ratio <= 2"}),`
`,i(e.li,{children:["Approx set cover: each iteration, greedy pick set with most elements not picked yet. Approx ratio O(logn)",`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Proof: suppose at step i, k elements remain. Assume optimal pick m sets. then there must be a set of <= m sets that cover k. therefore there must be a set with at least k/m elements."}),`
`]}),`
`]}),`
`,i(e.li,{children:["Approx 3SAT: assign T/F randomly C* / C <= 8/7 (C == expected no. of clauses satisfied) \u2192 each clause ",n(e.code,{children:"a V b V c"}),", only 1/8 chance never satisfy anything"]}),`
`,i(e.li,{children:["Approx Knapsack: (has pseudo poly time w/ DP O(nW), n = no items W = max weight or O(n^2*max(v)))",`
`,i(e.ul,{children:[`
`,i(e.li,{children:["scale each v to ",n(e.code,{children:"math.ceil(v / k)"}),", ",n(e.code,{children:"k"})," = eV/n \u2192 runtime from n^2V to n^2V/k == n^3/e"]}),`
`,n(e.li,{children:"Approx ration C*/ C <= 1/ (1 - e)"}),`
`,n(e.li,{children:"set e to whatever, smaller e more accurate."}),`
`]}),`
`]}),`
`]})]})}function t(l={}){const{wrapper:e}=l.components||{};return e?n(e,Object.assign({},l,{children:n(o,l)})):o(l)}export{t as default};
