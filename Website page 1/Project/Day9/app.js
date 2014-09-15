$(document).ready(function() {
    // this fires when the form is submitted
    $('#limerick-form').submit(function(e) {
        // prevent the submit button from refreshing the page
        e.preventDefault();
        // copy this line (line 5) for each word you will be replacing; .val() gets the value of the input field
        var nounOne = $('input#noun-one').val();
        var verbOne = $('input#verb-one').val();
        var numberOne = $('input#number-one').val();
        var verbTwo = $('input#verb-two').val();
        // this adds the submitted word to the limerick via a span tag id
        $('span#noun-one-new').text(nounOne);
        $('span#verb-one-new').text(verbOne);
        $('span#number-one-new').text(numberOne);
        $('span#verb-two-new').text(verbTwo);

   $('form#limerick-form').fadeOut('fast', function() {
            $('div#limerick').show();
        });
    });
});
