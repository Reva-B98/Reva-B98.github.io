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

            const time = Date.now() * 0.001; 
            const color1 = new THREE.Color(0xD291BC); 
            const color2 = new THREE.Color(0xFFC0CB); 
            const color3 = new THREE.Color(0xADD8E6); 
            
            const color = new THREE.Color().set(color1);
            if (time % 3 < 1) { 
                color.lerpColors(color1, color2, (time % 1));
            } else if (time % 3 < 2) { 
                color.lerpColors(color2, color3, (time % 1));
            } else { 
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
    }, [camera, scene]); 

    return null;
};

export default Border;
