

function setUp(num) {
	textView = document.getElementById('textview');
	switch(num){
		case 'C':
				textView.value = '';
				break;
		case 'b':
				textView.value = textView.value.substring(0,textView.value.length-1);
				break;
		case '=':
				try{
					textView.value = eval(textView.value);
				}catch(err){
					textView.value = '';
					alert("Invalid input format");
				}
				break;
		default:
		textView.value +=  num;
	}
}
