(()=>{"use strict";var e={d:(n,o)=>{for(var s in o)e.o(o,s)&&!e.o(n,s)&&Object.defineProperty(n,s,{enumerable:!0,get:o[s]})},o:(e,n)=>Object.prototype.hasOwnProperty.call(e,n)};e.d({},{VN:()=>D,mh:()=>j,fF:()=>W,mw:()=>K,w_:()=>q,DM:()=>Z,wT:()=>G,DB:()=>z});var n=document.getElementById("renderCanvas"),o=new BABYLON.Engine(n,!0),s=new BABYLON.Scene(o),t=function(){return new BABYLON.HemisphericLight("light",new BABYLON.Vector3(0,1,0),s),new BABYLON.FreeCamera("camera",new BABYLON.Vector3(0,5,-22),s),G>z?(i(9,0,0),r(-11,0,0)):(i(-11,0,0),r(9,0,0)),document.getElementById("End").style.display="block",s};function i(e,n,o){BABYLON.SceneLoader.ImportMesh("","./models/","Loose.glb",s,(s=>{console.log("Chargement réussi coliseum",s);let t=s[0];t.name="playerLoose",t.position=new BABYLON.Vector3(e,n,o)}),void 0,void 0,".glb")}function r(e,n,o){BABYLON.SceneLoader.ImportMesh("","./models/","victory.glb",s,(s=>{console.log("Chargement réussi coliseum",s);let t=s[0];t.name="playerLoose",t.position=new BABYLON.Vector3(e,n,o)}),void 0,void 0,".glb")}class a{constructor(e){this.scene=e}async CreateTree(e,n,o){let s,t;return BABYLON.SceneLoader.ImportMesh("","./models/","Tree.glb",this.scene,(i=>{console.log("Chargement réussi arbre",i),s=i[0],t=i[1],t.name="tronc",s.position=new BABYLON.Vector3(e,n,o),new BABYLON.PhysicsAggregate(t,BABYLON.PhysicsShapeType.BOX,{mass:0},this.scene).shape.isTrigger=!0,new BABYLON.PhysicsAggregate(t,BABYLON.PhysicsShapeType.BOX,{mass:0},this.scene)}),void 0,void 0,".glb"),{boundingBox:void 0}}async CreatePineTree(e,n,o){let s,t;return BABYLON.SceneLoader.ImportMesh("","./models/","Pine Tree with Snow.glb",this.scene,(i=>{console.log("Chargement réussi arbre",i),i[0].scaling.x=3,i[0].scaling.y=2,i[0].scaling.z=4,s=i[0],t=i[1],t.name="tronc",console.log(t.name),s.position=new BABYLON.Vector3(e,n,o);const r=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,1,3),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(3,3,5),this.scene),a=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,1,3),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(3,3,5),this.scene);new BABYLON.PhysicsAggregate(t,r,{mass:0},this.scene).shape.isTrigger=!0,new BABYLON.PhysicsAggregate(t,a,{mass:0},this.scene)}),void 0,void 0,".glb")}CreateSnowManOnSki(e,n,o,s){let t;return BABYLON.SceneLoader.ImportMesh("","./models/","snowman_on_skis.glb",this.scene,(i=>{console.log("Chargement réussi SnowMan",i),t=i[0],t.name="SnowMan",t.position=new BABYLON.Vector3(e,n,o),t.setParent(s)}),void 0,void 0,".glb"),{mesh:t}}async CreateSceneProd(e,n,o){}async CreatePlayer(e,n,o){}async Zone(e,n,o){}async plane(e,n,o,s,t,i){var r=BABYLON.MeshBuilder.CreateGround("ground",{width:s,height:t,subdivisions:1},i);r.position.addInPlace(new BABYLON.Vector3(e,n,o)),r.rotation=new BABYLON.Vector3(-.1,0,0),new BABYLON.PhysicsAggregate(r,BABYLON.PhysicsShapeType.BOX,{mass:0},i);var a=new BABYLON.StandardMaterial("groundMaterial",i);return a.diffuseColor=new BABYLON.Color3(.92,.29,.28),r.material=a,r}async flatplane(e,n,o,s,t,i){var r=BABYLON.MeshBuilder.CreateGround("ground",{width:s,height:t,subdivisions:1},i);r.position.addInPlace(new BABYLON.Vector3(e,n,o)),r.rotation=new BABYLON.Vector3(0,0,0),new BABYLON.PhysicsAggregate(r,BABYLON.PhysicsShapeType.BOX,{mass:0},i);var a=new BABYLON.StandardMaterial("groundMaterial",i);return a.diffuseColor=new BABYLON.Color3(.92,.29,.28),r.material=a,r}async createDeadTree(e,n,o){let s;return BABYLON.SceneLoader.ImportMesh("","./models/","Dead Trees With Snow.glb",this.scene,(t=>{console.log("Chargement réussi arbre",t),t[0].scaling.x=30,t[0].scaling.y=20,t[0].scaling.z=20;let i=t[0];s=t[1],s.name="tronc",console.log(s.name);const r=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,1,3),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(30,30,30),this.scene);i.position=new BABYLON.Vector3(e,n,o),new BABYLON.PhysicsAggregate(s,r,{mass:0},this.scene).shape.isTrigger=!0,new BABYLON.PhysicsAggregate(s,BABYLON.PhysicsShapeType.BOX,{mass:0},this.scene)}),void 0,void 0,".glb"),{boundingBox:void 0}}async createSnowTree(e,n,o){let s;return BABYLON.SceneLoader.ImportMesh("","./models/","Snow Tree.glb",this.scene,(t=>{console.log("Chargement réussi arbre",t),t[0].scaling.x=10,t[0].scaling.y=10,t[0].scaling.z=10;let i=t[0];s=t[1],s.name="tronc",console.log(s.name);const r=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,0,-1),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(5,10,5),this.scene),a=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,0,-1),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(5,10,5),this.scene);i.position=new BABYLON.Vector3(e,n,o),new BABYLON.PhysicsAggregate(s,r,{mass:0},this.scene).shape.isTrigger=!0,new BABYLON.PhysicsAggregate(s,a,{mass:0},this.scene)}),void 0,void 0,".glb"),{boundingBox:void 0}}async createLitleSnowTree(e,n,o){let s;return BABYLON.SceneLoader.ImportMesh("","./models/","Pine Tree with Snow two.glb",this.scene,(t=>{console.log("Chargement réussi arbre",t),t[0].scaling.x=10,t[0].scaling.y=10,t[0].scaling.z=10;let i=t[0];s=t[1],s.name="tronc",console.log(s.name);const r=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,0,-1),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(5,10,5),this.scene),a=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,0,-1),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(5,10,5),this.scene);i.position=new BABYLON.Vector3(e,n,o),new BABYLON.PhysicsAggregate(s,r,{mass:0},this.scene).shape.isTrigger=!0,new BABYLON.PhysicsAggregate(s,a,{mass:0},this.scene)}),void 0,void 0,".glb"),{boundingBox:void 0}}async createSnowMan(e,n,o){let s;return BABYLON.SceneLoader.ImportMesh("","./models/","SnowManRotated.glb",this.scene,(t=>{console.log("Chargement réussi arbre",t),t[0].scaling.x=1,t[0].scaling.y=1,t[0].scaling.z=1;let i=t[0];s=t[1],s.name="tronc",console.log("SNOWMAN "+i.name);const r=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,4,0),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(5,10,5),this.scene),a=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,4,-1),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(5,10,5),this.scene);i.position=new BABYLON.Vector3(e,n,o),new BABYLON.PhysicsAggregate(s,r,{mass:0},this.scene).shape.isTrigger=!0,new BABYLON.PhysicsAggregate(s,a,{mass:0},this.scene)}),void 0,void 0,".glb"),{boundingBox:void 0}}CreateRampe1(e,n,o){let s=BABYLON.SceneLoader.ImportMesh("","./models/","rampe_2.glb",this.scene,(s=>{console.log("Chargement réussi",s),s[0].scaling.x=5,s[0].scaling.y=5,s[0].scaling.z=5;let t=s[0];console.log(s[1].name),t.name="Rampe";let i=s[1];t.position=new BABYLON.Vector3(e,n,o),new BABYLON.PhysicsAggregate(i,BABYLON.PhysicsShapeType.MESH,{mass:0},this.scene)}),void 0,void 0,".glb");return s.position=new BABYLON.Vector3(e,n,o),{bigMesh:s}}createSnowMount(e,n,o){let s=BABYLON.SceneLoader.ImportMesh("","./models/","Rock Forms 3 (White).glb",this.scene,(s=>{console.log("Chargement réussi",s),s[0].scaling.x=150,s[0].scaling.y=150,s[0].scaling.z=150;const t=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,4,0),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(10,10,20),this.scene);let i=s[0];i.name="tronc",console.log(s[1].name);let r=s[1];r.name="tronc",i.position=new BABYLON.Vector3(e,n,o),new BABYLON.PhysicsAggregate(i,t,{mass:0},this.scene).shape.isTrigger=!0,new BABYLON.PhysicsAggregate(r,BABYLON.PhysicsShapeType.MESH,{mass:0},this.scene)}),void 0,void 0,".glb");return s.position=new BABYLON.Vector3(e,n,o),{bigMesh:s}}createFinalScene2(e,n,o){let s=BABYLON.SceneLoader.ImportMesh("","./models/","finalscene2.glb",this.scene,(s=>{console.log("Chargement réussi",s),new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,0,0),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(10,10,20),this.scene);let t=s[0];t.name="tronc",console.log(s[2].name),this.scene.getMeshByName("Cube (sol)"),t.position=new BABYLON.Vector3(e,n,o);let i=1;for(;i<s.length;)new BABYLON.PhysicsAggregate(s[i],BABYLON.PhysicsShapeType.MESH,{mass:0},this.scene),i++}),void 0,void 0,".glb");return s.position=new BABYLON.Vector3(e,n,o),{bigMesh:s}}CreatePlateform(e,n,o){return BABYLON.SceneLoader.ImportMesh("","./models/","plateforme_scene3.glb",this.scene,(s=>{console.log("Chargement réussi plateform",s);let t=s[0];t.name="colision",t.position=new BABYLON.Vector3(e,n,o);let i=1;for(;i<s.length;)new BABYLON.PhysicsAggregate(s[i],BABYLON.PhysicsShapeType.MESH,{mass:0},this.scene),i++}),void 0,void 0,".glb"),{boundingBox:void 0}}CreatePlateformlevel2(e,n,o){return BABYLON.SceneLoader.ImportMesh("","./models/","Spike_Mine.glb",this.scene,(s=>{console.log("Chargement réussi plateform",s);let t=s[0];t.name="colision",t.position=new BABYLON.Vector3(e,n,o);let i=1;for(;i<s.length;)new BABYLON.PhysicsAggregate(s[i],BABYLON.PhysicsShapeType.MESH,{mass:0},this.scene),i++}),void 0,void 0,".glb"),{boundingBox:void 0}}CreatePlateform_Scene4(e,n,o){return BABYLON.SceneLoader.ImportMesh("","./models/","scene4_gameplay_ELEMENT.glb",this.scene,(s=>{console.log("Chargement réussi plateform",s);let t=s[0];t.name="colision",t.position=new BABYLON.Vector3(e,n,o);let i=1;for(;i<s.length;)new BABYLON.PhysicsAggregate(s[i],BABYLON.PhysicsShapeType.MESH,{mass:0},this.scene),i++}),void 0,void 0,".glb"),{boundingBox:void 0}}CreateBowlingPlatform(e,n,o){return BABYLON.SceneLoader.ImportMesh("","./models/","scene_de_bowling.glb",this.scene,(s=>{console.log("Chargement réussi plateform",s);let t=s[0];t.name="colision",t.position=new BABYLON.Vector3(e,n,o);let i=1;for(;i<s.length;)new BABYLON.PhysicsAggregate(s[i],BABYLON.PhysicsShapeType.MESH,{mass:0},this.scene),i++}),void 0,void 0,".glb"),{boundingBox:void 0}}CreateBowlingBall(e,n,o){return BABYLON.SceneLoader.ImportMesh("","./models/","Spiky Ball.glb",this.scene,(s=>{console.log("Chargement réussi ball",s);let t=s[0];t.name="ball",t.position=new BABYLON.Vector3(e,n,o),new BABYLON.PhysicsAggregate(t,BABYLON.PhysicsShapeType.SPHERE,{mass:0},this.scene)}),void 0,void 0,".glb"),{boundingBox:void 0}}CreateColiseum(e,n,o){return BABYLON.SceneLoader.ImportMesh("","./models/","coliseum.glb",this.scene,(s=>{console.log("Chargement réussi coliseum",s);let t=s[0];t.name="coliseum",t.position=new BABYLON.Vector3(e,n,o)}),void 0,void 0,".glb"),{boundingBox:void 0}}CreateColiseum(e,n,o){return BABYLON.SceneLoader.ImportMesh("","./models/","coliseum.glb",this.scene,(s=>{console.log("Chargement réussi coliseum",s);let t=s[0];t.name="coliseum",t.position=new BABYLON.Vector3(e,n,o)}),void 0,void 0,".glb"),{boundingBox:void 0}}CreateMenu3dScene(e,n,o){return BABYLON.SceneLoader.ImportMesh("","./models/","menu.glb",this.scene,(s=>{console.log("Chargement réussi du menu",s);let t=s[0];t.name="fondMenu",t.position=new BABYLON.Vector3(e,n,o)}),void 0,void 0,".glb"),{boundingBox:void 0}}Createlevel1(e,n,o){return BABYLON.SceneLoader.ImportMesh("","./models/","level2Map.glb",this.scene,(s=>{console.log("Chargement réussi plateform",s);let t=s[0];t.name="colision",t.position=new BABYLON.Vector3(e,n,o);let i=1;for(;i<s.length;)new BABYLON.PhysicsAggregate(s[i],BABYLON.PhysicsShapeType.MESH,{mass:0},this.scene),i++}),void 0,void 0,".glb"),{boundingBox:void 0}}}const l=class{constructor(e,n,o,s,t,i,r){this.setupKeyboardInput(e,n,o,s,t,i,r)}setupKeyboardInput(e,n,o,s,t,i,r){this.keys={},e.addEventListener("keydown",(e=>{this.keys[e.key]=!0})),e.addEventListener("keyup",(e=>{this.keys[e.key]=!1})),n.runRenderLoop((()=>{if(this.keys[s]){let e=o.transformNode.forward.scale(-5);o.applyForce(e,o.transformNode.position),o.setAngularVelocity(BABYLON.Vector3.ZeroReadOnly)}this.keys[t]&&(o.applyForce(new BABYLON.Vector3(0,0,5),new BABYLON.Vector3(0,0,0)),o.setAngularVelocity(BABYLON.Vector3.ZeroReadOnly)),this.keys[i]&&(o.applyForce(new BABYLON.Vector3(5,0,0),new BABYLON.Vector3(0,0,0)),o.setAngularVelocity(new BABYLON.Vector3(0,-.5,0))),this.keys[r]&&(o.applyForce(new BABYLON.Vector3(-5,0,0),new BABYLON.Vector3(0,0,0)),o.setAngularVelocity(new BABYLON.Vector3(0,.5,0)))}))}};var c=document.getElementById("renderCanvas");class B{constructor(e,n,o,s,t,i,r,a,l,c){this.scene=e,this.engine=n,this.boxBody,this.testPlayer(e,n,o,a,l,c),this.enablePlayerControl(s,t,i,r)}testPlayer(e,n,o,s,t,i){var r=BABYLON.MeshBuilder.CreateBox(o,{width:2,height:2,depth:2},e);r.isVisible=!1,new a(e).CreateSnowManOnSki(s,t-.5,i,r),r.rotationQuaternion=BABYLON.Quaternion.Identity(),r.position=new BABYLON.Vector3(s,t,i);var l=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,0,0),BABYLON.Quaternion.Identity(),new BABYLON.Vector3(2,2,2),e),c=new BABYLON.PhysicsBody(r,BABYLON.PhysicsMotionType.DYNAMIC,!1,e);c.shape=l,c.setMassProperties({mass:1});var B=new BABYLON.StandardMaterial("groundMaterial",e);return B.diffuseColor=new BABYLON.Color3(0,0,1),r.material=B,c.setCollisionCallbackEnabled(!0),this.boxBody=c,r}enablePlayerControl(e,n,o,s){new l(c,this.engine,this.boxBody,e,n,o,s)}destroyPlayer(){control=null}}var h=document.getElementById("renderCanvas"),d=new BABYLON.Engine(h,!0),g=new BABYLON.Scene(d);function w(e){g.meshes.forEach((function(e){e.dispose()})),g.cameras.forEach((function(e){e.dispose()})),g.lights.forEach((function(e){e.dispose()})),d.stopRenderLoop(),document.getElementById("level1").style.display="none"}function A(){g.getMeshByName("player1"),g.getMeshByName("player2")}const L=class{constructor(e,n,o,s,t,i,r){this.setupKeyboardInputPlayer(e,o,s,t,i,r)}setupKeyboardInputPlayer(e,n,o,s,t,i){this.keys={};let r=!1,a=!1;e.addEventListener("keydown",(e=>{this.keys[e.key]||(this.keys[e.key]=!0,e.key!==s||r||(r=!0),e.key!==t||a||(a=!0,console.log("Touche enfoncée, action effectuée jump")))})),e.addEventListener("keyup",(e=>{this.keys[e.key]=!1,e.key===t&&(a=!1,console.log("Touche relâchée jump")),e.key===s&&(r=!1)})),n.runRenderLoop((()=>{r&&(o.applyForce(new BABYLON.Vector3(0,0,-50),new BABYLON.Vector3(0,0,0)),o.setAngularVelocity(new BABYLON.Vector3(0,0,0)),r=!1),a&&(o.applyForce(new BABYLON.Vector3(0,200,0),new BABYLON.Vector3(0,0,0)),o.setAngularVelocity(new BABYLON.Vector3(0,0,0)),a=!1),o.setAngularVelocity(new BABYLON.Vector3(0,0,0))}))}};var N=new BABYLON.Engine(y,!0),y=document.getElementById("renderCanvas");const m=class{constructor(e,n,o,s,t,i,r,a){this.scene=e,this.engine=n,this.name=o,this.boxBody,this.boxMesh,this.animationGroups=[],this.forward=s,this.jump=t,this.createPlayer(i,r,a),this.enablePlayerControl(s,t)}async createPlayer(e,n,o){var s=BABYLON.MeshBuilder.CreateBox(this.name,{width:2,height:1.8,depth:2},this.scene);this.boxMesh=s,s.visibility=!1,s.rotationQuaternion=BABYLON.Quaternion.Identity(),s.position=new BABYLON.Vector3(e,n,o);var t=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,0,0),BABYLON.Quaternion.Identity(),new BABYLON.Vector3(2,1.8,2),this.scene),i=new BABYLON.PhysicsBody(s,BABYLON.PhysicsMotionType.DYNAMIC,!1,this.scene);this.boxBody=i,i.shape=t,i.setMassProperties({mass:1});var r=new BABYLON.StandardMaterial("groundMaterial",this.scene);return r.diffuseColor=new BABYLON.Color3(0,0,1),s.material=r,i.setCollisionCallbackEnabled(!0),this.animationGroups=await this.Character(e,n,o,s),s}enablePlayerControl(e,n){new L(y,this.scene,this.engine,this.boxBody,e,n,this.animationGroups)}destroyPlayer(){control=null}async Character(e,n,o,s){let t;const{meshes:i,animationGroups:r}=await BABYLON.SceneLoader.ImportMeshAsync("","./models/character1_anim/","animCharacter.glb",this.scene);return t=i[0],t.name="RUNNER",t.position=new BABYLON.Vector3(e,n-1.05,o),s&&t.setParent(s),this.animationGroups.push(r),console.log("Chargement réussi Personnage",t),await this.animGestionner(y,this.forward,this.jump,r),{animationGroups:r}}async animGestionner(e,n,o,s){this.keys={};let t=!1,i=!1;e.addEventListener("keydown",(e=>{this.keys[e.key]||(this.keys[e.key]=!0,e.key!==n||t||(t=!0),e.key!==o||i||(i=!0))})),e.addEventListener("keyup",(e=>{this.keys[e.key]=!1,e.key===o&&(i=!1),e.key===n&&(t=!1)})),N.runRenderLoop((()=>{t&&(t=!1,console.log("VOILA LE GROUPE :"+s),s[2].play()),i&&(i=!1)}))}};var p=document.getElementById("renderCanvas"),O=new BABYLON.Engine(p,!0),u=new BABYLON.Scene(O);const Y=class{constructor(e,n,o,s,t,i,r){this.destroyed=!1,this.action=!1,this.setupKeyboardInputPlayer(e,n,o,s,t,i,r)}setupKeyboardInputPlayer(e,n,o,s,t,i,r){this.keys={},e.addEventListener("keydown",(e=>{this.keys[e.key]||(this.keys[e.key]=!0)})),e.addEventListener("keyup",(e=>{this.keys[e.key]=!1})),n.runRenderLoop((()=>{this.destroyed||(this.keys[s]&&(o.applyForce(new BABYLON.Vector3(10,0,0),new BABYLON.Vector3(0,0,0)),o.setAngularVelocity(BABYLON.Vector3.ZeroReadOnly)),this.keys[t]&&(o.applyForce(new BABYLON.Vector3(-10,0,0),new BABYLON.Vector3(0,0,0)),o.setAngularVelocity(BABYLON.Vector3.ZeroReadOnly)),this.keys[r]&&!this.action&&(this.action=!0,o.applyForce(new BABYLON.Vector3(0,0,2800),new BABYLON.Vector3(0,0,0))))}))}destroy(){this.destroyed=!0,this.canvas=null,this.engine=null,this.character1=null,this.inputLeft=null,this.inputRight=null,this.inputJump=null,this.inputLaunch=null}isUpperCase(e,n){return n===e.toUpperCase()}getLastKeyPressed(){return this.lastKeyPressed}};var P=document.getElementById("renderCanvas");const b=class{constructor(e,n,o,s,t,i,r,a,l,c){this.control,this.scene=e,this.engine=n,this.name=o,this.boxBody,this.sphereBody,this.box,this.rayHelper,this.shootBall(s,t,i,r,a,l,c),this.enablePlayerControl(s,t,i,r)}testPlayer(e,n,o,s,t,i){var r=BABYLON.MeshBuilder.CreateBox(o,{width:2,height:2,depth:2},e);this.box=r,r.rotationQuaternion=BABYLON.Quaternion.Identity(),r.position=new BABYLON.Vector3(s,t,i);var a=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,0,0),BABYLON.Quaternion.Identity(),new BABYLON.Vector3(2,2,2),e),l=new BABYLON.PhysicsBody(r,BABYLON.PhysicsMotionType.DYNAMIC,!1,e);l.shape=a,l.setMassProperties({mass:1});var c=new BABYLON.StandardMaterial("groundMaterial",e);c.diffuseColor=new BABYLON.Color3(0,0,1),r.material=c,l.setCollisionCallbackEnabled(!0),this.boxBody=l}enablePlayerControl(e,n,o,s){let t=new Y(P,this.engine,this.sphereBody,n,e,o,s);this.control=t}raycast(){var e=this.scene.getMeshByName(this.name);if(e){var n=e.position,o=new BABYLON.Vector3(0,0,1),s=(n.add(o.scale(50)),new BABYLON.Ray(n,o,50)),t=new BABYLON.RayHelper(s);t.show(this.scene,new BABYLON.Color3(.9,0,0)),this.scene.pickWithRay(s),this.rayHelper=t}else console.error("Player mesh not found")}shootBall(e,n,o,s,t,i,r){const a=BABYLON.MeshBuilder.CreateSphere(this.name,{segments:16,diameter:2},this.scene);a.position=new BABYLON.Vector3(t,i,r);var l=new BABYLON.PhysicsShapeSphere(new BABYLON.Vector3(0,0,0),1,this.scene),c=new BABYLON.PhysicsBody(a,BABYLON.PhysicsMotionType.DYNAMIC,!1,this.scene);c.shape=l,c.setMassProperties({mass:2}),this.sphereBody=c}disableThisObject(){this.control.destroy(),this.control=null}instanciate(){}},v=class{constructor(e,n,o,s){this.scene=e,this.x=n,this.y=o,this.z=s,this.mesh,this.Aggregate,this.meshIdPromise=this.createBowlingPin()}createBowlingPin(){return new Promise((e=>{BABYLON.SceneLoader.ImportMesh("","./models/","Bowling Pin.glb",this.scene,(n=>{const o=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,0,0),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(.5,1.2,.5),this.scene);BABYLON.MeshBuilder.CreateBox("Pintrigger");let s=n[0];s.scaling._z=-1*s.scaling._z,s.name="Pin",s.position=new BABYLON.Vector3(this.x,this.y,this.z);var t=new BABYLON.PhysicsAggregate(s,o,{mass:.1},this.scene);t.body.setCollisionCallbackEnabled(!0),this.Aggregate=t,this.mesh=s;const i=s.uniqueId;e(i)}),void 0,void 0,".glb")}))}async getMeshId(){return await this.meshIdPromise}disableThisObject(){this.Aggregate.body.setCollisionCallbackEnabled(!1),this.Aggregate.body.dispose()}isPinUp(){const e=this.mesh.rotationQuaternion.toEulerAngles();return Math.abs(e.x)<.1}};var f=document.getElementById("renderCanvas"),C=new BABYLON.Engine(f,!0),S=new BABYLON.Scene(C);let V,E,M,I,k=0,T=0;async function x(){const e=await HavokPhysics(),n=new BABYLON.HavokPlugin(!0,e);S.enablePhysics(new BABYLON.Vector3(0,-9.81,0),n),S.collisionsEnabled=!0,new BABYLON.HemisphericLight("light",new BABYLON.Vector3(0,1,0),S);var o=new a(S),s=[],t=[];V=new b(S,C,"player1","q","d","s"," ",0,8,-8),E=new b(S,C,"player2","ArrowLeft","ArrowRight","i","Enter",25,8,-8),S.getMeshByName("player1"),document.getElementById("level3").style.display="block",function(e,n,o){e.onTriggerCollisionObservable.add((e=>{if(console.log(e.type,":",e.collider.transformNode.name,"-",e.collidedAgainst.transformNode.name),"Ending"==e.collidedAgainst.transformNode.name&&(console.log("YOU WINNNNNNN"),n=null),"Respawn"==e.collidedAgainst.transformNode.name&&("player1"==e.collider.transformNode.name||"player2"==e.collider.transformNode.name))if(console.log("YOU RESPAWNWNNN"),"player1"==e.collider.transformNode.name){let e=S.getMeshByName("player1");n.disableThisObject(),e.dispose(),n=new b(S,C,"player1","q","d","s"," ",-5,5,0)}else{let e=S.getMeshByName("player2");o.disableThisObject(),e.dispose(),o=new b(S,C,"player2","j","l","i","Enter",28,5,0)}}))}(n,V,E),o.CreateBowlingPlatform(),s=R(0,0,0,-8),t=R(0,25,0,-8),async function(e,n,o){C.runRenderLoop((async()=>{for(let n=0;n<e.length;n++)await e[n].getMeshId(),e[n].isPinUp()||(k++,e.splice(n,1),n--);document.getElementById("pin1").innerHTML=k+"/93 PINS",k>=93&&(q(),console.log("PLAYER1:"+G),console.log("PLAYER2:"+z)),(k>=93||T>=93)&&(U(),H())}))}(s),async function(e,n,o){C.runRenderLoop((async()=>{for(let n=0;n<e.length;n++)await e[n].getMeshId(),e[n].isPinUp()||(T++,e.splice(n,1),n--);document.getElementById("pin2").innerHTML=T+"/93 PINS",T>92&&(Z(),console.log("PLAYER1:"+G),console.log("PLAYER2"+z)),(k>=93||T>=93)&&(U(),H())}))}(t),S.getMeshByName("ball"),document.addEventListener("keydown",(function(e){if("Shift"===e.key){console.log('La touche "espace" a été enfoncée');let e=S.getMeshByName("player1");V.disableThisObject(),e.dispose(),V=new b(S,C,"player1","q","d","s"," ",0,8,-8)}})),document.addEventListener("keydown",(function(e){if("Backspace"===e.code){console.log('La touche "entrée" a été enfoncée');let e=S.getMeshByName("player2");E.disableThisObject(),e.dispose(),E=new b(S,C,"player2","ArrowLeft","ArrowRight","i","Enter",25,8,-8)}}))}function R(e,n,o,s){return[new v(S,.25+n,2+o,21+s),new v(S,0+n,2+o,21.5+s),new v(S,.5+n,2+o,21.5+s),new v(S,0+n,2+o,22+s),new v(S,.25+n,2+o,22+s),new v(S,.6+n,2+o,22+s),new v(S,-.5+n,2+o,22.5+s),new v(S,0+n,2+o,22.5+s),new v(S,.5+n,2+o,22.5+s),new v(S,1+n,2+o,22.5+s),new v(S,-.5+n,2+o,23+s),new v(S,-1+n,2+o,23+s),new v(S,0+n,2+o,23+s),new v(S,.5+n,2+o,23+s),new v(S,1+n,2+o,23+s),new v(S,1.5+n,2+o,23+s),new v(S,-.5+n,2+o,23.5+s),new v(S,-1+n,2+o,23.5+s),new v(S,-1.5+n,2+o,23.5+s),new v(S,0+n,2+o,23.5+s),new v(S,.5+n,2+o,23.5+s),new v(S,1+n,2+o,23.5+s),new v(S,1.5+n,2+o,23.5+s),new v(S,2+n,2+o,23.5+s),new v(S,-.5+n,2+o,24+s),new v(S,-1+n,2+o,24+s),new v(S,-1.5+n,2+o,24+s),new v(S,-2+n,2+o,24+s),new v(S,0+n,2+o,24+s),new v(S,.5+n,2+o,24+s),new v(S,1+n,2+o,24+s),new v(S,1.5+n,2+o,24+s),new v(S,2+n,2+o,24+s),new v(S,2.5+n,2+o,24+s),new v(S,-.5+n,2+o,24.5+s),new v(S,-1+n,2+o,24.5+s),new v(S,-1.5+n,2+o,24.5+s),new v(S,-2+n,2+o,24.5+s),new v(S,-2.5+n,2+o,24.5+s),new v(S,0+n,2+o,24.5+s),new v(S,.5+n,2+o,24.5+s),new v(S,1+n,2+o,24.5+s),new v(S,1.5+n,2+o,24.5+s),new v(S,2+n,2+o,24.5+s),new v(S,2.5+n,2+o,24.5+s),new v(S,3+n,2+o,24.5+s),new v(S,-.5+n,2+o,25+s),new v(S,-1+n,2+o,25+s),new v(S,-1.5+n,2+o,25+s),new v(S,-2+n,2+o,25+s),new v(S,-2.5+n,2+o,25+s),new v(S,-3+n,2+o,25+s),new v(S,0+n,2+o,25+s),new v(S,.5+n,2+o,25+s),new v(S,1+n,2+o,25+s),new v(S,1.5+n,2+o,25+s),new v(S,2+n,2+o,25+s),new v(S,2.5+n,2+o,25+s),new v(S,3+n,2+o,25+s),new v(S,3.5+n,2+o,25+s),new v(S,-.5+n,2+o,25.5+s),new v(S,-1+n,2+o,25.5+s),new v(S,-1.5+n,2+o,25.5+s),new v(S,-2+n,2+o,25.5+s),new v(S,-2.5+n,2+o,25.5+s),new v(S,-3+n,2+o,25.5+s),new v(S,-3.5+n,2+o,25.5+s),new v(S,0+n,2+o,25.5+s),new v(S,.5+n,2+o,25.5+s),new v(S,1+n,2+o,25.5+s),new v(S,1.5+n,2+o,25.5+s),new v(S,2+n,2+o,25.5+s),new v(S,2.5+n,2+o,25.5+s),new v(S,3+n,2+o,25.5+s),new v(S,3.5+n,2+o,25.5+s),new v(S,4+n,2+o,25.5+s),new v(S,-.5+n,2+o,26+s),new v(S,-1+n,2+o,26+s),new v(S,-1.5+n,2+o,26+s),new v(S,-2+n,2+o,26+s),new v(S,-2.5+n,2+o,26+s),new v(S,-3+n,2+o,26+s),new v(S,-3.5+n,2+o,26+s),new v(S,-4+n,2+o,26+s),new v(S,0+n,2+o,26+s),new v(S,.5+n,2+o,26+s),new v(S,1+n,2+o,26+s),new v(S,1.5+n,2+o,26+s),new v(S,2+n,2+o,26+s),new v(S,2.5+n,2+o,26+s),new v(S,3+n,2+o,26+s),new v(S,3.5+n,2+o,26+s),new v(S,4+n,2+o,26+s),new v(S,4.5+n,2+o,26+s)]}function H(){D()}function U(){S.meshes.forEach((function(e){e.dispose()})),S.cameras.forEach((function(e){e.dispose()})),S.lights.forEach((function(e){e.dispose()})),C.stopRenderLoop(),document.getElementById("level3").style.display="none"}var _=document.getElementById("renderCanvas"),Q=new BABYLON.Engine(_,!0),F=new BABYLON.Scene(Q);let G=0,z=0;function D(){t(),o.runRenderLoop((function(){s.render()}))}function j(){w(),function(){var e=new BABYLON.FollowCamera("camera",new BABYLON.Vector3(0,5,-10),g);e.cameraRotation=0,e.viewport=new BABYLON.Viewport(0,0,.5,.5);var n=new BABYLON.FollowCamera("camera2",new BABYLON.Vector3(0,5,-10),g);n.cameraRotation=0,n.viewport=new BABYLON.Viewport(.5,0,.5,.5),g.activeCameras.push(e),g.activeCameras.push(n),async function(){new BABYLON.HemisphericLight("light",new BABYLON.Vector3(0,1,0),g);const e=await HavokPhysics(),n=new BABYLON.HavokPlugin(!0,e);g.enablePhysics(new BABYLON.Vector3(0,-9.81,0),n),g.collisionsEnabled=!0,new a(g),function(e,n,o){const s=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,0,0),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(40,40,40),g);g.getMeshByName("RainBow");var t=BABYLON.MeshBuilder.CreateBox("Ending",{width:2,height:2,depth:2},g);t.isVisible=!1,t.position.x=-1.79,t.position.y=-1.02,t.position.z=-832.37,new BABYLON.PhysicsAggregate(t,s,{mass:0},g).shape.isTrigger=!0}(),document.getElementById("level1").style.display="block",new B(g,d,"player1","z","s","q","d",5,160,0),new B(g,d,"player2","ArrowUp","ArrowDown","ArrowLeft","ArrowRight",0,160,0),function(e,n,o){new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,0,0),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(25,2,2e3),g);var s=BABYLON.MeshBuilder.CreateBox("Die",{width:2,height:-45,depth:200},g);s.isVisible=!1,s.position.x=2,s.position.y=-45,s.position.z=-800,new BABYLON.PhysicsAggregate(s,BABYLON.PhysicsShapeType.MESH,{mass:0},g).shape.isTrigger=!0}(),new a(g).Createlevel1(0,0,-800);let o=g.getMeshByName("player1");return function(e,n){e.onTriggerCollisionObservable.add((e=>{console.log(e.type,":",e.collider.transformNode.name,"-",e.collidedAgainst.transformNode.name),"player1"==e.collider.transformNode.name&&"Ending"==e.collidedAgainst.transformNode.name&&(console.log("PLAYER 111111 PASSSSSS"),q(),console.log("COUNT_WIN PLAYER1:"+G)),"player2"==e.collider.transformNode.name&&"Ending"==e.collidedAgainst.transformNode.name&&(console.log("PLAYER 2 PASSSSSS"),Z(),console.log("COUNT_WIN PLAYER2"+z)),"tronc"==e.collidedAgainst.transformNode.name&&(console.log("End OF the Game"),A()),"Ending"==e.collidedAgainst.transformNode.name&&(console.log("COUNT_WIN PLAYER1:"+G+"  COUNT_WIN PLAYER2"+z),w(),W()),"Die"==e.collidedAgainst.transformNode.name&&(console.log("YOU DIEEEEEEEEEE"),A())}))}(n),o}().then((o=>{let s=g.getMeshByName("player2");console.log(o),e.lockedTarget=o,n.lockedTarget=s})).catch((e=>{console.error(e)})),d.runRenderLoop((function(){g.render()}))}()}function W(){!function(){var e=new BABYLON.FollowCamera("camera",new BABYLON.Vector3(0,5,-10),u);e.cameraRotation=0,e.viewport=new BABYLON.Viewport(.5,0,.5,.5);var n=new BABYLON.FollowCamera("camera2",new BABYLON.Vector3(-3,5,-10),u);n.cameraRotation=0,n.viewport=new BABYLON.Viewport(0,0,.5,.5),u.activeCameras.push(n),u.activeCameras.push(e),async function(){const e=await HavokPhysics(),n=new BABYLON.HavokPlugin(!0,e);u.enablePhysics(new BABYLON.Vector3(0,-9.81,0),n),u.collisionsEnabled=!0,new BABYLON.HemisphericLight("light",new BABYLON.Vector3(0,1,0),u),function(e,n,o){new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,0,0),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(60,2,2e3),u);var s=BABYLON.MeshBuilder.CreateBox("Ending",{width:40,height:40,depth:40},u);s.isVisible=!1,s.position.x=5,s.position.y=11,s.position.z=-620,new BABYLON.PhysicsAggregate(s,BABYLON.PhysicsShapeType.MESH,{mass:0},u).shape.isTrigger=!0}(),function(e){e.onTriggerCollisionObservable.add((e=>{console.log(e.type,":",e.collider.transformNode.name,"-",e.collidedAgainst.transformNode.name),"player1"==e.collider.transformNode.name&&"Ending"==e.collidedAgainst.transformNode.name&&(console.log("PLAYER 111111 PASSSSSS"),q(),console.log("COUNT_WIN PLAYER1:"+G)),"player2"==e.collider.transformNode.name&&"Ending"==e.collidedAgainst.transformNode.name&&(console.log("PLAYER 2 PASSSSSS"),Z(),console.log("COUNT_WIN PLAYER2"+z)),"Ending"==e.collidedAgainst.transformNode.name&&(u.meshes.forEach((function(e){e.dispose()})),u.cameras.forEach((function(e){e.dispose()})),u.lights.forEach((function(e){e.dispose()})),O.stopRenderLoop(),document.getElementById("level2").style.display="none",K())}))}(n),u.onPointerDown=function(e,n){!function(e,n){n.hit&&"player"==n.pickedMesh.name&&(n.pickedMesh.material.diffuseColor=new BABYLON.Color3(0,1,0))}(0,n)},new a(u).CreatePlateformlevel2(-7,14,-265),document.getElementById("level2").style.display="block",new m(u,O,"player1","s","f",2,15,0),new m(u,O,"player2","k","m",-15,15,0)}().then((o=>{let s=u.getMeshByName("player2");console.log("MESH PLAYER2"+s);let t=u.getMeshByName("player1");e.lockedTarget=s,n.lockedTarget=t})).catch((e=>{console.error(e)})),O.runRenderLoop((function(){u.render()}))}()}function K(){!function(){var e=new BABYLON.FreeCamera("camera",new BABYLON.Vector3(0,5,-22),S);e.inertia=0,e.angularSensibility=0,e.detachControl(f),e.cameraRotation=0,S.activeCameras.push(e),e.viewport=new BABYLON.Viewport(0,0,.5,1),S.activeCameras.push(e);var n=new BABYLON.FreeCamera("camera",new BABYLON.Vector3(25,4,-23),S);n.inertia=0,n.angularSensibility=0,n.detachControl(f),n.cameraRotation=0,S.activeCameras.push(n),n.viewport=new BABYLON.Viewport(.5,0,.5,1),S.activeCameras.push(n),x();let o=S.getMeshByName("player1");S.getMeshByName("player2"),e.lockedTarget=o,C.runRenderLoop((function(){S.render()}))}()}function q(){G++}function Z(){z++}new BABYLON.HemisphericLight("light",new BABYLON.Vector3(0,1,0),F),new BABYLON.FreeCamera("camera",new BABYLON.Vector3(0,8,-30),F),new a(F).CreateMenu3dScene(0,0,0),function(){M=BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI_button"),I=BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI_text");const e=BABYLON.GUI.Button.CreateSimpleButton("playButton","Play");e.width="150px",e.height="40px",e.color="white",e.background="grey",e.onPointerClickObservable.add((function(){console.log("Play button clicked"),F.meshes.forEach((function(e){e.dispose()})),F.cameras.forEach((function(e){e.dispose()})),F.lights.forEach((function(e){e.dispose()})),I.dispose(),M.dispose(),Q.stopRenderLoop(),j()})),M.addControl(e);const n=new BABYLON.GUI.TextBlock;n.text="Les Jeux Olympiques Maudits",n.color="white",n.fontSize=24,n.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER,n.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP,n.paddingTop="-400px",I.addControl(n)}(),Q.runRenderLoop((function(){F.render()}))})();
//# sourceMappingURL=babylonBundle.js.map