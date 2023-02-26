import{j as n,d as r,F as i}from"./index.19eef1f8.js";function c(l){const e=Object.assign({h1:"h1",h2:"h2",ul:"ul",li:"li",h3:"h3",p:"p",ol:"ol",strong:"strong"},l.components);return r(i,{children:[n(e.h1,{children:"CS2106 notes"}),`
`,n(e.h2,{children:"Memory structure"}),`
`,r(e.ul,{children:[`
`,n(e.li,{children:"hierachy: Registers -> CPU cache ->  DRAM -> Flash/PCM -> HDD"}),`
`,n(e.li,{children:"Instruction execution:"}),`
`]}),`
`,n("img",{src:"2exec.png",alt:"diagram",width:"500"}),`
`,n(e.h2,{children:"Stack"}),`
`,n(e.h3,{children:"Components"}),`
`,n(e.p,{children:"Higher addresses on top."}),`
`,n(e.p,{children:"Text: stores instruction data"}),`
`,n(e.p,{children:"Data: Global variables, static variables"}),`
`,n(e.p,{children:"Heap: dynamically allocated memory, e.g. malloc/new"}),`
`,n(e.p,{children:"free space"}),`
`,n(e.p,{children:"stack: stack frames, local data"}),`
`,r(e.ul,{children:[`
`,n(e.li,{children:"stack frame: each function invocation data in 1 frame"}),`
`,n(e.li,{children:"stack pointer: top of stack region(of all stack frames)"}),`
`]}),`
`,n(e.h3,{children:"Function processes"}),`
`,r(e.ol,{children:[`
`,n(e.li,{children:"Caller push params to stack/register"}),`
`,n(e.li,{children:"Caller push return Program Counter to stack"}),`
`,n(e.li,{children:"Callee saves registers used by callee, e.g. FP/SP"}),`
`,n(e.li,{children:"Callee allocates space for its own local variables"}),`
`,n(e.li,{children:"Callee adjusts Stack Pointer"}),`
`,r(e.li,{children:[n(e.strong,{children:"Function retuned"}),": Callee restores saved registers"]}),`
`,n(e.li,{children:"Caller continue execution (PC etc. restored)"}),`
`]}),`
`,n(e.h2,{children:"Processes"}),`
`,n("img",{src:"3state.png",alt:"diagram",width:"500"}),`
`,r(e.ul,{children:[`
`,n(e.li,{children:"Running -> suspend includes I/O, sleep etc."}),`
`,n(e.li,{children:"Process Control Block: |FP/SP/PC...|GPRs|Memory (Process' Stack)|PID|State|"}),`
`,n(e.li,{children:"Process Table: stack of PCB's"}),`
`,n(e.li,{children:"Context Switch: switch between executing processes, incl reload PCB"}),`
`,n(e.li,{children:"Syscall: syscall number used as index, dispatcher gets handler, return once handler done."}),`
`,n(e.li,{children:"Exception: occurs @ machine level. Synchronous (happens at fixed position in execution), executes exception handler"}),`
`,n(e.li,{children:"Interrupt: e.g. keyboard interrupt ctrl+c, asynchronous, interrupt handler called"}),`
`,n(e.li,{}),`
`]})]})}function s(l={}){const{wrapper:e}=l.components||{};return e?n(e,Object.assign({},l,{children:n(c,l)})):c(l)}export{s as default};
