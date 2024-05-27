class SoundManager {
    constructor(scene, musicName) {
        this.scene = scene;
        this.musicName = musicName;
        this.musicSound = null;
        this.volumeSlider = null; // New property to keep track of the slider element

         // Initialize the slider when the scene and slider are ready
         document.addEventListener('DOMContentLoaded', () => {
            this.initVolumeSlider("volumeSlider");
        });
    }

    initMusic() {
        const music = () => {
            this.musicSound = new BABYLON.Sound("", "./models/Music/" + this.musicName, this.scene, null, {
                loop: true,
                autoplay: true
            });
            this.updateVolume(); // Ensure volume is set according to the slider at initialization
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

    initVolumeSlider(sliderId) {
        this.volumeSlider = document.getElementById(sliderId);
        this.volumeSlider.addEventListener('input', () => {
            this.updateVolume();
        });
    }

    updateVolume() {
        if (this.musicSound && this.volumeSlider) {
            this.musicSound.setVolume(this.volumeSlider.value / 100);
        }
    }

    stopMusic() {
        if (this.musicSound) {
            this.musicSound.stop();
        }
    }

    destroy() {
        this.stopMusic();
        window.removeEventListener('mousemove', this.clickHandler);
        if (this.volumeSlider) {
            this.volumeSlider.removeEventListener('input', this.updateVolume);
        }
        this.scene = null;
        this.musicName = null;
        this.musicSound = null;
        this.clickHandler = null;
        this.volumeSlider = null;
    }
}

export default SoundManager;
