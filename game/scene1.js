var canvas = document.getElementById("renderCanvas");
var engine = new BABYLON.Engine(canvas, true);
var scene = new BABYLON.Scene(engine);
var name = "level1";

function sceneData() {
    // Assurez-vous que l'élément canvas a le focus
    canvas.tabIndex = 1;
    canvas.focus();
    // Configurez une caméra
    var camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0, 5, -10), scene);
    camera.setTarget(BABYLON.Vector3.Zero());

    // Ajoutez une lumière
    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

    // Créez un matériau pour le cube (bleu)
    var material = new BABYLON.StandardMaterial("blueMaterial", scene);
    material.diffuseColor = new BABYLON.Color3(0, 0, 1); // Couleur bleue

    // Créez un cube avec le matériau
    var cube = BABYLON.MeshBuilder.CreateBox("blueCube", { size: 2 }, scene);
    cube.material = material;

    // Positionnez le cube où vous le souhaitez
    cube.position = new BABYLON.Vector3(0, 1, 0);
}

function launch() {
    sceneData();
    engine.runRenderLoop(function () {
        scene.render();
    });
}

function getScene() {
    return scene;
}

export { name, scene, sceneData, launch };