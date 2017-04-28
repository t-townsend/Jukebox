$(document).ready(function() {
  $('#song-form').submit(function(event){
    event.preventDefault();
    $('#song-queue').prepend(`<li>
    <span class="song-name-span">${$("input[name='song-name']" ).val()}  </span>
    <span class="notes-span">${$("input[name='notes']" ).val()}</span>
    </li>`)
    $('.form-control').val("");
  });

  $('#play-button').click(function(event){
    event.preventDefault();

    // let loopTime = setInterval(function(){ player()}, 4000);

    function player(){

      if($('#song-queue li').length > 0){
          let song = $('#song-queue li .notes-span')[0].innerText

          let onComplete = function (){
            const songQueue = $('#song-queue li')
            // conditional for when songqueue still has songs to play
            if(songQueue && songQueue[0] !== undefined) {
              songQueue[0].remove();
              // recursively calling player so that it keeps playing songs
              player()
            } else {
            // conditional for when songqueue is empty
              $('#play-button').slideDown('slow');
              $('#message').text(`Enter a Song To Play`);

            }
            console.log('')
          }

          $('#play-button').slideUp('slow');
          $('#message').text(`Now Playing: ${$('.song-name-span').html()}`);
          playSong(parseSong(song), 400, onComplete);

      }

      if ($('#song-queue li').length === 0){
        console.log('hit stop playing songs')
        // function myStopFunction() {
        //   clearInterval(loopTime);
        // }
        // myStopFunction()
      }
    }

    player()

      // let playDelayed = function() {
      //   setTimeout(onComplete, 4000)
      // }

   });




});
