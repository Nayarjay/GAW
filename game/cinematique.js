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
//let soundManager = new SoundManager(scene,"Menu.mp3");


var createScene = function () {
    soundManager.initMusic();
    // Ajoutez une lumière
    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
  
    // Création d'une caméra
        const camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(0, 8, -50), scene);
        camera.attachControl()
    screen();
     // Attendre quelques secondes avant de charger le niveau suivant
    setTimeout(function () {
        loadNextLevel();
    }, 21000); 
    //loadNextLevel();
   
}
async function screen(){
    var planeOpts = {
        height: 80,
        width: 100,
        sideOrientation: BABYLON.Mesh.DOUBLESIDE
    };

    // Création de l'avion
    var videoPlane = BABYLON.MeshBuilder.CreatePlane("plane", planeOpts, scene);
    videoPlane.position = new BABYLON.Vector3(0, 0, 0);

    // Options pour la texture vidéo, y compris la lecture audio
    var videoTextureOptions = {
        loop: false, // Désactivé la boucle
        autoPlay: false, // Désactiver la lecture automatique pour éviter les erreurs
        autoUpdateTexture: true,
        poster: null,
        muted: true // Initialement en mode muet
    };

    // Création du matériau vidéo
    var videoMaterial = new BABYLON.StandardMaterial("m", scene);
    var videoTexture = new BABYLON.VideoTexture("vidtex", "video/scrawl text.mp4", scene, true, false, videoTextureOptions);
    videoMaterial.diffuseTexture = videoTexture;
    videoMaterial.roughness = 1;
    videoMaterial.emissiveColor = new BABYLON.Color3.White();
    videoPlane.material = videoMaterial;

    // Démarre la vidéo en mode muet pour éviter les restrictions du navigateur
    videoTexture.video.play();

    // Gestionnaire d'événement pour activer le son après un clic sur le canvas
    var canvas = document.getElementById('renderCanvas');
    canvas.addEventListener('click', function() {
        // Désactiver le mode muet et redémarrer la vidéo
        videoTexture.video.muted = false;
        videoTexture.video.play().then(() => {
            console.log("Video is playing with sound.");
        }).catch((error) => {
            console.error("Error attempting to play the video with sound:", error);
        });
    });

    // Gestionnaire d'événement pour détecter la fin de la vidéo
    videoTexture.video.addEventListener('ended', function() {
        console.log("Video has ended.");
        // Ajouter ici toute action à effectuer lorsque la vidéo se termine
    });
}


function launch(){
    createScene();

    engine.runRenderLoop(function () {
        
        scene.render();
    });
    

}
function loadNextLevel(){
    soundManager.stopMusic();
    killLevel();
    sceneManager.launchLevel2();
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

    engine.stopRenderLoop();
 
}


export {  scene, launch };