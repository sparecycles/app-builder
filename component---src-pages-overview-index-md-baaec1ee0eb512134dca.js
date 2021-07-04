(self.webpackChunkproject_firefly=self.webpackChunkproject_firefly||[]).push([[7392],{2589:function(e,t,o){"use strict";o.r(t),o.d(t,{_frontmatter:function(){return l},default:function(){return p}});var n=o(2122),i=o(9756),a=(o(5007),o(4983)),s=o(9536),r=["components"],l={},d={_frontmatter:l},u=s.Z;function p(e){var t=e.components,o=(0,i.Z)(e,r);return(0,a.mdx)(u,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"project-firefly-docs"},"Project Firefly Docs"),(0,a.mdx)("p",null,"This documentation provides an overview of Project Firefly as well as guides, reference documentation, and tools to help you begin developing your own custom applications."),(0,a.mdx)("h2",{id:"what-is-project-firefly"},"What is Project Firefly"),(0,a.mdx)("p",null,"Project Firefly is a complete framework that enables enterprise developers to build and deploy custom web applications that extend Adobe Experience Cloud solutions and run on Adobe infrastructure. It leverages modern technologies (JAM stack, serverless computing, Node, and React) and ensures best practices when building applications (event-driven architecture, microservices, continuous integration, and delivery)."),(0,a.mdx)("p",null,"From a developer perspective, the main components are:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Single Page Application (SPA) - you build a SPA that uses React Spectrum for the client side, which is the same UI toolkit used by Adobe solutions."),(0,a.mdx)("li",{parentName:"ul"},"For the backend, you create microservices and orchestrate APIs by leveraging I/O Runtime (Adobe’s serverless platform)."),(0,a.mdx)("li",{parentName:"ul"},"The main developer tools are the CLI, SDKs, Adobe Services and Developer Console. Support for Adobe authentication, end-user access control, publishing/consuming custom events, storing data and files, CI/CD pipelines, CDN, and developer sandboxes are provided out-of-the-box."),(0,a.mdx)("li",{parentName:"ul"},"The execution environment is ",(0,a.mdx)("a",{parentName:"li",href:"https://experience.adobe.com"},"Adobe Experience Cloud"),". Your custom apps will be living side-by-side with the Adobe Experience Cloud solutions and will be executed in the context of the organization and its authenticated employees.")),(0,a.mdx)("h2",{id:"how-it-works"},"How it Works"),(0,a.mdx)("p",null,"At a high level, there are three main stages a custom app would go through: build, test and publish."),(0,a.mdx)("h3",{id:"build"},"Build"),(0,a.mdx)("p",null,"You start in the ",(0,a.mdx)("a",{parentName:"p",href:"https://console.adobe.io"},"Developer Console")," by creating a new project, adding credentials for the Adobe APIs you want to use in your app (e.g. Adobe Campaign) and defining the sandboxes you need (prod, stage, sandboxes for developers). With the project in place, you are ready to set your local development environment."),(0,a.mdx)("p",null,"This will allow the CLI to use the project and deploy the code to the right environments. The CLI can also help with scaffolding the application. Based on what you are trying to create, you can pick one of the available templates to get code generated. This generates code for the client side and microservices for the backend. "),(0,a.mdx)("h3",{id:"deploy-and-testing"},"Deploy and Testing"),(0,a.mdx)("p",null,"Now that you have something to run, you can use the CLI to deploy the app into your sandbox or a GitHub based CI/CD pipeline if you want to have tighter control over the production environment. This will push the microservices to I/O Runtime and static files (HTML, JS, CSS, images) to the CDN. "),(0,a.mdx)("p",null,"With this step completed, you can now run the application in the context of Experience Cloud and you can simulate different end-users using the app. At this point, the application is not yet published, meaning end-users will not be able to see it and only the developers can interact with it."),(0,a.mdx)("h3",{id:"publish"},"Publish"),(0,a.mdx)("p",null,"When you are ready to share the application with your end-users, you initiate the publish process from the Developer Console. Once the application is approved by an Admin, business users will be able to find it in Experience Cloud and use it if they have the right permissions."),(0,a.mdx)("h2",{id:"why-would-you-use-project-firefly"},"Why Would You Use Project Firefly?"),(0,a.mdx)("p",null,"The main reasons you would use this framework are:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Time to value – if you want to extend Adobe solutions, this is the fastest way to do it."),(0,a.mdx)("li",{parentName:"ul"},"User context – your users don’t need to switch contexts or authenticate with a different user/password; they move seamlessly between Adobe solutions and custom apps, which also have the same look and feel as the Adobe solutions."),(0,a.mdx)("li",{parentName:"ul"},"Security – API authorization and user access control is offered out-of-the-box. Furthermore, user access control is managed the same way as it is for Adobe solutions (in Adobe Admin Console, with the same user permissions and groups)."),(0,a.mdx)("li",{parentName:"ul"},"No infrastructure to manage – you can create one app or hundreds of apps, you can have one user or thousands of users, in all cases you don’t need to think about infrastructure. We scale up behind the scenes and route traffic to the closest region without you having to do anything."),(0,a.mdx)("li",{parentName:"ul"},"Adobe-native – this framework is integrated with Adobe solutions and services, meaning that there is less code that you need to write, deploy, or test and more functionality is available out-of-the-box. It also means that you are future-proofing your code, as you are able to incorporate new Adobe capabilities with the least amount of friction.")),(0,a.mdx)("h2",{id:"who-is-this-framework-for"},"Who is This Framework For?"),(0,a.mdx)("p",null,"This framework is available to Adobe enterprise customers and Adobe partners (working with Adobe enterprise customers) who are looking to extend Adobe Experience Cloud solutions. The end-user for the custom app are the employees working for the enterprise and the apps are installed by the enterprise for the enterprise."),(0,a.mdx)("p",null,"If you are familiar with modern web technologies and comfortable with JavaScript, you can get started today."),(0,a.mdx)("h2",{id:"example-use-cases"},"Example Use Cases"),(0,a.mdx)("p",null,"Here are some of the types of apps that can be built on top of this framework:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Custom dashboards or other decision making support tools that use data from Adobe solutions and/or data from other systems to empower business people and executives to make decisions."),(0,a.mdx)("li",{parentName:"ul"},"Custom experiences that enable your users to use Adobe solutions the way they want instead of forcing them to use only the out-of-the-box user experience."),(0,a.mdx)("li",{parentName:"ul"},"Custom integrations between Adobe universe and home-grown solutions or other 3rd-party systems. This can include apps with no UI or apps that have a UI."),(0,a.mdx)("li",{parentName:"ul"},"Extending Adobe built-in functionality, such as Adobe Experience Manager (AEM) Assets.")),(0,a.mdx)("h2",{id:"examples-from-real-world"},"Examples from real-world"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://www.netcentric.biz/insights/2020/06/building-an-aep-demo-with-firefly.html?utm_source=linkedin&utm_medium=social_nonpaid&utm_campaign=20_insights&utm_content=link_post&es_id=8e9abf83f6"},"Building a Real-Time Airline Application Using Adobe Experience Platform, Adobe I/O Runtime and Project Firefly")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://tech.cognifide.com/blog/2020/how-to-generate-intelligent-renditions-aem-cloud/"},"How to generate intelligent renditions with AEM as a Cloud Service")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://medium.com/adobetech/setting-up-adobe-i-o-cli-for-cloud-manager-8820f47e3c94"},"Setting Up Adobe I/O CLI for Cloud Manager"))),(0,a.mdx)("h2",{id:"where-to-go-next"},"Where to Go Next"),(0,a.mdx)("p",null,"To learn more about Project Firefly, please start by reading the following:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"../guides/index.md"},"Architecture Overview")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"./getting_access.md"},"How to Get Access to Project Firefly"))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-overview-index-md-baaec1ee0eb512134dca.js.map