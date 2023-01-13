import{j as n,d as i,F as l}from"./index.7bad5630.js";function r(t){const e=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",h3:"h3",ol:"ol",strong:"strong",img:"img",em:"em",code:"code"},t.components);return i(l,{children:[n(e.h1,{children:"CS2103T AY2122 SEM 1"}),`
`,n(e.p,{children:`General notes
Ctrl+Alt+L: Reformat code/style
Intellij not following code style: Ctrl+Alt+S: open code style, ensure project settings correct/same as default/ copy default to project`}),`
`,n(e.h2,{children:"Week 1"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"OOP: programming paradigm, guides programmers to analyze/structure solutions"}),`
`,n(e.li,{children:"OOP views world as network of interacting objects; Attempts to simulate the network"}),`
`,n(e.li,{children:"Every object has an interface and an implementation."}),`
`,n(e.li,{children:"Objects interact by sending messages."}),`
`,n(e.li,{children:"Abstraction: OOP is abstraction -> abstracts away lower details, e.g. method implementation/data formats"}),`
`,n(e.li,{children:"Encapsulation: packaging -- groups data and behaviour in 1 unit; Information hiding: data/implementation hidden"}),`
`]}),`
`,n(e.h2,{children:"Week 2"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Software Dev Life Cycle (SDLC): requirements, analysis, design, implementation and testing."}),`
`]}),`
`,n(e.h3,{children:"Project management"}),`
`,i(e.ol,{children:[`
`,i(e.li,{children:[n(e.strong,{children:"sequential model"}),"/waterfall model: software development as a linear process (req -> design -> implement -> test -> deploy)",`
`,i(e.ul,{children:[`
`,n(e.li,{children:"each stage produces some artifacts usable in the next stage -> requirements used in design, design used to implement etc."}),`
`,n(e.li,{children:"useful when problem well understood"}),`
`,n(e.li,{children:"Problem: devs rarely understand the requirements of a project from the start."}),`
`]}),`
`]}),`
`,i(e.li,{children:[n(e.strong,{children:"iterative models"}),": product goes through multiple versions",`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Each version improves upon old version from the feedback recieved. Product fully working at each iteration."}),`
`,i(e.li,{children:[n(e.strong,{children:"Breadth-First"}),": Evolves all major components in parallel -> add/enchance entire features"]}),`
`,i(e.li,{children:[n(e.strong,{children:"Depth-First"}),": Focuses on fleshing out only some components -> update one part e.g. backend to support future dev."]}),`
`]}),`
`]}),`
`]}),`
`,n(e.p,{children:"Revision Control:"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Manage multiple versions of the same software"}),`
`,n(e.li,{children:"Uses Revision Control Software (RCS) aka Version Control Software (VCS)"}),`
`]}),`
`,n(e.p,{children:"Repositories:"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Database of history tracked by RCS, stores meta-data"}),`
`,n(e.li,{children:"Can have multiple repos"}),`
`]}),`
`,n(e.p,{children:"Remote Repos:"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"TLDR github/bitbucket"}),`
`,n(e.li,{children:"Clone: copy repository onto local disk"}),`
`,n(e.li,{children:"Upstream: Repository(s) your repo is derived from"}),`
`,n(e.li,{children:"pull: recieve commits from another repo e.g. pull from upstream to sync"}),`
`,n(e.li,{children:"push: write commits to another repo"}),`
`,n(e.li,{children:"fork: create remote copy of remote repo"}),`
`,n(e.li,{children:"Pull request(PR): request upstream to merge your commits"}),`
`]}),`
`,n(e.p,{children:`Quality Assurance(QA): Execute test cases, check output
Software Under Test(SUT)
Test case failure: mismatch between expected vs actual behaviour
Regression Testing: Modifications may result in unintended effects (Regression). Re testing every part of the SUT == regression test; usually automated.
Redirecting IO: java Program < input.txt > output.txt`}),`
`,n(e.h2,{children:"Week 3"}),`
`,n(e.p,{children:`RCS Branching: Evolving multiple versions of the software in parallel.
Merge Conflicts: trying to merge 2 branches that made diff changes to the same file`}),`
`,i(e.p,{children:["Packages: for organization. Requires package statement at top. Written as ",n(e.strong,{children:"All lowercase with dot as separator"})]}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Importing a package does not import sub packages"}),`
`,n(e.li,{children:"import static -> imports static members, can use without prefix, i.e. without packagename.STATIC_CONST"}),`
`]}),`
`,n(e.p,{children:`Coding standard: follow consistent style, aim to looks like code written by 1 person
Developer testing: done by devs themselves, usually durng development -> Early stages easier to find bus, debug; less major reworks/ production delays
Unit Testing: testing individual units, i.e. classes, methods. Usually named ClassNameTest`}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:`test case use camelCase + underscore i.e. addCommand_nullInput_fails()
Test driver: code that executes SUT for testing
Stubs: dummy classes to isolate SUT from dependencies. Implements same interface but much simpler/faked behaviour`}),`
`,n(e.li,{children:"e.g. Foo takes in a Bar interface, create BarStub for testing rather than using actual BarConcrete"}),`
`]}),`
`,n(e.h3,{children:"UML"}),`
`,n(e.p,{children:"Models - abstractions, simple representation of an entity. Multiple may be needed to fully represent"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"analyze entity"}),`
`,n(e.li,{children:"communicate information to others"}),`
`,n(e.li,{children:"blueprint for software creation"}),`
`]}),`
`,n(e.p,{children:"UML Diagrams"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Many different types, e.g. Object diagram, class diagram"}),`
`,n(e.li,{children:"Diagrams can change over time"}),`
`,n(e.li,{children:"But main rules, i.e. class structures, do not change"}),`
`]}),`
`,n(e.h3,{children:"Class diagrams [Box]"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"describes structure (not behaviour) of OOP solution"}),`
`]}),`
`,n(e.p,{children:n(e.img,{src:"res/assets/UML_classDiagram.JPG",alt:"Syntax"})}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"attributes/operations compartment may be ommited/ left blank"}),`
`,i(e.li,{children:[n(e.strong,{children:"Visibility"}),":",`
`,i(e.ol,{children:[`
`,n(e.li,{children:"+: public"}),`
`,n(e.li,{children:"-: private"}),`
`,n(e.li,{children:"#: protected"}),`
`,n(e.li,{children:"~: package private"}),`
`]}),`
`]}),`
`,n(e.li,{children:"Generic classes have generic in a box at the top left corner"}),`
`]}),`
`,n(e.p,{children:n(e.img,{src:"./res/assets/UML_genericClassDiag.JPG",alt:"Generic syntax"})}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"underline denotes static"}),`
`,n(e.li,{children:"connections represent associations"}),`
`]}),`
`,n(e.p,{children:n(e.strong,{children:"Arrows always point to parent/root/main"})}),`
`,i(e.ol,{children:[`
`,n(e.li,{children:"Associations \u2014/\u279C (relationship, keeps reference) [solid line]"}),`
`,n(e.li,{children:"Association labels \u25B6: text with solid triangle, describe meanings e.g. tutor  mentors \u25B6 student"}),`
`,i(e.li,{children:["Roles: Indicate roles played e.g. ",n(e.em,{children:"mentor"})," tutor --- student ",n(e.em,{children:"mentee"})]}),`
`,n(e.li,{children:`Multiplicity: number of objects that can be associated:
e.g. 0..1, can have 0 or 1 other obj; 1, MUST have 1 other object; * is for any;`}),`
`,n(e.li,{children:`Navigability \u279C: Unidirectional a refers to b but b no reference to a; Bidirectional opposite.
Use \u279C arrow to denote`}),`
`,i(e.li,{children:[`Shortening associations: instead of each attribute pointing to another box w/ association, you can put
`,n(e.code,{children:"name: type [multiplicity] = default"})]}),`
`]}),`
`,n(e.p,{children:n(e.img,{src:"./res/assets/UML_shortenAssocUML.JPG",alt:"Example"})}),`
`,i(e.ol,{start:"2",children:[`
`,n(e.li,{children:"Composition \u25C6\u2014 (whole-part) [Arrow, solid diamond head]"}),`
`]}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:'Association but object is solely owned by the "parent/whole"'}),`
`,n(e.li,{children:"When whole is destroyed all parts are destroyed"}),`
`,i(e.li,{children:[n(e.strong,{children:"Cascading deletion != composition"}),` -> Even if whole destroyed all parts destroyed, may not be composition.
Parts must be actually a part of the whole.`]}),`
`]}),`
`,i(e.ol,{start:"3",children:[`
`,n(e.li,{children:"Aggregation \u25C7\u2014 (Container-contained) [Arrow, hollow diamond head]"}),`
`]}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:'Composition but "parts" can exist without "whole"'}),`
`]}),`
`,i(e.ol,{start:"4",children:[`
`,n(e.li,{children:"Dependencies --\u279C (relationship, temporary) [Arrow < head, dashed line]"}),`
`]}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"For transient dependencies e.g. takes in dependency type as parameter"}),`
`,i(e.li,{children:[n(e.strong,{children:"Only for non-obvious dep"})," Associations (store reference) is obvious"]}),`
`]}),`
`,i(e.ol,{start:"5",children:[`
`,n(e.li,{children:"Inheritance \u2014\u25B7 (Is-a) [Arrow, hollow triangle head]"}),`
`]}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"point child --> parent"}),`
`]}),`
`,i(e.ol,{start:"6",children:[`
`,n(e.li,{children:"Enums"}),`
`]}),`
`,n(e.p,{children:n(e.img,{src:"./res/assets/UML_Enum.JPG",alt:"Syntax"})}),`
`,i(e.ol,{start:"7",children:[`
`,n(e.li,{children:"Abstract Classes"}),`
`]}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["Denoted by italic ",n(e.em,{children:"class name"})," or adding ",n(e.code,{children:"{abstract}"})," in the UML header"]}),`
`]}),`
`,i(e.ol,{start:"8",children:[`
`,n(e.li,{children:"Interfaces --\u25B7 [Arrow, hollow triangle head, dashed line]"}),`
`]}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["Denoted by ",n(e.code,{children:"&lt;&lt;interface&gt;&gt;"})," in the UML header, like enums"]}),`
`,n(e.li,{children:"Dashed line with hollow triangle head to implement"}),`
`]}),`
`,i(e.ol,{start:"9",children:[`
`,n(e.li,{children:"Notes --- [Note box shape, dashed line]"}),`
`]}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Comments, can have dotted line to component note is referring to."}),`
`]}),`
`,i(e.ol,{start:"10",children:[`
`,n(e.li,{children:"Association class"}),`
`]}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["Represents additional information about an association, e.g. ",n(e.code,{children:"Transaction"})," between ",n(e.code,{children:"Bank"})," and ",n(e.code,{children:"Person"})]}),`
`,n(e.li,{children:"Dashed line from assoc class to solid line between 2 normal classes"}),`
`]}),`
`,n(e.h3,{children:"Object diagrams"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Maps each object instance and its relationship"}),`
`,n(e.li,{children:"name syntax: Name:Class; unnamed = :Class"}),`
`]}),`
`,n(e.h3,{children:"Sequence diagrams"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Maps interactions between objects for a scenario e.g. function call"}),`
`,n(e.li,{children:"Processes execute from top down"}),`
`,i(e.li,{children:[n(e.strong,{children:"Entities"}),": actors e.g. user /components involved, usually at the top. component naming similar to obj diagram"]}),`
`,i(e.li,{children:[n(e.strong,{children:"Activation bar"})," [hollow box]: period where that component is in control/executing",`
`,i(e.ul,{children:[`
`,i(e.li,{children:["arrow must point/originate from start/end ",n(e.em,{children:"exactly"}),"."]}),`
`,n(e.li,{children:"Calling other functions, original bar should not be broken."}),`
`]}),`
`]}),`
`,i(e.li,{children:[n(e.strong,{children:"Operation"}),` [arrow, solid head]: function invocation, solid arrow from caller to instance activation bar.
Note: arrow represents function of dest: a -func->b, func is a method of b.`]}),`
`,n(e.li,{children:"return [arrow, solid head, dotted line]: dotted arrow back to caller w/ value"}),`
`,i(e.li,{children:[n(e.strong,{children:"Lifeline"}),": dotted line below component, represents alive state"]}),`
`]}),`
`,n(e.p,{children:"Notations:"}),`
`,i(e.ol,{children:[`
`,n(e.li,{children:"Loops [loop]:"}),`
`]}),`
`,i(e.p,{children:[n("img",{src:"res/assets/UML_loop.JPG",alt:"UML loops"}),";"]}),`
`,i(e.ol,{children:[`
`,n(e.li,{children:`Object instantiation: arrow point out to new component, new component short activation bar (constructor), then return to creator.
Bar must start at top of entity.`}),`
`]}),`
`,i(e.p,{children:[n("span",{style:{backgroundColor:"#aa0000"},children:"NOTE"}),`
activation bars/return arrows can be omitted if they are not ambiguous/ lose relevant info (info about the task)`]}),`
`,i(e.ol,{start:"3",children:[`
`,n(e.li,{children:"Object deletion[x]: arrow from lifeline of caller, lifeline of deleted object terminate with x at end of arrow"}),`
`,n(e.li,{children:"Self Invocation/ Invoke in activation bar:"}),`
`]}),`
`,n(e.p,{children:"Nest (stack) activation bars within each other: e.g. entity call its own method"}),`
`,i(e.ol,{start:"5",children:[`
`,n(e.li,{children:"Conditionals/ alt frames [alt]: Similar to loop frames, dotted line separate conditional branches"}),`
`,n(e.li,{children:"Optionals [opt]: like alt frames but with opt at top left w/ condition"}),`
`,n(e.li,{children:"Static access: like entity, but no name with << class >> at the top"}),`
`,n(e.li,{children:"Reference/ Sequence diagram [ref/sd]: omit parts to draw in more detail, ref tag with sd name, sd frame w/ name drawn somewhere else"}),`
`,n(e.li,{children:"Parallel/multi threading [par]: par tag"}),`
`]}),`
`,n(e.h2,{children:"Static analysis"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Debug without running code"}),`
`,n(e.li,{children:"finds unused variables, potential bugs, inefficient code"}),`
`,n(e.li,{children:"e.g. linters"}),`
`]}),`
`,n(e.h2,{children:"Code reviews"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"PR review: view on GH"}),`
`,n(e.li,{children:"In pair programming: review on pair working on same code"}),`
`,n(e.li,{children:`Formal inspection: Group of ppl systematically checking w/ diff roles
Code reviews can review coding standards, incomplete code, does not require test drivers, but is manual.`}),`
`]}),`
`,n(e.h2,{children:"Logging"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"deliberate recording of information for reference."}),`
`]}),`
`,n(e.h2,{children:"Use Cases"}),`
`,i(e.p,{children:["Sequence of actions + variants that system performs for a user action; ",n(e.strong,{children:"Interaction b/w system & actors"})]}),`
`,n(e.p,{children:"notes:"}),`
`,i(e.ol,{children:[`
`,n(e.li,{children:"Use case should be only visible ones (no internal details where possible, e.e. saving)"}),`
`,n(e.li,{children:"Give intention, not action (clear input vs click button)"}),`
`,n(e.li,{children:"Loops can be detailed (steps x to y are repeated ...)"}),`
`,i(e.li,{children:[n(e.strong,{children:"Main Success Scenario"}),": most straightforward situation, no problems"]}),`
`,i(e.li,{children:[n(e.strong,{children:"Extensions"}),": add-ons, exceptions/alternative flows to MSS usually numbered after the steps (exception from step 3 -> 3a. exception: ...), or *a for alternative/exception in anywhere of MSS"]}),`
`,i(e.li,{children:["Use case can _",n(e.strong,{children:"include"})," other use case, in underline: Student ",n(e.strong,{children:"creates the survey(UC2)"})]}),`
`,n(e.li,{children:"Preconditions: State system is expected to be in before use case"}),`
`,n(e.li,{children:"Guarantees: Specifies what use case guaranteed to do"}),`
`]}),`
`,n(e.p,{children:"Use Cases are not good for capturing requirements that do not involve user interaction."}),`
`,n(e.h2,{children:"UML Use Case Diagram"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"User roles shown as separate stick figures"}),`
`,n(e.li,{children:"Use cases shown as ovals"}),`
`,n(e.li,{children:"Extensions: dotted arrow pointing to MSS use case, with << extend >> text"}),`
`,n(e.li,{children:"Includes: dotted arrow with << include >> text pointing to included Use Case"}),`
`]}),`
`,n(e.h2,{children:"Design approaches"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Top down: design high level components first, e.g. parser, UI etc. Good for large scale projects"}),`
`,n(e.li,{children:"Bottom up: design low level components first, e.g. abstractCommand, UI components Good for reusing base foundations"}),`
`,n(e.li,{children:"Mix: Top down first, then bottom up lower levels"}),`
`,n(e.li,{children:"Agile Design: no fully defined models at start, only architecture, slowly evolves over time."}),`
`]}),`
`,n(e.h2,{children:"Abstraction"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Data: hide low level data e.g. constants"}),`
`,n(e.li,{children:"Control: hide implementation details, e.g. getVolume vs getArea*getHeight"}),`
`]}),`
`,n(e.h2,{children:"Coupling"}),`
`,n(e.p,{children:"Degree of dependency. High coupling, each component rely on many others."}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Harder to maintain due to ripple effect"}),`
`,n(e.li,{children:"Harder to integrate since dependencies need to integrate"}),`
`,n(e.li,{children:"Harder to test/reuse"}),`
`]}),`
`,i(e.p,{children:[n(e.code,{children:"X"})," coupled to ",n(e.code,{children:"Y"})," if change in ",n(e.code,{children:"X"})," ",n(e.strong,{children:"might"})," need ",n(e.code,{children:"Y"}),` to change.
e.g. `,n(e.code,{children:"X"})," calls ",n(e.code,{children:"Y.f()"}),", then if ",n(e.code,{children:"Y"})," renames f ",n(e.code,{children:"X"})," needs to change."]}),`
`,n(e.p,{children:"others:"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Both depend on same global variable"}),`
`,n(e.li,{children:"A calls B"}),`
`,n(e.li,{children:"A recieves / returns B"}),`
`,n(e.li,{children:"A inherits B"}),`
`]}),`
`,n(e.h2,{children:"Cohesion"}),`
`,n(e.p,{children:"High cohesion, related functionality together, unrelated kept separate"}),`
`,n(e.h2,{children:"Integration"}),`
`,i(e.ol,{children:[`
`,n(e.li,{children:"Integrate once when all components finished (discouraged)"}),`
`,n(e.li,{children:"Integrate frequently, incrementally"}),`
`]}),`
`,n(e.h2,{children:"Project management"}),`
`,i(e.ol,{children:[`
`,n(e.li,{children:"Milestones: indicates significant progress"}),`
`,n(e.li,{children:'Buffers: "breaks" in case of overruns'}),`
`,n(e.li,{children:"Issue tracker: track task assignment/progress"}),`
`,i(e.li,{children:[n(e.strong,{children:"Work Breakdown Stucture"})," (WBS): details tasks, details (sub tasks). Can also include estimated time req etc."]}),`
`,n(e.li,{children:"Gantt chart:"}),`
`]})]})}function a(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(r,t)})):r(t)}export{a as default};
