import { CustomModels } from './CustomModels.js';
import * as sceneManager from './SceneManager.js'
import SoundManager from './SoundManager.js';

let advancedTexture ;
let advancedTexture2 ;

//const BABYLON = require('babylonjs');



var canvas = document.getElementById("renderCanvas");
var engine = new BABYLON.Engine(canvas, true);
var scene = new BABYLON.Scene(engine);
let soundManager = new SoundManager(scene,"Menu.mp3");

//
var createScene = function () {
    soundManager.initMusic();
  
    // GUI
    // Ajoutez une lumière
    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

   // Création d'une caméra
    const camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(0, 8, -50), scene);
    //camera.attachControl()
  
   //screen();

    let menu = new CustomModels(scene);
    menu.CreateMenu3dScene(0,0,0);

    displayMenu();
   
    createSkyBox();

    //createMusicButton();
    //scene.debugLayer.show();
    return scene;
};
function launch(){

    createScene();

    engine.runRenderLoop(function () {
        
        scene.render();
    });
    

}

function displayMenu(){


  
    advancedTexture2 = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI_text");

    button();

    
    // Création du texte en haut de la page
    const headerText = new BABYLON.GUI.TextBlock();
    headerText.text = "Les Jeux Olympiques Maudits";
    headerText.color = "black";
    headerText.fontSize = 100;
    headerText.fontFamily = "UnifrakturCook";
   
   // headerText.fontFamily = "Pirata One"; // Utiliser la police Pirata One ici
    headerText.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
    headerText.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP; // Modifier cette ligne
    headerText.paddingTop = "-500px"; // Ajout de 20px de padding en haut
    advancedTexture2.addControl(headerText);




  

}

function killLevel(player){
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
    advancedTexture2.dispose();
    advancedTexture.dispose();
    engine.stopRenderLoop();
    soundManager.stopMusic();
    soundManager.destroy();
}

function loadNextLevel(){
    //sceneManager.launchLevel2();
    soundManager.stopMusic();
    sceneManager.launchStart();
}

function button(){
    // Création du GUI
advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI_button");


// Création du bouton Play
const playButton = BABYLON.GUI.Button.CreateSimpleButton("playButton", "Play");
playButton.width = "150px";
playButton.height = "80px";
playButton.color = "white";
playButton.cornerRadius = 20; // Coins arrondis
playButton.background = "grey";

// Style supplémentaire
playButton.thickness = 2; // Épaisseur du contour
playButton.shadowOffsetX = 4; // Décalage de l'ombre en X
playButton.shadowOffsetY = 4; // Décalage de l'ombre en Y
playButton.shadowColor = "#000000"; // Couleur de l'ombre
playButton.shadowBlur = 8; // Flou de l'ombre

// Ajouter une animation au survol
playButton.pointerEnterAnimation = function () {
    playButton.background = "white";
    playButton.color = "grey";
   
};
playButton.pointerOutAnimation = function () {
    playButton.background = "grey";
    playButton.color = "white";
};

playButton.children[0].fontFamily = "UnifrakturCook";

// Logique du bouton Play
playButton.onPointerClickObservable.add(function () {
    console.log("Play button clicked");
    killLevel();
    soundManager.stopMusic();
    loadNextLevel();
});

advancedTexture.addControl(playButton);

}


function createSkyBox(){

    const skybox = BABYLON.MeshBuilder.CreateBox("skyBox", { size: 100.0 }, scene);
    const skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
    skyboxMaterial.backFaceCulling = false;
    skyboxMaterial.disableLighting = true;
    skybox.material = skyboxMaterial;

    //skybox.infiniteDistance = true;
    skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("./models/skybox/skybox1/skybox", scene);
    skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
   
}


function screen(){
    var planeOpts = {
        height: 80,
        width: 80,
        sideOrientation: BABYLON.Mesh.DOUBLESIDE
    };

    // Création de l'avion
    var videoPlane = BABYLON.MeshBuilder.CreatePlane("plane", planeOpts, scene);
    videoPlane.position = new BABYLON.Vector3(0, 0, 0);

    
    // Création du matériau vidéo
    var videoMaterial = new BABYLON.StandardMaterial("m", scene);
    var videoTexture = new BABYLON.VideoTexture("vidtex", "video/Loading.mp4", scene);
    videoMaterial.diffuseTexture = videoTexture;
    videoMaterial.roughness = 1;
    videoMaterial.emissiveColor = new BABYLON.Color3.White();
    videoPlane.material = videoMaterial;
    
}

// Fonction pour créer le bouton de contrôle de la musique
function createMusicButton() {
    const musicButton = BABYLON.GUI.Button.CreateSimpleButton("musicButton", "Music");
    musicButton.width = "100px";
    musicButton.height = "50px";
    musicButton.color = "white";
    musicButton.background = "blue";
    musicButton.left = "-700px"; // Position en haut à gauche
    musicButton.top = "300px";
    musicButton.cornerRadius = 10;

    // Logique du bouton Music
    musicButton.onPointerClickObservable.add(function () {
        // Ajoutez ici la logique pour activer/désactiver la musique
        soundManager.initMusic();
        console.log("Music button clicked");
    });

    advancedTexture.addControl(musicButton);
}


export {  scene, launch };