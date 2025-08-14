let list = document.querySelectorAll('ul')
let listArr = Array.from(list)
let categoryList = ['Тварини', 'Їжа', 'Мови програмуання']
let listResume = (list) => {
    let a = listArr.reduce((acc, value) => {
        acc.push(value.children)
        return acc
    }, [])

    a.forEach((element, index) => {
        console.log(`Категорія елементів : ${categoryList[index]}`)
        console.log(`кількість елементів : ${element.length}`)
    })

}
listResume(listArr)