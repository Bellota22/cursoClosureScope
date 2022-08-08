const global=0;
function todo(){
    const Uno=1
    console.log(global)
    function parent(){
        const Dos=2
        console.log(Uno, global)
            function child(){
                console.log(Dos,Uno,global)
            }
            return child()
    }
    return parent()
}
todo()