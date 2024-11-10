let a=[] ;
let order;
let I = [];
let U =[];
let L = [];
let D = [];
let U_desh =[];

function order1() {
    order = parseFloat(document.getElementById("order").value) ;
    alert("save");
}
function show(id,showmat) {
    mat_str = "";
    for (let i=0 ;i<order ; i++ ){
        mat_str += "| ";
        for (j=0 ; j<order ; j++){
            mat_str += `${showmat[i][j]} `;
        }
        mat_str += "|" + `<br>`;
    }
    return mat_str;
}

function matrix1(id) {
    alert("Start giving input for matrix")
    for (let i=0;i<order; i++) {
        a[i] = [];
        for (let j=0 ; j<order ; j++) {
            let x = parseFloat(prompt(`enter a${i+1}${j+1}`));
            a[i][j] = x;
        }
    }
    alert("done");
    document.getElementById(id).innerHTML += show(id, a);
}

function identity() {
    let I = [];
    for (let i=0 ;i<order ; i++ ) {
        let ro=[]
        for (let j=0 ;j<order ; j++ ) {
            if (i==j) 
                ro.push(1) ;
            else
                ro.push(0);
        }
        I.push(ro);

    }
    return I;
}
function multiply(mat1,mat2) {
    let pro=[];
    for (let i=0 ;i<order ; i++ ) {
        let pro_r=[];
        for (let j=0 ;j<order ; j++ ){
            let sum=0;
            for (let k=0; k<order ; k++){
                sum += mat1[i][k]*mat2[k][j];
            }
            pro_r.push(sum);
        }
        pro.push(pro_r);
    }
    return pro ;
}
function elimination( num, r, c) {
    let Eli = [];
    Eli=identity();
    Eli[r][c]=num ;
    return Eli ;
}
let multi_E=identity();
function umatrix(id) {
    U=a.map(row => [...row]);
    I = identity();
    for (let i = 0; i < order; i++) {
        let elemination_mat = [];
        for (let j = i+1; j < order; j++) {
            let v = -(U[j][i]/U[i][i]);
            elemination_mat=elimination(v,j,i);
            multi_E=multiply(elemination_mat,multi_E);
            document.getElementById(id).innerHTML += `Elimination matrix: E${j+1}${i+1}, R${j+1} = R${j+1} + xR${i+1}` + '<br>' + `x = -(R${j+1}/R${i+1}) => x = -(a${j+1}${i+1}/a${i+1}${i+1})` + '<br>';
            document.getElementById(id).innerHTML += `${show (id,elemination_mat)}` + '<br>';            
            for (let k = 0; k < order; k++) {
                U[j][k] = U[j][k] + v * U[i][k]; 
                document.getElementById(id).innerHTML += `${show(id,U)}` + '<br>';               
            }
        }
    }
    document.getElementById(id).innerHTML += `<h3>U Matrix</h3>${show(id,U)}` + '<br>';               
    document.getElementById(id).innerHTML += `<h3>Product of Elimination Matrices</h3>${show(id,multi_E)}` + '<br>';                   
}
function Lmatrix(id) {
    L = identity();
    
    for (let i = 0; i < order; i++) {
        for (let j = i; j < order; j++) {
            if (i === j) {
                let v = multi_E[i][j];
                document.getElementById(id).innerHTML += `Elimination matrix: E${j+1}${i+1}, R${j+1} = R${j+1} + xR${i+1}` + '<br>' + `x = -(R${j+1}/R${i+1}) => x = -(a${j+1}${i+1}/a${i+1}${i+1})` + '<br>';
                document.getElementById(id).innerHTML += `${show (id,multi_E)}` + '<br>';            
                for (let k = 0; k < order; k++) {
                    multi_E[i][k] =multi_E[i][k] / v; 
                    L[i][k] = L[i][k] / v;
                }
                document.getElementById(id).innerHTML += show(id, L)+`<br>`; 
            } else {
                let v =multi_E[j][i];
                document.getElementById(id).innerHTML += `Elimination matrix: E${j+1}${i+1}, R${j+1} = R${j+1} + xR${i+1}` + '<br>' + `x = -(R${j+1}/R${i+1}) => x = -(a${j+1}${i+1}/a${i+1}${i+1})` + '<br>';
                document.getElementById(id).innerHTML += `${show (id,multi_E)}` + '<br>';            
                for (let k = 0; k < order; k++) {
                    multi_E[j][k] =multi_E[j][k] - v *multi_E[i][k]; 
                    L[j][k] = L[j][k] - v * L[i][k];
                }
                document.getElementById(id).innerHTML += show(id, L)+`<br>`; 
            }
        }
    }
    
    for (let i = order-1; i>-1; i--) {
        for (let j = i-1; j >-1; j--) {
            let v =multi_E[j][i];
            document.getElementById(id).innerHTML += `Elimination matrix: E${j+1}${i+1}, R${j+1} = R${j+1} + xR${i+1}` + '<br>' + `x = -(R${j+1}/R${i+1}) => x = -(a${j+1}${i+1}/a${i+1}${i+1})` + '<br>';
            document.getElementById(id).innerHTML += `${show (id,multi_E)}` + '<br>';            
            for (let k = 0; k < order; k++) {
               multi_E[j][k] =multi_E[j][k] - v *multi_E[i][k]; 
                L[j][k] = L[j][k] - v *L[i][k];
            }
            document.getElementById(id).innerHTML += show(id, L)+`<br>`; 
        }        
    }

}
function Dmatrix(id){
    D=U.map(row => [...row]);
    for (let i=0; i<order;i++){
        for (let j=0;j<order;j++){
            if (i!=j){
                D[i][j]=0;
            }
        }
        document.getElementById(id).innerHTML += show(id, D)+`<br>`;
    }
    
}
function U_deshmatrix(id) {
    U_desh=U.map(row => [...row]);
    for (let i=0; i<order;i++){
        document.getElementById(id).innerHTML += `row ${i+1} divide by${U_desh[i][i]}` + `<br>`;
        let v=U[i][i];
        for (let j=0;j<order;j++){
            U_desh[i][j]=U[i][j]/v;

        }
        document.getElementById(id).innerHTML += show(id, U_desh)+`<br>`;
    }
}
function LDUmatrix(id){
    let ld= multiply(L,D)
    document.getElementById(id).innerHTML +=`Product of L and D <br>`+ show(id, ld)+`<br>`;
    let ldu=multiply(ld,U_desh)
    document.getElementById(id).innerHTML += `Product of LD and U_desh <br>`+ show(id, ldu);

    
}

