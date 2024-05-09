(()=>{"use strict";var e={d:(n,t)=>{for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},o:(e,n)=>Object.prototype.hasOwnProperty.call(e,n)};e.d({},{mh:()=>I,fF:()=>x,mw:()=>R});var n=document.getElementById("renderCanvas"),t=new BABYLON.Engine(n,!0);new BABYLON.Scene(t);class o{constructor(e){this.scene=e}async CreateTree(e,n,t){let o,s;return BABYLON.SceneLoader.ImportMesh("","./models/","Tree.glb",this.scene,(r=>{console.log("Chargement réussi arbre",r),o=r[0],s=r[1],s.name="tronc",o.position=new BABYLON.Vector3(e,n,t),new BABYLON.PhysicsAggregate(s,BABYLON.PhysicsShapeType.BOX,{mass:0},this.scene).shape.isTrigger=!0,new BABYLON.PhysicsAggregate(s,BABYLON.PhysicsShapeType.BOX,{mass:0},this.scene)}),void 0,void 0,".glb"),{boundingBox:void 0}}async CreatePineTree(e,n,t){let o,s;return BABYLON.SceneLoader.ImportMesh("","./models/","Pine Tree with Snow.glb",this.scene,(r=>{console.log("Chargement réussi arbre",r),r[0].scaling.x=3,r[0].scaling.y=2,r[0].scaling.z=4,o=r[0],s=r[1],s.name="tronc",console.log(s.name),o.position=new BABYLON.Vector3(e,n,t);const a=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,1,3),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(3,3,5),this.scene),i=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,1,3),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(3,3,5),this.scene);new BABYLON.PhysicsAggregate(s,a,{mass:0},this.scene).shape.isTrigger=!0,new BABYLON.PhysicsAggregate(s,i,{mass:0},this.scene)}),void 0,void 0,".glb")}CreateSnowManOnSki(e,n,t,o){let s;return BABYLON.SceneLoader.ImportMesh("","./models/","snowman_on_skis.glb",this.scene,(r=>{console.log("Chargement réussi SnowMan",r),s=r[0],s.name="SnowMan",s.position=new BABYLON.Vector3(e,n,t),s.setParent(o)}),void 0,void 0,".glb"),{mesh:s}}async CreateSceneProd(e,n,t){}async CreatePlayer(e,n,t){}async Zone(e,n,t){}async plane(e,n,t,o,s,r){var a=BABYLON.MeshBuilder.CreateGround("ground",{width:o,height:s,subdivisions:1},r);a.position.addInPlace(new BABYLON.Vector3(e,n,t)),a.rotation=new BABYLON.Vector3(-.1,0,0),new BABYLON.PhysicsAggregate(a,BABYLON.PhysicsShapeType.BOX,{mass:0},r);var i=new BABYLON.StandardMaterial("groundMaterial",r);return i.diffuseColor=new BABYLON.Color3(.92,.29,.28),a.material=i,a}async flatplane(e,n,t,o,s,r){var a=BABYLON.MeshBuilder.CreateGround("ground",{width:o,height:s,subdivisions:1},r);a.position.addInPlace(new BABYLON.Vector3(e,n,t)),a.rotation=new BABYLON.Vector3(0,0,0),new BABYLON.PhysicsAggregate(a,BABYLON.PhysicsShapeType.BOX,{mass:0},r);var i=new BABYLON.StandardMaterial("groundMaterial",r);return i.diffuseColor=new BABYLON.Color3(.92,.29,.28),a.material=i,a}async createDeadTree(e,n,t){let o;return BABYLON.SceneLoader.ImportMesh("","./models/","Dead Trees With Snow.glb",this.scene,(s=>{console.log("Chargement réussi arbre",s),s[0].scaling.x=30,s[0].scaling.y=20,s[0].scaling.z=20;let r=s[0];o=s[1],o.name="tronc",console.log(o.name);const a=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,1,3),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(30,30,30),this.scene);r.position=new BABYLON.Vector3(e,n,t),new BABYLON.PhysicsAggregate(o,a,{mass:0},this.scene).shape.isTrigger=!0,new BABYLON.PhysicsAggregate(o,BABYLON.PhysicsShapeType.BOX,{mass:0},this.scene)}),void 0,void 0,".glb"),{boundingBox:void 0}}async createSnowTree(e,n,t){let o;return BABYLON.SceneLoader.ImportMesh("","./models/","Snow Tree.glb",this.scene,(s=>{console.log("Chargement réussi arbre",s),s[0].scaling.x=10,s[0].scaling.y=10,s[0].scaling.z=10;let r=s[0];o=s[1],o.name="tronc",console.log(o.name);const a=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,0,-1),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(5,10,5),this.scene),i=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,0,-1),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(5,10,5),this.scene);r.position=new BABYLON.Vector3(e,n,t),new BABYLON.PhysicsAggregate(o,a,{mass:0},this.scene).shape.isTrigger=!0,new BABYLON.PhysicsAggregate(o,i,{mass:0},this.scene)}),void 0,void 0,".glb"),{boundingBox:void 0}}async createLitleSnowTree(e,n,t){let o;return BABYLON.SceneLoader.ImportMesh("","./models/","Pine Tree with Snow two.glb",this.scene,(s=>{console.log("Chargement réussi arbre",s),s[0].scaling.x=10,s[0].scaling.y=10,s[0].scaling.z=10;let r=s[0];o=s[1],o.name="tronc",console.log(o.name);const a=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,0,-1),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(5,10,5),this.scene),i=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,0,-1),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(5,10,5),this.scene);r.position=new BABYLON.Vector3(e,n,t),new BABYLON.PhysicsAggregate(o,a,{mass:0},this.scene).shape.isTrigger=!0,new BABYLON.PhysicsAggregate(o,i,{mass:0},this.scene)}),void 0,void 0,".glb"),{boundingBox:void 0}}async createSnowMan(e,n,t){let o;return BABYLON.SceneLoader.ImportMesh("","./models/","SnowManRotated.glb",this.scene,(s=>{console.log("Chargement réussi arbre",s),s[0].scaling.x=1,s[0].scaling.y=1,s[0].scaling.z=1;let r=s[0];o=s[1],o.name="tronc",console.log("SNOWMAN "+r.name);const a=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,4,0),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(5,10,5),this.scene),i=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,4,-1),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(5,10,5),this.scene);r.position=new BABYLON.Vector3(e,n,t),new BABYLON.PhysicsAggregate(o,a,{mass:0},this.scene).shape.isTrigger=!0,new BABYLON.PhysicsAggregate(o,i,{mass:0},this.scene)}),void 0,void 0,".glb"),{boundingBox:void 0}}CreateRampe1(e,n,t){let o=BABYLON.SceneLoader.ImportMesh("","./models/","rampe_2.glb",this.scene,(o=>{console.log("Chargement réussi",o),o[0].scaling.x=5,o[0].scaling.y=5,o[0].scaling.z=5;let s=o[0];console.log(o[1].name),s.name="Rampe";let r=o[1];s.position=new BABYLON.Vector3(e,n,t),new BABYLON.PhysicsAggregate(r,BABYLON.PhysicsShapeType.MESH,{mass:0},this.scene)}),void 0,void 0,".glb");return o.position=new BABYLON.Vector3(e,n,t),{bigMesh:o}}createSnowMount(e,n,t){let o=BABYLON.SceneLoader.ImportMesh("","./models/","Rock Forms 3 (White).glb",this.scene,(o=>{console.log("Chargement réussi",o),o[0].scaling.x=150,o[0].scaling.y=150,o[0].scaling.z=150;const s=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,4,0),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(10,10,20),this.scene);let r=o[0];r.name="tronc",console.log(o[1].name);let a=o[1];a.name="tronc",r.position=new BABYLON.Vector3(e,n,t),new BABYLON.PhysicsAggregate(r,s,{mass:0},this.scene).shape.isTrigger=!0,new BABYLON.PhysicsAggregate(a,BABYLON.PhysicsShapeType.MESH,{mass:0},this.scene)}),void 0,void 0,".glb");return o.position=new BABYLON.Vector3(e,n,t),{bigMesh:o}}createFinalScene2(e,n,t){let o=BABYLON.SceneLoader.ImportMesh("","./models/","finalscene2.glb",this.scene,(o=>{console.log("Chargement réussi",o),new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,0,0),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(10,10,20),this.scene);let s=o[0];s.name="tronc",console.log(o[2].name),this.scene.getMeshByName("Cube (sol)"),s.position=new BABYLON.Vector3(e,n,t);let r=1;for(;r<o.length;)new BABYLON.PhysicsAggregate(o[r],BABYLON.PhysicsShapeType.MESH,{mass:0},this.scene),r++}),void 0,void 0,".glb");return o.position=new BABYLON.Vector3(e,n,t),{bigMesh:o}}CreatePlateform(e,n,t){return BABYLON.SceneLoader.ImportMesh("","./models/","plateforme_scene3.glb",this.scene,(o=>{console.log("Chargement réussi plateform",o);let s=o[0];s.name="colision",s.position=new BABYLON.Vector3(e,n,t);let r=1;for(;r<o.length;)new BABYLON.PhysicsAggregate(o[r],BABYLON.PhysicsShapeType.MESH,{mass:0},this.scene),r++}),void 0,void 0,".glb"),{boundingBox:void 0}}CreatePlateform_Scene4(e,n,t){return BABYLON.SceneLoader.ImportMesh("","./models/","scene4_gameplay_ELEMENT.glb",this.scene,(o=>{console.log("Chargement réussi plateform",o);let s=o[0];s.name="colision",s.position=new BABYLON.Vector3(e,n,t);let r=1;for(;r<o.length;)new BABYLON.PhysicsAggregate(o[r],BABYLON.PhysicsShapeType.MESH,{mass:0},this.scene),r++}),void 0,void 0,".glb"),{boundingBox:void 0}}CreateBowlingBall(e,n,t){return BABYLON.SceneLoader.ImportMesh("","./models/","Spiky Ball.glb",this.scene,(o=>{console.log("Chargement réussi ball",o);let s=o[0];s.name="ball",s.position=new BABYLON.Vector3(e,n,t),new BABYLON.PhysicsAggregate(s,BABYLON.PhysicsShapeType.SPHERE,{mass:0},this.scene)}),void 0,void 0,".glb"),{boundingBox:void 0}}CreateColiseum(e,n,t){return BABYLON.SceneLoader.ImportMesh("","./models/","coliseum.glb",this.scene,(o=>{console.log("Chargement réussi coliseum",o);let s=o[0];s.name="coliseum",s.position=new BABYLON.Vector3(e,n,t)}),void 0,void 0,".glb"),{boundingBox:void 0}}CreateColiseum(e,n,t){return BABYLON.SceneLoader.ImportMesh("","./models/","coliseum.glb",this.scene,(o=>{console.log("Chargement réussi coliseum",o);let s=o[0];s.name="coliseum",s.position=new BABYLON.Vector3(e,n,t)}),void 0,void 0,".glb"),{boundingBox:void 0}}CreateMenu3dScene(e,n,t){return BABYLON.SceneLoader.ImportMesh("","./models/","menu.glb",this.scene,(o=>{console.log("Chargement réussi du menu",o);let s=o[0];s.name="fondMenu",s.position=new BABYLON.Vector3(e,n,t)}),void 0,void 0,".glb"),{boundingBox:void 0}}}const s=class{constructor(e,n,t,o,s,r,a){this.setupKeyboardInput(e,n,t,o,s,r,a)}setupKeyboardInput(e,n,t,o,s,r,a){this.keys={},e.addEventListener("keydown",(e=>{this.keys[e.key]=!0})),e.addEventListener("keyup",(e=>{this.keys[e.key]=!1})),n.runRenderLoop((()=>{if(this.keys[o]){let e=t.transformNode.forward.scale(-5);console.log(e),t.applyForce(e,t.transformNode.position),t.setAngularVelocity(BABYLON.Vector3.ZeroReadOnly)}this.keys[s]&&(t.applyForce(new BABYLON.Vector3(0,0,5),new BABYLON.Vector3(0,0,0)),t.setAngularVelocity(BABYLON.Vector3.ZeroReadOnly)),this.keys[r]&&(t.applyForce(new BABYLON.Vector3(5,0,0),new BABYLON.Vector3(0,0,0)),t.setAngularVelocity(new BABYLON.Vector3(0,-.5,0))),this.keys[a]&&(t.applyForce(new BABYLON.Vector3(-5,0,0),new BABYLON.Vector3(0,0,0)),t.setAngularVelocity(new BABYLON.Vector3(0,.5,0)))}))}};var r=document.getElementById("renderCanvas");class a{constructor(e,n,t,o,s,r,a,i,c,B){this.scene=e,this.engine=n,this.boxBody,this.testPlayer(e,n,t,i,c,B),this.enablePlayerControl(o,s,r,a)}testPlayer(e,n,t,s,r,a){var i=BABYLON.MeshBuilder.CreateBox(t,{width:2,height:2,depth:2},e);i.isVisible=!1,new o(e).CreateSnowManOnSki(s,r-.5,a,i),i.rotationQuaternion=BABYLON.Quaternion.Identity(),i.position=new BABYLON.Vector3(s,r,a);var c=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,0,0),BABYLON.Quaternion.Identity(),new BABYLON.Vector3(2,2,2),e),B=new BABYLON.PhysicsBody(i,BABYLON.PhysicsMotionType.DYNAMIC,!1,e);B.shape=c,B.setMassProperties({mass:1});var l=new BABYLON.StandardMaterial("groundMaterial",e);return l.diffuseColor=new BABYLON.Color3(0,0,1),i.material=l,B.setCollisionCallbackEnabled(!0),this.boxBody=B,i}enablePlayerControl(e,n,t,o){new s(r,this.engine,this.boxBody,e,n,t,o)}destroyPlayer(){control=null}}var i=document.getElementById("renderCanvas"),c=new BABYLON.Engine(i,!0),B=new BABYLON.Scene(c);function l(e){B.meshes.forEach((function(e){e.dispose()})),B.cameras.forEach((function(e){e.dispose()})),B.lights.forEach((function(e){e.dispose()})),c.stopRenderLoop(),document.getElementById("level1").style.display="none"}function h(){B.getMeshByName("player1"),B.getMeshByName("player2")}const w=class{constructor(e,n,t,o,s,r,a){this.setupKeyboardInputPlayer(e,t,o,s,r,a)}setupKeyboardInputPlayer(e,n,t,o,s,r){this.keys={};let a=!1,i=!1;e.addEventListener("keydown",(e=>{this.keys[e.key]||(this.keys[e.key]=!0,e.key!==o||a||(a=!0),e.key!==s||i||(i=!0,console.log("Touche enfoncée, action effectuée jump")))})),e.addEventListener("keyup",(e=>{this.keys[e.key]=!1,e.key===s&&(i=!1,console.log("Touche relâchée jump")),e.key===o&&(a=!1)})),n.runRenderLoop((()=>{a&&(t.applyForce(new BABYLON.Vector3(0,0,-50),new BABYLON.Vector3(0,0,0)),t.setAngularVelocity(new BABYLON.Vector3(0,0,0)),a=!1),i&&(t.applyForce(new BABYLON.Vector3(0,100,0),new BABYLON.Vector3(0,0,0)),t.setAngularVelocity(new BABYLON.Vector3(0,0,0)),i=!1),t.setAngularVelocity(new BABYLON.Vector3(0,0,0))}))}};var d=new BABYLON.Engine(g,!0),g=document.getElementById("renderCanvas");const N=class{constructor(e,n,t,o,s,r,a,i){this.scene=e,this.engine=n,this.name=t,this.boxBody,this.boxMesh,this.animationGroups=[],this.forward=o,this.jump=s,this.createPlayer(r,a,i),this.enablePlayerControl(o,s)}async createPlayer(e,n,t){var o=BABYLON.MeshBuilder.CreateBox(this.name,{width:2,height:2,depth:2},this.scene);this.boxMesh=o,o.visibility=!1,o.rotationQuaternion=BABYLON.Quaternion.Identity(),o.position=new BABYLON.Vector3(e,n,t);var s=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,0,0),BABYLON.Quaternion.Identity(),new BABYLON.Vector3(2,2,2),this.scene),r=new BABYLON.PhysicsBody(o,BABYLON.PhysicsMotionType.DYNAMIC,!1,this.scene);this.boxBody=r,r.shape=s,r.setMassProperties({mass:1});var a=new BABYLON.StandardMaterial("groundMaterial",this.scene);return a.diffuseColor=new BABYLON.Color3(0,0,1),o.material=a,r.setCollisionCallbackEnabled(!0),this.animationGroups=await this.Character(e,n,t,o),o}enablePlayerControl(e,n){new w(g,this.scene,this.engine,this.boxBody,e,n,this.animationGroups)}destroyPlayer(){control=null}async Character(e,n,t,o){let s;const{meshes:r,animationGroups:a}=await BABYLON.SceneLoader.ImportMeshAsync("","./models/character1_anim/","animCharacter.glb",this.scene);return s=r[0],s.name="RUNNER",s.position=new BABYLON.Vector3(e,n-1.05,t),o&&s.setParent(o),this.animationGroups.push(a),console.log("Chargement réussi Personnage",s),await this.animGestionner(g,this.forward,this.jump,a),{animationGroups:a}}async animGestionner(e,n,t,o){this.keys={};let s=!1,r=!1;e.addEventListener("keydown",(e=>{this.keys[e.key]||(this.keys[e.key]=!0,e.key!==n||s||(s=!0),e.key!==t||r||(r=!0))})),e.addEventListener("keyup",(e=>{this.keys[e.key]=!1,e.key===t&&(r=!1),e.key===n&&(s=!1)})),d.runRenderLoop((()=>{s&&(s=!1,console.log("VOILA LE GROUPE :"+o),o[2].play()),r&&(r=!1,o[1].play())}))}};var y=document.getElementById("renderCanvas"),A=new BABYLON.Engine(y,!0),L=new BABYLON.Scene(A);const p=class{constructor(e,n,t,o,s,r,a){this.destroyed=!1,this.action=!1,this.setupKeyboardInputPlayer(e,n,t,o,s,r,a)}setupKeyboardInputPlayer(e,n,t,o,s,r,a){this.keys={},e.addEventListener("keydown",(e=>{this.keys[e.key]||(this.keys[e.key]=!0)})),e.addEventListener("keyup",(e=>{this.keys[e.key]=!1})),n.runRenderLoop((()=>{this.destroyed||(this.keys[o]&&(t.applyForce(new BABYLON.Vector3(10,0,0),new BABYLON.Vector3(0,0,0)),t.setAngularVelocity(BABYLON.Vector3.ZeroReadOnly)),this.keys[s]&&(t.applyForce(new BABYLON.Vector3(-10,0,0),new BABYLON.Vector3(0,0,0)),t.setAngularVelocity(BABYLON.Vector3.ZeroReadOnly)),this.keys[a]&&!this.action&&(this.action=!0,t.applyForce(new BABYLON.Vector3(0,0,2800),new BABYLON.Vector3(0,0,0))))}))}destroy(){this.destroyed=!0,this.canvas=null,this.engine=null,this.character1=null,this.inputLeft=null,this.inputRight=null,this.inputJump=null,this.inputLaunch=null}isUpperCase(e,n){return n===e.toUpperCase()}getLastKeyPressed(){return this.lastKeyPressed}};var O=document.getElementById("renderCanvas");const m=class{constructor(e,n,t,o,s,r,a,i,c,B){this.control,this.scene=e,this.engine=n,this.name=t,this.boxBody,this.sphereBody,this.box,this.rayHelper,this.shootBall(o,s,r,a,i,c,B),this.enablePlayerControl(o,s,r,a)}testPlayer(e,n,t,o,s,r){var a=BABYLON.MeshBuilder.CreateBox(t,{width:2,height:2,depth:2},e);this.box=a,a.rotationQuaternion=BABYLON.Quaternion.Identity(),a.position=new BABYLON.Vector3(o,s,r);var i=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,0,0),BABYLON.Quaternion.Identity(),new BABYLON.Vector3(2,2,2),e),c=new BABYLON.PhysicsBody(a,BABYLON.PhysicsMotionType.DYNAMIC,!1,e);c.shape=i,c.setMassProperties({mass:1});var B=new BABYLON.StandardMaterial("groundMaterial",e);B.diffuseColor=new BABYLON.Color3(0,0,1),a.material=B,c.setCollisionCallbackEnabled(!0),this.boxBody=c}enablePlayerControl(e,n,t,o){let s=new p(O,this.engine,this.sphereBody,n,e,t,o);this.control=s}raycast(){var e=this.scene.getMeshByName(this.name);if(e){var n=e.position,t=new BABYLON.Vector3(0,0,1),o=(n.add(t.scale(50)),new BABYLON.Ray(n,t,50)),s=new BABYLON.RayHelper(o);s.show(this.scene,new BABYLON.Color3(.9,0,0)),this.scene.pickWithRay(o),this.rayHelper=s}else console.error("Player mesh not found")}shootBall(e,n,t,o,s,r,a){const i=BABYLON.MeshBuilder.CreateSphere(this.name,{segments:16,diameter:2},this.scene);i.position=new BABYLON.Vector3(s,r,a);var c=new BABYLON.PhysicsShapeSphere(new BABYLON.Vector3(0,0,0),1,this.scene),B=new BABYLON.PhysicsBody(i,BABYLON.PhysicsMotionType.DYNAMIC,!1,this.scene);B.shape=c,B.setMassProperties({mass:2}),this.sphereBody=B}disableThisObject(){this.control.destroy(),this.control=null}instanciate(){}},u=class{constructor(e,n,t,o){this.scene=e,this.x=n,this.y=t,this.z=o,this.mesh,this.Aggregate,this.meshIdPromise=this.createBowlingPin()}createBowlingPin(){return new Promise((e=>{BABYLON.SceneLoader.ImportMesh("","./models/","Bowling Pin.glb",this.scene,(n=>{const t=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,0,0),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(.5,1.2,.5),this.scene);BABYLON.MeshBuilder.CreateBox("Pintrigger");let o=n[0];o.scaling._z=-1*o.scaling._z,o.name="Pin",o.position=new BABYLON.Vector3(this.x,this.y,this.z);var s=new BABYLON.PhysicsAggregate(o,t,{mass:.2},this.scene);s.body.setCollisionCallbackEnabled(!0),this.Aggregate=s,this.mesh=o;const r=o.uniqueId;e(r)}),void 0,void 0,".glb")}))}async getMeshId(){return await this.meshIdPromise}disableThisObject(){this.Aggregate.body.setCollisionCallbackEnabled(!1),this.Aggregate.body.dispose()}isPinUp(){const e=this.mesh.rotationQuaternion.toEulerAngles();return Math.abs(e.x)<.1}};var Y=document.getElementById("renderCanvas"),S=new BABYLON.Engine(Y,!0),v=new BABYLON.Scene(S);let b,P,C,V;async function f(e,n,t){S.runRenderLoop((async()=>{for(let n=0;n<e.length;n++)await e[n].getMeshId(),e[n].isPinUp()||(e.splice(n,1),n--)}))}function M(e,n,t,o){return[new u(v,.25+n,2+t,21+o),new u(v,0+n,2+t,21.5+o),new u(v,.5+n,2+t,21.5+o),new u(v,0+n,2+t,22+o),new u(v,.25+n,2+t,22+o),new u(v,.6+n,2+t,22+o),new u(v,-.5+n,2+t,22.5+o),new u(v,0+n,2+t,22.5+o),new u(v,.5+n,2+t,22.5+o),new u(v,1+n,2+t,22.5+o),new u(v,-.5+n,2+t,23+o),new u(v,-1+n,2+t,23+o),new u(v,0+n,2+t,23+o),new u(v,.5+n,2+t,23+o),new u(v,1+n,2+t,23+o),new u(v,1.5+n,2+t,23+o),new u(v,-.5+n,2+t,23.5+o),new u(v,-1+n,2+t,23.5+o),new u(v,-1.5+n,2+t,23.5+o),new u(v,0+n,2+t,23.5+o),new u(v,.5+n,2+t,23.5+o),new u(v,1+n,2+t,23.5+o),new u(v,1.5+n,2+t,23.5+o),new u(v,2+n,2+t,23.5+o),new u(v,-.5+n,2+t,24+o),new u(v,-1+n,2+t,24+o),new u(v,-1.5+n,2+t,24+o),new u(v,-2+n,2+t,24+o),new u(v,0+n,2+t,24+o),new u(v,.5+n,2+t,24+o),new u(v,1+n,2+t,24+o),new u(v,1.5+n,2+t,24+o),new u(v,2+n,2+t,24+o),new u(v,2.5+n,2+t,24+o),new u(v,-.5+n,2+t,24.5+o),new u(v,-1+n,2+t,24.5+o),new u(v,-1.5+n,2+t,24.5+o),new u(v,-2+n,2+t,24.5+o),new u(v,-2.5+n,2+t,24.5+o),new u(v,0+n,2+t,24.5+o),new u(v,.5+n,2+t,24.5+o),new u(v,1+n,2+t,24.5+o),new u(v,1.5+n,2+t,24.5+o),new u(v,2+n,2+t,24.5+o),new u(v,2.5+n,2+t,24.5+o),new u(v,3+n,2+t,24.5+o),new u(v,-.5+n,2+t,25+o),new u(v,-1+n,2+t,25+o),new u(v,-1.5+n,2+t,25+o),new u(v,-2+n,2+t,25+o),new u(v,-2.5+n,2+t,25+o),new u(v,-3+n,2+t,25+o),new u(v,0+n,2+t,25+o),new u(v,.5+n,2+t,25+o),new u(v,1+n,2+t,25+o),new u(v,1.5+n,2+t,25+o),new u(v,2+n,2+t,25+o),new u(v,2.5+n,2+t,25+o),new u(v,3+n,2+t,25+o),new u(v,3.5+n,2+t,25+o),new u(v,-.5+n,2+t,25.5+o),new u(v,-1+n,2+t,25.5+o),new u(v,-1.5+n,2+t,25.5+o),new u(v,-2+n,2+t,25.5+o),new u(v,-2.5+n,2+t,25.5+o),new u(v,-3+n,2+t,25.5+o),new u(v,-3.5+n,2+t,25.5+o),new u(v,0+n,2+t,25.5+o),new u(v,.5+n,2+t,25.5+o),new u(v,1+n,2+t,25.5+o),new u(v,1.5+n,2+t,25.5+o),new u(v,2+n,2+t,25.5+o),new u(v,2.5+n,2+t,25.5+o),new u(v,3+n,2+t,25.5+o),new u(v,3.5+n,2+t,25.5+o),new u(v,4+n,2+t,25.5+o),new u(v,-.5+n,2+t,26+o),new u(v,-1+n,2+t,26+o),new u(v,-1.5+n,2+t,26+o),new u(v,-2+n,2+t,26+o),new u(v,-2.5+n,2+t,26+o),new u(v,-3+n,2+t,26+o),new u(v,-3.5+n,2+t,26+o),new u(v,-4+n,2+t,26+o),new u(v,0+n,2+t,26+o),new u(v,.5+n,2+t,26+o),new u(v,1+n,2+t,26+o),new u(v,1.5+n,2+t,26+o),new u(v,2+n,2+t,26+o),new u(v,2.5+n,2+t,26+o),new u(v,3+n,2+t,26+o),new u(v,3.5+n,2+t,26+o),new u(v,4+n,2+t,26+o),new u(v,4.5+n,2+t,26+o)]}var T=document.getElementById("renderCanvas"),E=new BABYLON.Engine(T,!0),k=new BABYLON.Scene(E);function I(){l(),function(){var e=new BABYLON.FollowCamera("camera",new BABYLON.Vector3(0,5,-10),B);e.cameraRotation=0,e.viewport=new BABYLON.Viewport(0,0,.5,.5);var n=new BABYLON.FollowCamera("camera2",new BABYLON.Vector3(0,5,-10),B);n.cameraRotation=0,n.viewport=new BABYLON.Viewport(.5,0,.5,.5),B.activeCameras.push(e),B.activeCameras.push(n),async function(){document.getElementById("level1").style.display="block",new BABYLON.HemisphericLight("light",new BABYLON.Vector3(0,1,0),B);const e=await HavokPhysics(),n=new BABYLON.HavokPlugin(!0,e);B.enablePhysics(new BABYLON.Vector3(0,-9.81,0),n),B.collisionsEnabled=!0;var t=new o(B);t.plane(5,0,-45,25,150,B);var s=new o(B);s.CreatePineTree(0,3,-20),s.CreatePineTree(10,3,-20),s.CreatePineTree(15,3,-20),s.CreatePineTree(-5,3,-20),new o(B);var r=new o(B);r.createSnowTree(0,4.5,-40),r.createSnowTree(5,4.5,-40),r.createSnowTree(15,4.5,-40);var i=new o(B);i.createLitleSnowTree(-5,3,-60),i.createLitleSnowTree(9,3,-60),i.createLitleSnowTree(15,3,-60);var w=new o(B);w.createSnowMan(0,-2.5,-80),w.createSnowMan(-5,-2.5,-80),w.createSnowMan(5,-2.5,-80);var d=new o(B);d.CreateRampe1(10,-5,-110),t.plane(5,-25,-250,25,230,B);var g=new o(B),N=new o(B);N.createSnowMount(0,-12,-160),N.createSnowMount(11,-20,-220),N.createSnowMount(0,-23,-265),N.createSnowMount(11,-25.5,-300),d.CreateRampe1(-5,-34.5,-360),new o(B).CreateTree(0,0,-10),new o,t.plane(5,-25,-250,25,230,B),new o(B).flatplane(5,-32,-445,25,100,B),g.CreateRampe1(12,-32,-500),w.createSnowMan(12,-28,-500),g.CreateRampe1(4,-32,-500),w.createSnowMan(5,-28,-500),g.CreateRampe1(-4,-32,-500),new o(B).flatplane(5,-28,-580,25,100,B),g.CreateRampe1(12,-28,-630),N.createSnowMount(4,-24,-630),new o(B).flatplane(5,-24,-750,25,200,B),w.createSnowTree(12,-20,-705),N.createSnowTree(-4,-20,-705),w.createSnowTree(12,-20,-715),N.createSnowTree(-4,-20,-715),w.createSnowTree(12,-20,-725),N.createSnowTree(-4,-20,-725),w.createSnowTree(12,-20,-735),N.createSnowTree(-4,-20,-735),w.createSnowTree(12,-20,-745),N.createSnowTree(-4,-20,-745),w.createSnowTree(12,-20,-755),N.createSnowTree(-4,-20,-755),w.createSnowTree(12,-20,-765),N.createSnowTree(-4,-20,-765),w.createSnowTree(12,-20,-770),N.createSnowTree(-4,-20,-770),w.createSnowTree(12,-20,-775),N.createSnowTree(-4,-20,-775),w.createSnowTree(12,-20,-785),N.createSnowTree(-4,-20,-785),w.createSnowTree(12,-20,-800),N.createSnowTree(-4,-20,-800),w.createSnowTree(12,-20,-810),N.createSnowTree(-4,-20,-810),w.createSnowTree(12,-20,-820),N.createSnowTree(-4,-20,-820),w.createSnowTree(12,-20,-830),N.createSnowTree(-4,-20,-830),w.createSnowTree(12,-20,-840),N.createSnowTree(-4,-20,-840),g.CreateRampe1(4,-24,-850),function(){const e=new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,0,0),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(10,10,10),B);B.getMeshByName("RainBow");var n=BABYLON.MeshBuilder.CreateBox("Ending",{width:2,height:2,depth:2},B);n.isVisible=!1,n.position.x=2,n.position.y=-24,n.position.z=-1010,new BABYLON.PhysicsAggregate(n,e,{mass:0},B).shape.isTrigger=!0}(),new a(B,c,"player1","z","s","q","d",5,5,0),new a(B,c,"player2","i","k","j","l",0,5,0),function(){new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,0,0),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(25,2,2e3),B);var e=BABYLON.MeshBuilder.CreateBox("Die",{width:100,height:2,depth:2e3},B);e.isVisible=!1,e.position.x=2,e.position.y=-45,e.position.z=-800,new BABYLON.PhysicsAggregate(e,BABYLON.PhysicsShapeType.MESH,{mass:0},B).shape.isTrigger=!0}(),new o(B).createFinalScene2(4,-24,-970);let y=B.getMeshByName("player1");return function(e,n){e.onTriggerCollisionObservable.add((e=>{console.log(e.type,":",e.collider.transformNode.name,"-",e.collidedAgainst.transformNode.name),"tronc"==e.collidedAgainst.transformNode.name&&(console.log("End OF the Game"),h()),"Ending"==e.collidedAgainst.transformNode.name&&(console.log("YOU WINNNNNNN"),l(),x()),"Die"==e.collidedAgainst.transformNode.name&&(console.log("YOU DIEEEEEEEEEE"),h())}))}(n),y}().then((t=>{let o=B.getMeshByName("player2");console.log(t),e.lockedTarget=t,n.lockedTarget=o})).catch((e=>{console.error(e)})),c.runRenderLoop((function(){B.render()}))}()}function x(){!function(){var e=new BABYLON.FollowCamera("camera",new BABYLON.Vector3(0,5,-10),L);e.cameraRotation=0,e.viewport=new BABYLON.Viewport(.5,0,.5,.5);var n=new BABYLON.FollowCamera("camera2",new BABYLON.Vector3(-3,5,-10),L);n.cameraRotation=0,n.viewport=new BABYLON.Viewport(0,0,.5,.5),L.activeCameras.push(n),L.activeCameras.push(e),async function(){const e=await HavokPhysics(),n=new BABYLON.HavokPlugin(!0,e);L.enablePhysics(new BABYLON.Vector3(0,-9.81,0),n),L.collisionsEnabled=!0,new BABYLON.HemisphericLight("light",new BABYLON.Vector3(0,1,0),L),new N(L,A,"player1","s","f",10,15,0),new N(L,A,"player2","k","m",0,15,0),function(){new BABYLON.PhysicsShapeBox(new BABYLON.Vector3(0,0,0),new BABYLON.Quaternion(0,0,0,1),new BABYLON.Vector3(25,2,2e3),L);var e=BABYLON.MeshBuilder.CreateBox("Ending",{width:20,height:20,depth:20},L);e.isVisible=!1,e.position.x=5,e.position.y=11,e.position.z=-962,new BABYLON.PhysicsAggregate(e,BABYLON.PhysicsShapeType.MESH,{mass:0},L).shape.isTrigger=!0}(),function(e){e.onTriggerCollisionObservable.add((e=>{console.log(e.type,":",e.collider.transformNode.name,"-",e.collidedAgainst.transformNode.name),"Ending"==e.collidedAgainst.transformNode.name&&(console.log("YOU WINNNNNNN"),L.meshes.forEach((function(e){e.dispose()})),L.cameras.forEach((function(e){e.dispose()})),L.lights.forEach((function(e){e.dispose()})),A.stopRenderLoop(),document.getElementById("level2").style.display="none",R())}))}(n),L.onPointerDown=function(e,n){!function(e,n){n.hit&&"player"==n.pickedMesh.name&&(n.pickedMesh.material.diffuseColor=new BABYLON.Color3(0,1,0))}(0,n)},new o(L).CreatePlateform(0,0,-472,678),document.getElementById("level2").style.display="block"}().then((t=>{let o=L.getMeshByName("player2");console.log("MESH PLAYER2"+o);let s=L.getMeshByName("player1");e.lockedTarget=o,n.lockedTarget=s})).catch((e=>{console.error(e)})),A.runRenderLoop((function(){L.render()}))}()}function R(){!function(){var e=new BABYLON.FreeCamera("camera",new BABYLON.Vector3(0,5,-10),v);e.inertia=0,e.angularSensibility=0,e.detachControl(Y),e.cameraRotation=0,v.activeCameras.push(e),e.viewport=new BABYLON.Viewport(0,0,.5,1),v.activeCameras.push(e);var n=new BABYLON.FreeCamera("camera",new BABYLON.Vector3(27,5,-10),v);n.inertia=0,n.angularSensibility=0,n.detachControl(Y),n.cameraRotation=0,v.activeCameras.push(n),n.viewport=new BABYLON.Viewport(.5,0,.5,1),v.activeCameras.push(n),async function(){const e=await HavokPhysics(),n=new BABYLON.HavokPlugin(!0,e);v.enablePhysics(new BABYLON.Vector3(0,-9.81,0),n),v.collisionsEnabled=!0,new BABYLON.HemisphericLight("light",new BABYLON.Vector3(0,1,0),v);var t=new o(v),s=[],r=[];b=new m(v,S,"player1","q","d","s"," ",0,8,0),P=new m(v,S,"player2","ArrowLeft","ArrowRight","i","Enter",28,8,0),v.getMeshByName("player1"),function(e,n,t){e.onTriggerCollisionObservable.add((e=>{if(console.log(e.type,":",e.collider.transformNode.name,"-",e.collidedAgainst.transformNode.name),"Ending"==e.collidedAgainst.transformNode.name&&(console.log("YOU WINNNNNNN"),n=null),"Respawn"==e.collidedAgainst.transformNode.name&&("player1"==e.collider.transformNode.name||"player2"==e.collider.transformNode.name))if(console.log("YOU RESPAWNWNNN"),"player1"==e.collider.transformNode.name){let e=v.getMeshByName("player1");n.disableThisObject(),e.dispose(),n=new m(v,S,"player1","q","d","s"," ",-5,5,0)}else{let e=v.getMeshByName("player2");t.disableThisObject(),e.dispose(),t=new m(v,S,"player2","j","l","i","Enter",28,5,0)}}))}(n,b,P),t.CreatePlateform_Scene4(),s=M(0,0,0,-10),r=M(0,28,0,-10),f(s),f(r),v.getMeshByName("ball"),document.addEventListener("keydown",(function(e){if("Shift"===e.key){console.log('La touche "espace" a été enfoncée');let e=v.getMeshByName("player1");b.disableThisObject(),e.dispose(),b=new m(v,S,"player1","q","d","s"," ",0,8,0)}})),document.addEventListener("keydown",(function(e){if("Backspace"===e.code){console.log('La touche "entrée" a été enfoncée');let e=v.getMeshByName("player2");P.disableThisObject(),e.dispose(),P=new m(v,S,"player2","ArrowLeft","ArrowRight","i","Enter",28,8,0)}})),v.debugLayer.show()}();let t=v.getMeshByName("player1");v.getMeshByName("player2"),e.lockedTarget=t,S.runRenderLoop((function(){v.render()}))}()}new BABYLON.HemisphericLight("light",new BABYLON.Vector3(0,1,0),k),new BABYLON.FreeCamera("camera",new BABYLON.Vector3(0,5,-18.5),k),new o(k).CreateMenu3dScene(0,0,0),function(){C=BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI_button"),V=BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI_text");const e=BABYLON.GUI.Button.CreateSimpleButton("playButton","Play");e.width="150px",e.height="40px",e.color="white",e.background="grey",e.onPointerClickObservable.add((function(){console.log("Play button clicked"),k.meshes.forEach((function(e){e.dispose()})),k.cameras.forEach((function(e){e.dispose()})),k.lights.forEach((function(e){e.dispose()})),V.dispose(),C.dispose(),E.stopRenderLoop(),I()})),C.addControl(e);const n=new BABYLON.GUI.TextBlock;n.text="Titre de la Page",n.color="white",n.fontSize=24,n.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER,n.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP,n.paddingTop="-400px",V.addControl(n)}(),E.runRenderLoop((function(){k.render()}))})();
//# sourceMappingURL=babylonBundle.js.map