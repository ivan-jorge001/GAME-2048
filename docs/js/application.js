$(document).ready(function() {
  loadSounds();
    $('.va').hide();
    var game = new Game2048();
    game._renderBoard();
    renderTiles();





    function renderTiles() {
        game.board.forEach(function(row, rowIndex) {
            row.forEach(function(cell, cellIndex) {
                console.log(cell);
                var tileContainer = $("#tile-container");
                var newTile = document.createElement("div");

                newTile.classList = "tile val-" + cell;
                newTile.classList += " tile-position-" + rowIndex + "-" + cellIndex;
                newTile.innerHTML = (cell);

                tileContainer.append(newTile);
            });
        });
    }

    function resetTiles() {
        var tilesContainer = document.getElementById("tile-container");
        var tiles = tilesContainer.getElementsByClassName("tile");

        Array.prototype.slice.call(tiles).forEach(function(tile) {
            tilesContainer.removeChild(tile);
        });
    }

    function updateScore() {
        var score = game.score;
        var scoreContainer = document.getElementsByClassName("js-score");

        Array.prototype.slice.call(scoreContainer).forEach(function(span) {
            span.innerHTML = score;
        });
    }


    function moveListeners(event) {
        var keys = [37, 38, 39, 40];

        if (keys.indexOf(event.keyCode) < 0)
            return;

        switch (event.keyCode) {
            case 37:
                game.move("left");
                break;
            case 38:
                game.move("up");
                break;
            case 39:
                game.move("right");
                break;
            case 40:
                game.move("down");
                break;
        }

        resetTiles();
        renderTiles();
        updateScore();
        gameStatus();

    }

    function gameStatus() {
        if (game.lost) {
            $("#game-over").addClass("show-won");
        } else if (!game.won) {
            $("#game-over").addClass("show-lost");
        }
    }

    document.addEventListener("keydown", moveListeners);



});


 //load sound from ion.sound .min .js
