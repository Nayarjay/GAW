(()=>{"use strict";var e={d:(n,o)=>{for(var t in o)e.o(o,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:o[t]})},o:(e,n)=>Object.prototype.hasOwnProperty.call(e,n)};e.d({},{wT:()=>Y,DB:()=>v});const n=class{constructor(e,n){this.scene=e,this.musicName=n,this.musicSound=null}initMusic(){const e=()=>{this.musicSound=new BABYLON.Sound("","./models/Music/"+this.musicName,this.scene,null,{loop:!0,autoplay:!0})};window.addEventListener("click",(()=>{"suspended"===BABYLON.Engine.audioEngine.audioContext.state?BABYLON.Engine.audioEngine.audioContext.resume().then((()=>{e()})):e()}),{once:!0})}stopMusic(){this.musicSound&&this.musicSound.stop()}};var o=document.getElementById("renderCanvas"),t=new BABYLON.Engine(o,!0),i=new BABYLON.Scene(t);let s=new n(i,"End.mp3");function r(e,n,o){BABYLON.SceneLoader.ImportMesh("","./models/","Loose.glb",i,(t=>{console.log("Chargement réussi coliseum",t);let i=t[0];i.name="playerLoose",i.position=new BABYLON.Vector3(e,n,o)}),void 0,void 0,".glb")}function d(e,n,o){BABYLON.SceneLoader.ImportMesh("","./models/","victory.glb",i,(t=>{console.log("Chargement réussi coliseum",t);let i=t[0];i.name="playerWin",i.position=new BABYLON.Vector3(e,n,o)}),void 0,void 0,".glb")}function c(e,n,o){BABYLON.SceneLoader.ImportMesh("","./models/","Trophy.glb",i,(t=>{console.log("Chargement réussi coliseum",t);let i=t[0];i.name="playerWin",i.position=new BABYLON.Vector3(e,n,o)}),void 0,void 0,".glb")}document.getElementById("renderCanvas"),new n(a,"level1.mp3"),BABYLON.SceneLoader.ShowLoadingScreen=!0;var B=document.getElementById("renderCanvas"),l=new BABYLON.Engine(B,!0),a=new BABYLON.Scene(l);new BABYLON.Engine(m,!0);var m=document.getElementById("renderCanvas"),u=document.getElementById("renderCanvas"),L=new BABYLON.Engine(u,!0);new n(new BABYLON.Scene(L),"level2.mp3"),document.getElementById("renderCanvas");var g=document.getElementById("renderCanvas"),O=new BABYLON.Engine(g,!0);new n(new BABYLON.Scene(O),"level3.mp3");var N=document.getElementById("renderCanvas"),w=new BABYLON.Engine(N,!0);new n(new BABYLON.Scene(w),"Menu.mp3");let Y=0,v=0;new BABYLON.HemisphericLight("light",new BABYLON.Vector3(0,1,0),i),new BABYLON.FreeCamera("camera",new BABYLON.Vector3(0,4,-12.5),i),Y>v?(d(-4,0,-1),r(2,0,0),c(-3.5,0,-1.5)):(d(2,0,-1),r(-4,0,0),c(2.5,0,-1.5)),document.getElementById("End").style.display="block",BABYLON.SceneLoader.ImportMesh("","./models/","recommencer.glb",i,(e=>{console.log("Chargement réussi end scene",e);let n=e[0];n.name="EndScene",n.position=new BABYLON.Vector3(void 0,void 0,void 0)}),void 0,void 0,".glb"),s.initMusic(),function(){const e=BABYLON.MeshBuilder.CreateBox("skyBox",{size:1e3},i),n=new BABYLON.StandardMaterial("skyBox",i);n.backFaceCulling=!1,n.disableLighting=!0,e.material=n,e.infiniteDistance=!0,n.reflectionTexture=new BABYLON.CubeTexture("./models/skybox/skybox1/skybox",i),n.reflectionTexture.coordinatesMode=BABYLON.Texture.SKYBOX_MODE}(),t.runRenderLoop((function(){i.render()}))})();
//# sourceMappingURL=babylonBundle.js.map