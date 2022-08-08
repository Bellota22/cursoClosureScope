
function fruits(){
    if(true){
        var fruit1='apple'
        let fruit2='papaya'
        const fruit3='banana'
        console.log(fruit2)
        console.log(fruit3)
    }
    console.log(fruit1) //esto funciona como tipo function
    // console.log(fruit2) Esto nos dará error porque son tipo bloque
    // console.log(fruit3) eso significa que se ejecutan dentr del bloque del IF
}
 fruits()