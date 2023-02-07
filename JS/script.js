
const main = document.querySelector('#main')


const getAll = () => {

    const div = document.createElement('div')
    const h1 = document.createElement('h1')
    const label = document.createElement('label')
    const input = document.createElement('input')
    const button = document.createElement('button')
    const p = document.createElement('p')

    div.appendChild(h1)
    div.appendChild(label)
    div.appendChild(input)
    div.appendChild(button)
    div.appendChild(p)
    main.appendChild(div)
    input.classList.add('cep')

    
    h1.innerText = 'Digite seu Código Postal! '
    label.innerText = 'Digite seu Cep:'
    button.innerText = 'Click for Check'

    

    button.addEventListener('click', () => {
            const cep = document.querySelector('.cep').value
            if(cep.length !== 8){
            alert('[ERRO] Numero de cep inválido!')
            return;
        }else{
            
            const url = `https://viacep.com.br/ws/${cep}/json/`
            const Api = async() => {
                const response = await fetch(url)
                const data = await response.json()
                console.log(data)

                p.innerHTML = `<p> Cidade:${data.localidade}</p> <p>Bairro:${data.bairro}</p> <p>Estado:${data.uf}</p><p>Logradouro:${data.logradouro}</p><p>Complemento:${data.complemento}`
                

                
            }
            Api()
        }
            
        


    })
    
}

getAll()