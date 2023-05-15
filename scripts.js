$(document).ready(function() {
   
    $('#suggestion-form').submit(function(event) {
        event.preventDefault(); 

        var name = $('#name').val();
        var suggestion = $('#suggestion').val();

       
        if (name.trim() === '' || suggestion.trim() === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        
        var suggestionObject = {
            name: name,
            suggestion: suggestion
        };

        
        storeSuggestion(suggestionObject);

        
        $('#name').val('');
        $('#suggestion').val('');

        
        addSuggestionToList(suggestionObject);
    });

    
    loadSuggestions();

   

    
    function storeSuggestion(suggestion) {
        var suggestions = localStorage.getItem('suggestions');

        if (suggestions) {
            suggestions = JSON.parse(suggestions);
        } else {
            suggestions = [];
        }

        suggestions.push(suggestion);
        localStorage.setItem('suggestions', JSON.stringify(suggestions));
    }

    
    function loadSuggestions() {
        var suggestions = localStorage.getItem('suggestions');

        if (suggestions) {
            suggestions = JSON.parse(suggestions);

            for (var i = 0; i < suggestions.length; i++) {
                addSuggestionToList(suggestions[i]);
            }
        }
    }
});
