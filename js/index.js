(async function rickandmorty() {
    let requisicao = await fetch("https://rickandmortyapi.com/api/character/")
    let r = await requisicao.json()
    let dados = await r.results
    function personagem() {
        let rick = document.getElementById("rick")
        rick.innerHTML = dados[0].name
        let rickImage = dados[0].image
        document.getElementById("rickImage").src = rickImage
        let ep = document.querySelector(".location")
        ep.innerHTML = `Last location: ${dados[0].location.name}`

        let specie = document.querySelector(".specie")
        specie.innerHTML = `Specie: ${dados[0].species}`
        let status = document.querySelector(".status")
        status.innerHTML = `Status ${dados[0].status}`
        let origin = document.querySelector(".origin")
        origin.innerHTML = `Origin: ${dados[0].origin.name}`
    }
    function personagem1() {
        let morty = document.getElementById("morty")
        morty.innerHTML = dados[1].name
        let mortyImage = dados[1].image
        document.querySelector(".mortyImage").src = mortyImage

        let ep = document.querySelector(".location1")
        ep.innerHTML = `Last location: ${dados[1].location.name}`

        let specie = document.querySelector(".specie1")
        specie.innerHTML = `Specie: ${dados[1].species}`
        let status = document.querySelector(".status1")
        status.innerHTML = `Status ${dados[1].status}`
        let origin = document.querySelector(".origin1")
        origin.innerHTML = `Origin: ${dados[1].origin.name}`

    }

    function personagem2() {
        let summer = document.getElementById("summer")
        summer.innerHTML = dados[2].name
        let summerImage = dados[2].image
        document.querySelector(".summerImage").src = summerImage
        let ep = document.querySelector(".location2")
        ep.innerHTML = `Last location: ${dados[2].location.name}`
        let specie = document.querySelector(".specie2")
        specie.innerHTML = `Specie: ${dados[2].species}`
        let status = document.querySelector(".status2")
        status.innerHTML = `Status ${dados[2].status}`
        let origin = document.querySelector(".origin2")
        origin.innerHTML = `Origin: ${dados[2].origin.name}`
    }

    function personagem3() {
        let beth = document.getElementById("beth")
        beth.innerHTML = dados[3].name
        let bethImage = dados[3].image
        document.querySelector(".bethImage").src = bethImage
        let ep = document.querySelector(".location3")
        ep.innerHTML = `Last location: ${dados[3].location.name}`
        let specie = document.querySelector(".specie3")
        specie.innerHTML = `Specie: ${dados[3].species}`
        let status = document.querySelector(".status3")
        status.innerHTML = `Status ${dados[3].status}`
        let origin = document.querySelector(".origin3")
        origin.innerHTML = `Origin: ${dados[3].origin.name}`
    }

    function personagem4() {
        let beth = document.getElementById("jerry")
        beth.innerHTML = dados[4].name
        let jerryImage = dados[4].image
        document.querySelector(".jerryImage").src = jerryImage
        let ep = document.querySelector(".location4")
        ep.innerHTML = `Last location: ${dados[4].location.name}`
        let specie = document.querySelector(".specie4")
        specie.innerHTML = `Specie: ${dados[4].species}`
        let status = document.querySelector(".status4")
        status.innerHTML = `Status ${dados[4].status}`
        let origin = document.querySelector(".origin4")
        origin.innerHTML = `Origin: ${dados[4].origin.name}`
    }

    function personagem5() {
        let lincler = document.getElementById("lincler")
        lincler.innerHTML = dados[6].name
        let linclerImage = dados[6].image
        document.querySelector(".linclerImage").src = linclerImage
        let ep = document.querySelector(".location6")
        ep.innerHTML = `Last location: ${dados[6].location.name}`
        let specie = document.querySelector(".specie6")
        specie.innerHTML = `Specie: ${dados[6].species}`
        let status = document.querySelector(".status6")
        status.innerHTML = `Status ${dados[6].status}`
        let origin = document.querySelector(".origin6")
        origin.innerHTML = `Origin: ${dados[6].origin.name}`
    }

    function personagem6() {
        let albert = document.getElementById("albert")
        albert.innerHTML = dados[10].name
        let albertImage = dados[10].image
        document.querySelector(".albertImage").src = albertImage
        let ep = document.querySelector(".location7")
        ep.innerHTML = `Last location: ${dados[10].location.name}`
        let specie = document.querySelector(".specie7")
        specie.innerHTML = `Specie: ${dados[10].species}`
        let status = document.querySelector(".status7")
        status.innerHTML = `Status ${dados[10].status}`
        let origin = document.querySelector(".origin7")
        origin.innerHTML = `Origin: ${dados[10].origin.name}`
    }
    async function rickandmorty1() {
        const r1 = await fetch("https://rickandmortyapi.com/api/character/183")
        const dados1 = await r1.json()
        function personagem7() {
            let johnny = document.getElementById("johnny")
            johnny.innerHTML = dados1.name
            let johnnyImage = dados1.image
            document.querySelector(".johnnyImage").src = johnnyImage
            let ep = document.querySelector(".location8")
            ep.innerHTML = `Last location: ${dados1.location.name}`
            let specie = document.querySelector(".specie8")
            specie.innerHTML = `Specie: ${dados1.species}`
            let status = document.querySelector(".status8")
            status.innerHTML = `Status ${dados1.status}`
            let origin = document.querySelector(".origin8")
            origin.innerHTML = `Origin: ${dados1.origin.name}`
        }
        personagem7()
    }
    rickandmorty1()
    personagem()
    personagem1()
    personagem2()
    personagem3()
    personagem4()
    personagem5()
    personagem6()

})()