import{j as n,d as i,F as t}from"./index.8c0c9264.js";function l(r){const e=Object.assign({h2:"h2",p:"p",strong:"strong",ol:"ol",li:"li",code:"code",h3:"h3",pre:"pre",ul:"ul",em:"em"},r.components);return i(t,{children:[n(e.h2,{children:"AI: definitions"}),`
`,i(e.p,{children:[`Strong AI: general problem solver, can solve many problems, very dynamic
Weak AI: solves `,n(e.strong,{children:"fewer"})," problems (usually 1, but not always)"]}),`
`,i(e.ol,{children:[`
`,n(e.li,{children:"percepts: input, e.g. what is seen"}),`
`,n(e.li,{children:"sensors: receive/parse input"}),`
`,n(e.li,{children:"functions: process input, produce execution steps"}),`
`,n(e.li,{children:"actuators: performs actions"}),`
`,n(e.li,{children:`actions: output
env --percepts--> sensors > functions > actuators --actions--> env (agents = sensors + functions + actuators)
Rational agent: Given [percept sequence, prior knowledge, set of actions, performance measure], optimises performance measure`}),`
`]}),`
`,i(e.p,{children:[n(e.strong,{children:"Agent function"}),": P, percept sequence --agent function f--> action A"]}),`
`,n(e.p,{children:"Environment properties:"}),`
`,i(e.ol,{children:[`
`,n(e.li,{children:"fully observable(can see entire board) vs partially observable(can only see part of board)"}),`
`,n(e.li,{children:"deterministic(same actions same outcome) vs stochastic(gamba)"}),`
`,i(e.li,{children:["episodic(next action will not affect future choices, ",n(e.strong,{children:"can plan"}),") vs sequential(next action e.g. pacman move character, will affect future decisions)",`
`,i(e.ol,{children:[`
`,n(e.li,{children:"If we can plan, e.g. produce sequence of actions (then execute sequentially e.g. sudoku), considered episodic."}),`
`]}),`
`]}),`
`,n(e.li,{children:"Discrete(fixed set of states possible) vs continuous (infinite number of states possible)"}),`
`,n(e.li,{children:"Single agent (play with urself) vs Multi agent(against another player/AI)"}),`
`,n(e.li,{children:"Known (know mechanics, performance metrics etc) vs Unknown (black box)"}),`
`,n(e.li,{children:"Static vs Dynamic(Environment changes while agent is deciding on action)"}),`
`]}),`
`,n(e.p,{children:"Types of agents:"}),`
`,i(e.ol,{children:[`
`,i(e.li,{children:["Reflex agent: ",n(e.strong,{children:"directly maps"})," percepts to actions (e.g. if at 0,0 go left; if at 0,1 go up; ...)"]}),`
`,n(e.li,{children:"Model based reflex action: generalizes percepts into models (e.g. groups similar situations into same case, produce action)"}),`
`,n(e.li,{children:"Goal based agent: given state and actions, definition of goal, tries to satisfy goal"}),`
`,i(e.li,{children:["Utility based agent: like goal, but ",n(e.strong,{children:"optimizes"})," utility, e.g. chess, takes best move (more complex than goal, need to understand utility not just goal)"]}),`
`]}),`
`,n(e.p,{children:"Search space definition"}),`
`,i(e.ol,{children:[`
`,n(e.li,{children:"State representation si: data describing instance i of the environment, e.g. current position, walls etc."}),`
`,i(e.li,{children:["Goal test: ",n(e.code,{children:"isGoal(si) => boolean"})]}),`
`,i(e.li,{children:["Actions: ",n(e.code,{children:"actions(si) => Action[]"}),", possible actions at state i"]}),`
`,i(e.li,{children:["Action costs: ",n(e.code,{children:"cost(si, aj, sk) => number"}),", cost of taking an action ",n(e.code,{children:"aj"})," to transition ",n(e.code,{children:"si"})," to ",n(e.code,{children:"sk"}),", generally >= 0."]}),`
`,i(e.li,{children:["Transition model: ",n(e.code,{children:"T(si, aj) => sk"}),", result of executing ",n(e.code,{children:"aj"})," at ",n(e.code,{children:"si"}),`.
summarized as a graph problem, can find traversal start state to end state`]}),`
`]}),`
`,n(e.h3,{children:"General search algorithm"}),`
`,i(e.p,{children:[n(e.strong,{children:"Uninformed search"}),":"]}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`const frontier = state.edges
while (frontier) {
  const current = frontier.pop()
  if(isGoal(current.state)) return current.getpath()
  for a in actions(current.state) frontier.push(Node(T(state.current, a)))
}
`})}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["Node = ",n(e.code,{children:"state"})," + ",n(e.code,{children:"parent"})," + ",n(e.code,{children:"actions"})," + ",n(e.code,{children:"cost"})," + ",n(e.code,{children:"depth"}),". e.g. current path A -> B -> C, ",n(e.code,{children:"Node(C, parent = [A, B], action = 'moveup', ...)"}),"."]}),`
`,n(e.li,{children:"uninformed search = no domain knowledge beyond search problem formulation"}),`
`,n(e.li,{children:"typical uninformed search algo differ in frontier data struct: BFS = queue, Uniform Cost search = prio queue, Depth first = stack etc."}),`
`,i(e.li,{children:["Correctness: algorithm is ",n(e.strong,{children:"Complete"})," if solution will be found when one exists, raise error if no solution found. ",n(e.strong,{children:"Optimal"})," = find solution with lowest cost"]}),`
`,i(e.li,{children:["by default ",n(e.strong,{children:"late goal test"}),` (test goal on neighbours before adding to frontier) except for BFS
Breadth First Search (default `,n(e.strong,{children:"early goal test"}),"):"]}),`
`]}),`
`,i(e.ol,{children:[`
`,n(e.li,{children:"Queue frontier"}),`
`,i(e.li,{children:[n(e.code,{children:"O(b^d)"})," time/space complexity: b = branching factor, how many branch; d = depth of tree"]}),`
`,i(e.li,{children:['"',n(e.em,{children:"Complete"}),'" (on condition: finite branching factor && (finite search space OR has a solution)), Subobtimal (no concern about cost)']}),`
`,i(e.li,{children:["Can be improved using Early goal test (test before push) instead of Late goal test (original) --> saves ",n(e.code,{children:"b^k+1"})," where k is the depth of the goal"]}),`
`]}),`
`,n(e.p,{children:"Uniform Cost Search (Djisktra)"}),`
`,i(e.ol,{children:[`
`,n(e.li,{children:"Queue = prio queue w/ cost prio"}),`
`,i(e.li,{children:["Time/Space complexity ",n(e.code,{children:"O(b^e)"})," where ",n(e.code,{children:"e"}),"=",n(e.code,{children:"1 + floor(Optimal path cost C / k)"}),", ",n(e.code,{children:"k"})," is a small positive constant"]}),`
`,i(e.li,{children:['"',n(e.em,{children:"Complete"}),'"(on same BFS condition), optimal (late goal) --> early goal may not be optimal w/ graph search']}),`
`]}),`
`,n(e.p,{children:"Depth First Search:"}),`
`,i(e.ol,{children:[`
`,i(e.li,{children:["Time complexity ",n(e.code,{children:"O(b^m)"}),", space = ",n(e.code,{children:"O(bm)"}),", ",n(e.code,{children:"m"})," == max depth --> ",n(e.code,{children:"bm"})," because at max space req = max depth b*m no. of nodes in stack"]}),`
`,n(e.li,{children:"Incomplete under BFS condition: if infinite search space, aka depth, dfs continue forever"}),`
`,n(e.li,{children:"subotimal"}),`
`,i(e.li,{children:["Can be improved by backtracking instead of each node storing entire path back to node. ",n(e.code,{children:"O(m)"})," space"]}),`
`,i(e.li,{children:[n(e.strong,{children:"NOTE"}),": pop in reverse order due to stack: ",n(e.code,{children:"pop A push B push C, pop C, pop B"}),"."]}),`
`]}),`
`,n(e.p,{children:"Depth limited/Iterative deepening"}),`
`,i(e.ol,{children:[`
`,i(e.li,{children:["Depth limited = DFS with depth limit ",n(e.code,{children:"l"}),", only search up to ",n(e.code,{children:"l"})," depth, no actions at ",n(e.code,{children:"l"})," depth"]}),`
`,n(e.li,{children:"Depth limited same guarantees as DFS"}),`
`,n(e.li,{children:"Iterative deepening: increase depth limit by 1 each time until solution found"}),`
`,i(e.li,{children:["Iterative deepening guarantees completeness under BFS conditions, but with space complexity of dfs ",n(e.code,{children:"O(bm)"}),". repeated calculation of smaller depths overhead ~11%, insignificant"]}),`
`]}),`
`,n(e.p,{children:"Trees vs graphs"}),`
`,i(e.ol,{children:[`
`,i(e.li,{children:["v1: (before pushing to frontier) ",n(e.code,{children:"if child not in reached: frontier.push(child) && reached[child.state] = child"}),";"]}),`
`,i(e.li,{children:["v2: (before pushing to frontier) ",n(e.code,{children:"if child not in reached or child.cost < reached[child.state].cost: frontier.push(child) && reached[child.state] = child"}),";"]}),`
`,i(e.li,{children:["v3: when exploring ",n(e.code,{children:"node"}),": ",n(e.code,{children:"reached[node.state] = node"}),"; before push: ",n(e.code,{children:"if child not in reached: frontier.push(child)"}),'; (like "late reaching")']}),`
`]}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["Graphs can have cycles; to prevent revisits, can add visited hashmap (",n(e.code,{children:"Graph search v1"}),"), check map before pushing adjacent nodes; ",n(e.code,{children:"Graph search v2"}),": if revisit has lower cost update cost and add to frontier (revisit it)"]}),`
`,i(e.li,{children:["Graph search ",n(e.strong,{children:"default graph search v1"}),", all BFS UCS DFS DLS IDS space time ",n(e.code,{children:"O(|V| + |E|)"}),", no check cheaper path"]}),`
`]}),`
`,i(e.p,{children:[n(e.strong,{children:"Informed search"}),":"]}),`
`,n(e.p,{children:"General Best First Algo:"}),`
`,n(e.pre,{children:n(e.code,{className:"language-py",children:`while len(frontier) > 0:
  node = frontier.pop()
  if is_goal(node.state): # late goal test
    return node
  # graph search v2
  for child in [Node(state=apply(node.state, action), parent=node, cost=node.cost + action.cost) for action in problem.actions]:
    if child.state in reached or child.cost < reached[child.state].cost:
      reached[child.state] = child
      frontier.append(child)
`})}),`
`,n(e.p,{children:"Greedy Best First Search:"}),`
`,i(e.ol,{children:[`
`,i(e.li,{children:["UCS except prio determined by ",n(e.code,{children:"h(n)"})," heuristic: distance from ",n(e.code,{children:"g"}),"."]}),`
`,n(e.li,{children:"sub optimal: when adding child nodes to frontier, does not consider distance from parent to child, only sorted by distance child to goal"}),`
`,n(e.li,{children:"(tree search) incomplete: if A --> B and B --> A, both A/B same h, can end up going back and forth b/w A and B"}),`
`,n(e.li,{children:"(graph search) complete if finite state space: will visit entire space"}),`
`]}),`
`,n(e.p,{children:"A* search:"}),`
`,i(e.ol,{children:[`
`,n(e.li,{children:"Greedy Best First + account for alr incurred costs"}),`
`,i(e.li,{children:[n(e.code,{children:"f(n) = g(n) + h(n)"})," --> ",n(e.code,{children:"g(n)"})," = actual path cost, ",n(e.code,{children:"h(n)"})," = estimated cheapest path to G; ",n(e.code,{children:"h(n)"})," gets more accurate the closer it is to G"]}),`
`,n(e.li,{children:"completeness, same criteria as ucs"}),`
`,i(e.li,{children:["optimality: optimal if ",n(e.code,{children:"h(n)"})," is admissible (tree, graph v2 late goal); early goal/ graph v1 may skip optimal"]}),`
`,i(e.li,{children:["if ",n(e.code,{children:"h(n)"})," consistent, graph search optimal by v3 (v3 fixes v1 --> v1 cannot add more than 1 path to G since G marked as reached too early)"]}),`
`,i(e.li,{children:["note: if ",n(e.code,{children:"h1(n) >= h2(n)"}),", then ",n(e.code,{children:"h1"})," ",n(e.em,{children:"dominates"})," ",n(e.code,{children:"h2"}),", aka ",n(e.code,{children:"h1"})," more efficient, higher accuracy, need to try fewer paths (assuming both admissible)"]}),`
`]}),`
`,i(e.p,{children:[n(e.strong,{children:"admissible heuristics"}),":"]}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[n(e.code,{children:"h(n)"})," considered admissible if it never overestimates cost (to goal): ",n(e.code,{children:"h(n) <= h*(n)"}),", paths ending at goal exact, paths not ending at goal overestimated"]}),`
`,i(e.li,{children:["e.g. euclidean ",n(e.code,{children:"sqrt(a^2 + b^2)"})," always underestimates"]}),`
`,n(e.li,{children:"Dominance: if h2 dominate h2, then h2(n) >= h1(n) for all n. Assume admissible when discussing dominance."}),`
`]}),`
`,i(e.p,{children:[n(e.strong,{children:"consistent heuristics"}),":"]}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["requirement: ",n(e.code,{children:"h(parent) <= h(child) + cost(parent, child)"}),", so ",n(e.code,{children:"f"})," costs can be monotonically increasing"]}),`
`,n(e.li,{children:"if consistent, then also admissible"}),`
`]}),`
`,n(e.p,{children:n(e.strong,{children:"Effective branching factor"})}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"More efficient heuristics, less number of paths with cost <= optimal path, less nodes explored"}),`
`,i(e.li,{children:["can be evaluated with estimated branching factor: N nodes explored, solution at d depth, find b s.t. ",n(e.code,{children:"N + 1 = (b^(d + 1) - 1) / (b - 1)"}),", compare b"]}),`
`,i(e.li,{children:["derived from ",n(e.code,{children:"N + 1 = sum(b^i)[1 --> d]"})," --> Gp formula ",n(e.code,{children:"(ar^n - 1)/(r - 1)"}),", ",n(e.code,{children:"a"})," = ",n(e.code,{children:"b"}),", ",n(e.code,{children:"n"})," = ",n(e.code,{children:"d"}),"."]}),`
`]}),`
`,n(e.p,{children:"Relaxing problems: to generate a heuristic for a problem, sometimes we can simplify the problem, e.g. path finding, every cost is 1"}),`
`,n(e.h2,{children:"Gradient descent"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"local search: greedy approach, maintain best successor. good for large/infinite search spaces, but might not guarantee goal"}),`
`,n(e.li,{children:"hill climb algorithm:"}),`
`]}),`
`,n(e.pre,{children:n(e.code,{className:"language-py",children:`while True: # like f(n) = -h(n)
  neighbour = max(current.successors) # steepest hill/ greedy
  if value(neighbour) <= value(current):
    return current
  current = neighbour
  if is_goal(current):
    return current
`})}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["complete state formulation: ",n(e.strong,{children:'each state is a potential "solution"'}),". either guess and check neighbours or move to states with higher value ",n(e.code,{children:"f(n) = -h(n)"}),".",`
`,i(e.ul,{children:[`
`,n(e.li,{children:'good for problems where "path" to goal not important'}),`
`,i(e.li,{children:[n(e.code,{children:"-h(n)"})," simply to satisfy hill climb name, otherwise ",n(e.code,{children:"h(n)"})," descending, lower better"]}),`
`]}),`
`]}),`
`,i(e.li,{children:["sideways move: instead of ",n(e.code,{children:"neighbour < current"})," use ",n(e.code,{children:"neighbour <= current"}),", so can traverse plateaus"]}),`
`,n(e.li,{children:"stochastic hill climb: choose randomly among states better than current (not just best). takes longer, but may find better solution (Stochastic gradient descent = pick random sets of training data for each iteration of learning in ML)"}),`
`,n(e.li,{children:"First choice hill climb: when too many successors, randomly generate successor until 1 better value (instead of generate all)"}),`
`,i(e.li,{children:["random restart: add outer loop to pick a new random starting state, reset until found",`
`,i(e.ul,{children:[`
`,i(e.li,{children:["expected number of steps: ",n(e.code,{children:"x + (1-p)/p*y"}),", ",n(e.code,{children:"x"}),"=E(steps to find actual goal), ",n(e.code,{children:"y"}),"=E(steps to find local maxima), ",n(e.code,{children:"p"}),"=probability to find global maxima, ",n(e.code,{children:"(1-p)/p"})," = E(no. failures)"]}),`
`]}),`
`]}),`
`,n(e.li,{children:"local beam search: store k states instead of current state, each iteration generate successors for all k, repeat for best k (or random out of better a la stochastic hill climb). goal test for each k after selecting k"}),`
`,n(e.li,{children:"Note that hill climb may not give optimal (global minima: best possible state, does not need to be goal if goal impossible), may land in local minima instead."}),`
`]}),`
`,n(e.h3,{children:"formulate as a search problem"}),`
`,i(e.ol,{children:[`
`,n(e.li,{children:"Initial state"}),`
`,n(e.li,{children:"successor function"}),`
`,n(e.li,{children:"goal tst"}),`
`,n(e.li,{children:"step cost"}),`
`]}),`
`,n(e.h2,{children:"Constraint satisfaction Problems"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"systematic approach, do not search states where constraint not satisfied. prune invalid subtrees"}),`
`,n(e.li,{children:"Only consider urbary/binary constraints, ignore global constraints unless its CSP formulation question"}),`
`,i(e.li,{children:["constraints can be dynamic, e.g. simultaneous equations, each eqn = constraint",`
`,i(e.ul,{children:[`
`,i(e.li,{children:["notation: ",n(e.code,{children:"<(scope), rel>"}),": e.g. ",n(e.code,{children:"<(x1, x2), x1 > x2>"}),". |scope|, single = urnary, double = binary, >2 global"]}),`
`,n(e.li,{children:"hypergraphs: link variables (circles/vertexes) via relationships (edges). linking vertex (box) can also be used to join global constraints"}),`
`]}),`
`]}),`
`]}),`
`,n(e.p,{children:n(e.strong,{children:"Formulate as a CSP:"})}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"n x 2 table, first row = all variables. second row = domain of each variable"}),`
`,n(e.li,{children:"constraints = e.g. var1 != var2 etc."}),`
`,n(e.li,{children:"possible solution = valid assignment"}),`
`]}),`
`,n(e.pre,{children:n(e.code,{className:"language-py",children:`# CSP (DFS) general algorithm
while is_incomplete(assignments):
  try: # if nothing to assign return failure
    current = assign_to_non_assigned(current)
    if current.consistent():
      assignments.push(current)
  except:
    return failure
return assignments
`})}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"use DFS traverse. keep assigning until fail"}),`
`,n(e.li,{children:"can backtrack if fail (like DFS) (or look ahead check if fail before assigning)"}),`
`,n(e.li,{children:"state representation: initial state all variable unassigned. domain = possible values, variables = stuff that need to be assigned a value"}),`
`,n(e.li,{children:"action: assign values to variables. no costs/evaluation function used"}),`
`,n(e.li,{children:"goal test: all constraintes satisfied"}),`
`,i(e.li,{children:["CSP search tree leaves = ",n(e.code,{children:"n!m^n"})," --> first level nm leaf states, subtree of each = (n-1)*m, (n-2)m ..."]}),`
`]}),`
`,n(e.pre,{children:n(e.code,{className:"language-py",children:`def backtrack(csp, assignment):
  if assignment.complete():
    return assignment
  var = select_unassigned_var(csp, assignment)
  for value in domain.sort(get_value_sorter(csp, assignment, var)):
    if consistent(value, var, assignment):
      assign(value, var, assignment)
      if infer(assignment) != failure:
        csp.append(infer(assignment))
        result = backtrack(csp, assignment)
        if result != failure:
          return result
        unassign(value, var, assignment) # backtrack
  return failure
`})}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[`
`,n(e.p,{children:"constraint graph: simple vertex, circle: variable, linking vertex, square: global constraints, edge: links variables in scope of constraint"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"urnary constraints = node itself, binary constraint = edge"}),`
`]}),`
`]}),`
`,i(e.li,{children:[`
`,i(e.p,{children:["variable order heuristics: (",n(e.code,{children:"select_unassigned_var"}),")"]}),`
`,i(e.ol,{children:[`
`,n(e.li,{children:"Minimum Remaining values (MRV): Choose variable with fewest consistent values (e.g. map colouring, area on map with fewest possible colours) --> finds inconsistent subtree fast, prunes them"}),`
`,n(e.li,{children:"Degree heuristic: used for tie breaking stuff like MRV. Select variable w/ most constraints among unassigned variables (e.g. map colouring, area adjacent to most other areas)"}),`
`,n(e.li,{children:"Most constraining variable: Choose variable w/ most constraints to satisfy"}),`
`]}),`
`]}),`
`,i(e.li,{children:[`
`,i(e.p,{children:["value order heuristics: (",n(e.code,{children:"get_value_sorter"}),")"]}),`
`,i(e.ol,{children:[`
`,n(e.li,{children:"Least Constraining value (LCV): after choosing a variable, choose value that rules out the fewest subsequent choices (maximize subsequent choices, prioritize flexibility of subsequent assignments)"}),`
`]}),`
`]}),`
`,i(e.li,{children:[`
`,i(e.p,{children:["inferences ",n(e.code,{children:"infer(assignment)"}),":"]}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"forward checking: check remaining legal values for unassigned variables, terminate if any has no legal values (does not provide early detection for all failures, only 1 step ahead)"}),`
`,i(e.li,{children:["constraint propagation: solves forward checking flaws, traverses entire constraint graph to make sure still consistent (note global constraints can be converted to binary from invisible node to all vertexes)",`
`,i(e.ul,{children:[`
`,i(e.li,{children:["node consistent: urnary constraints satisfied (vertexes) ",n(e.strong,{children:"urnary constraint checked as preprocessing before backtracking algo"})]}),`
`,n(e.li,{children:"arc consistent: binary constraints satisfied (edges). variable Xi is arc consistent wrt Xj iff for all values Di there exists some value Dj that satisfies binary constraint. Note arc == directed, binary constraint = 2 arcs"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,n(e.pre,{children:n(e.code,{className:"language-py",children:`def arc_consistent(csp): #aka AC-3 Algo O(n^2 d^3), d = domain size
  arcs = csp.get_arcs()
  while not arcs.empty():
    arc = arcs.pop()

    # revise domains
    revised = False
    for x in arc.x_i.domain:
      # no value in Xj domain can satisfy constraint with x across arc
      if not can_satisfy_constraint(csp, x, arc.x_j.domain):
        # x cannot be used in arc, does not satisfy constraint
        delete(x)
        revised = True
    
    if revised:
      if len(arc.x_i.domain) < 1:
        return false
      for neighbour in arc.x_i.neighbours:
        arcs.append((neighbour, x_i)) # neighbour --> xi, see if neighbour still ok
  return True
`})}),`
`,n(e.p,{children:n(e.strong,{children:"AC3 trace:"})}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Initial queue: all arcs of the graph/problem"}),`
`,i(e.li,{children:["Each step: pop an arc, e.g. (A, B). based on constraints A --> B, e.g. ",n(e.code,{children:"2A = B"}),", reduce domain of A, state new domain of A."]}),`
`,n(e.li,{children:"Append neighbours: e.g. A neighbours C --> A, append (C,A), check if C still ok"}),`
`,n(e.li,{children:"Terminate @ no more queue"}),`
`]}),`
`,n(e.h3,{children:"Adversarial search (lecture 8)"}),`
`,i(e.p,{children:["State formulation: ",n(e.code,{children:"TO-MOVE(s)"})," (determine whos move next), ",n(e.code,{children:"ACTION(s)"})," (legal actions on move), ",n(e.code,{children:"RESULT(s, a)"})," (Transition w/ action ",n(e.code,{children:"a"}),"), ",n(e.code,{children:"IS-TERMINAL(s)"})," (anyone won?), ",n(e.code,{children:"UTILITY(s,p)"})," (final value to player p when game ends at state ",n(e.code,{children:"s"}),", e.g. 1 for win -1 for loss)"]}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[n(e.code,{children:"winning strategy"}),": any strategy by player 2, player 1 will win (exclude draw, with draw = ",n(e.code,{children:"non-losing strategy"}),")"]}),`
`]}),`
`,i(e.p,{children:[n(e.strong,{children:"Minimax Algorithm"}),": MAX player maximise minimum payoff, MIN player minimize maximum payoff"]}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[`Complete (finite game tree), Optimal, O(b ^ m) time, O(bm) space
`,n(e.strong,{children:"Alpha-Beta Pruning"}),":"]}),`
`,n(e.li,{children:"alpha, \u{1D6FC} = upper bound of values (relative to MAX player)"}),`
`,n(e.li,{children:"beta, \u{1D6FD} = lower bound of values"}),`
`,i(e.li,{children:["pruning: given MIN node ",n(e.code,{children:"n"}),"(player at ",n(e.code,{children:"n"})," wants to minimize payoff), stop searching below ",n(e.code,{children:"n"})," if Some MAX ancestor i ",n(e.code,{children:"\u{1D6FC}(i) >= \u{1D6FD}(n)"}),": ancestor will not traverse n anyways"]}),`
`,n(e.li,{children:"pruning never affects final outcome. time complexity O(b ^ m/2) perfect ordering pruning, O(b ^ 3m/4) random ordering."}),`
`,n(e.li,{children:"Heuristic minimax: Naive minimax need traverse to the end to determine utility (1 = win -1 = lose etc.), estimate with heuristic so no need go to end"}),`
`,i(e.li,{children:["Cutting off search: replace ",n(e.code,{children:"Is-Terminal"})," with ",n(e.code,{children:"Cutoff-Test(s, d)"})," (",n(e.code,{children:"d"})," = depth for depth limit search; alternatively use iterative deepening search), ",n(e.code,{children:"Utility(s,p)"})," w/ ",n(e.code,{children:"Eval(s,p)"}),"."]}),`
`,n(e.li,{children:"Stochastic games: games with probability. calculate expected value of a state instead."}),`
`]}),`
`,n(e.h3,{children:"Knowledge based agents"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[`
`,n(e.p,{children:"generalised knowledge representations. Make inference on existing info to get new info, states similar to CSPs, assign values to variables"}),`
`]}),`
`,i(e.li,{children:[`
`,n(e.p,{children:"2 kinds: Knowledge based (Domain specific content), Inference Engine (Domain independent algorithms)"}),`
`]}),`
`,i(e.li,{children:[`
`,i(e.p,{children:["sentence: ",n(e.code,{children:"x + 2y >= z"}),", must be valid arithmetic"]}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"valid if true for all possible truth value assignments, e.g. A V ~A. satisfiable if have some truth value that makes it true. Unsatisfiable otherwise"}),`
`]}),`
`]}),`
`,i(e.li,{children:[`
`,n(e.p,{children:"Knowledge Base: (rules + percepts) --> {KB} = models that satisfy what had been perceived (e.g. 1,1 is breeze) + game rules (1,2 or 2,2 must be pit)"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[n(e.strong,{children:"model"})," ",n(e.code,{children:"v"})," models ",n(e.code,{children:"\u{1D6FC}"})," if ",n(e.code,{children:"\u{1D6FC}"})," is true under ",n(e.code,{children:"v"})," --> like a (known part of) state where ",n(e.code,{children:"\u{1D6FC}"})," is true (e.g. \u{1D6FC} == (1,2) is safe, v = state where (1,2) is safe)"]}),`
`,n(e.li,{children:"entailment: \u{1D6FC} \u22A8 \u{1D6FD} (\u{1D6FC} entails \u{1D6FD}) --> \u{1D440}(\u{1D6FC}) is subset \u{1D440}(\u{1D6FD}), where \u{1D440}(\u{1D6FC}) == all models for \u{1D6FC}. (e.g. \u{1D6FC} == is prime, \u{1D6FD} == is odd)"}),`
`,n(e.li,{children:"should infer safe only when {KB} entails \u{1D6FC}, e.g. remaining possible states all say 1,2 is safe"}),`
`]}),`
`,n(e.pre,{children:n(e.code,{className:"language-py",children:`time = 0
def run(percept, knowledge_base):
  knowledge_base.record(percept.to_sentence(time))
  action = knowledge_base.infer_next_action(time)
  knowledge_base.record(action.execute())
  time += 1
  return action
`})}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Soundness: KB \u22A2\u{1D49C} \u{1D6FC}, \u{1D6FC} is infered from KB using algo \u{1D49C}, \u{1D49C} is sound if KB \u22A2\u{1D49C} \u{1D6FC} implies KB \u22A8 \u{1D6FC} (only infer when safe, aka correct)"}),`
`,n(e.li,{children:"Completeness: if KB \u22A8 \u{1D6FC} then KB \u22A2\u{1D49C} \u{1D6FC}, \u{1D49C} can infer any sentence KB entails (aka fully infered)"}),`
`]}),`
`]}),`
`]}),`
`,n(e.h3,{children:"Truth Table Enumeration"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["KB is true iff percepts + rules satisfied",`
`,i(e.ul,{children:[`
`,n(e.li,{children:"percept:  1,1 is clear --> Pit(1,1) must be false, Breeze(1,1) must be false"}),`
`,n(e.li,{children:"infer: 1,1 is clear --> Pit(1,2) must be false, Pit(2,1) must be false"}),`
`,n(e.li,{children:"When all KB percepts/inferences satisfied, KB = True. If for all \u{1D6FC} = True then KB = True, \u{1D6FC} entails KB"}),`
`,n(e.li,{children:"all models where above is satisfied, KB == true"}),`
`]}),`
`]}),`
`]}),`
`,n(e.pre,{children:n(e.code,{className:"language-py",children:`# KnowledgeB: knowledge base, sentence; alpha: query, sentence; symbols: symbols in KB + alpha
def check(KnowledgeB, alpha, symbols, model):
  if len(symbols) == 0:
    if verify_logic(KnowledgeB, symbols): #check propositional logic is valid
      return verify_logic(alpha, symbols) #if KB is true then alpha must be true also to entail
    return True #if KB is alr false, alpha doesnt matter, alpha can be KB + others
  else:
    # enumerate all 2^k possible models DFS
    return check(KnowledgeB, alpha, symbols EXCEPT symbols[0], model UNION {symbols[0] = True})
      and check(KnowledgeB, alpha, symbols EXCEPT symbols[0], model UNION {symbols[0] = False})

# O(2^n) time, O(n) space (DFS depth n), guarantees soundness (entails KB), completeness (all possible)
def entails(KnowledgeB, alpha):
  return check(KnowledgeB, alpha, symbols, {})
`})}),`
`,n(e.h3,{children:"Conjunctive Normal Form CNF"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"many or's joined with and's: (x1 or x2) and (y1 or x1) and (z1 or x1 or x2)"}),`
`,i(e.li,{children:["Resolution: if x1 is in R1 and ~x1 is in R2, where CNF KB = R1 and R2 and ..., can remove x1 from both:",`
`,i(e.ul,{children:[`
`,n(e.li,{children:"KB = (x1 or y1 ...) and (~x1 or z1 ...), then resolvent = (y1 or ... or z1 or ...)"}),`
`,n(e.li,{children:"if x1, then (z1 ...) must hold. if ~x1 then (y1 ...) must hold"}),`
`]}),`
`]}),`
`,i(e.li,{children:["CNF conversion rules:",`
`,i(e.ul,{children:[`
`,n(e.li,{children:"A <-> B == (A -> B) and (B -> A)"}),`
`,n(e.li,{children:"A -> B == ~A or B"}),`
`,n(e.li,{children:"~(A or B) == ~A and ~B, ~(~A) = A etc."}),`
`,n(e.li,{children:"A or (B and C) == (A or B) and (A or C)"}),`
`]}),`
`]}),`
`]}),`
`,n(e.pre,{children:n(e.code,{className:"language-py",children:`new = {}
while True:
  for clause1, clause2 in (clauses X clauses):
    resolvents = resolve(clause1, clause2)
    if None in resolvents:
      return True
    new += resolvents
  if new subset clauses:
    return False
  clauses += new
`})}),`
`,i(e.p,{children:[n(e.code,{children:"clauses"})," = KB in CNF + ",n(e.strong,{children:"~\u{1D6FC}"})," (\u{1D6FC} == query to KB, is xy safe?). keep resolving clause pairs (merge them) until empty clause found ",n(e.code,{children:"x and ~x --> {}"}),` (if found then can infer \u{1D6FC}: KB and ~\u{1D6FC} unsatisfiable), or no more resolutions (cannot infer \u{1D6FC})
`,n(e.strong,{children:"NOTE"}),": clause can be used multiple times i.e. resolve 1 with 3, resolve 2 with 3."]}),`
`,n(e.h3,{children:"Probability"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"bayes rule: P(A | B) = P(B|A) * P(A) / P(B). Also = P(A and B) / P(B)"}),`
`,i(e.li,{children:["chain rule: P(A n B n C) = P(A | B n C) ",n(e.em,{children:"P(B n C) = P(A | B n C)"})," P(B) * P(C)"]}),`
`,n(e.li,{children:"independence: P(A | B) == P(A). P(A n B) == P(A) * P(B)"}),`
`,n(e.li,{children:"bayesian inference: infer P(\u{1D6FC} | KB(CNF))"}),`
`,n(e.li,{children:"joint distribution table: e.g. rows = cavity, columns = toothache"}),`
`,n(e.li,{children:"note: n different variables with domain size d, table size = d^n. if all independent = dn"}),`
`]}),`
`,n(e.h3,{children:"Conditional independence"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"P(ART | covid+) independent of P(PCR | covid+) even though P(ART | PCR) not independent."}),`
`,i(e.li,{children:["P(R1 and R2 and ... C) = P(R1 | C) ",n(e.em,{children:"P(R2 | C)"})," P(C) [w/ chain rule], suppose C = conditional"]}),`
`,i(e.li,{children:["P(Cause | Effect) = P(Effect | Cause) ",n(e.em,{children:"P(Cause) / P(Effect) = k"})," P(Cause) ",n(e.em,{children:"P(Effect1 | Cause)"})," P(Effect2 | Cause) ...",`
`,i(e.ul,{children:[`
`,n(e.li,{children:"P(Effect) is constant across all (Cause | Effect) since Effect given, want to find which cause"}),`
`,n(e.li,{children:"Table stores each P(Effect_i | Cause), P(Cause)"}),`
`]}),`
`]}),`
`]}),`
`,n(e.h3,{children:"Bayesian network"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"simplest case, can use conditional probability table ^^"}),`
`,i(e.li,{children:["network graph, A --> B, A causes effect B. can many to many, A --> B, C --> B, B --> X, B --> Y",`
`,i(e.ul,{children:[`
`,n(e.li,{children:"include probability table e.g. P(B | A), P(B' | A), P(B | A'), ..."}),`
`]}),`
`]}),`
`,n(e.li,{children:"if each variable k parents, domain size m, network representation needs O(n * m ^ k) values since each variable needs m^k rows"}),`
`,n(e.li,{children:"if variables are boolean, k parents, 2^k. parents = dependencies."}),`
`,i(e.li,{children:["if we know x1 = True, can just use P(y | x1) directly, e.g.:",`
`,i(e.ul,{children:[`
`,i(e.li,{children:["P(x1 & ~x2 & x3 & x4) = P(x1 | ~x2) ",n(e.em,{children:"P(~x2 | x3 & x4)"})," P(x3 | x4) ",n(e.em,{children:"P(x4 | a)"})," P(a)"]}),`
`,n(e.li,{children:"note that whatever is outside, e.g. a, must multiply in"}),`
`]}),`
`]}),`
`]})]})}function s(r={}){const{wrapper:e}=r.components||{};return e?n(e,Object.assign({},r,{children:n(l,r)})):l(r)}export{s as default};
