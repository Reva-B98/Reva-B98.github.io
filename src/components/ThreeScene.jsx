import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import cloudsFragmentShader from '../shaders/cloudFragmentShader.glsl';
import Border from './Border';


const ThreeScene = () => {
    const mountRef = useRef(null);
    const cameraRef = useRef(new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500));
    const sceneRef = useRef(new THREE.Scene());

    useEffect(() => {
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        const camera = cameraRef.current;
        camera.position.set(0, 0, 100);
        camera.lookAt(0, 0, 0);

        const scene = sceneRef.current;

        // Pastel clouds setup
        const planeGeometry = new THREE.PlaneGeometry(window.innerWidth, window.innerHeight);
        const shaderMaterial = new THREE.ShaderMaterial({
            fragmentShader: cloudsFragmentShader,
            uniforms: {
                time: { value: 0 },
                resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
            },
            side: THREE.DoubleSide,
        });
        const plane = new THREE.Mesh(planeGeometry, shaderMaterial);
        plane.position.z = -1;
        scene.add(plane);

        // Animate
        let startTime = Date.now();
        const animate = function () {
            requestAnimationFrame(animate);
            const elapsedTime = Date.now() - startTime;
            shaderMaterial.uniforms.time.value = elapsedTime / 1000;
            renderer.render(scene, camera);
        };
        animate();

        // Handle resize
        const onWindowResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            shaderMaterial.uniforms.resolution.value.x = window.innerWidth;
            shaderMaterial.uniforms.resolution.value.y = window.innerHeight;
        };
        window.addEventListener('resize', onWindowResize);

        return () => {
            window.removeEventListener('resize', onWindowResize);
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div ref={mountRef}>
            <Border camera={cameraRef.current} scene={sceneRef.current} />
        </div>
    );
}
export default ThreeScene;
