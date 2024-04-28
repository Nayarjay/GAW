(()=>{"use strict";var e={d:(n,o)=>{for(var t in o)e.o(o,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:o[t]})},o:(e,n)=>Object.prototype.hasOwnProperty.call(e,n)};e.d({},{fF:()=>I,mw:()=>R});var n=document.getElementById("renderCanvas"),o=new BABYLON.Engine(n,!0);new BABYLON.Scene(o);var t=document.getElementById("renderCanvas"),s=new BABYLON.Engine(t,!0);new BABYLON.Scene(s);class r{constructor(e){this.scene=e}async CreateTree(e,n,o){let t,s;return BABYLON.SceneLoader.ImportMesh("","./models/","Tree.glb",this.scene,(r=>{console.log("Chargement réussi arbre",r),t=r[0],s=r[1],s.name="tronc",t.position=new BABYLON.Vector3(e,n,o),new BABYLON.PhysicsAggregate(s,BABYLON.PhysicsShapeType.BOX,{mass:0},this.scene).shape.isTrigger=!0,new BABYLON.PhysicsAggregate(s,BABYLON.PhysicsShapeType.BOX,{mass:0},this.scene)}),void 0,void 0,".glb"),{boundingBox:void 0}}async CreatePineTree(e,n,o){let t,s;return BABYLON.SceneLoader.ImportMesh("","./models/","Pine Tree with Snow.glb",this.scene,(r=>{console.log("Chargement réussi arbre",r),r[0].scaling.x=3,r[0].scaling.y=2,r[0].scaling.z=4,t=r[0],s=r[1],s.name="tronc",console.log(s.name),t.position=new BABYLON.Vector3(e,n,o);const a=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,1,3),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(3,3,5),this.scene),i=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,1,3),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(3,3,5),this.scene);new BABYLON.PhysicsAggregate(s,a,{mass:0},this.scene).shape.isTrigger=!0,new BABYLON.PhysicsAggregate(s,i,{mass:0},this.scene)}),void 0,void 0,".glb")}CreateSnowManOnSki(e,n,o,t){let s;return BABYLON.SceneLoader.ImportMesh("","./models/","snowman_on_skis.glb",this.scene,(r=>{console.log("Chargement réussi SnowMan",r),s=r[0],s.name="SnowMan",s.position=new BABYLON.Vector3(e,n,o),s.setParent(t)}),void 0,void 0,".glb"),{mesh:s}}async CreateSceneProd(e,n,o){}async CreatePlayer(e,n,o){}async Zone(e,n,o){}async plane(e,n,o,t,s,r){var a=BABYLON.MeshBuilder.CreateGround("ground",{width:t,height:s,subdivisions:1},r);a.position.addInPlace(new BABYLON.Vector3(e,n,o)),a.rotation=new BABYLON.Vector3(-.1,0,0),new BABYLON.PhysicsAggregate(a,BABYLON.PhysicsShapeType.BOX,{mass:0},r);var i=new BABYLON.StandardMaterial("groundMaterial",r);return i.diffuseColor=new BABYLON.Color3(.92,.29,.28),a.material=i,a}async flatplane(e,n,o,t,s,r){var a=BABYLON.MeshBuilder.CreateGround("ground",{width:t,height:s,subdivisions:1},r);a.position.addInPlace(new BABYLON.Vector3(e,n,o)),a.rotation=new BABYLON.Vector3(0,0,0),new BABYLON.PhysicsAggregate(a,BABYLON.PhysicsShapeType.BOX,{mass:0},r);var i=new BABYLON.StandardMaterial("groundMaterial",r);return i.diffuseColor=new BABYLON.Color3(.92,.29,.28),a.material=i,a}async createDeadTree(e,n,o){let t;return BABYLON.SceneLoader.ImportMesh("","./models/","Dead Trees With Snow.glb",this.scene,(s=>{console.log("Chargement réussi arbre",s),s[0].scaling.x=30,s[0].scaling.y=20,s[0].scaling.z=20;let r=s[0];t=s[1],t.name="tronc",console.log(t.name);const a=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,1,3),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(30,30,30),this.scene);r.position=new BABYLON.Vector3(e,n,o),new BABYLON.PhysicsAggregate(t,a,{mass:0},this.scene).shape.isTrigger=!0,new BABYLON.PhysicsAggregate(t,BABYLON.PhysicsShapeType.BOX,{mass:0},this.scene)}),void 0,void 0,".glb"),{boundingBox:void 0}}async createSnowTree(e,n,o){let t;return BABYLON.SceneLoader.ImportMesh("","./models/","Snow Tree.glb",this.scene,(s=>{console.log("Chargement réussi arbre",s),s[0].scaling.x=10,s[0].scaling.y=10,s[0].scaling.z=10;let r=s[0];t=s[1],t.name="tronc",console.log(t.name);const a=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,0,-1),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(5,10,5),this.scene),i=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,0,-1),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(5,10,5),this.scene);r.position=new BABYLON.Vector3(e,n,o),new BABYLON.PhysicsAggregate(t,a,{mass:0},this.scene).shape.isTrigger=!0,new BABYLON.PhysicsAggregate(t,i,{mass:0},this.scene)}),void 0,void 0,".glb"),{boundingBox:void 0}}async createLitleSnowTree(e,n,o){let t;return BABYLON.SceneLoader.ImportMesh("","./models/","Pine Tree with Snow two.glb",this.scene,(s=>{console.log("Chargement réussi arbre",s),s[0].scaling.x=10,s[0].scaling.y=10,s[0].scaling.z=10;let r=s[0];t=s[1],t.name="tronc",console.log(t.name);const a=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,0,-1),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(5,10,5),this.scene),i=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,0,-1),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(5,10,5),this.scene);r.position=new BABYLON.Vector3(e,n,o),new BABYLON.PhysicsAggregate(t,a,{mass:0},this.scene).shape.isTrigger=!0,new BABYLON.PhysicsAggregate(t,i,{mass:0},this.scene)}),void 0,void 0,".glb"),{boundingBox:void 0}}async createSnowMan(e,n,o){let t;return BABYLON.SceneLoader.ImportMesh("","./models/","SnowManRotated.glb",this.scene,(s=>{console.log("Chargement réussi arbre",s),s[0].scaling.x=1,s[0].scaling.y=1,s[0].scaling.z=1;let r=s[0];t=s[1],t.name="tronc",console.log("SNOWMAN "+r.name);const a=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,4,0),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(5,10,5),this.scene),i=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,4,-1),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(5,10,5),this.scene);r.position=new BABYLON.Vector3(e,n,o),new BABYLON.PhysicsAggregate(t,a,{mass:0},this.scene).shape.isTrigger=!0,new BABYLON.PhysicsAggregate(t,i,{mass:0},this.scene)}),void 0,void 0,".glb"),{boundingBox:void 0}}CreateRampe1(e,n,o){let t=BABYLON.SceneLoader.ImportMesh("","./models/","rampe_2.glb",this.scene,(t=>{console.log("Chargement réussi",t),t[0].scaling.x=5,t[0].scaling.y=5,t[0].scaling.z=5;let s=t[0];console.log(t[1].name),s.name="Rampe";let r=t[1];s.position=new BABYLON.Vector3(e,n,o),new BABYLON.PhysicsAggregate(r,BABYLON.PhysicsShapeType.MESH,{mass:0},this.scene)}),void 0,void 0,".glb");return t.position=new BABYLON.Vector3(e,n,o),{bigMesh:t}}createSnowMount(e,n,o){let t=BABYLON.SceneLoader.ImportMesh("","./models/","Rock Forms 3 (White).glb",this.scene,(t=>{console.log("Chargement réussi",t),t[0].scaling.x=150,t[0].scaling.y=150,t[0].scaling.z=150;const s=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,4,0),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(10,10,20),this.scene);let r=t[0];r.name="tronc",console.log(t[1].name);let a=t[1];a.name="tronc",r.position=new BABYLON.Vector3(e,n,o),new BABYLON.PhysicsAggregate(r,s,{mass:0},this.scene).shape.isTrigger=!0,new BABYLON.PhysicsAggregate(a,BABYLON.PhysicsShapeType.MESH,{mass:0},this.scene)}),void 0,void 0,".glb");return t.position=new BABYLON.Vector3(e,n,o),{bigMesh:t}}createFinalScene2(e,n,o){let t=BABYLON.SceneLoader.ImportMesh("","./models/","finalscene2.glb",this.scene,(t=>{console.log("Chargement réussi",t),new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,0,0),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(10,10,20),this.scene);let s=t[0];s.name="tronc",console.log(t[2].name),this.scene.getMeshByName("Cube (sol)"),s.position=new BABYLON.Vector3(e,n,o);let r=1;for(;r<t.length;)new BABYLON.PhysicsAggregate(t[r],BABYLON.PhysicsShapeType.MESH,{mass:0},this.scene),r++}),void 0,void 0,".glb");return t.position=new BABYLON.Vector3(e,n,o),{bigMesh:t}}CreatePlateform(e,n,o){return BABYLON.SceneLoader.ImportMesh("","./models/","plateforme_scene3.glb",this.scene,(t=>{console.log("Chargement réussi plateform",t);let s=t[0];s.name="colision",s.position=new BABYLON.Vector3(e,n,o);let r=1;for(;r<t.length;)new BABYLON.PhysicsAggregate(t[r],BABYLON.PhysicsShapeType.MESH,{mass:0},this.scene),r++}),void 0,void 0,".glb"),{boundingBox:void 0}}CreatePlateform_Scene4(e,n,o){return BABYLON.SceneLoader.ImportMesh("","./models/","scene4_gameplay_ELEMENT.glb",this.scene,(t=>{console.log("Chargement réussi plateform",t);let s=t[0];s.name="colision",s.position=new BABYLON.Vector3(e,n,o);let r=1;for(;r<t.length;)new BABYLON.PhysicsAggregate(t[r],BABYLON.PhysicsShapeType.MESH,{mass:0},this.scene),r++}),void 0,void 0,".glb"),{boundingBox:void 0}}CreateBowlingBall(e,n,o){return BABYLON.SceneLoader.ImportMesh("","./models/","Spiky Ball.glb",this.scene,(t=>{console.log("Chargement réussi ball",t);let s=t[0];s.name="ball",s.position=new BABYLON.Vector3(e,n,o),new BABYLON.PhysicsAggregate(s,BABYLON.PhysicsShapeType.SPHERE,{mass:0},this.scene)}),void 0,void 0,".glb"),{boundingBox:void 0}}CreateColiseum(e,n,o){return BABYLON.SceneLoader.ImportMesh("","./models/","coliseum.glb",this.scene,(t=>{console.log("Chargement réussi coliseum",t);let s=t[0];s.name="coliseum",s.position=new BABYLON.Vector3(e,n,o)}),void 0,void 0,".glb"),{boundingBox:void 0}}CreateColiseum(e,n,o){return BABYLON.SceneLoader.ImportMesh("","./models/","coliseum.glb",this.scene,(t=>{console.log("Chargement réussi coliseum",t);let s=t[0];s.name="coliseum",s.position=new BABYLON.Vector3(e,n,o)}),void 0,void 0,".glb"),{boundingBox:void 0}}}const a=class{constructor(e,n,o,t,s,r,a){this.setupKeyboardInput(e,n,o,t,s,r,a)}setupKeyboardInput(e,n,o,t,s,r,a){this.keys={},e.addEventListener("keydown",(e=>{this.keys[e.key]=!0})),e.addEventListener("keyup",(e=>{this.keys[e.key]=!1})),n.runRenderLoop((()=>{if(this.keys[t]){let e=o.transformNode.forward.scale(-5);console.log(e),o.applyForce(e,o.transformNode.position),o.setAngularVelocity(BABYLON.Vector3.ZeroReadOnly)}this.keys[s]&&(o.applyForce(new BABYLON.Vector3(0,0,5),new BABYLON.Vector3(0,0,0)),o.setAngularVelocity(BABYLON.Vector3.ZeroReadOnly)),this.keys[r]&&(o.applyForce(new BABYLON.Vector3(5,0,0),new BABYLON.Vector3(0,0,0)),o.setAngularVelocity(new BABYLON.Vector3(0,-.5,0))),this.keys[a]&&(o.applyForce(new BABYLON.Vector3(-5,0,0),new BABYLON.Vector3(0,0,0)),o.setAngularVelocity(new BABYLON.Vector3(0,.5,0)))}))}};var i=document.getElementById("renderCanvas");class c{constructor(e,n,o,t,s,r,a,i,c,B){this.scene=e,this.engine=n,this.boxBody,this.testPlayer(e,n,o,i,c,B),this.enablePlayerControl(t,s,r,a)}testPlayer(e,n,o,t,s,a){var i=BABYLON.MeshBuilder.CreateBox(o,{width:2,height:2,depth:2},e);i.isVisible=!1,new r(e).CreateSnowManOnSki(t,s-.5,a,i),i.rotationQuaternion=BABYLON.Quaternion.Identity(),i.position=new BABYLON.Vector3(t,s,a);var c=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,0,0),BABYLON.Quaternion.Identity(),new BABYLON.Vector3(2,2,2),e),B=new BABYLON.PhysicsBody(i,BABYLON.PhysicsMotionType.DYNAMIC,!1,e);B.shape=c,B.setMassProperties({mass:1});var l=new BABYLON.StandardMaterial("groundMaterial",e);return l.diffuseColor=new BABYLON.Color3(0,0,1),i.material=l,B.setCollisionCallbackEnabled(!0),this.boxBody=B,i}enablePlayerControl(e,n,o,t){new a(i,this.engine,this.boxBody,e,n,o,t)}destroyPlayer(){control=null}}var B=document.getElementById("renderCanvas"),l=new BABYLON.Engine(B,!0),h=new BABYLON.Scene(l);function w(e){h.meshes.forEach((function(e){e.dispose()})),h.cameras.forEach((function(e){e.dispose()})),h.lights.forEach((function(e){e.dispose()})),l.stopRenderLoop()}function g(){h.getMeshByName("player1"),h.getMeshByName("player2")}const d=class{constructor(e,n,o,t,s,r,a){this.setupKeyboardInputPlayer(e,o,t,s,r,a)}setupKeyboardInputPlayer(e,n,o,t,s,r){this.keys={};let a=!1,i=!1;e.addEventListener("keydown",(e=>{this.keys[e.key]||(this.keys[e.key]=!0,e.key!==t||a||(a=!0),e.key!==s||i||(i=!0,console.log("Touche enfoncée, action effectuée jump")))})),e.addEventListener("keyup",(e=>{this.keys[e.key]=!1,e.key===s&&(i=!1,console.log("Touche relâchée jump")),e.key===t&&(a=!1)})),n.runRenderLoop((()=>{a&&(o.applyForce(new BABYLON.Vector3(0,0,-50),new BABYLON.Vector3(0,0,0)),o.setAngularVelocity(new BABYLON.Vector3(0,0,0)),a=!1),i&&(o.applyForce(new BABYLON.Vector3(0,100,0),new BABYLON.Vector3(0,0,0)),o.setAngularVelocity(new BABYLON.Vector3(0,0,0)),i=!1),o.setAngularVelocity(new BABYLON.Vector3(0,0,0))}))}};var N=document.getElementById("renderCanvas");const A=class{constructor(e,n,o,t,s,r,a,i){this.scene=e,this.engine=n,this.name=o,this.boxBody,this.boxMesh,this.animationGroups,this.createPlayer(r,a,i),this.enablePlayerControl(t,s)}async createPlayer(e,n,o){var t=BABYLON.MeshBuilder.CreateBox(this.name,{width:2,height:2,depth:2},this.scene);this.boxMesh=t,t.rotationQuaternion=BABYLON.Quaternion.Identity(),t.position=new BABYLON.Vector3(e,n,o);var s=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,0,0),BABYLON.Quaternion.Identity(),new BABYLON.Vector3(2,2,2),this.scene),r=new BABYLON.PhysicsBody(t,BABYLON.PhysicsMotionType.DYNAMIC,!1,this.scene);this.boxBody=r,r.shape=s,r.setMassProperties({mass:1});var a=new BABYLON.StandardMaterial("groundMaterial",this.scene);return a.diffuseColor=new BABYLON.Color3(0,0,1),t.material=a,r.setCollisionCallbackEnabled(!0),await this.Character(e,n,o,t),t}enablePlayerControl(e,n){new d(N,this.scene,this.engine,this.boxBody,e,n,this.animationGroups)}destroyPlayer(){control=null}async Character(e,n,o,t){let s;const{meshes:r,animationGroups:a}=await BABYLON.SceneLoader.ImportMeshAsync("","./models/character1_anim/","animCharacter.glb",this.scene);return s=r[0],s.name="RUNNER",s.position=new BABYLON.Vector3(e,n-1.05,o),t&&s.setParent(t),this.animationGroups=a,console.log("Chargement réussi Personnage",s),{mesh:s}}};var L=document.getElementById("renderCanvas"),y=new BABYLON.Engine(L,!0),O=new BABYLON.Scene(y);const p=class{constructor(e,n,o,t,s,r,a){this.destroyed=!1,this.action=!1,this.setupKeyboardInputPlayer(e,n,o,t,s,r,a)}setupKeyboardInputPlayer(e,n,o,t,s,r,a){this.keys={},e.addEventListener("keydown",(e=>{this.keys[e.key]||(this.keys[e.key]=!0)})),e.addEventListener("keyup",(e=>{this.keys[e.key]=!1})),n.runRenderLoop((()=>{this.destroyed||(this.keys[t]&&(console.log("Touche gauche enfoncée"),o.applyForce(new BABYLON.Vector3(10,0,0),new BABYLON.Vector3(0,0,0)),o.setAngularVelocity(BABYLON.Vector3.ZeroReadOnly)),this.keys[s]&&(console.log("Touche Droite enfoncée"),o.applyForce(new BABYLON.Vector3(-10,0,0),new BABYLON.Vector3(0,0,0)),o.setAngularVelocity(BABYLON.Vector3.ZeroReadOnly)),this.keys[r]&&!this.action&&(console.log("Touche JUMP enfoncée"),o.applyForce(new BABYLON.Vector3(0,30,0),new BABYLON.Vector3(0,0,0)),o.setAngularVelocity(BABYLON.Vector3.ZeroReadOnly)),this.keys[a]&&!this.action&&(console.log("Touche LAUNCH enfoncée"),this.action=!0,o.applyForce(new BABYLON.Vector3(0,0,2800),new BABYLON.Vector3(0,0,0))))}))}destroy(){this.destroyed=!0,this.canvas=null,this.engine=null,this.character1=null,this.inputLeft=null,this.inputRight=null,this.inputJump=null,this.inputLaunch=null}};var Y=document.getElementById("renderCanvas");const m=class{constructor(e,n,o,t,s,r,a,i,c,B){this.control,this.scene=e,this.engine=n,this.name=o,this.boxBody,this.sphereBody,this.box,this.rayHelper,this.shootBall(t,s,r,a,i,c,B),this.enablePlayerControl(t,s,r,a)}testPlayer(e,n,o,t,s,r){var a=BABYLON.MeshBuilder.CreateBox(o,{width:2,height:2,depth:2},e);this.box=a,a.rotationQuaternion=BABYLON.Quaternion.Identity(),a.position=new BABYLON.Vector3(t,s,r);var i=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,0,0),BABYLON.Quaternion.Identity(),new BABYLON.Vector3(2,2,2),e),c=new BABYLON.PhysicsBody(a,BABYLON.PhysicsMotionType.DYNAMIC,!1,e);c.shape=i,c.setMassProperties({mass:1});var B=new BABYLON.StandardMaterial("groundMaterial",e);B.diffuseColor=new BABYLON.Color3(0,0,1),a.material=B,c.setCollisionCallbackEnabled(!0),this.boxBody=c}enablePlayerControl(e,n,o,t){let s=new p(Y,this.engine,this.sphereBody,n,e,o,t);this.control=s}raycast(){var e=this.scene.getMeshByName(this.name);if(e){var n=e.position,o=new BABYLON.Vector3(0,0,1),t=(n.add(o.scale(50)),new BABYLON.Ray(n,o,50)),s=new BABYLON.RayHelper(t);s.show(this.scene,new BABYLON.Color3(.9,0,0)),this.scene.pickWithRay(t),this.rayHelper=s}else console.error("Player mesh not found")}shootBall(e,n,o,t,s,r,a){const i=BABYLON.MeshBuilder.CreateSphere(this.name,{segments:16,diameter:2},this.scene);i.position=new BABYLON.Vector3(s,r,a);var c=new BABYLON.PhysicsShapeSphere(new BABYLON.Vector3(0,0,0),1,this.scene),B=new BABYLON.PhysicsBody(i,BABYLON.PhysicsMotionType.DYNAMIC,!1,this.scene);B.shape=c,B.setMassProperties({mass:2}),this.sphereBody=B}disableThisObject(){this.control.destroy(),this.control=null}instanciate(){}},u=class{constructor(e,n,o,t){this.scene=e,this.x=n,this.y=o,this.z=t,this.mesh,this.Aggregate,this.meshIdPromise=this.createBowlingPin()}createBowlingPin(){return new Promise((e=>{BABYLON.SceneLoader.ImportMesh("","./models/","Bowling Pin.glb",this.scene,(n=>{new BABYLON.PhysicsShapeCapsule(new BABYLON.Vector3(0,0,0),10,this.scene);const o=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,0,0),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(.5,1.2,.5),this.scene);new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,0,0),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(.5,1.2,.5),this.scene),BABYLON.MeshBuilder.CreateBox("Pintrigger");let t=n[0];t.scaling._z=-1*t.scaling._z,t.name="Pin",t.position=new BABYLON.Vector3(this.x,this.y,this.z);var s=new BABYLON.PhysicsAggregate(t,o,{mass:.5},this.scene);s.body.setCollisionCallbackEnabled(!0),this.Aggregate=s,this.mesh=t;const r=t.uniqueId;e(r)}),void 0,void 0,".glb")}))}async getMeshId(){return await this.meshIdPromise}disableThisObject(){this.Aggregate.body.setCollisionCallbackEnabled(!1),this.Aggregate.body.dispose()}isPinUp(){const e=this.mesh.rotationQuaternion.toEulerAngles();return Math.abs(e.x)<.1}};var S=document.getElementById("renderCanvas"),P=new BABYLON.Engine(S,!0),V=new BABYLON.Scene(P);let v,b,C=0,M=0;function f(e,n,o,t,s,r){const a=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,0,0),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(t,s,r),V);var i=BABYLON.MeshBuilder.CreateBox("Respawn",{width:2,height:2,depth:2},V);i.isVisible=!1,i.position.x=e,i.position.y=n,i.position.z=o,new BABYLON.PhysicsAggregate(i,a,{mass:0},V).shape.isTrigger=!0}async function T(e,n,o){P.runRenderLoop((async()=>{for(let o=0;o<e.length;o++)await e[o].getMeshId(),e[o].isPinUp()||(n++,e.splice(o,1),o--);console.log("compteur "+o+" "+n)}))}function E(e,n,o,t){return[new u(V,.25+n,2+o,21+t),new u(V,0+n,2+o,21.5+t),new u(V,.5+n,2+o,21.5+t),new u(V,0+n,2+o,22+t),new u(V,.25+n,2+o,22+t),new u(V,.6+n,2+o,22+t),new u(V,-.5+n,2+o,22.5+t),new u(V,0+n,2+o,22.5+t),new u(V,.5+n,2+o,22.5+t),new u(V,1+n,2+o,22.5+t),new u(V,-.5+n,2+o,23+t),new u(V,-1+n,2+o,23+t),new u(V,0+n,2+o,23+t),new u(V,.5+n,2+o,23+t),new u(V,1+n,2+o,23+t),new u(V,1.5+n,2+o,23+t),new u(V,-.5+n,2+o,23.5+t),new u(V,-1+n,2+o,23.5+t),new u(V,-1.5+n,2+o,23.5+t),new u(V,0+n,2+o,23.5+t),new u(V,.5+n,2+o,23.5+t),new u(V,1+n,2+o,23.5+t),new u(V,1.5+n,2+o,23.5+t),new u(V,2+n,2+o,23.5+t),new u(V,-.5+n,2+o,24+t),new u(V,-1+n,2+o,24+t),new u(V,-1.5+n,2+o,24+t),new u(V,-2+n,2+o,24+t),new u(V,0+n,2+o,24+t),new u(V,.5+n,2+o,24+t),new u(V,1+n,2+o,24+t),new u(V,1.5+n,2+o,24+t),new u(V,2+n,2+o,24+t),new u(V,2.5+n,2+o,24+t),new u(V,-.5+n,2+o,24.5+t),new u(V,-1+n,2+o,24.5+t),new u(V,-1.5+n,2+o,24.5+t),new u(V,-2+n,2+o,24.5+t),new u(V,-2.5+n,2+o,24.5+t),new u(V,0+n,2+o,24.5+t),new u(V,.5+n,2+o,24.5+t),new u(V,1+n,2+o,24.5+t),new u(V,1.5+n,2+o,24.5+t),new u(V,2+n,2+o,24.5+t),new u(V,2.5+n,2+o,24.5+t),new u(V,3+n,2+o,24.5+t),new u(V,-.5+n,2+o,25+t),new u(V,-1+n,2+o,25+t),new u(V,-1.5+n,2+o,25+t),new u(V,-2+n,2+o,25+t),new u(V,-2.5+n,2+o,25+t),new u(V,-3+n,2+o,25+t),new u(V,0+n,2+o,25+t),new u(V,.5+n,2+o,25+t),new u(V,1+n,2+o,25+t),new u(V,1.5+n,2+o,25+t),new u(V,2+n,2+o,25+t),new u(V,2.5+n,2+o,25+t),new u(V,3+n,2+o,25+t),new u(V,3.5+n,2+o,25+t),new u(V,-.5+n,2+o,25.5+t),new u(V,-1+n,2+o,25.5+t),new u(V,-1.5+n,2+o,25.5+t),new u(V,-2+n,2+o,25.5+t),new u(V,-2.5+n,2+o,25.5+t),new u(V,-3+n,2+o,25.5+t),new u(V,-3.5+n,2+o,25.5+t),new u(V,0+n,2+o,25.5+t),new u(V,.5+n,2+o,25.5+t),new u(V,1+n,2+o,25.5+t),new u(V,1.5+n,2+o,25.5+t),new u(V,2+n,2+o,25.5+t),new u(V,2.5+n,2+o,25.5+t),new u(V,3+n,2+o,25.5+t),new u(V,3.5+n,2+o,25.5+t),new u(V,4+n,2+o,25.5+t),new u(V,-.5+n,2+o,26+t),new u(V,-1+n,2+o,26+t),new u(V,-1.5+n,2+o,26+t),new u(V,-2+n,2+o,26+t),new u(V,-2.5+n,2+o,26+t),new u(V,-3+n,2+o,26+t),new u(V,-3.5+n,2+o,26+t),new u(V,-4+n,2+o,26+t),new u(V,0+n,2+o,26+t),new u(V,.5+n,2+o,26+t),new u(V,1+n,2+o,26+t),new u(V,1.5+n,2+o,26+t),new u(V,2+n,2+o,26+t),new u(V,2.5+n,2+o,26+t),new u(V,3+n,2+o,26+t),new u(V,3.5+n,2+o,26+t),new u(V,4+n,2+o,26+t),new u(V,4.5+n,2+o,26+t)]}var x=document.getElementById("renderCanvas"),k=new BABYLON.Engine(x,!0);function I(){!function(){var e=new BABYLON.FollowCamera("camera",new BABYLON.Vector3(0,5,-10),O);e.cameraRotation=0,e.viewport=new BABYLON.Viewport(.5,0,.5,.5);var n=new BABYLON.FollowCamera("camera2",new BABYLON.Vector3(-3,5,-10),O);n.cameraRotation=0,n.viewport=new BABYLON.Viewport(0,0,.5,.5),O.activeCameras.push(n),O.activeCameras.push(e),async function(){const e=await HavokPhysics(),n=new BABYLON.HavokPlugin(!0,e);O.enablePhysics(new BABYLON.Vector3(0,-9.81,0),n),O.collisionsEnabled=!0,new BABYLON.HemisphericLight("light",new BABYLON.Vector3(0,1,0),O),new A(O,y,"player1","s","f",10,15,0),new A(O,y,"player2","k","m",0,15,0),function(){new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,0,0),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(25,2,2e3),O);var e=BABYLON.MeshBuilder.CreateBox("Ending",{width:20,height:20,depth:20},O);e.isVisible=!1,e.position.x=5,e.position.y=11,e.position.z=-962,new BABYLON.PhysicsAggregate(e,BABYLON.PhysicsShapeType.MESH,{mass:0},O).shape.isTrigger=!0}(),function(e){e.onTriggerCollisionObservable.add((e=>{console.log(e.type,":",e.collider.transformNode.name,"-",e.collidedAgainst.transformNode.name),"Ending"==e.collidedAgainst.transformNode.name&&(console.log("YOU WINNNNNNN"),O.meshes.forEach((function(e){e.dispose()})),O.cameras.forEach((function(e){e.dispose()})),O.lights.forEach((function(e){e.dispose()})),y.stopRenderLoop(),R())}))}(n),O.onPointerDown=function(e,n){!function(e,n){n.hit&&"player"==n.pickedMesh.name&&(n.pickedMesh.material.diffuseColor=new BABYLON.Color3(0,1,0))}(0,n)},new r(O).CreatePlateform(0,0,-472,678)}().then((o=>{let t=O.getMeshByName("player2");console.log("MESH PLAYER2"+t);let s=O.getMeshByName("player1");e.lockedTarget=t,n.lockedTarget=s})).catch((e=>{console.error(e)})),y.runRenderLoop((function(){O.render()}))}()}function R(){!function(){var e=new BABYLON.FreeCamera("camera",new BABYLON.Vector3(0,5,-10),V);e.inertia=0,e.angularSensibility=0,e.detachControl(S),e.cameraRotation=0,V.activeCameras.push(e),e.viewport=new BABYLON.Viewport(0,0,.5,1),V.activeCameras.push(e);var n=new BABYLON.FreeCamera("camera",new BABYLON.Vector3(27,5,-10),V);n.inertia=0,n.angularSensibility=0,n.detachControl(S),n.cameraRotation=0,V.activeCameras.push(n),n.viewport=new BABYLON.Viewport(.5,0,.5,1),V.activeCameras.push(n),async function(){const e=await HavokPhysics(),n=new BABYLON.HavokPlugin(!0,e);V.enablePhysics(new BABYLON.Vector3(0,-9.81,0),n),V.collisionsEnabled=!0,new BABYLON.HemisphericLight("light",new BABYLON.Vector3(0,1,0),V);var o=new r(V),t=[],s=[];v=new m(V,P,"player1","q","d","s"," ",0,8,0),b=new m(V,P,"player2","j","l","i","Enter",28,8,0),V.getMeshByName("player1"),function(e,n,o){e.onTriggerCollisionObservable.add((e=>{if(console.log(e.type,":",e.collider.transformNode.name,"-",e.collidedAgainst.transformNode.name),"Ending"==e.collidedAgainst.transformNode.name&&(console.log("YOU WINNNNNNN"),n=null),"Respawn"==e.collidedAgainst.transformNode.name&&("player1"==e.collider.transformNode.name||"player2"==e.collider.transformNode.name))if(console.log("YOU RESPAWNWNNN"),"player1"==e.collider.transformNode.name){let e=V.getMeshByName("player1");n.disableThisObject(),e.dispose(),n=new m(V,P,"player1","q","d","s"," ",-5,5,0)}else{let e=V.getMeshByName("player2");o.disableThisObject(),e.dispose(),o=new m(V,P,"player2","j","l","i","Enter",28,5,0)}}))}(n,v,b),o.CreatePlateform_Scene4(),t=E(0,0,0,-10),s=E(0,28,0,-10),T(t,C,"player1"),T(s,M,"player2"),V.getMeshByName("ball"),f(0,2,97.43,30,30,10),f(7.5,2,48,1,30,90),f(-7.5,2,48,1,30,90),f(30,2,97.43,30,30,10),f(20,2,48,1,30,90),f(35.5,2,48,1,30,90)}();let o=V.getMeshByName("player1"),t=V.getMeshByName("player2");console.log(t),e.lockedTarget=o,P.runRenderLoop((function(){V.render()}))}()}new BABYLON.Scene(k),w(),function(){var e=new BABYLON.FollowCamera("camera",new BABYLON.Vector3(0,5,-10),h);e.cameraRotation=0,e.viewport=new BABYLON.Viewport(0,0,.5,.5);var n=new BABYLON.FollowCamera("camera2",new BABYLON.Vector3(0,5,-10),h);n.cameraRotation=0,n.viewport=new BABYLON.Viewport(.5,0,.5,.5),h.activeCameras.push(e),h.activeCameras.push(n),async function(){new BABYLON.HemisphericLight("light",new BABYLON.Vector3(0,1,0),h);const e=await HavokPhysics(),n=new BABYLON.HavokPlugin(!0,e);h.enablePhysics(new BABYLON.Vector3(0,-9.81,0),n),h.collisionsEnabled=!0;var o=new r(h);o.plane(5,0,-45,25,150,h);var t=new r(h);t.CreatePineTree(0,3,-20),t.CreatePineTree(10,3,-20),t.CreatePineTree(15,3,-20),t.CreatePineTree(-5,3,-20),new r(h);var s=new r(h);s.createSnowTree(0,4.5,-40),s.createSnowTree(5,4.5,-40),s.createSnowTree(15,4.5,-40);var a=new r(h);a.createLitleSnowTree(-5,3,-60),a.createLitleSnowTree(9,3,-60),a.createLitleSnowTree(15,3,-60);var i=new r(h);i.createSnowMan(0,-2.5,-80),i.createSnowMan(-5,-2.5,-80),i.createSnowMan(5,-2.5,-80);var B=new r(h);B.CreateRampe1(10,-5,-110),o.plane(5,-25,-250,25,230,h);var d=new r(h),N=new r(h);N.createSnowMount(0,-12,-160),N.createSnowMount(11,-20,-220),N.createSnowMount(0,-23,-265),N.createSnowMount(11,-25.5,-300),B.CreateRampe1(-5,-34.5,-360),new r(h).CreateTree(0,0,-10),new r,o.plane(5,-25,-250,25,230,h),new r(h).flatplane(5,-32,-445,25,100,h),d.CreateRampe1(12,-32,-500),i.createSnowMan(12,-28,-500),d.CreateRampe1(4,-32,-500),i.createSnowMan(5,-28,-500),d.CreateRampe1(-4,-32,-500),new r(h).flatplane(5,-28,-580,25,100,h),d.CreateRampe1(12,-28,-630),N.createSnowMount(4,-24,-630),new r(h).flatplane(5,-24,-750,25,200,h),i.createSnowTree(12,-20,-705),N.createSnowTree(-4,-20,-705),i.createSnowTree(12,-20,-715),N.createSnowTree(-4,-20,-715),i.createSnowTree(12,-20,-725),N.createSnowTree(-4,-20,-725),i.createSnowTree(12,-20,-735),N.createSnowTree(-4,-20,-735),i.createSnowTree(12,-20,-745),N.createSnowTree(-4,-20,-745),i.createSnowTree(12,-20,-755),N.createSnowTree(-4,-20,-755),i.createSnowTree(12,-20,-765),N.createSnowTree(-4,-20,-765),i.createSnowTree(12,-20,-770),N.createSnowTree(-4,-20,-770),i.createSnowTree(12,-20,-775),N.createSnowTree(-4,-20,-775),i.createSnowTree(12,-20,-785),N.createSnowTree(-4,-20,-785),i.createSnowTree(12,-20,-800),N.createSnowTree(-4,-20,-800),i.createSnowTree(12,-20,-810),N.createSnowTree(-4,-20,-810),i.createSnowTree(12,-20,-820),N.createSnowTree(-4,-20,-820),i.createSnowTree(12,-20,-830),N.createSnowTree(-4,-20,-830),i.createSnowTree(12,-20,-840),N.createSnowTree(-4,-20,-840),d.CreateRampe1(4,-24,-850),function(){const e=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,0,0),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(10,10,10),h);h.getMeshByName("RainBow");var n=BABYLON.MeshBuilder.CreateBox("Ending",{width:2,height:2,depth:2},h);n.isVisible=!1,n.position.x=2,n.position.y=-24,n.position.z=-1010,new BABYLON.PhysicsAggregate(n,e,{mass:0},h).shape.isTrigger=!0}(),new c(h,l,"player1","z","s","q","d",5,5,0),new c(h,l,"player2","i","k","j","l",0,5,0),function(){new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,0,0),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(25,2,2e3),h);var e=BABYLON.MeshBuilder.CreateBox("Die",{width:100,height:2,depth:2e3},h);e.isVisible=!1,e.position.x=2,e.position.y=-45,e.position.z=-800,new BABYLON.PhysicsAggregate(e,BABYLON.PhysicsShapeType.MESH,{mass:0},h).shape.isTrigger=!0}(),new r(h).createFinalScene2(4,-24,-970);let A=h.getMeshByName("player1");return function(e,n){e.onTriggerCollisionObservable.add((e=>{console.log(e.type,":",e.collider.transformNode.name,"-",e.collidedAgainst.transformNode.name),"tronc"==e.collidedAgainst.transformNode.name&&(console.log("End OF the Game"),g()),"Ending"==e.collidedAgainst.transformNode.name&&(console.log("YOU WINNNNNNN"),w(),I()),"Die"==e.collidedAgainst.transformNode.name&&(console.log("YOU DIEEEEEEEEEE"),g())}))}(n),A}().then((o=>{let t=h.getMeshByName("player2");console.log(o),e.lockedTarget=o,n.lockedTarget=t})).catch((e=>{console.error(e)})),l.runRenderLoop((function(){h.render()}))}()})();
//# sourceMappingURL=babylonBundle.js.map