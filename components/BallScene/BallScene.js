import { Component } from "react";
import * as THREE from 'three';

class BallScene extends Component {

    componentDidMount() {
        const width = this.mount.clientWidth;
        const height = this.mount.clientHeight;

        // SCENE
        this.scene = new THREE.Scene();
        // CAMERA
        this.camera = new THREE.OrthographicCamera();
        this.camera.position.z = 100;
        // RENDERER
        this.renderer = new THREE.WebGLRenderer({antialias: true});
        this.renderer.setClearColor("#ffffff");
        this.renderer.setSize(width, height);
        this.mount.appendChild(this.renderer.domElement);

        // CUBE
        const geometry = new THREE.BoxGeometry(5, 5, 5);
        const material = new THREE.MeshBasicMaterial({
            color: "#ff0000",
            wireframe: true
        });
        this.cube = new THREE.Mesh(geometry, material);
        this.scene.add(this.cube);

        // LIGHT
        this.light = new THREE.AmbientLight( 0x404040 );
        this.scene.add(this.light);
    }

    componentWillUnmount() {
        this.stop();
        this.mount.removeChild(this.renderer.domElement);
    }

    start = () => {
        if (!this.frameId) {
            this.frameId = requestAnimationFrame(this.animate);
        }
    }
    stop = () => {
        cancelAnimationFrame(this.frameId);
    }
    animate = () => {
        this.renderScene();
        this.frameId = window.requestAnimationFrame(this.animate);
    }
    renderScene = () => {
        this.renderer.render(this.scene, this.camera);
    }

    render() {
        return (
            <div
                style={{width: "100%", height: "100%"}}
                ref={mount => {
                    this.mount = mount;
                }}
            />
        );
    }
}
export default BallScene;