// const paragrafo = document.getElementById('paragrafo')
// const paragrafo1 = document.getElementById('id1')
// const paragrafo2 = document.getElementById('id2')
// const paragrafo3 = document.getElementById('paragrafo1')

// console.log(paragrafo);
// console.log(paragrafo1);
// console.log(paragrafo2);
// console.log(paragrafo1);

// const title = document.getElementById('title')
// title.innerText = "Bom dia Mundo!!!!!" //innerText ele troca o texto no html 

// const p = document.getElementById('p')
// p.style.color = "green"
// p.style.fontSize = '50px'

// const t = document.getElementById('title')
// t.style.color = "red"
// t.style.background = 'green'
// t.style.fontSize = '40px'
// t.style.textAlign = "center"

// const paragrafo = document.getElementById("paragrafo")
// const btn = document.getElementById('btn')


// btn.addEventListener('click', function(){
//     paragrafo.innerText = "Deu bom!"
//     paragrafo.style.color = "blue"
// })  // addEventListener cuida da manipulacao de eventos

// const paragrafo = document.getElementById('p')
// const btn = document.getElementById('btn')
// const img = document.getElementById('img')

// btn.addEventListener('mouseover', function(){

//     paragrafo.innerText = "Texto alterado com sucesso!"
//     img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDED_dljFVcOMXtKWiONfFyvcbiK42yN0o988K_FH6mQ&s=10"
//     btn.innerText = "Cantor revelado!"
// })


// document.addEventListener('keydown',function(e){
//     alert(e.key)
// })


document.addEventListener('keydown',function(e){
  if(e.key === "r"){
        document.body.style.backgroundColor = 'red'
    }else if(e.key === "g"){
        document.body.style.backgroundColor = 'green'
    }else if(e.key === "b"){
        document.body.style.backgroundColor = 'blue'
    }
})
