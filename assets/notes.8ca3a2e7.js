import{j as n,d as i,F as c}from"./index.e856fa70.js";function l(r){const e=Object.assign({h1:"h1",h2:"h2",h3:"h3",ol:"ol",li:"li",p:"p",ul:"ul",strong:"strong",code:"code",img:"img",hr:"hr",h4:"h4"},r.components);return i(c,{children:[n(e.h1,{children:"CS3223"}),`
`,n(e.h2,{children:"Memory (Week 1)"}),`
`,n(e.h3,{children:"Memory hierachy (capacity, latency)"}),`
`,i(e.ol,{children:[`
`,n(e.li,{children:"Registers (1KB, 0.3ns)"}),`
`,n(e.li,{children:"L1 cache (64KB, 1ns)"}),`
`,n(e.li,{children:"L2 cache (256KB, 3ns)"}),`
`,n(e.li,{children:"L3 cacge (2 - 4MB, 10ns)"}),`
`,n(e.li,{children:"dynamic RAM (4 - 64GB, 50 - 100 ns)"}),`
`,n(e.li,{children:"Disk (4 - 16 TB, 5 - 10 ms)"}),`
`]}),`
`,n(e.p,{children:"registers are 0.3ns, each level up x 3, memory 50 ns, disk 5 ms"}),`
`,n(e.h3,{children:"Access time"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"command processing: parse SQL (considered negligible)"}),`
`,n(e.li,{children:"seek time: move arms (perpendicular to disk) to correct track (5 - 6 ms)"}),`
`,n(e.li,{children:"rotational delay: rotate track to correct block (average 1/2 rotion per access, depends on RPM)"}),`
`,n(e.li,{children:"transfer time: move data to and from disk (move huge amounts of data = longer)"}),`
`,i(e.li,{children:[n(e.strong,{children:"Disk access time"})," = seek + rotational + transfer"]}),`
`,i(e.li,{children:[n(e.strong,{children:"Disk access response time"})," = disk access time + queue delay"]}),`
`]}),`
`,n(e.p,{children:"HDD avg sector transfer 100-200 microseconds, SSD 20-100 microseconds"}),`
`,n(e.h3,{children:"DBMS buffer pool"}),`
`,i(e.p,{children:["Buffer pool = cache of a DBMS, split into ",n(e.code,{children:"frames"})," (block sized pages)."]}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"client can request for a disk page to be fetched into pool or release a page from pool"}),`
`,i(e.li,{children:["frames store s ",n(e.code,{children:"pin count"})," and ",n(e.code,{children:"dirty flag"}),". pin count == how many clients using, dirty == if it has been updated."]}),`
`,n(e.li,{children:"frame can only be released in pin count is 0"}),`
`]}),`
`,n(e.p,{children:`Other than LRU, FIFO, MRU, Also have clock for page replacement policy. Basically a 1 chance round robin.
circular array of frames, skip frame if pin count > 0, change referenced bit to false if pin 0 and bit is on, take page if pin 0 and bit off.
Turn reference bit on when pin count decrement to 0.`}),`
`,n(e.h3,{children:"File implementation"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Each record has an id called RID (page id + slot number). 1 page many slots."}),`
`,i(e.li,{children:["files organized as:",`
`,i(e.ol,{children:[`
`,n(e.li,{children:"Heap file, unordered."}),`
`,i(e.li,{children:["page header store 2 linked lists of ",n(e.strong,{children:"pages"}),", 1 for free space, 1 for used."]}),`
`,n(e.li,{children:"page directory has map to each data page."}),`
`,n(e.li,{children:"Sorted file, ordered by search key"}),`
`,n(e.li,{children:"Hashed File, located in blocks by hash function"}),`
`]}),`
`]}),`
`]}),`
`,i(e.p,{children:[n(e.strong,{children:"Within a page"}),", fixed length records:"]}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"packed: store records in contiguous slots, header stores number of records (slots)."}),`
`,n(e.li,{children:"unpacked: use bit array to indicate if slot if full, can choose any slots."}),`
`]}),`
`,i(e.p,{children:[`Variable length records:
`,n(e.img,{src:"./res/pgSlottedPage.png",alt:"postgre slotted page"})]}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["offset of nth item stored at ",n(e.code,{children:"H + n * L"}),", where ",n(e.code,{children:"H"})," = Header size, ",n(e.code,{children:"L"})," = size of pointer (offset + length)"]}),`
`]}),`
`,n(e.h2,{children:"Indexing (Week 2)"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Indexes: data structures to speed up information retrieval"}),`
`,n(e.li,{children:"Search key: sequence of 1 or more data attributes. Composite search key = at least 2 attributes. Unique index means search key is candidate key."}),`
`,i(e.li,{children:["Index stored as sorted index file. e.g. table ",n(e.code,{children:"Weights(name, weight)"}),", index by weight ",n(e.code,{children:"Index(weight, ptr_to_Weights_record)"}),`. Can add more layers for efficiency
`,n(e.img,{src:"./res/indexing.png",alt:"indexing"})]}),`
`]}),`
`,n(e.p,{children:"Tree based b+ tree indexing"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["note that leaf nodes can store different formats:",`
`,i(e.ol,{children:[`
`,n(e.li,{children:"(weight, actual_record)"}),`
`,n(e.li,{children:"(weight, record_id)"}),`
`,n(e.li,{children:"(weight, record_id_array)"}),`
`]}),`
`]}),`
`,n(e.li,{children:"Also has hashed based indexing, access by hash function."}),`
`]}),`
`,n(e.h3,{children:"b+ tree operations"}),`
`,n(e.p,{children:n(e.img,{src:"./res/btree.png",alt:"b+ tree"})}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[`
`,i(e.p,{children:["non leaf nodes are not values: ",n(e.code,{children:"[5]->[4][7]"}),", ",n(e.code,{children:"5"})," ",n(e.strong,{children:"does not exist as a record"}),"."]}),`
`]}),`
`,i(e.li,{children:[`
`,i(e.p,{children:["order ",n(e.code,{children:"x"})," b+ tree means nodes contain at least ",n(e.code,{children:"x"})," nodes, at most ",n(e.code,{children:"2x"})," nodes. (except root node, root at least 1 at most ",n(e.code,{children:"2x"}),")"]}),`
`]}),`
`,i(e.li,{children:[`
`,n(e.p,{children:"usually cannot have duplicate keys (make composite key with unique attribute and range search instead)"}),`
`]}),`
`,i(e.li,{children:[`
`,n(e.p,{children:"Insert:"}),`
`,i(e.ol,{children:[`
`,n(e.li,{children:"if page not full, insert."}),`
`,i(e.li,{children:["if page full, check right neighbor. if not empty, redistribute. repeat for left if right full:",`
`,i(e.ol,{children:[`
`,i(e.li,{children:["take ",n(e.code,{children:"2d"})," smallest records, store in page. rest in neighbor. update parent node."]}),`
`,i(e.li,{children:["e.g. ",n(e.code,{children:"[4]-->[1,3][4] + 2"})," \u2192 ",n(e.code,{children:"[3] --> [1,2][3,4]"}),"."]}),`
`]}),`
`]}),`
`,i(e.li,{children:["split page:",`
`,i(e.ol,{children:[`
`,i(e.li,{children:["take ",n(e.code,{children:"d"})," smallest records, store in page. ",n(e.code,{children:"d+1"})," remaining records put in new leaf. add parent index as smallest of ",n(e.code,{children:"d+1"})," leaf node"]}),`
`,i(e.li,{children:["if index node needs to split, ",n(e.code,{children:"d"})," smallest indexes in 1 node, ",n(e.code,{children:"d"})," largest indexes in 1 node. remaining 1 extra promote to higher depth."]}),`
`,i(e.li,{children:["e.g. order 1: ",n(e.code,{children:"[4,8]-->[1,2][4,5][8,9] + 10"})," \u2192 ",n(e.code,{children:"[4,8,9]-->[1,2][4,5][8][9,10]"})," \u2192 ",n(e.code,{children:"[8] --> ([4] --> [1,2][4,5]) ([9]-->[8][9,10])"}),"."]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,i(e.li,{children:[`
`,n(e.p,{children:"Deletion, underflow (node empty/ too little entries):"}),`
`,i(e.ol,{children:[`
`,n(e.li,{children:"page not underflow, ok."}),`
`,i(e.li,{children:["page underflow, check right neighbor size > ",n(e.code,{children:"d"}),", redistribute 1 record (see insert). else repeat for left."]}),`
`,i(e.li,{children:["merge nodes:",`
`,i(e.ol,{children:[`
`,i(e.li,{children:["if neighbour size ",n(e.code,{children:"d"}),", merge for ",n(e.code,{children:"2d - 1"})," size. remove index in between."]}),`
`,n(e.li,{children:"if index node underflow, merge. pull parent index key down"}),`
`,i(e.li,{children:[`e.g. order 2:
`,n(e.code,{children:"[10] --> (other) ([20, 30] --> [10, 11][20, 21][30, 31]) delete 11"}),` \u2192
`,n(e.code,{children:"[10] --> (other) ([30] --> [10, 20, 21][30, 31])"}),` \u2192
`,n(e.code,{children:"[other, 10, 30] --> [...other child][10, 20, 21][30, 31])"})," done."]}),`
`]}),`
`]}),`
`]}),`
`,n(e.p,{children:n(e.img,{src:"./res/bredist.png",alt:"redist"})}),`
`]}),`
`]}),`
`,n(e.hr,{}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[`clustered index: order (i.e. sort order, not b tree order) of index is same or "similar" to actual order of records (in data storage).
Can only have 1 clustered index for each relation. e.g.: actual records sorted by id, clustered index = index on id`,`
`,i(e.ul,{children:[`
`,n(e.li,{children:"any index using format 1 (index, actual_record), is definitely clustered (since it stores the actual records)"}),`
`]}),`
`]}),`
`,i(e.li,{children:["dense index: ",n(e.strong,{children:"index record"})," for every search key value exists. sparse index otherwise.",`
`,i(e.ul,{children:[`
`,i(e.li,{children:["e.g. actual data ",n(e.code,{children:"[1,2,3,4]"})," (in dlinked list), sparse index ",n(e.code,{children:"[3] -> [1][3]"}),". To find 2 go to 1 and iterate ",n(e.code,{children:"1 --> 2"}),". dense index ",n(e.code,{children:"[3] -> [1,2][3,4]"}),"."]}),`
`,n(e.li,{children:"sparse index relies on fact that data is sorted, so to find 2 you can iterate from 1 on the disk page."}),`
`,n(e.li,{children:"unclustered index definitely dense, since data is not sorted in terms of search key, have to keep each search key as index record"}),`
`]}),`
`]}),`
`]}),`
`,n(e.h3,{children:"Hashed based indexing"}),`
`,n(e.h4,{children:"Static hashing"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["N buckets, store item with hash h in bucket ",n(e.code,{children:"h % N"}),"."]}),`
`,i(e.li,{children:["if primary data page full, make linked list of pages (",n(e.code,{children:"overflow data page"}),")"]}),`
`]}),`
`,n(e.h4,{children:"Linear hashing"}),`
`,i(e.ol,{children:[`
`,i(e.li,{children:["Check if bucket ",n(e.code,{children:"j"})," to insert to is full. Insert if not."]}),`
`,i(e.li,{children:["If ",n(e.code,{children:"next"})," is not ",n(e.code,{children:"j"}),", split bucket ",n(e.code,{children:"next"}),". next++. insert page into overflow page."]}),`
`,i(e.li,{children:["If ",n(e.code,{children:"next"})," is ",n(e.code,{children:"j"}),", split bucket. next++. If bucket to insert into is still full, insert into overflow page."]}),`
`,i(e.li,{children:["if ",n(e.code,{children:"next"})," is ",n(e.code,{children:"Nlevel"})," during split, set ",n(e.code,{children:"next"})," to 0, level++. ",n(e.code,{children:"Nlevel"})," = ",n(e.code,{children:"2^level - 1"})]}),`
`]}),`
`,i(e.p,{children:[n(e.strong,{children:"NOTE"}),`: If overflow page is not full, do not split. i.e. only split when a new overflow page is added.
`,n(e.strong,{children:"NOTE"}),": To make maximum number of splits, example: bucket size 2, insert(10000, 100000, 10, 100, 1000) -> 10 cause split, never create overflow. 100 cause split, create overflow. etc."]}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["deleting:",`
`,i(e.ol,{children:[`
`,n(e.li,{children:"if next > 0 and last bucket empty (e.g. size 6, next = 2 so last bucket 5 empty), decrement next by 1, delete last bucket"}),`
`,i(e.li,{children:["if next = 0 and last bucket empty (size 4, next 0, bucket 3 empty), decrement level, set ",n(e.code,{children:"next"})," to last bucket of previous level (size 3 level 0 next 1)"]}),`
`]}),`
`]}),`
`]}),`
`,n(e.h4,{children:"Extendible hashing"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"like linear hashing, except:"}),`
`,i(e.li,{children:["keep directory of pointers to buckets",`
`,i(e.ol,{children:[`
`,n(e.li,{children:"say size 4, bucket 1 (01b) overflows. double directory pointers (unless bucket 3 also points to bucket 1, see below)."}),`
`,n(e.li,{children:"bucket 1 (001b) and bucket 5 (101b) each have their own pointer."}),`
`,n(e.li,{children:"other buckets stay: bucket 0 (000b) and bucket 4 (100b) both point to same original bucket 0"}),`
`,n(e.li,{children:"check if can merge on delete"}),`
`]}),`
`]}),`
`]}),`
`,i(e.p,{children:[n(e.strong,{children:"NOTE"}),": to check last bracket that had been split, total number of entries of (bucket + split image) must be at least (bucket_size + 1)."]}),`
`,n(e.p,{children:"Could have been a bucket with 4 pointers split into 2 pointers each, need not be only buckets with 1 pointer"}),`
`,n(e.h2,{children:"Sorting and selection"}),`
`,n(e.h3,{children:"External sorting"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["External sorting with x data pages using ",n(e.code,{children:"m"})," buffer/memory pages (x >> ",n(e.code,{children:"m"}),"):",`
`,i(e.ol,{children:[`
`,i(e.li,{children:["use all ",n(e.code,{children:"m"})," memory pages at a time, sort m pages from data records, write to disk as block ",n(e.code,{children:"M1"}),"."]}),`
`,i(e.li,{children:["merge ",n(e.code,{children:"M*"})," pages: let ",n(e.code,{children:"m - 1"})," memory pages be input pages, take first page of ",n(e.code,{children:"m - 1"})," ",n(e.code,{children:"M*"})," pages."]}),`
`,n(e.li,{children:"write smallest records into 1 memory page, when memory page full write to disk."}),`
`,i(e.li,{children:["if 1 input page used completely, take next page from the same ",n(e.code,{children:"M*"})," page."]}),`
`]}),`
`]}),`
`,i(e.li,{children:["optimization, blocked I/O",`
`,i(e.ul,{children:[`
`,i(e.li,{children:["system sometimes allow reading of ",n(e.code,{children:"b"})," contiguous pages in 1 i/o operation"]}),`
`,i(e.li,{children:["make 1 block (of ",n(e.code,{children:"b"})," pages) for output"]}),`
`,i(e.li,{children:["floor divide number of remaining pages ",n(e.code,{children:"k = (m - b)//b"}),", ",n(e.code,{children:"k"})," input blocks."]}),`
`]}),`
`]}),`
`]}),`
`,n(e.h3,{children:"B+ tree sort select"}),`
`,n(e.p,{children:"Sorting with B+ tree, B+ tree already there:"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"clustered index just scan (records alr there)"}),`
`,n(e.li,{children:"unclustered index for each RID retrieve record."}),`
`]}),`
`,n(e.p,{children:"Select:"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["selectivity of access path = no. of index/data pages that need to be accessed to get data records",`
`,i(e.ul,{children:[`
`,i(e.li,{children:["usually most selective access path = traverse down smallest value, iterate right ",n(e.img,{src:"./res/btree_selectivity.png",alt:"B+ tree selectivity"})]}),`
`]}),`
`]}),`
`,i(e.li,{children:["covering index for query ",n(e.code,{children:"Q"}),": index contains all info required for query (no need fetch with RID etc.)"]}),`
`,i(e.li,{children:["for ",n(e.code,{children:"where ... and"}),": either look up RID and filter, or if b+ tree index for ",n(e.code,{children:"and"})," also exist, find intersection of both trees."]}),`
`]}),`
`,n(e.h3,{children:"Conjuncts"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["Conjunctive Normal Form: express in ands (each AVB is a conjunct): ",n(e.code,{children:"(A V B) ^ (B V C)"})," etc."]}),`
`,i(e.li,{children:["index I on attribs (",n(e.code,{children:"K1, ... Kn"}),") matches predicate ",n(e.code,{children:"p"})," if",`
`,i(e.ol,{children:[`
`,i(e.li,{children:["b+ tree: ",n(e.code,{children:"p"})," is of the form ",n(e.code,{children:"(K1 = c1) && ...(Ki = ci) && (Kj op cj)"})," \u2192 at most 1 non ",n(e.code,{children:"=="})," op, non ",n(e.code,{children:"=="})," must be last attrib. does not have to be all of index."]}),`
`,i(e.li,{children:["hash index: ",n(e.code,{children:"p"})," is of the form ",n(e.code,{children:"(K1 = c1) && ... (Kn = cn)"})," for some ",n(e.code,{children:"c*"}),". (All attrib used, ",n(e.code,{children:"="})," not ",n(e.code,{children:">"})," etc.)"]}),`
`]}),`
`]}),`
`,i(e.li,{children:[n(e.code,{children:"primary conjuncts"}),": subset of conjuncts in predicate ",n(e.code,{children:"p"})," that index ",n(e.strong,{children:"matches"}),": index on weight, predicate (weight = ..., name = ...), primary conjunct weight."]}),`
`,i(e.li,{children:[n(e.code,{children:"non primary conjuncts"}),": conjuncts in p that are non primary"]}),`
`,i(e.li,{children:[n(e.code,{children:"covered conjuncts"}),": conjuncts in p that index I covers, e.g. index weight + height, predicate weight + name, covered = weight. (weight not primary)"]}),`
`]}),`
`,n(e.h3,{children:"Calculating cost"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["calculate number of pages accessed B+",`
`,i(e.ol,{children:[`
`,i(e.li,{children:["cost to navigate internal nodes = depth = ",n(e.code,{children:"log(num_leaf_nodes, branch factor)"}),"."]}),`
`,i(e.li,{children:["scan leaf pages: ",n(e.code,{children:"num_leaf_to_select / num_entries_each_leaf"}),"."]}),`
`,i(e.li,{children:["retrieve data records: 0 if format 1(alr got),  ",n(e.code,{children:"numRecordsSelected"})," otherwise. (can optimize by sort: max = ",n(e.code,{children:"min(numTotalPages, numSelectedRecords)"}),", min ",n(e.code,{children:"numRecordsSelected / recordsPerPage"})," )"]}),`
`]}),`
`]}),`
`,i(e.li,{children:["calculate number of pages accessed hash",`
`,i(e.ol,{children:[`
`,i(e.li,{children:["cost to get leaf pages: ",n(e.code,{children:"numLeafToSelect / numRecordsPerPage"}),"."]}),`
`,n(e.li,{children:"cost to retrieve data: 0 if format 1, same as B+ otherwise."}),`
`]}),`
`]}),`
`]}),`
`,`
`,n(e.h2,{children:"projection"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"picks out a subset of columns, then removes duplicates from results, return."}),`
`,n(e.li,{children:"if project with asterisk, no deduplication."}),`
`,n(e.li,{children:"if index already exists on search key containing all wanted attributes, can just index scan."}),`
`]}),`
`,n(e.h3,{children:"Sort based approach"}),`
`,n(e.p,{children:"process:"}),`
`,i(e.ol,{children:[`
`,i(e.li,{children:["Extract columns matching attributes ",n(e.code,{children:"a"})]}),`
`,n(e.li,{children:"sort all columns, then remove duplicates"}),`
`]}),`
`,n(e.p,{children:"cost:"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["read all pages of original table ",n(e.code,{children:"R"})," (num of pages)"]}),`
`,i(e.li,{children:["write to intermediate table ",n(e.code,{children:"T"})," (num of pages R projected columns non dedupe)",`
`,i(e.ul,{children:[`
`,n(e.li,{children:"can optimize, write as initial sort runs, -1 merge depth next step"}),`
`]}),`
`]}),`
`,i(e.li,{children:["sort records: ",n(e.code,{children:"2 * T * m"}),", ",n(e.code,{children:"m"})," = number of passes (log initial sorted runs base merge factor + 1), ",n(e.code,{children:"2x"})," for rw"]}),`
`,i(e.li,{children:["scan and dedupe: ",n(e.code,{children:"T"})," (0 if dedupe during merge)"]}),`
`]}),`
`,`
`,n(e.h3,{children:"Hash based approach"}),`
`,n(e.p,{children:"process:"}),`
`,i(e.ol,{children:[`
`,n(e.li,{children:"[partition] setup 1 input buffer, rest output buffers. read 1 page per time, for each tuple remove unwanted attributes then apply hash function"}),`
`,n(e.li,{children:"[partition] when output buffer full write to disk. (group output by output buffers, no tuple exist in 2 groups)"}),`
`,n(e.li,{children:"[dedupe] setup 1 input buffer, rest use as in memory hash table. read partition output 1 page per time, for each tuple insert into hash table if not yet inside."}),`
`,n(e.li,{children:"[dedupe] if hash table is too big in step 3, recursively apply hash based partitioning to overflowed partition."}),`
`]}),`
`,n(e.p,{children:"cost:"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["hash based is effective if bucket size is large relative to size of table. (",n(e.code,{children:"Bucket size <= sqrt(T)"}),")"]}),`
`,i(e.li,{children:["read all pages original table ",n(e.code,{children:"R"})]}),`
`,i(e.li,{children:["write all partitioned buckets ",n(e.code,{children:"T"})]}),`
`,i(e.li,{children:["deduplicate, rw all paritioned buckets ",n(e.code,{children:"T"})]}),`
`]}),`
`,`
`,n(e.h2,{children:"Joins"}),`
`,i(e.p,{children:[n(e.code,{children:"Outer join Inner/R join S"})," (inner always rhs)"]}),`
`,n(e.h3,{children:"Iteration"}),`
`,i(e.p,{children:[n(e.strong,{children:"NOTE"}),": output write cost ignored since worst case cross everything outweigh any approach"]}),`
`,i(e.p,{children:[n(e.strong,{children:"Loop Join"}),":"]}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"For each record in Outer, check if matches record in inner. if match, output."}),`
`,i(e.li,{children:["optimization, ",n(e.strong,{children:"page based loop join"}),": for each record in outer page check each record in inner page."]}),`
`,i(e.li,{children:["cost: scan R = ",n(e.code,{children:"numPagesOuter"})," + for each scan S = ",n(e.code,{children:"numRecordsOuter * numPagesInner"})," (or ",n(e.code,{children:"numPagesOuter * numPagesInner"})," for page based)"]}),`
`]}),`
`,n(e.p,{children:"Block nested loop join"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["use 1 buffer page for output, 1 page for outer input, ",n(e.code,{children:"B - 2"})," pages for inner input. for each ",n(e.code,{children:"B-2"})," pages do block based join."]}),`
`,i(e.li,{children:["cost = ",n(e.code,{children:"numPagesOuter"})," + ",n(e.code,{children:"numPagesOuter/(B - 2) * numPagesInner"}),"."]}),`
`]}),`
`,n(e.p,{children:"Index Nested Loop join"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"if join on attribute A and index on Inner.A exists (all attribs of join), then for each record in Inner search index for corresponding A and join."}),`
`,i(e.li,{children:["cost = ",n(e.code,{children:"numPagesOuter"})," + ",n(e.code,{children:"numRecordsInner * (numInnerInternalDepth + avgLeafNodesPerKey)"})]}),`
`]}),`
`,n(e.h3,{children:"Sort merge join"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Sort inner and outer, merge."}),`
`,i(e.li,{children:["if need to cross on both sides need rewind: inner = ",n(e.code,{children:"10 10 20 21"}),", outer = ",n(e.code,{children:"10 10 11 12"}),", after ",n(e.code,{children:"inner1,outer1; inner1,outer2"}),", ",n(e.code,{children:"inner2 == inner1"})," so rewind to ",n(e.code,{children:"outer1"}),"."]}),`
`,i(e.li,{children:["cost: external sort cost + ",n(e.code,{children:"numPagesInner"})," + ",n(e.code,{children:"numPagesOuter"})," (assuming no cross like above, else ",n(e.code,{children:"numRecordsInner * numpagesOuter"})," cross pdt)"]}),`
`,n(e.li,{children:"optimization: if number of buffer pages > number of sorted runs in Inner + outer, no need to continue merge in initial sort, can join already (take smallest page of each sorted run)"}),`
`]}),`
`,n(e.h3,{children:"Hash join"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["hash inner, outer into ",n(e.code,{children:"k"})," partitions each"]}),`
`,n(e.li,{children:"say inner.A = 1 in partition 1 and outer.A = 1 in partition 3, join partition 1 + 3."}),`
`,n(e.li,{children:"partition x of inner used to populate hash table. read each page of partition x outer, for each record probe hash table, write to output."}),`
`,n(e.li,{children:"when output buffer full write to disk (if output buffer not full do not write to disk even after partition pair joined)"}),`
`,n(e.li,{children:"if hash table does not fit in memory recursively partiton overflowed partitions"}),`
`,i(e.li,{children:["cost: ",n(e.code,{children:"3 * (numPagesInner + numPagesOuter)"})," (assuming no overflow partition)"]}),`
`,i(e.li,{children:["number of partitions ",n(e.code,{children:"k = B - 1"}),", ",n(e.code,{children:"B approx == sqrt(f * numPagesInner)"})," where ",n(e.code,{children:"f"})," is fudge factor"]}),`
`]})]})}function t(r={}){const{wrapper:e}=r.components||{};return e?n(e,Object.assign({},r,{children:n(l,r)})):l(r)}export{t as default};
