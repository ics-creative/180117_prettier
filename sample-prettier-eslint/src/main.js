const width = 800;
const height = 600;

// レンダラーを作成
const renderer=new THREE.WebGLRenderer();
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

// シーンを作成
const scene=new THREE.Scene();

// カメラを作成
const camera=new THREE.PerspectiveCamera(45, width / height, 1, 10000);
camera.position.set(0, 0, +1000);

// 箱を作成
const geometry=new THREE.BoxGeometry(500, 500, 500);
const material=new THREE.MeshPhongMaterial({color: 0xff0000});
const box=new THREE.Mesh(geometry, material);
scene.add(box);

// 平行光源
let directionalLight=new THREE.DirectionalLight(0xffffff);
directionalLight.position.set(1, 1, 1);
// シーンに追加
scene.add(directionalLight);

// 初回実行
tick();

/**
 * アニメーション用の関数
 */
function tick(){
	requestAnimationFrame(tick);
	// 箱を回転させる
	box.rotation.x+=0.01;
	box.rotation.y+=0.01;
	// レンダリング
	renderer.render(scene, camera);
}

// Prettierでは1行の長さを見て可読性がよくなるように改行を挿入します。（次の行は改行されません）
let hoge = func(parameter1, parameter2, parameter3, parameter4);

// Prettierでは1行の長さを見て可読性がよくなるように改行を挿入します。（次の行は改行されます）
let fuga = func(parameter1, parameter2, parameter3, parameter4, parameter5, parameter6, parameter7);
