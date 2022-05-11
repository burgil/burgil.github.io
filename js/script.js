$(function() {
  var isDragging = false, Notes = null, NextNoteID = null, rotateMode = 'A', throttleMove = 0, throttleMoveLong1 = 0, throttleMoveLong2 = 0, throttleMoveLong3 = 0, throttleMoveLong4 = 0, throttleMoveLong5 = 0, throttleMoveLong6 = 0, throttleMoveLong7 = 0, throttleMoveLong8 = 0, throttleMoveLong9 = 0, throttleMoveLong10 = 0;
  // Functions:
  function getCoords(elem) {
    if(elem==null) return null;
    var box = elem.getBoundingClientRect();
    var body = document.body;
    var docEl = document.documentElement;
    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
    var clientTop = docEl.clientTop || body.clientTop || 0;
    var clientLeft = docEl.clientLeft || body.clientLeft || 0;
    var top  = box.top +  scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;
    return { top: Math.round(top), left: Math.round(left) };
  }
  function limitNotePosition(id) {
    const currentNote = document.querySelector('.note[data-id="'+id+'"]');
    const cords = getCoords(currentNote);
    if(cords == null) return;
    const maxTop = (window.innerHeight - currentNote.clientHeight) / +document.querySelector('#main').style.zoom;
    if(cords.top > maxTop) {
      currentNote.style.top = (maxTop - currentNote.clientHeight) + 'px';
      updateNotePosition(currentNote);
    }
    if(cords.top < 0) {
      currentNote.style.top = '0px';
      updateNotePosition(currentNote);
    }
    const maxLeft = (window.innerWidth - currentNote.clientWidth) / +document.querySelector('#main').style.zoom;
    if(cords.left > maxLeft) {
      currentNote.style.left = (maxLeft - currentNote.clientHeight) + 'px';
      updateNotePosition(currentNote);
    }
    if(cords.left < 0) {
      currentNote.style.left = '0px';
      updateNotePosition(currentNote);
    }
  }
  function generateNote(note) {
    $("#ice_box_content").prepend("<div data-id='"+note.id+"' contenteditable='true' class='note single_note "+note.color+"_single_note' id='single_note_"+note.id+"'>"+note.text+"</div>");
    $('.note[data-id="'+note.id+'"]').draggable({
      stop: function() {
        updateNotePosition(document.querySelector('.note[data-id="'+note.id+'"]'));
      }
    });
    $("#single_note_"+note.id).css({zIndex: note.id})
    if(note.top.includes('calc') || note.left.includes('calc')) {
      $("#single_note_"+note.id).css({left: note.left, top: note.top});
    } else {
      $("#single_note_"+note.id).animate({left: note.left, top: note.top});
    }
    // Fix cursor right to left while editing notes
    $('.note[data-id="'+note.id+'"]').mousedown(function() {
      $(window).mousemove(function() {
        isDragging = true;
        $(window).unbind('mousemove');
      });
    }).mouseup(function() {
      var wasDragging = isDragging;
      isDragging = false;
      $(window).unbind('mousemove');
      if (!wasDragging) {
        $(this).focus();
        moveCaretToTheEnd(this);
      }
    });
    // Prevent dragging outside the screen
    $('.note[data-id="'+note.id+'"]').mousedown(function() {
      $('.note[data-id="'+note.id+'"]').mousemove(function() {
        // Protect against stupid bugs that can cause notes to disapear behind the screen but even when it happens a refresh fix it, and this code is supposed to fix it
        clearTimeout(throttleMoveLong1);clearTimeout(throttleMoveLong2);clearTimeout(throttleMoveLong3);clearTimeout(throttleMoveLong4);clearTimeout(throttleMoveLong5);clearTimeout(throttleMoveLong6);clearTimeout(throttleMoveLong7);clearTimeout(throttleMoveLong8);clearTimeout(throttleMoveLong9);clearTimeout(throttleMoveLong10);
        clearTimeout(throttleMove);
        throttleMove = 0;
        throttleMoveLong1 = 0, throttleMoveLong2 = 0, throttleMoveLong3 = 0, throttleMoveLong4 = 0, throttleMoveLong5 = 0, throttleMoveLong6 = 0, throttleMoveLong7 = 0, throttleMoveLong8 = 0, throttleMoveLong9 = 0, throttleMoveLong10 = 0;
        throttleMove = setTimeout(function() {limitNotePosition(note.id);});
        throttleMoveLong1 = setTimeout(function() {limitNotePosition(note.id);}, 10);
        throttleMoveLong2 = setTimeout(function() {limitNotePosition(note.id);}, 100);
        throttleMoveLong3 = setTimeout(function() {limitNotePosition(note.id);}, 1000);
        throttleMoveLong4 = setTimeout(function() {limitNotePosition(note.id);}, 2000);
        throttleMoveLong5 = setTimeout(function() {limitNotePosition(note.id);}, 3000);
        throttleMoveLong6 = setTimeout(function() {limitNotePosition(note.id);}, 4000);
        throttleMoveLong7 = setTimeout(function() {limitNotePosition(note.id);}, 5000);
        throttleMoveLong8 = setTimeout(function() {limitNotePosition(note.id);}, 6000);
        throttleMoveLong9 = setTimeout(function() {limitNotePosition(note.id);}, 7000);
        throttleMoveLong10 = setTimeout(function() {limitNotePosition(note.id);}, 8000);
      });
    })
    // Save note text
    $('.note[data-id="'+note.id+'"]').on('keyup', function(el){
      updateNoteText(el.currentTarget);
    });
  }
  function updateNoteText(currentTarget){
    let updateNoteID = 0;
    for(const note of Notes) {
      if(note.id == +currentTarget.dataset?.id) break;
      updateNoteID += 1;
    }
    let newNoteTxt = currentTarget.innerHTML.replace('<div><br></div>', '<br>').replace('<div>', '<br>').replace('</div>', '<br>');
    if(newNoteTxt.slice(newNoteTxt.length - 4) == '<br>') newNoteTxt = newNoteTxt.slice(0, newNoteTxt.length - 4);
    if(newNoteTxt.slice(newNoteTxt.length - 1) == ' ') newNoteTxt = newNoteTxt.slice(0, newNoteTxt.length - 1);
    Notes[updateNoteID].text = newNoteTxt;
    localStorage.setItem('Notes',JSON.stringify(Notes));
  }
  function updateNotePosition(currentTarget){
    if(currentTarget==null) return;
    let updateNotePositionID = 0;
    for(const note of Notes) {
      if(note.id == +currentTarget.dataset?.id) break;
      updateNotePositionID += 1;
    }
    if(Notes[updateNotePositionID] == undefined) return;
    if(currentTarget.style.inset != '') {
      Notes[updateNotePositionID].left = currentTarget.style.inset.split(' ')[3];
      Notes[updateNotePositionID].top = currentTarget.style.inset.split(' ')[0];
      localStorage.setItem('Notes',JSON.stringify(Notes));
    }
  }
  function moveCaretToTheEnd(currentTarget) {
    try {
      var range = document.createRange()
      var sel = window.getSelection()
      range.setStart(currentTarget.childNodes[currentTarget.childNodes.length - 1], currentTarget.childNodes[currentTarget.childNodes.length - 1].length)
      range.collapse(true)
      sel.removeAllRanges()
      sel.addRange(range)
    }catch(e) {}
  }
  function updateCategoryText(currentTarget, id) {
    let newNoteTxt = currentTarget.innerHTML.replace('<div><br></div>', '<br>').replace('<div>', '<br>').replace('</div>', '<br>');
    if(newNoteTxt.slice(newNoteTxt.length - 4) == '<br>') newNoteTxt = newNoteTxt.slice(0, newNoteTxt.length - 4);
    if(newNoteTxt.slice(newNoteTxt.length - 1) == ' ') newNoteTxt = newNoteTxt.slice(0, newNoteTxt.length - 1);
    let cat_data = [{text:newNoteTxt}]
    if(currentTarget.parentElement.style.inset != '') {
      cat_data[0].left = currentTarget.parentElement.style.inset.split(' ')[3];
      cat_data[0].top = currentTarget.parentElement.style.inset.split(' ')[0];
    }else if(currentTarget.parentElement.style.left != '' && currentTarget.parentElement.style.top != '') {
      cat_data[0].left = currentTarget.parentElement.style.left;
      cat_data[0].top = currentTarget.parentElement.style.top;
    }
    localStorage.setItem('Cat'+id,JSON.stringify(cat_data));
  }
  function updateCategoryPosition(currentTarget, id) {
    let newNoteTxt = currentTarget.querySelector('.cat_box_label').innerHTML.replace('<div><br></div>', '<br>').replace('<div>', '<br>').replace('</div>', '<br>');
    if(newNoteTxt.slice(newNoteTxt.length - 4) == '<br>') newNoteTxt = newNoteTxt.slice(0, newNoteTxt.length - 4);
    if(newNoteTxt.slice(newNoteTxt.length - 1) == ' ') newNoteTxt = newNoteTxt.slice(0, newNoteTxt.length - 1);
    let cat_data = [{text:newNoteTxt}]
    if(currentTarget.style.inset != '') {
      cat_data[0].left = currentTarget.style.inset.split(' ')[3];
      cat_data[0].top = currentTarget.style.inset.split(' ')[0];
    }else if(currentTarget.style.left != '' && currentTarget.style.top != '') {
      cat_data[0].left = currentTarget.style.left;
      cat_data[0].top = currentTarget.style.top;
    }
    localStorage.setItem('Cat'+id,JSON.stringify(cat_data));
  }
  function categoryHandler(id, name, color, colorHex) {
    // create category color css
    const newStyle = document.createElement('style');
    newStyle.innerHTML = '.'+color+'_single_note{background-color:'+colorHex+';}';
    document.head.append(newStyle);
    // create category
    $("#cat_notes").append("<div class='cat_box cat_box-"+id+" rotate_cat_type"+rotateMode+"'><div contenteditable='true' class='cat_box_label cat_box_label-"+id+"'></div><div class='cat_note cat_note-"+id+" rotate_note_type"+rotateMode+" "+color+"_single_note'></div></div>");
    // handle category rotation
    if(rotateMode == 'A') {
      rotateMode = 'B';
    } else if(rotateMode == 'B') {
      rotateMode = 'C';
    } else if(rotateMode == 'C') {
      rotateMode = 'D';
    } else if(rotateMode == 'D') {
      rotateMode = 'A';
    }
    // make category note draggable
    $('.cat_box-'+id).draggable();
    // Fix cursor right to left while editing categories and make category note editable nicely
    $('.cat_box_label-'+id).mousedown(function() {
      $(window).mousemove(function() {
        isDragging = true;
        $(window).unbind('mousemove');
      });
    }).mouseup(function() {
      var wasDragging = isDragging;
      isDragging = false;
      $(window).unbind('mousemove');
      if (!wasDragging) {
        $(this).focus();
        moveCaretToTheEnd(this);
      }
    });
    // Save category names on edit
    let cat = localStorage.getItem('Cat'+id);
    if(cat == null) {
      cat = [{text:name}];
      localStorage.setItem('Cat'+id,JSON.stringify(cat));
    } else {
      cat = JSON.parse(cat);
    }
    // Move categories to where they was
    if(cat[0].left != null && cat[0].top != null) {
      $('.cat_box-'+id).css({left: cat[0].left, top: cat[0].top});
    }
    // Updates categories text to what it was
    document.querySelector('.cat_box_label-'+id).innerHTML = cat[0].text;
    // Updates local storage with the current note text
    $('.cat_box_label-'+id).on('keyup', function(el){
      updateCategoryText(el.currentTarget, id);
    });
    // Updates local storage with the current position of the category notes
    $('.cat_box-'+id).mouseup(function(el){
      updateCategoryPosition(el.currentTarget, id);
    });
    // Make the category able to create notes:
    $('.cat_note-'+id).mousedown(function() {
      $(window).mousemove(function() {
        isDragging = true;
        $(window).unbind('mousemove');
      });
    }).mouseup(function() {
      var wasDragging = isDragging;
      isDragging = false;
      $(window).unbind('mousemove');
      if (!wasDragging) {
        const note = {
          id: NextNoteID,
          text: '',
          color: color,
          left: 'calc(((16.667% - 4vh) - 50px) / 2)',
          top: 'calc(2vh - 1px - 10px)'
        }
        NextNoteID++;
        localStorage.setItem('NextNoteID', NextNoteID);
        Notes.push(note);
        localStorage.setItem('Notes',JSON.stringify(Notes));
        generateNote(note);
      }
    });
  }
  function loadNotes() {
    // Handle page zoom:
    function handleZoom() {
        const zoomLvl = window.innerWidth / screen.width;
        document.querySelector('#main').style.zoom = zoomLvl == 1 ? 1 : zoomLvl;
    }
    window.addEventListener( 'resize', function(){
        handleZoom();
    }, false );
    handleZoom();
    // Load notes from local storage:
    NextNoteID = +localStorage.getItem('NextNoteID');
    if(NextNoteID == 0) {
      NextNoteID = 1;
      localStorage.setItem('NextNoteID', NextNoteID);
    }
    // Generate notes from local storage on load:
    Notes = localStorage.getItem('Notes');
    if(Notes == null) {
      Notes = [];
      localStorage.setItem('Notes',JSON.stringify(Notes));
    } else {
      Notes = JSON.parse(Notes);
      for(const note of Notes) {
        generateNote(note);
      }
    }
    // Apply appropriate borders to the table:
    $( "#table_head .col-xs-2, #table_content .col-xs-2" ).each(function() {
      if(!$(this).is(':last-child')) {
        $( this ).addClass( "panel-border-right" );
      }
    });
    // Custom categories:
    let catID = 0;
    for(const cat of cats) {
      catID+=1
      categoryHandler(catID.toString(), cat[0], cat[1], cat[2])
    }
    //Collisions to remove elements
    $( "#trash" ).droppable({
      drop: function( event, ui ) {
        let deleteNoteID = 0;
        for(const note of Notes) {
          if(note.id == +ui.draggable[0].dataset.id) break;
          deleteNoteID += 1;
        }
        Notes.splice(deleteNoteID, 1);
        localStorage.setItem('Notes',JSON.stringify(Notes));
        $(ui.draggable).remove();
      }
    });
  }
  loadNotes();
});
