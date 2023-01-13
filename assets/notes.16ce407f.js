import{j as n,d as i,F as l}from"./index.7bad5630.js";function c(r){const e=Object.assign({h1:"h1",h2:"h2",h3:"h3",ol:"ol",li:"li",p:"p",ul:"ul",strong:"strong",code:"code",img:"img"},r.components);return i(l,{children:[n(e.h1,{children:"CS3223"}),`
`,n(e.h2,{children:"Wk 1: memory"}),`
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
`]})]})}function s(r={}){const{wrapper:e}=r.components||{};return e?n(e,Object.assign({},r,{children:n(c,r)})):c(r)}export{s as default};
