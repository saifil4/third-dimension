// import React from 'react';
// import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh, OrthographicCamera } from 'three';


// type Props = {
//     scene: Scene,
//     camera: PerspectiveCamera | OrthographicCamera,
//     animate: () => void
// }

// const Box = ({ camera, scene, animate }: Props) => {

//     const geometry = new BoxGeometry(1, 1, 1);
//     const material = new MeshBasicMaterial({ color: 0x00ff00 });
//     const Cube = new Mesh(geometry, material);
//     Cube.rotation.x += 0.01;
//     Cube.rotation.y += 0.01;
//     scene.add(Cube);
//     camera.position.z = 5;
//     const div = document.createElement('div');
//     div.appe
//     animate();


//     return (
//         <> 
//         <Cube>
            
//         </Cube>
        
//         </>
//     )
// }