function makeGrid(){
    $('table tr').remove();
    let row = $('#inputHeight').val();
    let col = $('#inputWeight').val();
    for (let i = 0; i < row; i++) {
      $('table').append("<tr></tr>");
      for (let j = 0; j < col; j++) {
        $('tr:last').append("<td></td>");
        $('td').addClass('cells');
      }
    }
}
$(document).ready(function () {
    $('#sizePicker').submit(function createGrid(grid) {
      makeGrid()
      grid.preventDefault();

      $('.cells').click(function (e) {
        let color = $('#colorPicker').val();
        $(e.target).css('background-color', color);
      });
    });
  });