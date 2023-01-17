import{j as n,d as i,F as a}from"./index.27a0778a.js";function t(r){const e=Object.assign({h1:"h1",h2:"h2",ul:"ul",li:"li",h3:"h3",ol:"ol",code:"code",p:"p",strong:"strong",em:"em"},r.components);return i(a,{children:[n(e.h1,{children:"CS4225 22/23 S1"}),`
`,n(e.h2,{children:"Lecture 2/3"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"bandwidth: maximum amount of data that can be transmitted per unit time"}),`
`,n(e.li,{children:"latency: how long it takes for 1 packet to go from src to dest (1 way) or to and fro (round trip)"}),`
`]}),`
`,n(e.h3,{children:"Mapreduce"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["big data often need:",`
`,i(e.ol,{children:[`
`,n(e.li,{children:"iterate over records"}),`
`,i(e.li,{children:["extract something useful (",n(e.code,{children:"map"}),") e.g. (",n(e.code,{children:"[ABA],[AAA],[BBA]"}),")"]}),`
`,i(e.li,{children:["shuffle/ sort results (",n(e.code,{children:"shuffle"})," --> group) e.g. (",n(e.code,{children:"[AAAAAABBB]"}),"), assign to reducer based on key, e.g. A --> reducer1"]}),`
`,i(e.li,{children:["aggregate results (",n(e.code,{children:"reduce"}),") e.g. (",n(e.code,{children:"{A: 6, B: 3}"}),")"]}),`
`,n(e.li,{children:"return output result"}),`
`]}),`
`]}),`
`,n(e.li,{children:"Splits: split data into multiple splits"}),`
`,n(e.li,{children:"Map task: a job, request to process 1 split; can call map function many times"}),`
`,n(e.li,{children:"mapper/reducer: process executing map/reduce task (1 machine can run multiple mappers/reducers)"}),`
`,n(e.li,{children:"Extra: partition step --> optimize network traffic, default: take modulo of hash to determine which reducer etc. to use"}),`
`,i(e.li,{children:["Extra: combiner step --> like a mini reducer at end of map e.g. ",n(e.code,{children:"{A:2, B:1}, {A:3}, {A:1, B:2}"}),".",`
`,i(e.ul,{children:[`
`,n(e.li,{children:"user's responsibility to make sure combiner function is correct, i.e. run 0/1/n times no different"}),`
`,n(e.li,{children:"sum(sum(1,1), 1) === sum(1,1,1) ok; mean(mean(1,1), 2) !== mean(1,1,2)"}),`
`]}),`
`]}),`
`,n(e.li,{children:"Secondary sort: to ensure reducers values are sorted, define composite key (N, k), N is natural key, k is variable we want to sort. configure partition to partition by N only"}),`
`]}),`
`,n(e.h3,{children:"MapReduce pseudocode"}),`
`,i(e.ol,{children:[`
`,i(e.li,{children:[n(e.code,{children:"Map(key, value)"}),": ",n(e.code,{children:"key"}),", ",n(e.code,{children:"value"})," provided by question. call ",n(e.code,{children:"emit(reduce_key, reduce_value)"})," to write intermediate results"]}),`
`,i(e.li,{children:[n(e.code,{children:"Combine(reduce_key, reduce_value[])"}),": same type as emit value. must ",n(e.code,{children:"emit(reduce_key, reduce_value)"}),". Must be same input format as reducer"]}),`
`,i(e.li,{children:[n(e.code,{children:"Reduce(reduce_key, reduce_value[])"}),": Final combiner: ",n(e.code,{children:"emit(final_key, final_value)"}),"."]}),`
`]}),`
`,n(e.h3,{children:"distributed file systems"}),`
`,n(e.p,{children:"Assumptions:"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"scale out not up"}),`
`,n(e.li,{children:"high component failures"}),`
`,n(e.li,{children:"modest no. huge files"}),`
`,n(e.li,{children:"files mostly write once, append after"}),`
`,n(e.li,{children:"large streaming read over random access"}),`
`,n(e.li,{children:`Files stored as chunks (64MB Google FS, 128MB Hadoop FS)
Design:`}),`
`,n(e.li,{children:"each chunk replicated across multiple servers for backup"}),`
`,n(e.li,{children:`single master to coordinate access, keep metadata
Responsibility:`}),`
`,i(e.li,{children:["Namenode: single master, hold directory structure, garbage collection, periodic communication w/ data nodes. ",n(e.strong,{children:"No data moved through name node"})," --> direct client to datanode"]}),`
`]}),`
`,i(e.p,{children:[n(e.strong,{children:"Common SQL operations in MapReduce"}),":"]}),`
`,i(e.ol,{children:[`
`,n(e.li,{children:"projection/ selection: map take in tuple output new tuple"}),`
`,i(e.li,{children:["avg(price) Group by id: Map over tuples emit ",n(e.code,{children:"<id, price>"}),". Framework auto groups keys by value. Compute avg in reducer. Optimize w/ combiners"]}),`
`,i(e.li,{children:["inner join:",`
`,i(e.ol,{children:[`
`,n(e.li,{children:"Broad cast join: join small table and big table, All mappers store a copy of small table. iterate over big table, join records with small table"}),`
`,n(e.li,{children:"Reduce-side Common join: no need dataset to fit in memory. different mapper diff table, key of mapper used as variable to join by"}),`
`]}),`
`]}),`
`]}),`
`,n(e.h3,{children:"Performance guidelines for basic algo design"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Linear scalability: scale horizontally, linear on data size + compute resources"}),`
`,n(e.li,{children:"Minimize hard disk/network IO: bulk send/recv, sequential disk access"}),`
`,n(e.li,{children:"Memory working set: large memory working set, higher porobability of failure"}),`
`]}),`
`,n(e.h3,{children:"Similarity Search"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Euclidean distance, Manhattan distance"}),`
`,i(e.li,{children:["Common distance/similarity matrix: s(a,b) = cos(theta) = (a ",n(e.em,{children:"b)/(|a|"})," |b|), does not consider scale of a/b"]}),`
`,i(e.li,{children:["Jaccard similarity: |AnB|/|AuB|, e.g. A = ",2,", B = ",3,", Jaccard = 1/3"]}),`
`,n(e.li,{children:"Jaccard distance: 1-jaccard similarity"}),`
`]}),`
`,n(e.p,{children:n(e.strong,{children:"Document processing"})}),`
`,i(e.ol,{children:[`
`,i(e.li,{children:["Shingling: convert documents into sets of short phrases (shingles). k-shingle, e.g. D = 'lots of words', k = 2 --> ","of words",". Jaccard similarity w/ key == shingles"]}),`
`,i(e.li,{children:["Min hashing: convert sets into short signatures, preserving similarity. hash used to compare similarity, e.g. ","of words"," --> ",69,` --> 12, each shingle hashed, take min
Map: read document, extract shingles. hash each shingle, take min to get minhash. emit signature, document id`]}),`
`]}),`
`,n(e.p,{children:"Reduce: receive all documents with a given minhash signature, generate all candidate pairs (pairs of documents with same signature)."}),`
`,i(e.p,{children:[n(e.strong,{children:"K-Means"}),`
For each cluster store 1 mean, assign each point to nearest cluster, update mean if necessary.`]}),`
`,i(e.ol,{children:[`
`,n(e.li,{children:"initialize: pick k random points"}),`
`,n(e.li,{children:"assign each point to nearest cluster"}),`
`,n(e.li,{children:"update cluster center to average of all points"}),`
`,n(e.li,{children:`repeat 2-3 until center no change
use a combiner so instead of emitting each point emit for each cluster instead`}),`
`]}),`
`,n(e.h3,{children:"NoSQL"}),`
`,i(e.ol,{children:[`
`,n(e.li,{children:"Key Value stores: dictionaries, e.g. dynamodb. Can be persistent/non, good for basic non complex queries/info"}),`
`,n(e.li,{children:"Document stores: databse --> collections --> documents --> JSON like fields + values e.g. mongoDB"}),`
`,n(e.li,{children:"Wide Column Stores: each row an entity, columns can be grouped as column family. never use column = never use space. e.g. cassandra/Hbase"}),`
`,n(e.li,{children:"GraphDB: like ER diagram"}),`
`]}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Strong consistency: any reads immediately after an update must give same result on all observers: block read until data updated (lower availability)"}),`
`,n(e.li,{children:"Eventual consistency: given enough time eventually all reads return most updated value"}),`
`,n(e.li,{children:"SQL: ACID (strong-er), NoSQL: BASE (Basically available: r/w mostly available; Soft state: no guarantee of knowing state; Eventually consistent)"}),`
`,n(e.li,{children:"NoSQL good for: horizontal partitioning (parallel); Can duplicate tables (precomputed joins table) so only 1 collection queried, SQL need check multiple tables; highly available"}),`
`]}),`
`,i(e.p,{children:[n(e.strong,{children:"Partitioning"}),":"]}),`
`,i(e.ol,{children:[`
`,n(e.li,{children:"Table paritioning: each table 1 partition, table cannot split across multiple machines"}),`
`,i(e.li,{children:["Horizonal partitioning (sharding): partition key(shard key) determine which partition each tuple should be stored",`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Range partition: split partition by range of values (id 1-100 = partition 1, decided auto by balancer) Good for range based queries, can ignore partitions, but partitions can be imbalanced"}),`
`,n(e.li,{children:'Hash partition: split partition by hash (hash(id) < 100 = partition 1). hash output like a cycle, all nodes belong to closest clockwise "marker". add/remove markers as needed.'}),`
`,n(e.li,{children:"hash partition, simple replication: delete node, copy all tuples to next clockwise partition. Can assign multiple markers per partition(node) so delete 1 node will not move all to a single node, load balance better."}),`
`,i(e.li,{children:["partition pruning: based on query ",n(e.code,{children:"WHERE"}),"/",n(e.code,{children:"FROM"}),", only scan the required partitions, ignore other partitions"]}),`
`]}),`
`]}),`
`]}),`
`,n(e.p,{children:"MongoDB: root --> routers (mongos) --> shards; root send query to mongos, mongos check config server for shard metadata, sends root query to relevant shards, mongos merge and return result."}),`
`,n(e.h3,{children:"Spark"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Hadoop Mapreduce: high network/ disk io due to intermediate data/shuffling. bad for iterative (interactive) workflows: many mapreduce jobs"}),`
`,n(e.li,{children:"Spark: stores intermediate data in memory. data spills to disk if memory insufficient"}),`
`,n(e.li,{children:"better performance, shorter code, more libraries"}),`
`,n(e.li,{children:"driver process: read user input, manage spark, distribute work to executors"}),`
`,n(e.li,{children:"executors: run code assigned, return results to driver"}),`
`,n(e.li,{children:"cluster manager: allocates resources when application requests it, can be spark standalone/YARN/Mesos/Kubernetes"}),`
`,n(e.li,{children:"local mode: makes all processes run on same machine"}),`
`]}),`
`,n(e.h2,{children:"RDD: Resilient Distributed Datasets"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["fault tolerance w/ ",n(e.code,{children:"lineage"}),"'s, distributed over machines"]}),`
`,n(e.li,{children:"lineage: instead of replication, if node goes down use graph DAG (see below) recompute data in new worker node"}),`
`,n(e.li,{children:"immutable, once created cannot change. each worker takes a number of partition keys, decided by spark"}),`
`,n(e.li,{children:"read from file executes on each machine (worker) in paralle, not driver"}),`
`,i(e.li,{children:["transformations: ",n(e.code,{children:"map"}),"/ ",n(e.code,{children:"order"}),"/ ",n(e.code,{children:"groupBy"}),"/ ",n(e.code,{children:"filter"}),"/ ",n(e.code,{children:"join"}),"/ ",n(e.code,{children:"select"})," w/ lambda. (",n(e.strong,{children:"lazy"}),", only executes after action is called on it). executes in parallel in each machine, collected back to driver"]}),`
`,i(e.li,{children:[n(e.strong,{children:"actions"}),": request for result, trigger spark to compute transformations: ",n(e.code,{children:"data.map(...).collect()"}),"."]}),`
`,i(e.li,{children:["Spark maintains a directed acyclic graph to represent all RDD objects (map --> filter --> map), actions trigger transformations",`
`,i(e.ul,{children:[`
`,n(e.li,{children:"narrow dependencies: each partition of parent RDD used by at most 1 partition of child RDD (e.g. map, filter, contains)"}),`
`,n(e.li,{children:"wide dependencies: each partition of parent RDD used by multiple child RDD's (reduceByKey, groupBy, orderBy)"}),`
`,i(e.li,{children:["stages == groups of consecutive narrow dependencies([read --> map][orderBy --> map --> collect])",`
`,i(e.ul,{children:[`
`,n(e.li,{children:"within stage, same machine perform consecutive transformations"}),`
`,i(e.li,{children:["across stages, data shuffled, exchanged across partitions, ",n(e.strong,{children:"writes intermediate results to disk like mapreduce"})]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,n(e.h3,{children:"Caching"}),`
`,i(e.p,{children:["example: ",n(e.code,{children:"messages = errors.map(...); messages.cache(); messages.filter(A).collect(); messages.filter(B).collect()"})]}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[n(e.code,{children:"cache()"})," saves an RDD of each worker to memory. ",n(e.code,{children:"persist(args)"})," saves to memory/disk/off-heap memory"]}),`
`,n(e.li,{children:"avoids recomputation, but if not enough memory Least Recently Used RDD is evicted."}),`
`]}),`
`,n(e.h3,{children:"Dataframes"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"basically tables of data (pandas). higher level than RDD's, has SQL like transformations, spark compiles to RDD operations"}),`
`,i(e.li,{children:["transformation functions (groupBy sort etc.) usually take in column objects (e.g. ",n(e.code,{children:'desc("column1")'})," --> ",n(e.code,{children:"desc"})," returns column object)"]}),`
`,n(e.li,{children:"datasets: type safe dataframes. python no type hence dataframes"}),`
`,n(e.li,{children:"datasets return same type datasets on collect (or dataframe for dataframes)"}),`
`]}),`
`,n(e.h3,{children:"Machine learning"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"classification: given samples, categorize into classes (labels) given training data --> each label output probability/ 0 or 1"}),`
`,n(e.li,{children:"regression: given training data predict numeric labels --> e.g. predict number of days raining"}),`
`,n(e.li,{children:"Stages: 1. Preprocessing (raw data) 2. Training (training data + training output) 3. Testing (testing data + output prediction) 4. evaluation (compare output prediction to actual)"}),`
`,i(e.li,{children:["Data quality: missing data, either",`
`,i(e.ol,{children:[`
`,n(e.li,{children:"remove row"}),`
`,n(e.li,{children:"use mean/median of other rows"}),`
`,i(e.li,{children:["use ",n(e.strong,{children:"regression"})," model to predict based on other columns"]}),`
`,n(e.li,{children:"insert column to indicate if other column value was missing"}),`
`]}),`
`]}),`
`,i(e.li,{children:["Normalization",`
`,i(e.ol,{children:[`
`,n(e.li,{children:"One hot encoding: convert numeric into binary columns, e.g. 3 = 011, each column use algos that handle binary feature (e.g. linear regression)"}),`
`,n(e.li,{children:"clipping (discard data outside certain range) , standard scalar (x - mean)/std_dev, log transform log(1 + x), max min normalization (x - min(x)) / (max(x) - min(x))"}),`
`]}),`
`]}),`
`,i(e.li,{children:["logistic regression, sigmoid neuron: sigmoid(x) = 1/(1 + e^-x). ",n(e.code,{children:"y = sigmoid(w * x + b)"}),", ",n(e.code,{children:"w"})," = weight, ",n(e.code,{children:"b"})," = bias. Minimize cost function j w/ gradient descent"]}),`
`,n(e.li,{children:"Decision tree: flowchart"}),`
`,n(e.li,{children:"Random forest: many decision trees, take average. higher accuracy."}),`
`,n(e.li,{children:"False positive = test output positive, actualy negative"}),`
`]}),`
`,n(e.h3,{children:"MLlib"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Transformers: map dataframes to dataframes, e.g. tokenization, one hot encoding. Typically append result to original dataframe"}),`
`,n(e.li,{children:"Estimator: take in data, output fitted model (model then used for classification etc.) returns a trasnformer"}),`
`]}),`
`,n(e.h3,{children:"PageRank"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["Ranking pages on web",`
`,i(e.ol,{children:[`
`,n(e.li,{children:"links as votes: the more incoming links, the more important the page."}),`
`,n(e.li,{children:"The more important the page p1 linking to page p2, the more significant the link. page p1 importance = 10, points to 5 out links, each out link gets 10/5 votes"}),`
`]}),`
`]}),`
`,i(e.li,{children:["Matrix formulation: matrix M (i,j) = 1/di (where di = # outgoing links from i). Rank vector r, sum of all elements = 1. ",n(e.code,{children:"M . r = r"}),"."]}),`
`,i(e.li,{children:["Initial r = [1/|r|, 1/|r|, ...]. Keep multiplying (aka power iteration) ",n(e.code,{children:"r = M.r"})," until change is negligible. Simplified page rank rj = sum(ri/di) for all i outlink to j, ri = rank of i, d = num outlink i"]}),`
`,i(e.li,{children:["Random walk: suppose surfer starts at random page, each unit time surfer follows out link to random page. vector ",n(e.code,{children:"P(t)[i]"})," = probability surfer at page i at time t. As t --> inf, probability is stable, use as page rank."]}),`
`,i(e.li,{children:["Problems:",`
`,i(e.ol,{children:[`
`,n(e.li,{children:"Dead ends: no out links"}),`
`,n(e.li,{children:"Spider traps: out links cycle in small group"}),`
`]}),`
`]}),`
`,i(e.li,{children:["solution: teleports with probability beta, usually (0.1 - 0.2), dead end always teleport. all pages equal probability",`
`,i(e.ul,{children:[`
`,i(e.li,{children:["page rank rj = sum(beta ",n(e.em,{children:"ri / di + (1 - beta)"})," 1/N), ri/di same as simplified, 1/N due to teleport"]}),`
`]}),`
`]}),`
`,i(e.li,{children:["Topic specific page rank: change teleport behaviour to only teleport to topic specific (e.g. google search query) pages. ",n(e.code,{children:"rj = sum(beta * ri / di + (1 - beta) * 1/|T|)"})," if in set T of topic specific pages, ",n(e.code,{children:"rj = sum(beta * ri / di)"})," if not."]}),`
`]}),`
`,n(e.h3,{children:"Graphs"}),`
`,n(e.p,{children:"Pregel:"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Supersteps: for each vertex V, invoke user defined function. can read messages sent to V from previous step, can send messages to vertices for the next superstep, can r/w edges (incl add/delete)"}),`
`,n(e.li,{children:"computation stops when all vertices inactive."}),`
`,i(e.li,{children:["Vertices hash partitioned, assigned to workers. workers ",n(e.strong,{children:"maintain state of its portion of the graph in memory, compute in memory"}),". Messages sent directly to other vertices if same worker, else ",n(e.strong,{children:"buffered locally"}),` and sent as a batch to other workers
Giraph:`]}),`
`,n(e.li,{children:"uses Hadoop's map for computation, zookeeper to enforce barrier waits (synchronization)"}),`
`]}),`
`,n(e.h3,{children:"Streams"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Reservoir sampling: given a stream, maintain uniform random sample of fixed size (probability to replace random record in sample), query based on reservoir"}),`
`,i(e.li,{children:["Compute mean/variance: store num items, sum of items, compute mean(",n(e.code,{children:"sum / n"}),"). store sum of squares, return variance(",n(e.code,{children:"(square_sum - sum ^ 2/n)/(n - 1)"}),")"]}),`
`]}),`
`,n(e.p,{children:"Storm:"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Tuple: ordered list of named values"}),`
`,n(e.li,{children:"Topology: computation graph, each node hold processing logic, edge indicate communication b/w nodes. each topology = 1 storm job. job runs forever until killed."}),`
`,n(e.li,{children:"Streams: unbounded sequence of tuples. transformed by nodes of the topology"}),`
`,n(e.li,{children:"Spouts: stream generators, e.g. inputs. can propagate same data tpo multiple consumers"}),`
`,n(e.li,{children:"Bolts: subscribes to streams, feeds to transformers, produce result streams"}),`
`,n(e.li,{children:"Each bolt/spout can be multiple tasks, each task allocate to 1 worker. many workers = 1 supervisor(physical machine). zookeeper coordinate b/w supervisors. nimbus control zookeepers"}),`
`,i(e.li,{children:["multiple executors execute bolts (tasks run in parallel). When bolt emits tuple, which task to go to depends:",`
`,i(e.ol,{children:[`
`,n(e.li,{children:"shuffle grouping: randomly distributed across tasks in the bolt"}),`
`,n(e.li,{children:"Field grouping: distribute based on user specified field"}),`
`,n(e.li,{children:"All: every task take copy of tuple"}),`
`]}),`
`]}),`
`]})]})}function o(r={}){const{wrapper:e}=r.components||{};return e?n(e,Object.assign({},r,{children:n(t,r)})):t(r)}export{o as default};
