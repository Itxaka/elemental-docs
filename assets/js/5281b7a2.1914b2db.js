"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[927],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=m(n),d=l,u=p["".concat(s,".").concat(d)]||p[d]||h[d]||r;return n?a.createElement(u,i(i({ref:t},c),{},{components:n})):a.createElement(u,i({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var m=2;m<r;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1527:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var a=n(7462),l=(n(7294),n(3905));const r={sidebar_label:"Architecture",title:""},i="Architecture",o={unversionedId:"architecture",id:"architecture",title:"",description:"The Elemental stack can be divided in two main parts: the Elemental OS, an immutable and customizable OS which comprises the tools and the steps needed to prepare the Cloud Native OS image and perform the actual OS installation on the host, and the , that allows central management of the Elemental OS via Rancher, the Kubernetes way.",source:"@site/docs/architecture.md",sourceDirName:".",slug:"/architecture",permalink:"/architecture",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Architecture",title:""},sidebar:"elemental",previous:{title:"Quickstart",permalink:"/quickstart"},next:{title:"Installation",permalink:"/installation"}},s={},m=[{value:"Elemental OS",id:"elemental-os",level:2},{value:"Elemental OS image",id:"elemental-os-image",level:3},{value:"Elemental installation configuration",id:"elemental-installation-configuration",level:3},{value:"Elemental CLI",id:"elemental-cli",level:3},{value:'<Vars name="elemental_iso_name" />',id:"vars-nameelemental_iso_name-",level:3},{value:"Elemental Operator",id:"elemental-operator",level:2},{value:"Elemental Operator Helm Chart",id:"elemental-operator-helm-chart",level:3},{value:"MachineRegistration",id:"machineregistration",level:4},{value:"MachineInventory",id:"machineinventory",level:4},{value:"MachineInventorySelector",id:"machineinventoryselector",level:4},{value:"MachineInventorySelectorTemplate",id:"machineinventoryselectortemplate",level:4},{value:"Elemental Register client",id:"elemental-register-client",level:3},{value:"Elemental Teal",id:"elemental-teal",level:2}],c=(h="Vars",function(e){return console.warn("Component "+h+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)});var h;const p={toc:m};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"architecture"},"Architecture"),(0,l.kt)("p",null,"The Elemental stack can be divided in two main parts: the Elemental OS, an immutable and customizable OS which comprises the tools and the steps needed to prepare the Cloud Native OS image and perform the actual OS installation on the host, and the ",(0,l.kt)(c,{name:"elemental_operator_name",mdxType:"Vars"}),", that allows central management of the Elemental OS via Rancher, the Kubernetes way."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"elemental-os"},"Elemental OS"),(0,l.kt)("p",null,"In order to deploy the Elemental OS we need:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"an Elemental base OS image"),(0,l.kt)("li",{parentName:"ul"},"an Elemental installation configuration"),(0,l.kt)("li",{parentName:"ul"},"the ",(0,l.kt)(c,{name:"elemental_cli_name",mdxType:"Vars"})," tool, which installs the Elemental OS image on the target host applying the Elemental installation configuration")),(0,l.kt)("h3",{id:"elemental-os-image"},"Elemental OS image"),(0,l.kt)("p",null,"The Elemental OS image is an OCI container image containing all the files that will make up the OS of the target host. It will contain not only all the desired binaries and libraries, but also the kernel and the boot files required by a linux system.\nThe ",(0,l.kt)(c,{name:"elemental_toolkit_name",link:"elemental_toolkit_url",mdxType:"Vars"})," is at the core of the Elemental OS, enabling to boot and upgrade an OS from container images. It also provides a framework that allows to combine different packages to bake custom OS container images. For more information check the ",(0,l.kt)(c,{name:"elemental_toolkit_name",link:"elemental_toolkit_url",mdxType:"Vars"})," project page."),(0,l.kt)("h3",{id:"elemental-installation-configuration"},"Elemental installation configuration"),(0,l.kt)("p",null,"In order to provision a machine with an Elemental OS image, installation configuration parameters are required: things such as the boot device, the root password, system configuration, users and custom files are things that should be provided aside from the Elemental OS image. All the data can be provided in a single .yaml file. More details can be found in the ",(0,l.kt)(c,{name:"elemental_toolkit_name",link:"elemental_toolkit_url",mdxType:"Vars"})," documentation."),(0,l.kt)("h3",{id:"elemental-cli"},"Elemental CLI"),(0,l.kt)(c,{name:"elemental_cli_name",mdxType:"Vars"})," is the tool that allows to turn the Elemental OS image in a bootable and installed OS: it can generate an ",(0,l.kt)(c,{name:"elemental_iso_name",mdxType:"Vars"})," image from the provided Elemental OS container image. The generated ",(0,l.kt)(c,{name:"elemental_iso_name",mdxType:"Vars"})," image can be used to boot a virtual machine or a bare metal host and start the Elemental OS installation.",(0,l.kt)("p",null,"The ",(0,l.kt)(c,{name:"elemental_cli_name",mdxType:"Vars"})," allows also to install the Elemental OS on the storage device of the live booted host, applying the provided Elemental installation configuration. For the list and syntax of the commands available in the ",(0,l.kt)(c,{name:"elemental_cli_name",mdxType:"Vars"}),", check the ",(0,l.kt)(c,{link:"elemental_cli_url",mdxType:"Vars"},"online documentation"),"."),(0,l.kt)("h3",{id:"vars-nameelemental_iso_name-"},(0,l.kt)(c,{name:"elemental_iso_name",mdxType:"Vars"})),(0,l.kt)("p",null,"The ",(0,l.kt)(c,{name:"elemental_iso_name",mdxType:"Vars"})," is a live ISO based on the Elemental OS (an Elemental live ISO).\nIt includes all the tools needed to perform a full node provisioning, from the OS to Kubernetes, including the ",(0,l.kt)("a",{parentName:"p",href:"#elemental-cli"},(0,l.kt)(c,{name:"elemental_cli_name",mdxType:"Vars"}))," and the ",(0,l.kt)("a",{parentName:"p",href:"#elemental-register"},(0,l.kt)(c,{name:"elemental_register_name",mdxType:"Vars"})),"."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"elemental-operator"},"Elemental Operator"),(0,l.kt)("p",null,"The ",(0,l.kt)(c,{name:"elemental_operator_name",mdxType:"Vars"})," is responsible for managing OS upgrades and a secure device inventory to assist\nwith zero touch provisioning.\nIt provides an ",(0,l.kt)(c,{name:"elemental_operator_name",mdxType:"Vars"})," Helm Chart and an ",(0,l.kt)(c,{name:"elemental_register_name",mdxType:"Vars"}),"."),(0,l.kt)("h3",{id:"elemental-operator-helm-chart"},"Elemental Operator Helm Chart"),(0,l.kt)("p",null,"The ",(0,l.kt)(c,{name:"elemental_operator_name",mdxType:"Vars"})," Helm Chart must be installed on a Rancher Cluster. It enables new hosts to:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"register against the ",(0,l.kt)(c,{name:"elemental_operator_name",mdxType:"Vars"}),"."),(0,l.kt)("li",{parentName:"ul"},"retrieve the Elemental installation configuration (which is stored in custom Kubernetes resources) to start the Elemental OS installation."),(0,l.kt)("li",{parentName:"ul"},"download and install the ",(0,l.kt)(c,{name:"ranchersystemagent_name",link:"ranchersystemagent_url",mdxType:"Vars"}),", which enables Rancher to provision and manage K3s and RKE2 on the Elemental nodes.")),(0,l.kt)("p",null,"The ",(0,l.kt)(c,{name:"elemental_operator_name",mdxType:"Vars"})," allows control of the Elemental Nodes by extending the Kubernetes APIs with a set of ",(0,l.kt)("em",{parentName:"p"},"elemental.cattle.io")," ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/"},"Kubernetes CRDs"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"MachineRegistration"),(0,l.kt)("li",{parentName:"ul"},"MachineInventory"),(0,l.kt)("li",{parentName:"ul"},"MachineInventorySelector"),(0,l.kt)("li",{parentName:"ul"},"MachineInventorySelectorTemplate"),(0,l.kt)("li",{parentName:"ul"},"ManagedOSImage"),(0,l.kt)("li",{parentName:"ul"},"ManagedOSVersion"),(0,l.kt)("li",{parentName:"ul"},"ManagedOSVersionChannel")),(0,l.kt)("h4",{id:"machineregistration"},"MachineRegistration"),(0,l.kt)("p",null,"The MachineRegistration includes the Elemental installation configuration (provided by the user) and a registration token (generated by the ",(0,l.kt)(c,{name:"elemental_operator_name",mdxType:"Vars"}),"), from which a registration URL is derived."),(0,l.kt)("p",null,"The registration URL is the way through which an host can access the ",(0,l.kt)(c,{name:"elemental_operator_name",mdxType:"Vars"})," services, to kick off the Elemental provisioning process."),(0,l.kt)("p",null,"The MachineRegistration has a ",(0,l.kt)("inlineCode",{parentName:"p"},"Ready")," condition which turns to true when the ",(0,l.kt)(c,{name:"elemental_operator_name",mdxType:"Vars"})," has successfully generated the registration URL and an associated ServiceAccount. From this point on the target host can connect to the registration URL to kick off the provisioning process."),(0,l.kt)("p",null,"An HTTP GET request against the registration URL returns the ",(0,l.kt)("em",{parentName:"p"},"registration file"),": a .yaml file containing the registration data (i.e., the ",(0,l.kt)("em",{parentName:"p"},"spec:config:elemental:registration")," section only from the just created MachineRegistration).\nThe registration file contains all the required data to allow the target host to perform self registration and start the Elemental provisioning. See the ",(0,l.kt)("a",{parentName:"p",href:"#elemental-register-client"},(0,l.kt)(c,{name:"elemental_register_name",mdxType:"Vars"})," section")," for more info on the registration process and the ",(0,l.kt)("a",{parentName:"p",href:"/machineregistration-reference#configelementalregistration"},"config:elemental:registration section in the MachineRegistration reference")," for more details on the available registration options."),(0,l.kt)("h4",{id:"machineinventory"},"MachineInventory"),(0,l.kt)("p",null,"When a new host registers successfully, the ",(0,l.kt)(c,{name:"elemental_operator_name",mdxType:"Vars"})," creates a MachineInventory resource representing that particular host.\nThe MachineInventory stores the TPM hash of the tracked host, retrieved during the registration process, and allows to execute arbitrary commands (plans) on the machine."),(0,l.kt)("p",null,"A MachineInventory has three conditions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Initialized"),", tracking if the resources needed for applying the plan have been correctly created."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PlanReady"),", showing if the host has completed its current plan."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Ready"),", which indicates that a machine has been initialized and has no running plans.")),(0,l.kt)("h4",{id:"machineinventoryselector"},"MachineInventorySelector"),(0,l.kt)("p",null,"A MachineInventorySelector selects MachineInventories based on applied selectors (usually patter matching on MachineInventory label values)."),(0,l.kt)("p",null,"MachineInventorySelectors have three conditions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"InventoryReady"),", turn to true if the MachineInventorySelector has found a matching MachineInventory and has successful set itself as the MachineInventorySelector owner."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"BootstrapReady"),", reports if the selector has successfully applied its bootstrap plan."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Ready"),", tracks if the inventory has been correctly selected and bootstrapped.")),(0,l.kt)("h4",{id:"machineinventoryselectortemplate"},"MachineInventorySelectorTemplate"),(0,l.kt)("p",null,"The MachineInventorySelectorTemplate is a user defined resource that will be used as the blueprint to create the required MachineInventorySelectors: it includes the selector to identify the eligible MachineInventories."),(0,l.kt)("h3",{id:"elemental-register-client"},"Elemental Register client"),(0,l.kt)("p",null,"New hosts start the Elemental provisioning process through the ",(0,l.kt)(c,{name:"elemental_register_name",mdxType:"Vars"}),": this tool requires a valid elemental-operator registration URL as input (see the ",(0,l.kt)("a",{parentName:"p",href:"#machineregistration"},"MachineRegistration section"),"), and performs the following steps:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"setups a websocket connection to the registration URL"),(0,l.kt)("li",{parentName:"ul"},"authenticates itself using the registration token and the onboard ",(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Trusted_Platform_Module"},"TPM (Trusted Platform Module)")),(0,l.kt)("li",{parentName:"ul"},"sends ",(0,l.kt)("a",{parentName:"li",href:"/smbios"},"SMBIOS data")," to the ",(0,l.kt)(c,{name:"elemental_operator_name",mdxType:"Vars"})),(0,l.kt)("li",{parentName:"ul"},"retrieves the Elemental installation configuration"),(0,l.kt)("li",{parentName:"ul"},"starts the ",(0,l.kt)("a",{parentName:"li",href:"#elemental-cli"},(0,l.kt)(c,{name:"elemental_cli_name",mdxType:"Vars"}))," and performs the Elemental OS installation")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note"),"\nif no TPM 2.0 is available on the host, TPM can be emulated by software: see the ",(0,l.kt)("inlineCode",{parentName:"p"},"emulate-tpm")," key in the ",(0,l.kt)("a",{parentName:"p",href:"/machineregistration-reference#configelementalregistration"},"config.elemental.register reference document"),"."),(0,l.kt)(c,{name:"elemental_operator_name",mdxType:"Vars"})," includes a Kubernetes operator installed in the management cluster and a client side installed in nodes, so they can self register into the management cluster. Once a node is registered the ",(0,l.kt)(c,{name:"elemental_operator_name",mdxType:"Vars"})," will kick-start the OS installation and schedule the Kubernetes provisioning using the ",(0,l.kt)(c,{name:"ranchersystemagent_name",link:"ranchersystemagent_url",mdxType:"Vars"}),". Rancher System Agent is responsible for bootstrapping RKE2/k3s and Rancher from an OCI registry. This means an update of containerd, k3s, RKE2, or Rancher does not require an OS upgrade or node reboot.",(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"elemental-teal"},"Elemental Teal"),(0,l.kt)("p",null,"Elemental Teal is Elemental OS built on top of SUSE Linux Enterprise (SLE) Micro for Rancher using the Elemental stack."))}d.isMDXComponent=!0}}]);