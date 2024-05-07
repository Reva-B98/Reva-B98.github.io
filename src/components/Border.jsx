import React, { useEffect } from 'react';
import * as THREE from 'three';

const Border = ({ camera, scene }) => {
    useEffect(() => {
        const material = new THREE.LineBasicMaterial({ color: 0xD291BC });
        const geometry = new THREE.BufferGeometry();
        const line = new THREE.Line(geometry, material);
        scene.add(line);

        function updateBorder() {
            const fov = camera.fov * (Math.PI / 180);
            const height = (2 * Math.tan(fov / 2) * camera.position.z) - 10;
            const width = height * camera.aspect;
        
            const points = [
                new THREE.Vector3(-width / 2, height / 2, 0),
                new THREE.Vector3(width / 2, height / 2, 0),
                new THREE.Vector3(width / 2, -height / 2, 0),
                new THREE.Vector3(-width / 2, -height / 2, 0),
                new THREE.Vector3(-width / 2, height / 2, 0)
            ];
            line.geometry.setFromPoints(points);
            line.geometry.verticesNeedUpdate = true;

            const time = Date.now() * 0.001; // time in seconds
            const color1 = new THREE.Color(0xD291BC); // purple
            const color2 = new THREE.Color(0xFFC0CB); // pink
            const color3 = new THREE.Color(0xADD8E6); // blue
            
            const color = new THREE.Color().set(color1);
            if (time % 3 < 1) { // transition from purple to pink
                color.lerpColors(color1, color2, (time % 1));
            } else if (time % 3 < 2) { // transition from pink to blue
                color.lerpColors(color2, color3, (time % 1));
            } else { // transition from blue back to purple
                color.lerpColors(color3, color1, (time % 1));
            }

            material.color.set(color);
        }

        const animate = () => {
            requestAnimationFrame(animate);
            updateBorder();
        };
        animate();

        const resizeListener = () => updateBorder();
        window.addEventListener('resize', resizeListener);
    

        return () => {
            scene.remove(line);
            window.removeEventListener('resize', resizeListener);
        };
    }, [camera, scene]); // Add camera and scene to dependencies to react to changes

    return null;
};

export default Border;
