function saveNotes() {
    // Get the value of the textarea
    var notes = document.getElementById("notes").value;
  
    // Save the notes to storage
    chrome.storage.sync.set({ "notes": notes }, function() {
      console.log("Notes saved.");
    });
  }
  