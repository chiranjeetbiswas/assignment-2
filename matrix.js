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