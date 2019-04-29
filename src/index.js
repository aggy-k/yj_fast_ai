var el = x => document.getElementById(x);

// function showPicker(inputId) { el('file-input').click(); }

// function showPicked(input) {
//     el('upload-label').innerHTML = input.files[0].name;
//     var reader = new FileReader();
//     reader.onload = function (e) {
//         el('image-picked').src = e.target.result;
//         el('image-picked').className = '';
//     }
//     reader.readAsDataURL(input.files[0]);
// }

function analyze() {
    // Aggy: This is the original, for uploaded images
    // var uploadFiles = el('file-input').files;
    // if (uploadFiles.length != 1) alert('Please select 1 file to analyze!');

    // Aggy: These are the values taken from the 6 input fields on the HTML form
    var projectTitle = el('projectTitle').value;
    var projectAim = el('projectAim').value;
    var projectContext = el('projectContext').value;
    var projectValue = el('projectValue').value;
    var projectMethod = el('projectMethod').value;
    var projectDeliverable = el('projectDeliverable').value;


    el('analyze-button').innerHTML = 'Analyzing...';
    var xhr = new XMLHttpRequest();
    var loc = window.location
    xhr.open('POST', `${loc.protocol}//${loc.hostname}:${loc.port}/analyze`, true);
    xhr.onerror = function() {alert (xhr.responseText);}
    xhr.onload = function(e) {
        if (this.readyState === 4) {
            var response = JSON.parse(e.target.responseText);
            el('result-label').innerHTML = `Result = ${response['result']}`; // This is to show the result on the HTML
        }
        el('analyze-button').innerHTML = 'Analyze';
    }

    // the xhr.send(variable) << this is where you should be sending the values for POST method of the variables above
    // Below is the original code for the image file
    // I assume it will be something like:
    // xhr.send({projectTitle: projectTitle, projectAim: projectAim, etc......})

    // var fileData = new FormData();
    // fileData.append('file', uploadFiles[0]);
    // xhr.send(fileData);
}

