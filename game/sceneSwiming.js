var canvas = document.getElementById("renderCanvas");
var engine = new BABYLON.Engine(canvas, true);
var scene = new BABYLON.Scene(engine);
let soundManager = new SoundManager(scene,"level2.mp3");
var name = "level3";
import SoundManager from './SoundManager.js';
import { CustomModels } from './CustomModels.js';
import CharacterController2 from './CharacterController2.js';
import * as sceneManager from './SceneManager.js';
import PlayerLevel2 from './PlayerLevel2.js';

async function getInitializedHavok() {
    return await HavokPhysics();
}

async function sceneData() {
    //activer la physique sur la scene 
    defaultLoadingScreen();
    const havokInstance = await HavokPhysics();
    soundManager.initMusic();

    // pass the engine to the plugin
    const hk = new BABYLON.HavokPlugin(true, havokInstance);


    scene.enablePhysics(new BABYLON.Vector3(0, -9.81, 0), hk);
    scene.collisionsEnabled = true;
    
   

    // Configurez une caméra
   
    // Ajoutez une lumière
    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

    //var camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0, 5, -10), scene);



    //var devcamera = new DevCamera(canvas, scene);
    // Positionnez le cube où vous le souhaitez

    triggerEnd(5,11,-620,scene);
    eventHandler(hk);
    //createWaterSurface(scene,100,100,0,20,0);

    // Ajoutez l'événement de clic à la scène
    scene.onPointerDown = function (evt, pickResult) {
        onPointerDown(evt, pickResult);
    };

        
    var plane2 = new CustomModels(scene);
    //plane2.CreatePlateform(0,0, -472,678);
    plane2.CreatePlateformlevel3(-7,14, -265);


    displayControlUI();


     
    let player1 = new PlayerLevel2(scene,engine,"player1",'s','f', 0,20,0);
    let player2 = new PlayerLevel2(scene,engine,"player2",'k','m',-14,60,0);
   //scene.debugLayer.show();

   createSkyBox();

}

function launch() {
   

    
   
    //var camera = new BABYLON.FollowCamera("camera", new BABYLON.Vector3(0, 5, -10), scene);
    var camera = new BABYLON.FollowCamera("camera", new BABYLON.Vector3(0, 5, -10), scene);
    camera.cameraRotation = 0;
    camera.viewport = new BABYLON.Viewport(0.5, 0, 0.5, 1);
    
    
    var camera2 = new BABYLON.FollowCamera("camera2", new BABYLON.Vector3(-3, 5, -10), scene);
    camera2.cameraRotation = 0;
    camera2.viewport = new BABYLON.Viewport(0, 0, 0.5, 1); 
   
    //scene.activeCameras.push(camera);
    scene.activeCameras.push(camera2);
    scene.activeCameras.push(camera)



  

    



    


    //cam1
    sceneData().then(playerMesh => {
        let playerMesh2 = scene.getMeshByName("player2");
        console.log("MESH PLAYER2"+playerMesh2); // Utilisez playerMesh comme nécessaire

        let playerMesh1 = scene.getMeshByName("player1");
        //console.log("MESH PLAYER2"+playerMesh); // Utilisez playerMesh comme nécessaire
        
        camera.lockedTarget = playerMesh2;
        camera2.lockedTarget = playerMesh1;
        
    }).catch(error => {
        console.error(error);
    });


    engine.runRenderLoop(function () {
        scene.render();
    });
}

// Fonction appelée lorsqu'un clic est détecté
function onPointerDown(evt, pickResult) {
    if (pickResult.hit) {
        // Votre code d'interaction ici, par exemple, changez la couleur de l'objet
        if(pickResult.pickedMesh.name =="player"){

            pickResult.pickedMesh.material.diffuseColor = new BABYLON.Color3(0, 1, 0); // Vert
        }
       
    }
}






