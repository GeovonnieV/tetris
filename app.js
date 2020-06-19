// document.addEventListener('DomContentLoaded', () => {

        const grid = document.querySelector(".grid")
        // the array from lets us get all the divs in the grid and turn them into an array we can work with
        // now every div has an index
        let squares = Array.from(document.querySelectorAll(".grid div"))
        const scoreDisplay = document.querySelector("#score")
        const startBtn = document.querySelector("#start-button")
        const width = 10

        // The Tetrominoes
        const lTetromino = [
            [1, width+1, width*2+1, 2],
            [width, width+1, width+2, width*2+2],
            [1, width+1, width*2+1, width*2],
            [width, width*2, width*2+1, width*2+2]
        ]

        const zTetromino = [
            [0, width+1, width*2+1],
            [width+1, width+2, width*2, width*2+1],
            [0, width, width+1, width*2+1],
            [width+1, width+2, width*2, width*2+1]
        ]

        const tTetromino = [
            [1, width, width+1, width+2],
            [1, width+1, width+2, width*2+1],
            [width, width+1, width+2, width*2+1],
            [1, width, width+1, width*2+1]
        ]

        const oTetromino = [
            [0, 1, width+1, width+2],
            [0,1,width, width+1],
            [0,1, width, width+1],
            [0,1, width, width+1]
        ]
         
        const iTetromino = [
            [1, width+1, width*2+1, width*3+1],
            [width, width+1, width+2, width+3],
            [1, width+1, width*2+1, width*3+1],
            [width, width+1, width+2, width+3]
        ]

        // putting all the tetrominoes in an array
        const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]

        let currentPosition = 4
        let current = theTetrominoes[0][0]

        // draw the first roatation in the first tetromino
        function draw() {
            current.forEach(index => {
                // class list goes to the css file and grabs the class tetromino: which has a blue background color
                squares[currentPosition + index].classList.add('tetromino')
            })
        }

        draw()

        


// })