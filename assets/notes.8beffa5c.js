import{j as n,d as i,F as c}from"./index.9d0d6e4c.js";function d(r){const e=Object.assign({h1:"h1",h2:"h2",h3:"h3",ol:"ol",li:"li",p:"p",ul:"ul",strong:"strong",code:"code",img:"img",hr:"hr"},r.components);return i(c,{children:[n(e.h1,{children:"CS3223"}),`
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
`,n(e.img,{src:"indexing.png",alt:"indexing"})]}),`
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
`,n(e.p,{children:n(e.img,{src:"btree.png",alt:"b+ tree"})}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["non leaf nodes are not values: ",n(e.code,{children:"[5]->[4][7]"}),", ",n(e.code,{children:"5"})," ",n(e.strong,{children:"does not exist as a record"}),"."]}),`
`,i(e.li,{children:["order ",n(e.code,{children:"x"})," b+ tree means nodes contain at least ",n(e.code,{children:"x"})," nodes, at most ",n(e.code,{children:"2x"})," nodes. (except root node, root at least 1 at most ",n(e.code,{children:"2x"}),")"]}),`
`,i(e.li,{children:["Insert, page full (assume page max 4 entry):",`
`,i(e.ul,{children:[`
`,i(e.li,{children:[n(e.code,{children:"[13] -> [4,5,6,7][14,15]"}),", insert ",n(e.code,{children:"8"}),", break up page: ",n(e.code,{children:"[4,5,6,7,8] => [6] -> [4,5][7,8]"}),", result = ",n(e.code,{children:"[6,13] -> [4,5][7,8][14,15]"}),"."]}),`
`,i(e.li,{children:["redistribution: ",n(e.code,{children:"[13] -> [4,5,6,7][14,15]"}),", insert ",n(e.code,{children:"8"}),", ",n(e.code,{children:"[8] -> [4,5,6,7][8,14,15]"}),"."]}),`
`]}),`
`]}),`
`,i(e.li,{children:["Deletion, underflow (node empty/ too little entries):",`
`,i(e.ul,{children:[`
`,i(e.li,{children:[`
`,i(e.p,{children:["merge adjacent: ",n(e.code,{children:"[10]->[4,5][11]"}),", result: ",n(e.code,{children:"[4,5,11]"}),". Note that internal nodes might be redistributed:"]}),`
`,n(e.p,{children:n(e.img,{src:"bredist.png",alt:"redist"})}),`
`]}),`
`]}),`
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
`]})]})}function t(r={}){const{wrapper:e}=r.components||{};return e?n(e,Object.assign({},r,{children:n(d,r)})):d(r)}export{t as default};
