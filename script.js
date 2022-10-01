function TableOfWords(arrOfWords){
    const numberOfWords= arrOfWords.reduce(function (allWords, word) {
        if (word in allWords) { 
           allWords[word]++  
        }
        else {
            allWords[word] = 1;
        }
        return allWords
        
    }, 
    {});
    createDinamicTable(numberOfWords)
}
function createDinamicTable(numberOfWords){
    const table = document.querySelector('.table')
    table.innerHTML = ''
    Object.keys(numberOfWords).forEach((item)=>{
        const tr= document.createElement('tr')
        table.appendChild(tr)
        const tdCount = document.createElement('td')
        const tdWord = document.createElement('td')
        tr.appendChild(tdCount)
        tr.appendChild(tdWord)
        const count  = document.createTextNode(numberOfWords[item])
        const word = document.createTextNode(item)
        tdCount.appendChild(count)   
        tdWord.append(word)
    })
}
function getWords()
{
    const text = document.querySelector('#Texto')
    const arrOfWords = text.value.split(' ')
    TableOfWords(arrOfWords)
}