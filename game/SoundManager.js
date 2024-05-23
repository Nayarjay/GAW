class SoundManager {
    constructor(scene,  musicName) {
        this.scene = scene;

        this.musicName = musicName;
        this.musicSound = null;
    }

    initMusic() {
        const music = () => {
            this.musicSound = new BABYLON.Sound("", "./models/Music/"+this.musicName, this.scene, null, {
                loop: true,
                autoplay: true,
            });
        };

        window.addEventListener('mousemove', () => {
            if (BABYLON.Engine.audioEngine.audioContext.state === 'suspended') {
                BABYLON.Engine.audioEngine.audioContext.resume().then(() => {
                    music();
                });
            } else {
                music();
            }
        }, { once: true });
    }

    stopMusic() {
        if (this.musicSound) {
            this.musicSound.stop();
        }
    }

    destroy() {
        // Arrête la musique avant de détruire l'instance
        this.stopMusic();
        
        // Supprime l'écouteur d'événement
        window.removeEventListener('mousemove', this.clickHandler);

        // Réinitialise les propriétés à null ou undefined pour faciliter la libération de la mémoire par le garbage collector
        this.scene = null;
        this.musicName = null;
        this.musicSound = null;
        this.clickHandler = null;
    }
}
export default SoundManager;