(()=>{"use strict";var e={d:(n,o)=>{for(var t in o)e.o(o,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:o[t]})},o:(e,n)=>Object.prototype.hasOwnProperty.call(e,n)};e.d({},{VN:()=>Z,mh:()=>J,fF:()=>$,mw:()=>ee,w_:()=>ne,DM:()=>oe,wT:()=>X,DB:()=>q});const n=class{constructor(e,n){this.scene=e,this.musicName=n,this.musicSound=null}initMusic(){const e=()=>{this.musicSound=new BABYLON.Sound("","./models/Music/"+this.musicName,this.scene,null,{loop:!0,autoplay:!0})};window.addEventListener("click",(()=>{"suspended"===BABYLON.Engine.audioEngine.audioContext.state?BABYLON.Engine.audioEngine.audioContext.resume().then((()=>{e()})):e()}),{once:!0})}stopMusic(){this.musicSound&&this.musicSound.stop()}};var o=document.getElementById("renderCanvas"),t=new BABYLON.Engine(o,!0),s=new BABYLON.Scene(t);let i=new n(s,"End.mp3");var r=function(){return new BABYLON.HemisphericLight("light",new BABYLON.Vector3(0,1,0),s),new BABYLON.FreeCamera("camera",new BABYLON.Vector3(0,4,-12.5),s),X>q?(c(-4,0,-1),a(2,0,0),l(-3.5,0,-1.5)):(c(2,0,-1),a(-4,0,0),l(2.5,0,-1.5)),document.getElementById("End").style.display="block",BABYLON.SceneLoader.ImportMesh("","./models/","recommencer.glb",s,(e=>{console.log("Chargement réussi end scene",e);let n=e[0];n.name="EndScene",n.position=new BABYLON.Vector3(undefined,undefined,undefined)}),void 0,void 0,".glb"),i.initMusic(),function(){const e=BABYLON.MeshBuilder.CreateBox("skyBox",{size:1e3},s),n=new BABYLON.StandardMaterial("skyBox",s);n.backFaceCulling=!1,n.disableLighting=!0,e.material=n,e.infiniteDistance=!0,n.reflectionTexture=new BABYLON.CubeTexture("./models/skybox/skybox1/skybox",s),n.reflectionTexture.coordinatesMode=BABYLON.Texture.SKYBOX_MODE}(),s};function a(e,n,o){BABYLON.SceneLoader.ImportMesh("","./models/","Loose.glb",s,(t=>{console.log("Chargement réussi coliseum",t);let s=t[0];s.name="playerLoose",s.position=new BABYLON.Vector3(e,n,o)}),void 0,void 0,".glb")}function c(e,n,o){BABYLON.SceneLoader.ImportMesh("","./models/","victory.glb",s,(t=>{console.log("Chargement réussi coliseum",t);let s=t[0];s.name="playerWin",s.position=new BABYLON.Vector3(e,n,o)}),void 0,void 0,".glb")}function l(e,n,o){BABYLON.SceneLoader.ImportMesh("","./models/","Trophy.glb",s,(t=>{console.log("Chargement réussi coliseum",t);let s=t[0];s.name="playerWin",s.position=new BABYLON.Vector3(e,n,o)}),void 0,void 0,".glb")}class B{constructor(e){this.scene=e}async CreateTree(e,n,o){let t,s;return BABYLON.SceneLoader.ImportMesh("","./models/","Tree.glb",this.scene,(i=>{console.log("Chargement réussi arbre",i),t=i[0],s=i[1],s.name="tronc",t.position=new BABYLON.Vector3(e,n,o),new BABYLON.PhysicsAggregate(s,BABYLON.PhysicsShapeType.BOX,{mass:0},this.scene).shape.isTrigger=!0,new BABYLON.PhysicsAggregate(s,BABYLON.PhysicsShapeType.BOX,{mass:0},this.scene)}),void 0,void 0,".glb"),{boundingBox:void 0}}async CreatePineTree(e,n,o){let t,s;return BABYLON.SceneLoader.ImportMesh("","./models/","Pine Tree with Snow.glb",this.scene,(i=>{console.log("Chargement réussi arbre",i),i[0].scaling.x=3,i[0].scaling.y=2,i[0].scaling.z=4,t=i[0],s=i[1],s.name="tronc",console.log(s.name),t.position=new BABYLON.Vector3(e,n,o);const r=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,1,3),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(3,3,5),this.scene),a=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,1,3),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(3,3,5),this.scene);new BABYLON.PhysicsAggregate(s,r,{mass:0},this.scene).shape.isTrigger=!0,new BABYLON.PhysicsAggregate(s,a,{mass:0},this.scene)}),void 0,void 0,".glb")}CreateSnowManOnSki(e,n,o,t){let s;return BABYLON.SceneLoader.ImportMesh("","./models/","snowman_on_skis.glb",this.scene,(i=>{console.log("Chargement réussi SnowMan",i),s=i[0],s.name="SnowMan",s.position=new BABYLON.Vector3(e,n,o),s.setParent(t)}),void 0,void 0,".glb"),{mesh:s}}async CreateSceneProd(e,n,o){}async CreatePlayer(e,n,o){}async Zone(e,n,o){}async plane(e,n,o,t,s,i){var r=BABYLON.MeshBuilder.CreateGround("ground",{width:t,height:s,subdivisions:1},i);r.position.addInPlace(new BABYLON.Vector3(e,n,o)),r.rotation=new BABYLON.Vector3(-.1,0,0),new BABYLON.PhysicsAggregate(r,BABYLON.PhysicsShapeType.BOX,{mass:0},i);var a=new BABYLON.StandardMaterial("groundMaterial",i);return a.diffuseColor=new BABYLON.Color3(.92,.29,.28),r.material=a,r}async flatplane(e,n,o,t,s,i){var r=BABYLON.MeshBuilder.CreateGround("ground",{width:t,height:s,subdivisions:1},i);r.position.addInPlace(new BABYLON.Vector3(e,n,o)),r.rotation=new BABYLON.Vector3(0,0,0),new BABYLON.PhysicsAggregate(r,BABYLON.PhysicsShapeType.BOX,{mass:0},i);var a=new BABYLON.StandardMaterial("groundMaterial",i);return a.diffuseColor=new BABYLON.Color3(.92,.29,.28),r.material=a,r}async createDeadTree(e,n,o){let t;return BABYLON.SceneLoader.ImportMesh("","./models/","Dead Trees With Snow.glb",this.scene,(s=>{console.log("Chargement réussi arbre",s),s[0].scaling.x=30,s[0].scaling.y=20,s[0].scaling.z=20;let i=s[0];t=s[1],t.name="tronc",console.log(t.name);const r=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,1,3),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(30,30,30),this.scene);i.position=new BABYLON.Vector3(e,n,o),new BABYLON.PhysicsAggregate(t,r,{mass:0},this.scene).shape.isTrigger=!0,new BABYLON.PhysicsAggregate(t,BABYLON.PhysicsShapeType.BOX,{mass:0},this.scene)}),void 0,void 0,".glb"),{boundingBox:void 0}}async createSnowTree(e,n,o){let t;return BABYLON.SceneLoader.ImportMesh("","./models/","Snow Tree.glb",this.scene,(s=>{console.log("Chargement réussi arbre",s),s[0].scaling.x=10,s[0].scaling.y=10,s[0].scaling.z=10;let i=s[0];t=s[1],t.name="tronc",console.log(t.name);const r=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,0,-1),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(5,10,5),this.scene),a=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,0,-1),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(5,10,5),this.scene);i.position=new BABYLON.Vector3(e,n,o),new BABYLON.PhysicsAggregate(t,r,{mass:0},this.scene).shape.isTrigger=!0,new BABYLON.PhysicsAggregate(t,a,{mass:0},this.scene)}),void 0,void 0,".glb"),{boundingBox:void 0}}async createLitleSnowTree(e,n,o){let t;return BABYLON.SceneLoader.ImportMesh("","./models/","Pine Tree with Snow two.glb",this.scene,(s=>{console.log("Chargement réussi arbre",s),s[0].scaling.x=10,s[0].scaling.y=10,s[0].scaling.z=10;let i=s[0];t=s[1],t.name="tronc",console.log(t.name);const r=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,0,-1),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(5,10,5),this.scene),a=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,0,-1),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(5,10,5),this.scene);i.position=new BABYLON.Vector3(e,n,o),new BABYLON.PhysicsAggregate(t,r,{mass:0},this.scene).shape.isTrigger=!0,new BABYLON.PhysicsAggregate(t,a,{mass:0},this.scene)}),void 0,void 0,".glb"),{boundingBox:void 0}}async createSnowMan(e,n,o){let t;return BABYLON.SceneLoader.ImportMesh("","./models/","SnowManRotated.glb",this.scene,(s=>{console.log("Chargement réussi arbre",s),s[0].scaling.x=1,s[0].scaling.y=1,s[0].scaling.z=1;let i=s[0];t=s[1],t.name="tronc",console.log("SNOWMAN "+i.name);const r=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,4,0),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(5,10,5),this.scene),a=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,4,-1),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(5,10,5),this.scene);i.position=new BABYLON.Vector3(e,n,o),new BABYLON.PhysicsAggregate(t,r,{mass:0},this.scene).shape.isTrigger=!0,new BABYLON.PhysicsAggregate(t,a,{mass:0},this.scene)}),void 0,void 0,".glb"),{boundingBox:void 0}}CreateRampe1(e,n,o){let t=BABYLON.SceneLoader.ImportMesh("","./models/","rampe_2.glb",this.scene,(t=>{console.log("Chargement réussi",t),t[0].scaling.x=5,t[0].scaling.y=5,t[0].scaling.z=5;let s=t[0];console.log(t[1].name),s.name="Rampe";let i=t[1];s.position=new BABYLON.Vector3(e,n,o),new BABYLON.PhysicsAggregate(i,BABYLON.PhysicsShapeType.MESH,{mass:0},this.scene)}),void 0,void 0,".glb");return t.position=new BABYLON.Vector3(e,n,o),{bigMesh:t}}createSnowMount(e,n,o){let t=BABYLON.SceneLoader.ImportMesh("","./models/","Rock Forms 3 (White).glb",this.scene,(t=>{console.log("Chargement réussi",t),t[0].scaling.x=150,t[0].scaling.y=150,t[0].scaling.z=150;const s=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,4,0),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(10,10,20),this.scene);let i=t[0];i.name="tronc",console.log(t[1].name);let r=t[1];r.name="tronc",i.position=new BABYLON.Vector3(e,n,o),new BABYLON.PhysicsAggregate(i,s,{mass:0},this.scene).shape.isTrigger=!0,new BABYLON.PhysicsAggregate(r,BABYLON.PhysicsShapeType.MESH,{mass:0},this.scene)}),void 0,void 0,".glb");return t.position=new BABYLON.Vector3(e,n,o),{bigMesh:t}}createFinalScene2(e,n,o){let t=BABYLON.SceneLoader.ImportMesh("","./models/","finalscene2.glb",this.scene,(t=>{console.log("Chargement réussi",t),new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,0,0),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(10,10,20),this.scene);let s=t[0];s.name="tronc",console.log(t[2].name),this.scene.getMeshByName("Cube (sol)"),s.position=new BABYLON.Vector3(e,n,o);let i=1;for(;i<t.length;)new BABYLON.PhysicsAggregate(t[i],BABYLON.PhysicsShapeType.MESH,{mass:0},this.scene),i++}),void 0,void 0,".glb");return t.position=new BABYLON.Vector3(e,n,o),{bigMesh:t}}CreatePlateform(e,n,o){return BABYLON.SceneLoader.ImportMesh("","./models/","plateforme_scene3.glb",this.scene,(t=>{console.log("Chargement réussi plateform",t);let s=t[0];s.name="colision",s.position=new BABYLON.Vector3(e,n,o);let i=1;for(;i<t.length;)new BABYLON.PhysicsAggregate(t[i],BABYLON.PhysicsShapeType.MESH,{mass:0},this.scene),i++}),void 0,void 0,".glb"),{boundingBox:void 0}}CreatePlateformlevel2(e,n,o){return BABYLON.SceneLoader.ImportMesh("","./models/","scene3.glb",this.scene,(t=>{console.log("Chargement réussi plateform level2",t);let s=t[0];s.name="colision",s.position=new BABYLON.Vector3(e,n,o);let i=1;for(;i<t.length;)new BABYLON.PhysicsAggregate(t[i],BABYLON.PhysicsShapeType.MESH,{mass:0},this.scene),i++}),void 0,void 0,".glb"),{boundingBox:void 0}}CreatePlateform_Scene4(e,n,o){return BABYLON.SceneLoader.ImportMesh("","./models/","scene4_gameplay_ELEMENT.glb",this.scene,(t=>{console.log("Chargement réussi plateform",t);let s=t[0];s.name="colision",s.position=new BABYLON.Vector3(e,n,o);let i=1;for(;i<t.length;)new BABYLON.PhysicsAggregate(t[i],BABYLON.PhysicsShapeType.MESH,{mass:0},this.scene),i++}),void 0,void 0,".glb"),{boundingBox:void 0}}CreateBowlingPlatform(e,n,o){return BABYLON.SceneLoader.ImportMesh("","./models/","scene_de_bowling.glb",this.scene,(t=>{console.log("Chargement réussi plateform",t);let s=t[0];s.name="colision",s.position=new BABYLON.Vector3(e,n,o);let i=1;for(;i<t.length;)new BABYLON.PhysicsAggregate(t[i],BABYLON.PhysicsShapeType.MESH,{mass:0},this.scene),i++}),void 0,void 0,".glb"),{boundingBox:void 0}}CreateBowlingBall(e,n,o){return BABYLON.SceneLoader.ImportMesh("","./models/","Spiky Ball.glb",this.scene,(t=>{console.log("Chargement réussi ball",t);let s=t[0];s.name="ball",s.position=new BABYLON.Vector3(e,n,o),new BABYLON.PhysicsAggregate(s,BABYLON.PhysicsShapeType.SPHERE,{mass:0},this.scene)}),void 0,void 0,".glb"),{boundingBox:void 0}}CreateColiseum(e,n,o){return BABYLON.SceneLoader.ImportMesh("","./models/","coliseum.glb",this.scene,(t=>{console.log("Chargement réussi coliseum",t);let s=t[0];s.name="coliseum",s.position=new BABYLON.Vector3(e,n,o)}),void 0,void 0,".glb"),{boundingBox:void 0}}CreateColiseum(e,n,o){return BABYLON.SceneLoader.ImportMesh("","./models/","coliseum.glb",this.scene,(t=>{console.log("Chargement réussi coliseum",t);let s=t[0];s.name="coliseum",s.position=new BABYLON.Vector3(e,n,o)}),void 0,void 0,".glb"),{boundingBox:void 0}}CreateMenu3dScene(e,n,o){return BABYLON.SceneLoader.ImportMesh("","./models/","fmenu.glb",this.scene,(t=>{console.log("Chargement réussi du menu",t);let s=t[0];s.name="fondMenu",s.position=new BABYLON.Vector3(e,n,o)}),void 0,void 0,".glb"),{boundingBox:void 0}}async Createlevel1(e,n,o){return BABYLON.SceneLoader.ImportMesh("","./models/","level2Map.glb",this.scene,(t=>{console.log("Chargement réussi plateform",t);let s=t[0];s.name="colision",s.position=new BABYLON.Vector3(e,n,o);let i=1;for(;i<t.length;)new BABYLON.PhysicsAggregate(t[i],BABYLON.PhysicsShapeType.MESH,{mass:0},this.scene),i++}),void 0,void 0,".glb"),{boundingBox:void 0}}}const d=class{constructor(e,n,o,t,s,i,r){this.setupKeyboardInput(e,n,o,t,s,i,r)}setupKeyboardInput(e,n,o,t,s,i,r){this.keys={},e.addEventListener("keydown",(e=>{this.keys[e.key]=!0})),e.addEventListener("keyup",(e=>{this.keys[e.key]=!1})),n.runRenderLoop((()=>{if(this.keys[t]){let e=o.transformNode.forward.scale(-5);o.applyForce(e,o.transformNode.position),o.setAngularVelocity(BABYLON.Vector3.ZeroReadOnly)}this.keys[s]&&(o.applyForce(new BABYLON.Vector3(0,0,5),new BABYLON.Vector3(0,0,0)),o.setAngularVelocity(BABYLON.Vector3.ZeroReadOnly)),this.keys[i]&&(o.applyForce(new BABYLON.Vector3(5,0,0),new BABYLON.Vector3(0,0,0)),o.setAngularVelocity(new BABYLON.Vector3(0,-.5,0))),this.keys[r]&&(o.applyForce(new BABYLON.Vector3(-5,0,0),new BABYLON.Vector3(0,0,0)),o.setAngularVelocity(new BABYLON.Vector3(0,.5,0)))}))}};var h=document.getElementById("renderCanvas");class g{constructor(e,n,o,t,s,i,r,a,c,l){this.scene=e,this.engine=n,this.boxBody,this.testPlayer(e,n,o,a,c,l),this.enablePlayerControl(t,s,i,r)}testPlayer(e,n,o,t,s,i){var r=BABYLON.MeshBuilder.CreateBox(o,{width:2,height:2,depth:2},e);r.isVisible=!1,new B(e).CreateSnowManOnSki(t,s-.5,i,r),r.rotationQuaternion=BABYLON.Quaternion.Identity(),r.position=new BABYLON.Vector3(t,s,i);var a=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,0,0),BABYLON.Quaternion.Identity(),new BABYLON.Vector3(2,2,2),e),c=new BABYLON.PhysicsBody(r,BABYLON.PhysicsMotionType.DYNAMIC,!1,e);c.shape=a,c.setMassProperties({mass:1});var l=new BABYLON.StandardMaterial("groundMaterial",e);return l.diffuseColor=new BABYLON.Color3(0,0,1),r.material=l,c.setCollisionCallbackEnabled(!0),this.boxBody=c,r}enablePlayerControl(e,n,o,t){new d(h,this.engine,this.boxBody,e,n,o,t)}destroyPlayer(){control=null}}let w=new n(A,"level1.mp3");BABYLON.SceneLoader.ShowLoadingScreen=!0;var u=document.getElementById("renderCanvas"),L=new BABYLON.Engine(u,!0),A=new BABYLON.Scene(L);function m(e){A.meshes.forEach((function(e){e.dispose()})),A.cameras.forEach((function(e){e.dispose()})),A.lights.forEach((function(e){e.dispose()})),L.stopRenderLoop(),document.getElementById("level1").style.display="none",w.stopMusic()}function y(){A.getMeshByName("player1"),A.getMeshByName("player2")}const N=class{constructor(e,n,o,t,s,i,r){this.setupKeyboardInputPlayer(e,o,t,s,i,r)}setupKeyboardInputPlayer(e,n,o,t,s,i){this.keys={};let r=!1,a=!1;e.addEventListener("keydown",(e=>{this.keys[e.key]||(this.keys[e.key]=!0,e.key!==t||r||(r=!0),e.key!==s||a||(a=!0,console.log("Touche enfoncée, action effectuée jump")))})),e.addEventListener("keyup",(e=>{this.keys[e.key]=!1,e.key===s&&(a=!1,console.log("Touche relâchée jump")),e.key===t&&(r=!1)})),n.runRenderLoop((()=>{r&&(o.applyForce(new BABYLON.Vector3(0,0,-50),new BABYLON.Vector3(0,0,0)),o.setAngularVelocity(new BABYLON.Vector3(0,0,0)),r=!1),o.setAngularVelocity(new BABYLON.Vector3(0,0,0))}))}};var p=new BABYLON.Engine(O,!0),O=document.getElementById("renderCanvas");const Y=class{constructor(e,n,o,t,s,i,r,a){this.scene=e,this.engine=n,this.name=o,this.boxBody,this.boxMesh,this.animationGroups=[],this.forward=t,this.jump=s,this.createPlayer(i,r,a),this.enablePlayerControl(t,s)}async createPlayer(e,n,o){var t=BABYLON.MeshBuilder.CreateBox(this.name,{width:2,height:2,depth:2},this.scene);this.boxMesh=t,t.visibility=!1,t.rotationQuaternion=BABYLON.Quaternion.Identity(),t.position=new BABYLON.Vector3(e,n,o);var s=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,0,0),BABYLON.Quaternion.Identity(),new BABYLON.Vector3(2,2,2),this.scene),i=new BABYLON.PhysicsBody(t,BABYLON.PhysicsMotionType.DYNAMIC,!1,this.scene);this.boxBody=i,i.shape=s,i.setMassProperties({mass:1});var r=new BABYLON.StandardMaterial("groundMaterial",this.scene);return r.diffuseColor=new BABYLON.Color3(0,0,1),t.material=r,i.setCollisionCallbackEnabled(!0),this.animationGroups=await this.Character(e,n,o,t),t}enablePlayerControl(e,n){new N(O,this.scene,this.engine,this.boxBody,e,n,this.animationGroups)}destroyPlayer(){control=null}async Character(e,n,o,t){let s;const{meshes:i,animationGroups:r}=await BABYLON.SceneLoader.ImportMeshAsync("","./models/character1_anim/","animCharacter.glb",this.scene);return s=i[0],s.name="RUNNER",s.position=new BABYLON.Vector3(e,n-1.05,o),t&&s.setParent(t),this.animationGroups.push(r),console.log("Chargement réussi Personnage",s),await this.animGestionner(O,this.forward,this.jump,r),{animationGroups:r}}async animGestionner(e,n,o,t){this.keys={};let s=!1,i=!1;e.addEventListener("keydown",(e=>{this.keys[e.key]||(this.keys[e.key]=!0,e.key!==n||s||(s=!0),e.key!==o||i||(i=!0))})),e.addEventListener("keyup",(e=>{this.keys[e.key]=!1,e.key===o&&(i=!1),e.key===n&&(s=!1)})),p.runRenderLoop((()=>{s&&(s=!1,console.log("VOILA LE GROUPE :"+t),t[2].play()),i&&(i=!1)}))}};var b=document.getElementById("renderCanvas"),f=new BABYLON.Engine(b,!0),v=new BABYLON.Scene(f);let C=new n(v,"level2.mp3");const P=class{constructor(e,n,o,t,s,i,r){this.destroyed=!1,this.action=!1,this.setupKeyboardInputPlayer(e,n,o,t,s,i,r)}setupKeyboardInputPlayer(e,n,o,t,s,i,r){this.keys={},e.addEventListener("keydown",(e=>{this.keys[e.key]||(this.keys[e.key]=!0)})),e.addEventListener("keyup",(e=>{this.keys[e.key]=!1})),n.runRenderLoop((()=>{this.destroyed||(this.keys[t]&&(o.applyForce(new BABYLON.Vector3(10,0,0),new BABYLON.Vector3(0,0,0)),o.setAngularVelocity(BABYLON.Vector3.ZeroReadOnly)),this.keys[s]&&(o.applyForce(new BABYLON.Vector3(-10,0,0),new BABYLON.Vector3(0,0,0)),o.setAngularVelocity(BABYLON.Vector3.ZeroReadOnly)),this.keys[r]&&!this.action&&(this.action=!0,o.applyForce(new BABYLON.Vector3(0,0,2800),new BABYLON.Vector3(0,0,0))))}))}destroy(){this.destroyed=!0,this.canvas=null,this.engine=null,this.character1=null,this.inputLeft=null,this.inputRight=null,this.inputJump=null,this.inputLaunch=null}isUpperCase(e,n){return n===e.toUpperCase()}getLastKeyPressed(){return this.lastKeyPressed}};var S=document.getElementById("renderCanvas");const M=class{constructor(e,n,o,t,s,i,r,a,c,l){this.control,this.scene=e,this.engine=n,this.name=o,this.boxBody,this.sphereBody,this.box,this.rayHelper,this.shootBall(t,s,i,r,a,c,l),this.enablePlayerControl(t,s,i,r)}testPlayer(e,n,o,t,s,i){var r=BABYLON.MeshBuilder.CreateBox(o,{width:2,height:2,depth:2},e);this.box=r,r.rotationQuaternion=BABYLON.Quaternion.Identity(),r.position=new BABYLON.Vector3(t,s,i);var a=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,0,0),BABYLON.Quaternion.Identity(),new BABYLON.Vector3(2,2,2),e),c=new BABYLON.PhysicsBody(r,BABYLON.PhysicsMotionType.DYNAMIC,!1,e);c.shape=a,c.setMassProperties({mass:1});var l=new BABYLON.StandardMaterial("groundMaterial",e);l.diffuseColor=new BABYLON.Color3(0,0,1),r.material=l,c.setCollisionCallbackEnabled(!0),this.boxBody=c}enablePlayerControl(e,n,o,t){let s=new P(S,this.engine,this.sphereBody,n,e,o,t);this.control=s}shootBall(e,n,o,t,s,i,r){const a=BABYLON.MeshBuilder.CreateSphere(this.name,{segments:16,diameter:2},this.scene);a.position=new BABYLON.Vector3(s,i,r);var c=new BABYLON.PhysicsShapeSphere(new BABYLON.Vector3(0,0,0),1,this.scene),l=new BABYLON.PhysicsBody(a,BABYLON.PhysicsMotionType.DYNAMIC,!1,this.scene);l.shape=c,l.setMassProperties({mass:2}),this.sphereBody=l}disableThisObject(){this.control.destroy(),this.control=null}},V=class{constructor(e,n,o,t){this.scene=e,this.x=n,this.y=o,this.z=t,this.mesh,this.Aggregate,this.meshIdPromise=this.createBowlingPin()}createBowlingPin(){return new Promise((e=>{BABYLON.SceneLoader.ImportMesh("","./models/","Bowling Pin.glb",this.scene,(n=>{const o=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,0,0),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(.5,1.2,.5),this.scene);BABYLON.MeshBuilder.CreateBox("Pintrigger");let t=n[0];t.scaling._z=-1*t.scaling._z,t.name="Pin",t.position=new BABYLON.Vector3(this.x,this.y,this.z);var s=new BABYLON.PhysicsAggregate(t,o,{mass:.1},this.scene);s.body.setCollisionCallbackEnabled(!0),this.Aggregate=s,this.mesh=t;const i=t.uniqueId;e(i)}),void 0,void 0,".glb")}))}async getMeshId(){return await this.meshIdPromise}disableThisObject(){this.Aggregate.body.setCollisionCallbackEnabled(!1),this.Aggregate.body.dispose()}isPinUp(){const e=this.mesh.rotationQuaternion.toEulerAngles();return Math.abs(e.x)<.1}};var E=document.getElementById("renderCanvas"),k=new BABYLON.Engine(E,!0),x=new BABYLON.Scene(k);let T,I,R,_,F=new n(x,"level3.mp3"),U=0,H=0;function Q(e,n,o,t){return[new V(x,.25+n,2+o,21+t),new V(x,0+n,2+o,21.5+t),new V(x,.5+n,2+o,21.5+t),new V(x,0+n,2+o,22+t),new V(x,.25+n,2+o,22+t),new V(x,.6+n,2+o,22+t),new V(x,-.5+n,2+o,22.5+t),new V(x,0+n,2+o,22.5+t),new V(x,.5+n,2+o,22.5+t),new V(x,1+n,2+o,22.5+t),new V(x,-.5+n,2+o,23+t),new V(x,-1+n,2+o,23+t),new V(x,0+n,2+o,23+t),new V(x,.5+n,2+o,23+t),new V(x,1+n,2+o,23+t),new V(x,1.5+n,2+o,23+t),new V(x,-.5+n,2+o,23.5+t),new V(x,-1+n,2+o,23.5+t),new V(x,-1.5+n,2+o,23.5+t),new V(x,0+n,2+o,23.5+t),new V(x,.5+n,2+o,23.5+t),new V(x,1+n,2+o,23.5+t),new V(x,1.5+n,2+o,23.5+t),new V(x,2+n,2+o,23.5+t),new V(x,-.5+n,2+o,24+t),new V(x,-1+n,2+o,24+t),new V(x,-1.5+n,2+o,24+t),new V(x,-2+n,2+o,24+t),new V(x,0+n,2+o,24+t),new V(x,.5+n,2+o,24+t),new V(x,1+n,2+o,24+t),new V(x,1.5+n,2+o,24+t),new V(x,2+n,2+o,24+t),new V(x,2.5+n,2+o,24+t),new V(x,-.5+n,2+o,24.5+t),new V(x,-1+n,2+o,24.5+t),new V(x,-1.5+n,2+o,24.5+t),new V(x,-2+n,2+o,24.5+t),new V(x,-2.5+n,2+o,24.5+t),new V(x,0+n,2+o,24.5+t),new V(x,.5+n,2+o,24.5+t),new V(x,1+n,2+o,24.5+t),new V(x,1.5+n,2+o,24.5+t),new V(x,2+n,2+o,24.5+t),new V(x,2.5+n,2+o,24.5+t),new V(x,3+n,2+o,24.5+t),new V(x,-.5+n,2+o,25+t),new V(x,-1+n,2+o,25+t),new V(x,-1.5+n,2+o,25+t),new V(x,-2+n,2+o,25+t),new V(x,-2.5+n,2+o,25+t),new V(x,-3+n,2+o,25+t),new V(x,0+n,2+o,25+t),new V(x,.5+n,2+o,25+t),new V(x,1+n,2+o,25+t),new V(x,1.5+n,2+o,25+t),new V(x,2+n,2+o,25+t),new V(x,2.5+n,2+o,25+t),new V(x,3+n,2+o,25+t),new V(x,3.5+n,2+o,25+t),new V(x,-.5+n,2+o,25.5+t),new V(x,-1+n,2+o,25.5+t),new V(x,-1.5+n,2+o,25.5+t),new V(x,-2+n,2+o,25.5+t),new V(x,-2.5+n,2+o,25.5+t),new V(x,-3+n,2+o,25.5+t),new V(x,-3.5+n,2+o,25.5+t),new V(x,0+n,2+o,25.5+t),new V(x,.5+n,2+o,25.5+t),new V(x,1+n,2+o,25.5+t),new V(x,1.5+n,2+o,25.5+t),new V(x,2+n,2+o,25.5+t),new V(x,2.5+n,2+o,25.5+t),new V(x,3+n,2+o,25.5+t),new V(x,3.5+n,2+o,25.5+t),new V(x,4+n,2+o,25.5+t),new V(x,-.5+n,2+o,26+t),new V(x,-1+n,2+o,26+t),new V(x,-1.5+n,2+o,26+t),new V(x,-2+n,2+o,26+t),new V(x,-2.5+n,2+o,26+t),new V(x,-3+n,2+o,26+t),new V(x,-3.5+n,2+o,26+t),new V(x,-4+n,2+o,26+t),new V(x,0+n,2+o,26+t),new V(x,.5+n,2+o,26+t),new V(x,1+n,2+o,26+t),new V(x,1.5+n,2+o,26+t),new V(x,2+n,2+o,26+t),new V(x,2.5+n,2+o,26+t),new V(x,3+n,2+o,26+t),new V(x,3.5+n,2+o,26+t),new V(x,4+n,2+o,26+t),new V(x,4.5+n,2+o,26+t)]}function D(){Z()}function z(){x.meshes.forEach((function(e){e.dispose()})),x.cameras.forEach((function(e){e.dispose()})),x.lights.forEach((function(e){e.dispose()})),k.stopRenderLoop(),document.getElementById("level3").style.display="none",F.stopMusic()}var G=document.getElementById("renderCanvas"),W=new BABYLON.Engine(G,!0),j=new BABYLON.Scene(W);let K=new n(j,"Menu.mp3");let X=0,q=0;function Z(){r(),t.runRenderLoop((function(){s.render()}))}function J(){m(),function(){var e=new BABYLON.FollowCamera("camera",new BABYLON.Vector3(0,5,-10),A);e.cameraRotation=0,e.viewport=new BABYLON.Viewport(0,0,.5,1);var n=new BABYLON.FollowCamera("camera2",new BABYLON.Vector3(0,5,-10),A);n.cameraRotation=0,n.viewport=new BABYLON.Viewport(.5,0,.5,1),A.activeCameras.push(e),A.activeCameras.push(n),async function(){new BABYLON.HemisphericLight("light",new BABYLON.Vector3(0,1,0),A);const e=await HavokPhysics(),n=new BABYLON.HavokPlugin(!0,e);A.enablePhysics(new BABYLON.Vector3(0,-9.81,0),n),A.collisionsEnabled=!0,new B(A),w.initMusic(),function(e,n,o){const t=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,0,0),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(40,40,40),A);A.getMeshByName("RainBow");var s=BABYLON.MeshBuilder.CreateBox("Ending",{width:2,height:2,depth:2},A);s.isVisible=!1,s.position.x=-1.79,s.position.y=-1.02,s.position.z=-832.37,new BABYLON.PhysicsAggregate(s,t,{mass:0},A).shape.isTrigger=!0}(),document.getElementById("level1").style.display="block";var o=new B(A);await o.Createlevel1(0,0,-800),new g(A,L,"player1","z","s","q","d",5,170,0),new g(A,L,"player2","ArrowUp","ArrowDown","ArrowLeft","ArrowRight",0,170,0);let t=A.getMeshByName("player1");return function(e,n){e.onTriggerCollisionObservable.add((e=>{console.log(e.type,":",e.collider.transformNode.name,"-",e.collidedAgainst.transformNode.name),"player1"==e.collider.transformNode.name&&"Ending"==e.collidedAgainst.transformNode.name&&(console.log("PLAYER 111111 PASSSSSS"),ne(),console.log("COUNT_WIN PLAYER1:"+X)),"player2"==e.collider.transformNode.name&&"Ending"==e.collidedAgainst.transformNode.name&&(console.log("PLAYER 2 PASSSSSS"),oe(),console.log("COUNT_WIN PLAYER2"+q)),"tronc"==e.collidedAgainst.transformNode.name&&(console.log("End OF the Game"),y()),"Ending"==e.collidedAgainst.transformNode.name&&(console.log("COUNT_WIN PLAYER1:"+X+"  COUNT_WIN PLAYER2"+q),m(),$()),"Die"==e.collidedAgainst.transformNode.name&&(console.log("YOU DIEEEEEEEEEE"),y())}))}(n),function(){const e=BABYLON.MeshBuilder.CreateBox("skyBox",{size:1e3},A),n=new BABYLON.StandardMaterial("skyBox",A);n.backFaceCulling=!1,n.disableLighting=!0,e.material=n,e.infiniteDistance=!0,n.reflectionTexture=new BABYLON.CubeTexture("./models/skybox/skybox1/skybox",A),n.reflectionTexture.coordinatesMode=BABYLON.Texture.SKYBOX_MODE}(),t}().then((o=>{let t=A.getMeshByName("player2");console.log(o),e.lockedTarget=o,n.lockedTarget=t})).catch((e=>{console.error(e)})),L.runRenderLoop((function(){A.render()}))}()}function $(){!function(){var e=new BABYLON.FollowCamera("camera",new BABYLON.Vector3(0,5,-10),v);e.cameraRotation=0,e.viewport=new BABYLON.Viewport(.5,0,.5,1);var n=new BABYLON.FollowCamera("camera2",new BABYLON.Vector3(-3,5,-10),v);n.cameraRotation=0,n.viewport=new BABYLON.Viewport(0,0,.5,1),v.activeCameras.push(n),v.activeCameras.push(e),async function(){const e=await HavokPhysics();C.initMusic();const n=new BABYLON.HavokPlugin(!0,e);v.enablePhysics(new BABYLON.Vector3(0,-9.81,0),n),v.collisionsEnabled=!0,new BABYLON.HemisphericLight("light",new BABYLON.Vector3(0,1,0),v),function(e,n,o){new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,0,0),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(60,2,2e3),v);var t=BABYLON.MeshBuilder.CreateBox("Ending",{width:40,height:40,depth:40},v);t.isVisible=!1,t.position.x=5,t.position.y=11,t.position.z=-620,new BABYLON.PhysicsAggregate(t,BABYLON.PhysicsShapeType.MESH,{mass:0},v).shape.isTrigger=!0}(),function(e){e.onTriggerCollisionObservable.add((e=>{console.log(e.type,":",e.collider.transformNode.name,"-",e.collidedAgainst.transformNode.name),"player1"==e.collider.transformNode.name&&"Ending"==e.collidedAgainst.transformNode.name&&(console.log("PLAYER 111111 PASSSSSS"),ne(),console.log("COUNT_WIN PLAYER1:"+X)),"player2"==e.collider.transformNode.name&&"Ending"==e.collidedAgainst.transformNode.name&&(console.log("PLAYER 2 PASSSSSS"),oe(),console.log("COUNT_WIN PLAYER2"+q)),"Ending"==e.collidedAgainst.transformNode.name&&(v.meshes.forEach((function(e){e.dispose()})),v.cameras.forEach((function(e){e.dispose()})),v.lights.forEach((function(e){e.dispose()})),f.stopRenderLoop(),document.getElementById("level2").style.display="none",C.stopMusic(),ee())}))}(n),v.onPointerDown=function(e,n){!function(e,n){n.hit&&"player"==n.pickedMesh.name&&(n.pickedMesh.material.diffuseColor=new BABYLON.Color3(0,1,0))}(0,n)},new B(v).CreatePlateformlevel2(-7,14,-265),document.getElementById("level2").style.display="block",new Y(v,f,"player1","s","f",0,20,0),new Y(v,f,"player2","k","m",-14,20,0),function(){const e=BABYLON.MeshBuilder.CreateBox("skyBox",{size:1e3},v),n=new BABYLON.StandardMaterial("skyBox",v);n.backFaceCulling=!1,n.disableLighting=!0,e.material=n,e.infiniteDistance=!0,n.reflectionTexture=new BABYLON.CubeTexture("./models/skybox/skybox3/skybox",v),n.reflectionTexture.coordinatesMode=BABYLON.Texture.SKYBOX_MODE}()}().then((o=>{let t=v.getMeshByName("player2");console.log("MESH PLAYER2"+t);let s=v.getMeshByName("player1");e.lockedTarget=t,n.lockedTarget=s})).catch((e=>{console.error(e)})),f.runRenderLoop((function(){v.render()}))}()}function ee(){!function(){var e=new BABYLON.FreeCamera("camera",new BABYLON.Vector3(0,5,-22),x);e.inertia=0,e.angularSensibility=0,e.detachControl(E),e.cameraRotation=0,x.activeCameras.push(e),e.viewport=new BABYLON.Viewport(0,0,.5,1),x.activeCameras.push(e);var n=new BABYLON.FreeCamera("camera",new BABYLON.Vector3(25,4,-23),x);n.inertia=0,n.angularSensibility=0,n.detachControl(E),n.cameraRotation=0,x.activeCameras.push(n),n.viewport=new BABYLON.Viewport(.5,0,.5,1),x.activeCameras.push(n),async function(){const e=await HavokPhysics();F.initMusic();const n=new BABYLON.HavokPlugin(!0,e);x.enablePhysics(new BABYLON.Vector3(0,-9.81,0),n),x.collisionsEnabled=!0,new BABYLON.HemisphericLight("light",new BABYLON.Vector3(0,1,0),x);var o=new B(x),t=[],s=[];T=new M(x,k,"player1","q","d","s"," ",0,8,-8),I=new M(x,k,"player2","ArrowLeft","ArrowRight","i","Enter",25,8,-8),x.getMeshByName("player1"),document.getElementById("level3").style.display="block",function(e,n,o){e.onTriggerCollisionObservable.add((e=>{if(console.log(e.type,":",e.collider.transformNode.name,"-",e.collidedAgainst.transformNode.name),"Ending"==e.collidedAgainst.transformNode.name&&(console.log("YOU WINNNNNNN"),n=null),"Respawn"==e.collidedAgainst.transformNode.name&&("player1"==e.collider.transformNode.name||"player2"==e.collider.transformNode.name))if(console.log("YOU RESPAWNWNNN"),"player1"==e.collider.transformNode.name){let e=x.getMeshByName("player1");n.disableThisObject(),e.dispose(),n=new M(x,k,"player1","q","d","s"," ",-5,5,0)}else{let e=x.getMeshByName("player2");o.disableThisObject(),e.dispose(),o=new M(x,k,"player2","j","l","i","Enter",28,5,0)}}))}(n,T,I),o.CreateBowlingPlatform(),t=Q(0,0,0,-8),s=Q(0,25,0,-8),async function(e,n,o){k.runRenderLoop((async()=>{for(let n=0;n<e.length;n++)await e[n].getMeshId(),e[n].isPinUp()||(U++,e.splice(n,1),n--);document.getElementById("pin1").innerHTML=U+"/93 PINS",U>=93&&ne(),U>=93&&(z(),D())}))}(t),async function(e,n,o){k.runRenderLoop((async()=>{for(let n=0;n<e.length;n++)await e[n].getMeshId(),e[n].isPinUp()||(H++,e.splice(n,1),n--);document.getElementById("pin2").innerHTML=H+"/93 PINS",H>92&&oe(),H>=93&&(z(),D())}))}(s),x.getMeshByName("ball"),document.addEventListener("keydown",(function(e){if("Shift"===e.key){console.log('La touche "espace" a été enfoncée');let e=x.getMeshByName("player1");T.disableThisObject(),e.dispose(),T=new M(x,k,"player1","q","d","s"," ",0,8,-8)}})),document.addEventListener("keydown",(function(e){if("Backspace"===e.code){console.log('La touche "entrée" a été enfoncée');let e=x.getMeshByName("player2");I.disableThisObject(),e.dispose(),I=new M(x,k,"player2","ArrowLeft","ArrowRight","i","Enter",25,8,-8)}})),function(){const e=BABYLON.MeshBuilder.CreateBox("skyBox",{size:1e3},x),n=new BABYLON.StandardMaterial("skyBox",x);n.backFaceCulling=!1,n.disableLighting=!0,e.material=n,e.infiniteDistance=!0,n.reflectionTexture=new BABYLON.CubeTexture("./models/skybox/skybox2/skybox",x),n.reflectionTexture.coordinatesMode=BABYLON.Texture.SKYBOX_MODE}()}();let o=x.getMeshByName("player1");x.getMeshByName("player2"),e.lockedTarget=o,k.runRenderLoop((function(){x.render()}))}()}function ne(){X++}function oe(){q++}new BABYLON.HemisphericLight("light",new BABYLON.Vector3(0,1,0),j),new BABYLON.FreeCamera("camera",new BABYLON.Vector3(0,8,-50),j).attachControl(),new B(j).CreateMenu3dScene(0,0,0),function(){_=BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI_text"),function(){R=BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI_button");const e=BABYLON.GUI.Button.CreateSimpleButton("playButton","Play");e.width="150px",e.height="80px",e.color="white",e.cornerRadius=20,e.background="grey",e.thickness=2,e.shadowOffsetX=4,e.shadowOffsetY=4,e.shadowColor="#000000",e.shadowBlur=8,e.pointerEnterAnimation=function(){e.background="white",e.color="grey"},e.pointerOutAnimation=function(){e.background="grey",e.color="white"},e.children[0].fontFamily="UnifrakturCook",e.onPointerClickObservable.add((function(){console.log("Play button clicked"),j.meshes.forEach((function(e){e.dispose()})),j.cameras.forEach((function(e){e.dispose()})),j.lights.forEach((function(e){e.dispose()})),_.dispose(),R.dispose(),W.stopRenderLoop(),K.stopMusic(),J()})),R.addControl(e)}();const e=new BABYLON.GUI.TextBlock;e.text="Les Jeux Olympiques Maudits",e.color="black",e.fontSize=100,e.fontFamily="UnifrakturCook",e.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER,e.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP,e.paddingTop="-500px",_.addControl(e)}(),K.initMusic(),function(){const e=BABYLON.MeshBuilder.CreateBox("skyBox",{size:100},j),n=new BABYLON.StandardMaterial("skyBox",j);n.backFaceCulling=!1,n.disableLighting=!0,e.material=n,n.reflectionTexture=new BABYLON.CubeTexture("./models/skybox/skybox1/skybox",j),n.reflectionTexture.coordinatesMode=BABYLON.Texture.SKYBOX_MODE}(),W.runRenderLoop((function(){j.render()}))})();
//# sourceMappingURL=babylonBundle.js.map