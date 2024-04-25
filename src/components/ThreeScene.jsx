import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import cloudsFragmentShader from '../shaders/cloudFragmentShader.glsl';

const ThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
    camera.position.set(0, 0, 100);
    camera.lookAt(0, 0, 0);
    camera.position.z = 1; 

    const scene = new THREE.Scene();

    const planeGeometry = new THREE.PlaneGeometry(20, 20); // Adjust size as needed
    const shaderMaterial = new THREE.ShaderMaterial({
      fragmentShader: cloudsFragmentShader,
      uniforms: {
        time: { value: 0 },
        resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      },
      side: THREE.DoubleSide, // Render both sides of the plane
    });
    const plane = new THREE.Mesh(planeGeometry, shaderMaterial);
    plane.position.z = -1; // Position the plane a bit further back
    scene.add(plane);

    let startTime = Date.now();
    const animate = function () {
      requestAnimationFrame(animate);

      const elapsedTime = Date.now() - startTime;
      shaderMaterial.uniforms.time.value = elapsedTime / 1000;

      renderer.render(scene, camera);
    };

    animate();
    window.addEventListener('resize', onWindowResize, false);

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        shaderMaterial.uniforms.resolution.value.x = window.innerWidth;
        shaderMaterial.uniforms.resolution.value.y = window.innerHeight;
    }

    return () => mountRef.current.removeChild(renderer.domElement);
  }, []);

  return <div ref={mountRef} />;
};

export default ThreeScene;
