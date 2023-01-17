import{j as n,d as r,F as l}from"./index.27a0778a.js";function c(i){const e=Object.assign({h1:"h1",h2:"h2",h3:"h3",ol:"ol",li:"li",p:"p",a:"a",code:"code",ul:"ul",strong:"strong",h4:"h4",pre:"pre"},i.components);return r(l,{children:[n(e.h1,{children:"Networking summary"}),`
`,n(e.h2,{children:"Visiting a page"}),`
`,n(e.h3,{children:"Resolving IP of page"}),`
`,r(e.ol,{children:[`
`,n(e.li,{children:"Check local DNS cache (browser, OS)"}),`
`,n(e.li,{children:"Resolving nameserver (Internet Service Provider)"}),`
`,n(e.li,{children:"Root nameserver"}),`
`,n(e.li,{children:"Top Level Domain server (.com, .net etc.)"}),`
`,n(e.li,{children:"Authoritative DNS: DNS server of organization operating website, should have IP. (e.g. namecheap)"}),`
`]}),`
`,n(e.p,{children:"note: DNS resolution uses UDP. Use DNS over HTTPS to encrypt for privacy (default for firefox US)."}),`
`,n(e.h3,{children:"Initiate TCP connection"}),`
`,r(e.ol,{children:[`
`,n(e.li,{children:"Client sends SYN packet to server"}),`
`,n(e.li,{children:"Server responds with SYN + ACK"}),`
`,n(e.li,{children:"Client sends ACK to server"}),`
`]}),`
`,n(e.h3,{children:"Establish HTTPS"}),`
`,n(e.p,{children:n(e.a,{href:"https://www.cloudflare.com/learning/ssl/what-happens-in-a-tls-handshake/",children:"reference"})}),`
`,r(e.ol,{children:[`
`,r(e.li,{children:["Client sends ",n(e.code,{children:"Client hello"})," + cipher suites + client random + Diffie Hellman parameters"]}),`
`,r(e.li,{children:["Server responds with ",n(e.code,{children:"Server hello"})," + SSL Certificate (from CA authority) + server random + selected cipher suite + server random",`
`,r(e.ul,{children:[`
`,r(e.li,{children:["server sends the ",n(e.code,{children:"Finish"})," message, since it can calculate shared key already"]}),`
`]}),`
`]}),`
`,r(e.li,{children:["Client calculate shared key from Diffie Hellman parameters + server random, send client ",n(e.code,{children:"Finish"}),"."]}),`
`]}),`
`,n(e.h3,{children:"Send HTTP request"}),`
`,r(e.ol,{children:[`
`,n(e.li,{children:"send a GET request for the resources."}),`
`,n(e.li,{children:"server responds with the resources."}),`
`]}),`
`,n(e.h3,{children:"Misc trivia"}),`
`,r(e.ul,{children:[`
`,n(e.li,{children:"http port 80, https port 443"}),`
`,r(e.li,{children:[n(e.code,{children:"keep-alive"})," required to avoid having to ",n(e.code,{children:"hello"})," each time a resource is requested (http, css, image)."]}),`
`]}),`
`,n(e.h2,{children:"Internet layers"}),`
`,r(e.ol,{children:[`
`,r(e.li,{children:[n(e.strong,{children:"Application"}),": HTTP, SMTP, actual data"]}),`
`,r(e.li,{children:[n(e.strong,{children:"Transport"}),": process to process, TCP/UDP"]}),`
`,r(e.li,{children:[n(e.strong,{children:"Network"}),": routing, source to dest. IP, routing protocols"]}),`
`,r(e.li,{children:[n(e.strong,{children:"Link"}),": MAC address, home routers etc."]}),`
`,r(e.li,{children:[n(e.strong,{children:"Physical"}),": actual bits"]}),`
`]}),`
`,n(e.h2,{children:"HTTP"}),`
`,n(e.h3,{children:"request components"}),`
`,r(e.ul,{children:[`
`,r(e.li,{children:["verb: ",n(e.code,{children:"GET"}),", ",n(e.code,{children:"POST"}),", ",n(e.code,{children:"HEAD"}),"(1.0), ",n(e.code,{children:"PUT"}),", ",n(e.code,{children:"DELETE"}),"(1.1)"]}),`
`]}),`
`,n(e.h3,{children:"response components"}),`
`,r(e.ul,{children:[`
`,r(e.li,{children:["response code",`
`,r(e.ol,{children:[`
`,r(e.li,{children:[n(e.code,{children:"1XX"})," (information)"]}),`
`,r(e.li,{children:[n(e.code,{children:"2XX"})," (success: ",n(e.code,{children:"200 ok"}),", ",n(e.code,{children:"201 created"}),", ",n(e.code,{children:"202 accepted"}),")"]}),`
`,r(e.li,{children:[n(e.code,{children:"3XX"})," (redirection: ",n(e.code,{children:"301 moved permanently"}),")"]}),`
`,r(e.li,{children:[n(e.code,{children:"4XX"})," (Client error)"]}),`
`,r(e.li,{children:[n(e.code,{children:"5XX"})," (Server error)"]}),`
`]}),`
`]}),`
`]}),`
`,n(e.h2,{children:"Transport protocols"}),`
`,n(e.h3,{children:"TCP"}),`
`,n(e.h4,{children:"Features"}),`
`,r(e.ul,{children:[`
`,n(e.li,{children:"congestion control: throttle sender when network overloaded"}),`
`,n(e.li,{children:"reliable: resend if no ACK"}),`
`,r(e.li,{children:["Flow control: ",n(e.code,{children:"rwnd"})," allows sender to control how much data receiver sends"]}),`
`,n(e.li,{children:"connection oriented: for each unique(src IP, src Port), server creates a new socket. client new socket for each port."}),`
`,n(e.li,{children:"No minimum throughput, no security"}),`
`]}),`
`,n(e.h4,{children:"Datagram"}),`
`,r("table",{children:[r("tr",{children:[n("td",{colSpan:"16",children:"src port"}),`
`,n("td",{colSpan:"16",children:"dest port"})]}),n("tr",{children:n("td",{colSpan:"32",children:"seq number"})}),n("tr",{children:n("td",{colSpan:"32",children:"ack number"})}),r("tr",{children:[n("td",{colSpan:"4",children:"header length"}),n("td",{colSpan:"18"}),n("td",{children:"Urgent"}),`
`,n("td",{children:"Ack"}),`
`,n("td",{children:"Push"}),`
`,n("td",{children:"Reset"}),`
`,n("td",{children:"Syn"}),`
`,n("td",{children:"Fin"}),`
`,n("td",{colSpan:"4",children:"Receive Window"})]}),r("tr",{children:[n("td",{colSpan:"24",children:"checksum"}),`
`,n("td",{colSpan:"8",children:"urgent pointer"})]}),n("tr",{children:n("td",{colSpan:"32",children:"options"})})]}),`
`,r(e.ul,{children:[`
`,r(e.li,{children:[n(e.code,{children:"sequence no"}),": packet no, e.g. 1000 bytes Maximum Segment Size, seq no = (0, 1000, 2000, 3000...)"]}),`
`,r(e.li,{children:[n(e.code,{children:"ACK no"}),": first byte of next packet expected"]}),`
`,r(e.li,{children:[n(e.code,{children:"checksum"}),": same as UDP"]}),`
`,r(e.li,{children:[n(e.code,{children:"head len"}),": header length"]}),`
`,r(e.li,{children:[n(e.code,{children:"U"}),": contains urgent. read urgent data ptr and send up first"]}),`
`,r(e.li,{children:[n(e.code,{children:"A"}),": contains ack, parse ack no."]}),`
`,r(e.li,{children:[n(e.code,{children:"P"}),": like urgent but push entire segment"]}),`
`,r(e.li,{children:[n(e.code,{children:"R"}),": RST, reset: unable to parse, incorrect format etc."]}),`
`,r(e.li,{children:[n(e.code,{children:"S"}),": SYN, sync flag for handshake"]}),`
`,r(e.li,{children:[n(e.code,{children:"F"}),": FIN, finish flag for closing"]}),`
`,r(e.li,{children:[n(e.code,{children:"rwnd"}),"/ Receive Window: no. of bytes receiver willing to accept, i.e. remaining free buffer"]}),`
`]}),`
`,n(e.h4,{children:"Process"}),`
`,r(e.ol,{children:[`
`,r(e.li,{children:["Handshaking:",`
`,r(e.ol,{children:[`
`,r(e.li,{children:["client ",n(e.code,{children:"LISTEN"})," send server ",n(e.code,{children:"SYN"}),", seq = ",n(e.code,{children:"x"}),". state change ",n(e.code,{children:"SYN_SENT"})]}),`
`,r(e.li,{children:["server receive, state ",n(e.code,{children:"LISTEN"})," to ",n(e.code,{children:"SYN RCVD"}),". ACK with ",n(e.code,{children:"SYN"}),", seq = ",n(e.code,{children:"y"}),", ack = ",n(e.code,{children:"x + 1"})]}),`
`,r(e.li,{children:["client receive, state ",n(e.code,{children:"ESTAB"}),". ACK with ",n(e.code,{children:"y + 1"}),". server state ",n(e.code,{children:"ESTAB"})," on receive"]}),`
`]}),`
`]}),`
`,r(e.li,{children:["closing TCP:",`
`,r(e.ol,{children:[`
`,r(e.li,{children:["client send server w/ ",n(e.code,{children:"FIN"})," flag and seq = ",n(e.code,{children:"x"}),", state becomes ",n(e.code,{children:"FIN_WAIT_1"}),", cannot send anymore"]}),`
`,r(e.li,{children:["server ACK w/ ",n(e.code,{children:"x + 1"}),", server state ",n(e.code,{children:"CLOSE_WAIT"}),", server can still send. client receive, state becomes ",n(e.code,{children:"FIN_WAIT_2"})]}),`
`,r(e.li,{children:["server does cleanup, send ",n(e.code,{children:"FIN"})," flag segment w/ seq = ",n(e.code,{children:"y"}),", server state ",n(e.code,{children:"LAST_ACK"}),", cannot send. client state ",n(e.code,{children:"TIMED_WAIT"})]}),`
`,r(e.li,{children:["client ACK ",n(e.code,{children:"y + 1"}),", then wait 2x max segment lifetime before state ",n(e.code,{children:"CLOSED"}),". server state ",n(e.code,{children:"CLOSED"})," on receive ACK"]}),`
`]}),`
`]}),`
`]}),`
`,n(e.h4,{children:"TCP ACK generation"}),`
`,r(e.ol,{children:[`
`,n(e.li,{children:"in order: delay 500ms, send ack"}),`
`,n(e.li,{children:"in order, pending ACK ^ not yet sent: immediate send ACK"}),`
`,n(e.li,{children:"out of order: immediate send dupe ACK"}),`
`,n(e.li,{children:"in order, out of order previously received: immediate ACK"}),`
`]}),`
`,r(e.ul,{children:[`
`,n(e.li,{children:"uses either Go Back N or Selective Repeat. buffer not in specification but usually both sender and recv have."}),`
`,n(e.li,{children:"ACK cumulative, ACK no = next packet expected"}),`
`]}),`
`,n(e.h4,{children:"Timeout calculation"}),`
`,r(e.ol,{children:[`
`,r(e.li,{children:["EstimatedRTT = (1 - x) * EstimatedRTT + x * SampleRTT",n(e.code,{children:", "}),"x",n(e.code,{children:"usually 1/8."}),"SampleRTT` = latest RTT"]}),`
`,r(e.li,{children:[n(e.code,{children:"DevRTT aka safety margin = (1-y) * DevRTT + y * |SampleRTT - EstimatedRTT|"}),", ",n(e.code,{children:"y"})," usually 1/4. Deviation from mean"]}),`
`,n(e.li,{children:n(e.code,{children:"Timeout = EstimatedRTT + 4 * DevRTT"})}),`
`]}),`
`,n(e.h4,{children:"TCP fast retransmit"}),`
`,r(e.ul,{children:[`
`,n(e.li,{children:"If 4 un ACK'd segments received, resend even if not yet timeout"}),`
`]}),`
`,n(e.h3,{children:"UDP, User Datagram Protocol:"}),`
`,n(e.h4,{children:"Datagram"}),`
`,r("table",{children:[r("tr",{children:[n("td",{colSpan:"16",children:"src port"}),`
`,n("td",{colSpan:"16",children:"dest port"})]}),r("tr",{children:[n("td",{colSpan:"16",children:"length"}),`
`,n("td",{colSpan:"16",children:"checksum"})]})]}),`
`,r(e.ul,{children:[`
`,n(e.li,{children:"Unreliable, does not have any features not in TCP"}),`
`,n(e.li,{children:"Length includes header"}),`
`,n(e.li,{children:"no handshake/setup. UDP has no idea if server received properly"}),`
`,r(e.li,{children:[n(e.strong,{children:"Connectionless demultiplexing"}),": 1 socket for all client. sender attaches destination ",n(e.code,{children:"IP"})," + ",n(e.code,{children:"port"}),". Server use same port/socket for all."]}),`
`,n(e.li,{children:"Checksum: detects errors. Keep summing 16 bit chunks of data. if MSB carry, wraparound to back. Invert sum to get checksum"}),`
`,n(e.li,{children:"Used for DNS lookup."}),`
`]}),`
`,n(e.pre,{children:n(e.code,{children:`x = 10...0
y = 10...0
+_________
   100...0(sum w/ MSB carry over)
    00...1(sum w/ wraparound)
__________
~   11...0(checksum)
`})})]})}function t(i={}){const{wrapper:e}=i.components||{};return e?n(e,Object.assign({},i,{children:n(c,i)})):c(i)}export{t as default};
