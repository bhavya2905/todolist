// alert("i'm here")
var list=document.getElementById("list");
var input_value=document.getElementById("text");
var add_button=document.getElementById("icon");
// console.log(input_value);


class next{
    constructor(text){
        this.create_list(text);
    }
    create_list(input_text){
        var box=document.createElement('div');
        var title=document.createElement('input');
        title.classList.add('name');
        title.value=input_text;
        title.type="text";
        title.disabled=true;
        var checking=document.createElement('input');
        checking.type='checkbox';
        // checking.style.backgroundColor='green';
        checking.classList.add('check');
        var edit=document.createElement('button');
        edit.classList.add('edit');
        edit.innerHTML="EDIT";
        edit.addEventListener('click',() => this.edit_list(title));

        var remove=document.createElement('button');
        remove.classList.add('remove');
        remove.innerHTML="REMOVE";
        remove.addEventListener('click',() => this.remove_list(box) );
        var line=document.createElement('hr');
        
        list.appendChild(box);
        // box.appendChild(checking);
        box.appendChild(title);
        box.appendChild(edit);
        box.appendChild(remove);
        box.appendChild(line);
    }
    edit_list(title){
        title.disabled=!title.disabled;
        
    }
    remove_list(box){
        // box.parentNode.removeChild(box);
        list.removeChild(box);
    }
}

// var todolist=[];


add_button.addEventListener('click',add_list);
function add_list(){
    new next(input_value.value);
    // todolist.push(input_value.value);
    input_value.value="";
}
new next('read');