const con =document.querySelector('#con');

const content =document.createElement('div');
content.classList.add('content');
content.textContent= 'Etch-a-Sketch';
con.appendChild(content);




const pageH = document.querySelector('.pageH')

const toggle =document.createElement('div')
toggle.classList.add('toggle')
pageH.appendChild(toggle)

const to_title= document.createElement('div')
to_title.textContent="Toggle Options"
to_title.style.fontSize = '50px';
toggle.appendChild(to_title)

const color = document.createElement('div')
color.classList.add('color')
toggle.appendChild(color)

const rainbow=document.createElement('button')
rainbow.textContent='Rainbow color'
rainbow.classList.add('rainbow')
rainbow.style.fontSize= '20px'
color.appendChild(rainbow)

const black =document.createElement('button')
black.textContent='black color'
black.classList.add('black')
black.style.fontSize= '20px'
color.appendChild(black)

const input =document.createElement('input')
    input.type='text'
    input.placeholder='Enter a value'
    
   
    input.classList.add('input')
    toggle.appendChild(input)

const button = document.createElement('button')
button.textContent='SUBMIT'
button.style.backgroundColor='#3882F6'
button.style.color='white'
button.style.borderRadius='8px'
button.style.fontSize='25px'
button.style.padding='5px'
toggle.appendChild(button)

let value;
const inpu=document.querySelector('.input')
    inpu.addEventListener('input',function(e){
    
    value = e.target.value;
    
    }) 

button.addEventListener('click', function(e){
    const container =document.querySelector('.container')
    
    var childNodes = container.childNodes; // Step 2

    for (var i = childNodes.length - 1; i >= 0; i--) {
    var childNode = childNodes[i];
    container.removeChild(childNode); // Step 3
}
    
if(value<101){   
    let size=value;
    let sizem=size*size;
    for (let i=0;i<size*size;i++){
        
        const eth =document.createElement('div')
        eth.textContent=' '
        eth.classList.add('box')
        eth.style.width =`${100/size}%`;
        eth.style.height=`${100/size}%`;
        
        container.appendChild(eth)
    }
}
else{
    input.placeholder='choose a size 0-100'
    input.value=''
}
const box = document.querySelectorAll('.box')

   

    const qcolor =document.querySelector('.color')
    qcolor.addEventListener('click', function(e){
        
        if(e.target.className=== 'rainbow'){
            box.forEach(box => box.addEventListener('mouseover', function(e){
            const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'];
            const randomIndex = Math.floor(Math.random() * colors.length);
            const randomColor = colors[randomIndex];
            box.style.backgroundColor=randomColor
        }))
        }
        else if(e.target.className=== 'black'){
            box.forEach(box => box.addEventListener('mouseover', function(e){
            box.style.backgroundColor='black'
            }))
        }
        else{
            box.forEach(box => box.addEventListener('mouseover', function(e){
            box.style.backgroundColor='black'
            }))
        }
    })
    box.forEach(box => box.addEventListener('mouseover', function(e){
        box.style.backgroundColor='red'
        }))

})