function triggerEnd(x,y,z){

    const shapeBox1 = new BABYLON.PhysicsShapeBox(
        new BABYLON.Vector3(0, 0, 0),        // center of the box
        new BABYLON.Quaternion(0, 0, 0, 1),  // rotation of the box
        new BABYLON.Vector3(60, 2, 2000),      // dimensions of the box
        scene                                // scene of the shape
    );
    


    var boxW = 40;
    var boxH = 40;
    var boxD = 40;

    var box = BABYLON.MeshBuilder.CreateBox("Ending", {width: boxW, height: boxH, depth: boxD},scene);
    box.isVisible = false;

    box.position.x = x;
    box.position.y = y;
    box.position.z = z;
        
        
  
    var Aggregate2 =new BABYLON.PhysicsAggregate(box, BABYLON.PhysicsShapeType.MESH, { mass: 0 }, scene);
    Aggregate2.shape.isTrigger =  true;

    
}


function eventHandler(hk){
    
    hk.onTriggerCollisionObservable.add((ev) => {
        // console.log(ev);
        console.log(ev.type, ':', ev.collider.transformNode.name, '-', ev.collidedAgainst.transformNode.name);

        if(ev.collider.transformNode.name =="player1" && ev.collidedAgainst.transformNode.name == "Ending"){
            console.log("PLAYER 111111 PASSSSSS")
            sceneManager.setcountPlayer1()
            console.log("COUNT_WIN PLAYER1:"+sceneManager.winCountPlayer1)
        }
        if(ev.collider.transformNode.name =="player2" && ev.collidedAgainst.transformNode.name == "Ending"){
            console.log("PLAYER 2 PASSSSSS")
            sceneManager.setcountPlayer2()
            console.log("COUNT_WIN PLAYER2"+sceneManager.winCountPlayer2)
        }

        if(ev.collidedAgainst.transformNode.name =="Ending"){
   
   

            //console.log("YOU WINNNNNNN")
            killLevel();
            loadNextLevel();

        }
      
    });
}

function loadNextLevel(){
    
    sceneManager.launchLevel4();

}
function killLevel(){
    //scene.dispose();
     
    scene.meshes.forEach(function(mesh) {
        mesh.dispose();
    });
   
    scene.cameras.forEach(function(mesh) {
        mesh.dispose();
    });
    // Supprimer toutes les lumières de la scène
    scene.lights.forEach(function(light) {
        light.dispose();
    });

    
    engine.stopRenderLoop();
    hideControlUI();
    soundManager.stopMusic();
    soundManager.destroy();
}

function displayControlUI(){
  
    // Récupération de l'élément par son ID
    var level1 = document.getElementById("level2");
 
    // Afficher l'élément
    level1.style.display = "block";
 
 }
 function hideControlUI(){
        // Récupération de l'élément par son ID
    var level1 = document.getElementById("level2");
 
    // Afficher l'élément
    level1.style.display = "none";
 
 }

 function createSkyBox(){

    const skybox = BABYLON.MeshBuilder.CreateBox("skyBox", { size: 1000.0 }, scene);
    const skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
    skyboxMaterial.backFaceCulling = false;
    skyboxMaterial.disableLighting = true;
    skybox.material = skyboxMaterial;

    skybox.infiniteDistance = true;
    skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("./models/skybox/skybox3/skybox", scene);
    skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
   
}

function defaultLoadingScreen(){
    engine.displayLoadingUI();

    scene.executeWhenReady(function () {
        setTimeout(function () {
            engine.hideLoadingUI();
        }, 5000); // 5000 millisecondes = 5 secondes
    });

}


function createWaterSurface(scene, width, height, posX, posY, posZ) {
    var waterMesh = BABYLON.MeshBuilder.CreateGround("waterMesh", { width: width, height: height }, scene);
    var water = new BABYLON.Material("water", scene, new BABYLON.Vector2(512, 512));
    water.backFaceCulling = true;
    water.bumpTexture = new BABYLON.Texture("./models/img/water.jpg", scene);
    water.windForce = -10;
    water.waveHeight = 0.5;
    water.bumpHeight = 0.1;
    water.waveLength = 0.1;
    water.colorBlendFactor = 0;
    waterMesh.material = water;
    waterMesh.position = new BABYLON.Vector3(posX, posY, posZ); // Ajouter cette ligne pour définir la position

    // Ajouter des objets à la liste de rendu de l'eau pour réflexions/réfractions
    // Assurez-vous que ces objets existent dans votre scène
    //water.addToRenderList(skybox);
    //water.addToRenderList(ground);

    return waterMesh;
}





export { name, scene, sceneData, launch };
