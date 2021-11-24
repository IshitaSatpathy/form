let form = document.getElementById('form');


console.log(form);



function data()
{
    localStorage.setItem("Name", form.Name.value);
    
    localStorage.setItem("Regdno", form.Rno.value);
    
    localStorage.setItem("Email", form.email.value);
    
    localStorage.setItem("Phone", form.phone.value);
    
    localStorage.setItem("DOB", form.Dob.value);
    
    localStorage.setItem("Branch", form.Branch.value);
   
    localStorage.setItem("Domain", form.Domain.value);
    
    localStorage.setItem("Linkid", form.linkid.value);
   
}

















