import{j as n,d as r,F as t}from"./index.19eef1f8.js";function a(i){const e=Object.assign({h1:"h1",h2:"h2",ul:"ul",li:"li",h3:"h3",a:"a",p:"p",strong:"strong",code:"code",ol:"ol",h4:"h4",pre:"pre"},i.components);return r(t,{children:[n(e.h1,{children:"Systems design"}),`
`,n(e.h2,{children:"terminologies"}),`
`,r(e.ul,{children:[`
`,n(e.li,{children:"throughput: amount of data transmitted at any given time"}),`
`,n(e.li,{children:"bandwidth: maximum theoretical throughput"}),`
`,n(e.li,{children:"latency: how long it takes a packet to travel from 1 point to another"}),`
`]}),`
`,n(e.h2,{children:"Cloud Servers"}),`
`,n(e.h3,{children:"Types"}),`
`,r(e.ul,{children:[`
`,n(e.li,{children:"Virtual Private Server (EC2): functions like your own server, but is actually a vm running on a big server. Fixed allocation of resources (RAM etc)"}),`
`,n(e.li,{children:"Shared host: shares resources too, banks on fact that most websites are small"}),`
`]}),`
`,n(e.h3,{children:"Horizontal scaling"}),`
`,r(e.ul,{children:[`
`,n(e.li,{children:"Vertical scaling = bigger server, horizontal = more servers"}),`
`,n(e.li,{children:"horizontal can use conventional servers, can have high availability with redundancy"}),`
`,r(e.li,{children:["avoid ",n(e.a,{href:"#session-stickiness",children:"session stickiness"})]}),`
`]}),`
`,n(e.h3,{children:"Deployment"}),`
`,r(e.ul,{children:[`
`,n(e.li,{children:"Graceful shutdown: already received requests should still be processed. New one are rejected."}),`
`,r(e.li,{children:["Blue green: LB currently point to 3 v1 servers. 3 other servers updated to v2, LB point to the 3 v2 when ready",`
`,r(e.ul,{children:[`
`,n(e.li,{children:"v1 servers still active, used as servers for v3. Already received requests still processed by them. also allow easy rollback"}),`
`]}),`
`]}),`
`,r(e.li,{children:["Rolling: server 1 update and restart, LB point to others. then server 2, so on.",`
`,r(e.ul,{children:[`
`,n(e.li,{children:"user might land on v1 or v2, must ensure backward compatibility."}),`
`,n(e.li,{children:"update rolled out gradually, so can monitor health of deployment and rollback."}),`
`]}),`
`]}),`
`]}),`
`,n(e.p,{children:"Tools: capistrano (remote server deploy automation), puppet."}),`
`,r(e.p,{children:[n(e.a,{href:"https://github.com/avik-das/zero-downtime-deployments-demonstration",children:"example"}),`: sinatra(graceful shutdown ruby server),
`,n(e.a,{href:"https://caddyserver.com/",children:"caddy2"}),"(https reverse proxy with load balancer, support active health check at different end point without paid upgrade unlike nginx)"]}),`
`,n(e.h2,{children:"Load balancers"}),`
`,n(e.p,{children:"note that some load balancers can cache requests themselves."}),`
`,n(e.h3,{children:"Types"}),`
`,r(e.ul,{children:[`
`,n(e.li,{children:"Software: Elastic Load Balancer, HAProxy"}),`
`,n(e.li,{children:"Hardware: very expensive, sold in pairs."}),`
`]}),`
`,n(e.h3,{children:"Balancing traffic"}),`
`,r(e.ul,{children:[`
`,n(e.li,{children:"Level 4 load balancer: distribute traffic based on info at level 4 (Network, TCP/UDP/FTP). usually simple, e.g. round robin"}),`
`,r(e.li,{children:["Level 7 load balancer: distribute traffic based on info at level 7 (Application, HTTP). can do advanced, e.g. by cookies, by headers, etc.",`
`,r(e.ul,{children:[`
`,n(e.li,{children:"can add additional functionality: session persistence (same user same server), ssl termination (forward data as unecrypted)"}),`
`]}),`
`]}),`
`,n(e.li,{children:"DNS load balancing: in case entire architecture die (building fire), have multiple availability zones (AZ), balance by health then geolocation (cloudfare, nginx offers this)"}),`
`]}),`
`,n(e.h3,{children:"Session stickiness"}),`
`,n(e.p,{children:`Some paradigms/ designs like session stickiness, aka same user go to same server.
Examples include php servers storing user session serialized text file locally, if different server session lost.
Load balancer can set a cookie with some random hash, store hash to server mapping or balance (partition) based on id.`}),`
`,r(e.p,{children:["Best practice ",n(e.strong,{children:"not"})," to use session stickiness. store shared resource in shared location, e.g. ",n(e.code,{children:"redis"}),"/",n(e.code,{children:"memcached"}),"/",n(e.code,{children:"mysql"}),`.
This also allows having caches close to users.`]}),`
`,n(e.h3,{children:"Server/LB redundancy"}),`
`,r(e.ul,{children:[`
`,n(e.li,{children:"Active active: both LB active. direct request to either one (can be both same data, or 1 store half other store rest etc.)"}),`
`,n(e.li,{children:"Active passive: Primary LB works, generate heartbeat. Passive LB listen to heartbeat. Both listen/have the same public ip, different Virtual IP. Primary, die, secondary IP Address Takeover (IPAT) and duties."}),`
`]}),`
`,n(e.h3,{children:"Reverse proxies"}),`
`,r(e.ul,{children:[`
`,n(e.li,{children:"forward proxy sits in front of client, before connecting to internet, e.g. school blocking certain sites."}),`
`,r(e.li,{children:["reverse proxy sits in front of server, does:",`
`,r(e.ul,{children:[`
`,n(e.li,{children:"load balancing (Nginx software LB)"}),`
`,n(e.li,{children:"caching (cloudfare cdn)"}),`
`,n(e.li,{children:"ddos prevention (cloudfare again)"}),`
`,n(e.li,{children:"SSL termination (forward request to servers unencrypted)"}),`
`]}),`
`]}),`
`,r(e.li,{children:["see ",n(e.a,{href:"https://www.cloudflare.com/learning/cdn/glossary/reverse-proxy/",children:"link"})]}),`
`]}),`
`,n(e.h2,{children:"Data stores"}),`
`,n(e.h3,{children:"CAP theorem"}),`
`,r(e.ul,{children:[`
`,r(e.li,{children:[r(e.strong,{children:[n(e.strong,{children:"C"}),"onsistency"]}),": Database with 2 nodes, consistency = both nodes always same, not 1 updated 1 stale"]}),`
`,r(e.li,{children:[r(e.strong,{children:[n(e.strong,{children:"A"}),"vailability"]}),": Every request gets a response (no errors). response can be stale data"]}),`
`,r(e.li,{children:[r(e.strong,{children:[n(e.strong,{children:"P"}),"artition tolerance"]}),": System still operates despite network interference b/w nodes (e.g. 2 masters cannot sync)",`
`,r(e.ul,{children:[`
`,n(e.li,{children:"if network fails, Consistency = cancel transaction, Availability = proceed but sync later."}),`
`]}),`
`]}),`
`]}),`
`,n(e.h3,{children:"Replication"}),`
`,r(e.ul,{children:[`
`,n(e.li,{children:"Master slave: slaves are clones of each other. Write to master, read from slave (read load balancer)"}),`
`,r(e.li,{children:[`Master master: multiple masters. Still read from slave write to masters.
Additional write balancer for masters. Masters replicate writes of each other (network link b/w masters, see `,n(e.a,{href:"###CAP-theorem",children:"partition tolerance"}),")."]}),`
`]}),`
`,n(e.h3,{children:"RAID"}),`
`,r(e.ul,{children:[`
`,n(e.li,{children:"way of storing data on multiple disks."}),`
`,r(e.li,{children:["RAID 0: Drive 1 data blocks = ",n(e.code,{children:"[1,3,5]"}),", Drive 2 = ",n(e.code,{children:"[2,4,6]"}),". Read/Write blocks ",n(e.code,{children:"1"}),", ",n(e.code,{children:"2"})," >=2x faster since parallel. no fault tolerance"]}),`
`,r(e.li,{children:["RAID 1: Drive 1 = ",n(e.code,{children:"[1,2,3]"}),", Drive 2 = ",n(e.code,{children:"[1,2,3]"}),". High read, can parallel, slow write, low capacity."]}),`
`,r(e.li,{children:["RAID 5: Need at least 3 drives. drives: ",n(e.code,{children:"[1a,2a,p3]"}),",",n(e.code,{children:"[1b,p2,3a]"}),",",n(e.code,{children:"[p1,2b,3b]"}),". block 1 = ",n(e.code,{children:"1a + 1b"}),". if 1 drive fails reconstruct from parity. ONLY 1 DRIVE STORES PARITY EACH BLOCK."]}),`
`]}),`
`,n(e.h3,{children:"Scaling"}),`
`,r(e.ul,{children:[`
`,r(e.li,{children:["[Stick to SQL] do ",n(e.a,{href:"###Replication",children:"master slave replication"}),". write to master, master updates all slaves. read from slaves, high read throughput"]}),`
`,r(e.li,{children:["[Stick to SQL] ",n(e.strong,{children:"federation"}),": split db up by function, e.g. 1 database for ",n(e.code,{children:"Transactions"}),", 1 for ",n(e.code,{children:"Users"}),", instead of 1 for both"]}),`
`,r(e.li,{children:["[Stick to SQL] ",n(e.strong,{children:"sharding"}),": split ",n(e.strong,{children:"rows"})," into separate tables, e.g. table 1 users A to M, table 2 users M to Z. basically like partitioning."]}),`
`,r(e.li,{children:["[Stick to SQL] ",n(e.strong,{children:"denormalization"})," to avoid excessive joins, ",n(e.code,{children:"Courses(cid, tid, cname)"})," to ",n(e.code,{children:"Courses(cid, tid, cname, tname)"})," to avoid having to join with teachers to get ",n(e.code,{children:"tname"}),". ",n(e.code,{children:"tname"})," is duplicated though."]}),`
`,r(e.li,{children:["[Stick to SQL] ",n(e.strong,{children:"DB tuning"}),", using ",n(e.code,{children:"CHAR"})," instead of ",n(e.code,{children:"VARCHAR"}),", ",n(e.code,{children:"NOT NULL"})," where possible, use indexes (self balancing B-Tree maintain sorted order) for fast lookup. Use profiling tools to keep hot tables separate."]}),`
`,n(e.li,{children:"[Denormalize everything] avoid joins in queries, can stick to SQL, or migrate to MongoDB(document store), Dynamo/Redis(KVP) etc."}),`
`]}),`
`,n(e.h3,{children:"NoSql"}),`
`,r(e.ol,{children:[`
`,r(e.li,{children:[n(e.strong,{children:"Key Value Store"}),": (redis, memcached, dynamoDB) O(1) rw, often in memory, sometimes with optional persistence",`
`,r(e.ul,{children:[`
`,n(e.li,{children:"(redis: RDB take snapshots at periodic intervals, Append Only File append only on write then replay on restart"}),`
`,n(e.li,{children:"some kvp allow metadata utilities too. dynamo supports both kvp and document."}),`
`]}),`
`]}),`
`,r(e.li,{children:[n(e.strong,{children:"Document store"}),": (MongoDB, dynamoDB) stores documents like XML, JSON, binary.",`
`,r(e.ul,{children:[`
`,n(e.li,{children:"Allows query by metadata, very similar to key value."}),`
`]}),`
`]}),`
`,r(e.li,{children:[n(e.strong,{children:"Wide Column store"}),": (Google Bigtable, Facebook Cassandra, Hadoop HBase) columns = name value pair, columns grouped into column families. 1 row = many column families. Also have super column family, contains many rows.",`
`,r(e.ul,{children:[`
`,n(e.li,{children:"High availability high scalability. Very large datasets."}),`
`]}),`
`]}),`
`,r(e.li,{children:[n(e.strong,{children:"Graph"}),": (Neo4j) Each node a record (id: 1, name: alice), each edge = relationship b/w nodes.",`
`,r(e.ul,{children:[`
`,n(e.li,{children:"Ideal for complex relationships e.g. social network, many foreign keys, many to many relationships."}),`
`]}),`
`]}),`
`]}),`
`,n(e.h3,{children:"ACID vs BASE"}),`
`,r(e.ul,{children:[`
`,n(e.li,{children:"Atomicity: transaction either all occurs or none (incl power failures)"}),`
`,r(e.li,{children:["Consistency: data ",n(e.strong,{children:"COMPLIES TO VALIDATION RULES"})," (not CAP consistency)"]}),`
`,n(e.li,{children:"Isolation: Transaction is isolated from effects of other transactions. highest level == serializable, aka as if syncronous. lowest level == read uncommited, transaction can read data that is updated but not committed (i.e. can be rolled back)."}),`
`,n(e.li,{children:"Durability: transaction will remain even in case of failure (e.g. power failure), i.e. written to persistent storage"}),`
`,n(e.li,{children:"ACID = once write complete, data is consistent, all replicas same data"}),`
`,n(e.li,{children:"SQL also good for enforcing schemas, and handling complex joins"}),`
`,n(e.li,{children:"BASE = consistency might be lazy, i.e. after write finish data may actually only update when being read, or after write only master updated, slaves might not be updated yet."}),`
`]}),`
`,n(e.h2,{children:"caches"}),`
`,n(e.p,{children:"Caches can be built as:"}),`
`,r(e.ol,{children:[`
`,n(e.li,{children:"In memory (redis, memcached). note that redis can be persistent."}),`
`,n(e.li,{children:"File based (Amazon file cache, S3 etc.)"}),`
`]}),`
`,n(e.p,{children:"DNS is cached at every level (ISP, DNS servers, routers, browsers). Can open svchost in process hacker, records are in memory (sometimes HOSTS file used also)"}),`
`,n(e.h3,{children:"Types"}),`
`,r(e.ol,{children:[`
`,r(e.li,{children:["Client side: store on user OS/browser (",n(e.code,{children:"localStorage"}),", ",n(e.code,{children:"set-cookie"}),"). HTTP caching."]}),`
`,n(e.li,{children:"CDN caching: store frequently accessed assets (images, userdata, html) on CDNs close to users."}),`
`,r(e.li,{children:["Server caching: some reverse proxies have built in HTTP caching (",n(e.code,{children:"Nginx"})," caches ",n(e.code,{children:"GET"})," and ",n(e.code,{children:"HEAD"}),")"]}),`
`,r(e.li,{children:["DB caching: most databases have some form of caching (MySQL stores ",n(e.code,{children:"SELECT"})," statements with its data in memory)"]}),`
`]}),`
`,n(e.h3,{children:"Targets"}),`
`,r(e.ul,{children:[`
`,r(e.li,{children:["HTTP requests: done by browsers automatically. usually relies on http verbs to decide what can be cached (GET can POST cannot)",`
`,r(e.ul,{children:[`
`,r(e.li,{children:["set ",n(e.code,{children:"Cache-Control"})," to determine when to expire cache, or if data should even be cached."]}),`
`]}),`
`]}),`
`,r(e.li,{children:["DB queries: cache specific query, e.g. ",n(e.code,{children:"SELECT * FROM USERS"}),". Need to consider"]}),`
`,n(e.li,{children:"Objects: cache entire objects, HTML, whole datasets etc."}),`
`]}),`
`,n(e.h3,{children:"Update strategies"}),`
`,r(e.ol,{children:[`
`,r(e.li,{children:[n(e.strong,{children:"Cache aside"}),": client writes to cache on cache miss"]}),`
`,r(e.li,{children:[n(e.strong,{children:"Write through"}),": Use cache as data store. user write to cache, cache write to db. db return, cache return to user."]}),`
`]}),`
`,r(e.ul,{children:[`
`,n(e.li,{children:"set TTL since data might not be read"}),`
`]}),`
`,r(e.ol,{start:"3",children:[`
`,r(e.li,{children:[n(e.strong,{children:"Write back"}),": Write through but async. cache adds write event to messaging queue, event processor writes to DB async."]}),`
`,r(e.li,{children:[n(e.strong,{children:"Refresh ahead"}),": before a cache entry TTL expire, refresh from storage. Needs to accurately predict what stuff to refresh, if not defeats the point of TTL."]}),`
`]}),`
`,n(e.h3,{children:"GraphQL caching"}),`
`,r(e.ul,{children:[`
`,r(e.li,{children:["HTTP caching: GraphQL is language agnostic, so you can send everything as ",n(e.code,{children:"POST"}),". However browser caching breaks since it relies on HTTP verbs.",`
`,r(e.ul,{children:[`
`,r(e.li,{children:["HTTP ",n(e.code,{children:"GET"})," message body semantically has no meaning, URL max length is 2048 so large ",n(e.code,{children:"GET"}),"s require ",n(e.code,{children:"POST"}),"."]}),`
`,r(e.li,{children:["make sure to send mutations with ",n(e.code,{children:"POST"}),"."]}),`
`]}),`
`]}),`
`,r(e.li,{children:["Having more complex queries: ",n(e.code,{children:"GET /api/user/1"})," easy to cache, but not ",n(e.code,{children:"GET /api/user?id=1,2"}),", since ",n(e.code,{children:"GET /api/user?id=1"})," cannot use that cache."]}),`
`,r(e.li,{children:["Same for graphQL, because data is so customized the cache hits might be very rare. Technically dependent on developer skill. See ",n(e.a,{href:"https://www.apollographql.com/blog/backend/caching/graphql-caching-the-elephant-in-the-room/",children:"link"})]}),`
`]}),`
`,n(e.h2,{children:"Internet protocols"}),`
`,n(e.h3,{children:"RPC"}),`
`,r(e.ul,{children:[`
`,n(e.li,{children:"RPC = Remote procedure call, i.e. call a function remotely"}),`
`,r(e.li,{children:["RPC api URLs represent function names e.g. ",n(e.code,{children:"/api/signup"}),", function arguments passed in body e.g. ",n(e.code,{children:'{"name": "AAAA"}'})," (use ",n(e.code,{children:"POST"})," request)"]}),`
`,n(e.li,{children:"couples front end to back end service implementation. Might be difficult to cache (HTTP caching)"}),`
`,n(e.li,{children:"gRPC: google's RPC implementation, uses protobuf as data format, and http 2 primitives (browsers cannot support this). supports strong typing via proto file. encodes to binary."}),`
`]}),`
`,n(e.h3,{children:"REST"}),`
`,r(e.ul,{children:[`
`,n(e.li,{children:"REST = REpresentational State Transfer, must be stateless. Technically not tied to HTTP, but whatever protocol you use, follow that protocol's standards"}),`
`,r(e.li,{children:["REST api URLs represent resources e.g. ",n(e.code,{children:"POST /users"})," (instead of ",n(e.code,{children:"POST /signup"})," per RPC)."]}),`
`,n(e.li,{children:"HTTP Verbs are used to denote intentions, status codes stick to standard status responses, do not reinvent the wheel."}),`
`,r(e.li,{children:["Sometimes some verbs do not accurately denote action (archive = ",n(e.code,{children:"DELETE"})," + ",n(e.code,{children:"POST"}),")"]}),`
`]}),`
`,n(e.h2,{children:"Async"}),`
`,n(e.p,{children:`Operations can be done async for better performance and UX. Examples include server side rendering (SSR).
If task can be done beforehand, like SSR, can run cronjob update periodically.
Otherwise, use a messaging queue to send to workers, frontend periodically check operation status.`}),`
`,n(e.h3,{children:"RabbitMQ"}),`
`,r(e.ul,{children:[`
`,n(e.li,{children:"RabbitMQ is a message broker (producer/consumer), unlike pubsubs like kafka."}),`
`,n(e.li,{children:"RabbitMQ is distributed, running on cluster of nodes with queues distributed among nodes with replication for high availability and fault tolerance"}),`
`,n(e.li,{children:"push based, has a prefetch limit so users do not get overwhelmed by pushes."}),`
`,n(e.li,{children:"many languages supported: Go, Python, JavaScript etc."}),`
`]}),`
`,n(e.h4,{children:"Use Cases"}),`
`,r(e.ul,{children:[`
`,n(e.li,{children:"RabbitMQ handles medium load (20k+ msg/s) well. Push based (smart broker dumb client)"}),`
`,n(e.li,{children:"RabbitMQ is at the most basic level producer consumer, but can pub/sub (1 producer many consumer) as well."}),`
`,r(e.li,{children:["RabbitMQ supports exchanges unlike Kafka:",`
`,r(e.ul,{children:[`
`,n(e.li,{children:'Direct exchange: queue A tied to broker with binding key "aaa", when broker receives message with key "aaa" broker sends to queue A'}),`
`,n(e.li,{children:'Topic exchange: similar to Kafka, broker receive message with wildcard binding key "a.*.b", queues with key "a.a.b" and "a.b.b" receive it.'}),`
`,n(e.li,{children:"Fanout exchange: All queues associated to a fanout exchange receive the message, regardless of its binding key"}),`
`,r(e.li,{children:[`Headers exchange: uses arguments with headers, optional values --> for each queue, binding can specify parameters
e.g. format = txt, type = log, x-match = all. x-match can be `,n(e.code,{children:"any"})," (if any parameters match the binding params, or ",n(e.code,{children:"all"})," (all parameters must match. messages come in, parameters are checked if they match before sending to queue."]}),`
`,n(e.li,{children:"RabbitMQ messages are deleted upon ACK by consumer, unlike Kafka's persistent logs (although RabbitMQ has append only log (streams) with non destructive consume (persistent messages))"}),`
`]}),`
`]}),`
`,r(e.li,{children:["see ",n(e.a,{href:"https://www.simplilearn.com/kafka-vs-rabbitmq-article",children:"link"})]}),`
`]}),`
`,n(e.h4,{children:"Examples"}),`
`,r(e.p,{children:[n(e.strong,{children:"Producer"}),":"]}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`amqp.connect('amqp://localhost', function(error0, connection) {
  if (error0) {
    throw error0;
  }
// if queue already exists, will not create.
connection.createChannel(function(error1, channel) {
  if (error1) {
    throw error1;
  }
var queue = 'hello';
var msg = 'Hello world';
    channel.assertQueue(queue, {
      durable: false
    });
    channel.sendToQueue(queue, Buffer.from(msg)); // queue accepts byte array
});
});
connection.close(); // shut down connection
`})}),`
`,r(e.p,{children:[n(e.strong,{children:"Consumer"}),":"]}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`// If multiple consumers, round robin.
amqp.connect('amqp://localhost', function(error0, connection) {
  if (error0) {
    throw error0;
  }
  // Either producer or consumer can create the channel first, dont matter
  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }
    var queue = 'hello'; // queue name
    var msg = 'Hello world';
    channel.assertQueue(queue, {
      durable: false
    });
    channel.prefetch(3); // Each worker only takes 3 messages max at a time, round robin to next free worker
    // callback on consume
    channel.consume(queue, (msg) => {
        console.log(" [x] Received %s", msg.content.toString());
        channel.ack(msg) // ACK message, e.g. indicate worker task done
      },
      {noAck: false}); // message must be ACK'd or it will be resent when consumer exits, Memory leak since cannot release messages
  });
});
connection.close(); // shut down connection
`})}),`
`,n(e.h3,{children:"Kafka"}),`
`,r(e.ul,{children:[`
`,n(e.li,{children:"Kafka is a event streaming platform (pub/sub) or message bus. does not employ message queue."}),`
`,n(e.li,{children:`Kafka is pull based, how clients consume data is up to the client. (dumb broker smart client)
Clients request message batches with specific offsets (since changes are appended).
messages sent in batches for better throughput.`}),`
`,n(e.li,{children:"natively only supports Java, but has adapter SDKs (NodeJS, Ruby etc.)"}),`
`]}),`
`,n(e.h4,{children:"Use cases"}),`
`,r(e.ul,{children:[`
`,n(e.li,{children:"Kafka is good for data processing without complex routing e.g. real time processing, data analysis"}),`
`,n(e.li,{children:"Kafka is also good for audit systems that need the messages stored permanently"}),`
`,n(e.li,{children:"Kafka has no exchanges (as in RabbitMQ) so complex routing cannot be done, uinlike traditional message queues. Its simplicity allows high scalability and throughput."}),`
`]})]})}function l(i={}){const{wrapper:e}=i.components||{};return e?n(e,Object.assign({},i,{children:n(a,i)})):a(i)}export{l as default};
