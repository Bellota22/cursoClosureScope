

    function chanchito(){
        let monedas=0
            function saveChanchito(coins){
                monedas+=coins
                console.log(`Total ahorrado: $${monedas}`)
            }
            return saveChanchito
        }
    
    const anaChanchito= chanchito()
            anaChanchito(10)
            anaChanchito(10)
            anaChanchito(10)
            