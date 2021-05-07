import * as THREE from 'https://unpkg.com/three/build/three.module.js'


class H {

    //let camera, scene, renderer;

    constructor(httpRequest,urlEndpoint) {

        this.httpRequest = httpRequest;

        this.urlEndpoint = urlEndpoint;

    };



     getGeometryFromBimorphApi(){

        httpRequest.open("GET", url);
        httpRequest.send();

    }

    // httpRequest.onreadystatechange = function(){

    //     if(this.readyState == 4 && this.status ==200){

    //         var json = Http.responseText;

    //         var nodeCollection = JSON.parse(json);

    //         var nodes = nodeCollection.nodes;

    //         if(nodes.length==1){

    //            var node =  nodes[0]

    //            var valueJson =  node.value;

    //            var value = JSON.parse(valueJson);

    //            var vertices = value.Vertices;

    //            var faces = value.Faces;

    //             const geometry = new THREE.BufferGeometry();
    //             const indices = [];
	// 			const bufferGeoVertices = [];

    //            for (var i = 0; i < vertices.length; i++) {

    //                 var vertArray = vertices[i];
                    
    //                 bufferGeoVertices.push(vertArray[0],vertArray[1],vertArray[2]);
    //             }

    //             for (let i = 0; i < faces.length; i++) {

    //                 var faceArray = faces[i];

    //                 indices.push(faceArray[0],faceArray[1],faceArray[2])
    
    //             }

    //             geometry.setIndex( indices );
	// 			geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( bufferGeoVertices, 3 ) );

    //             material = new THREE.MeshPhongMaterial({ color: 0xffffff, flatShading: true });
    //             mesh = new THREE.Mesh( geometry, material );
    //             mesh.position.Y= 10000;
    //             scene.add( mesh );
            
    //         }

    //         if(nodes.length>1){
   
    //           nodes.forEach(node => {

    //            var valueJson =  node.value;

    //            var value = JSON.parse(valueJson);
                
    //          });
    //        }

    //         console.log(json)



    //     }
    // }

}

export { H };
