const Add=document.getElementById('Add');
const container=document.querySelector('.container');
const popup=document.querySelector('.popup');
const submit=document.getElementById('submit');
const paragraph=document.getElementById('paragraph');
const post =document.querySelector('.post');
const p1 =document.querySelector('.p1');
const delet=document.getElementById('delet');
const pp=document.getElementById('posts-container');

Add.addEventListener('click', () => {
     
    popup.style.display="block";
    container.style.display="none";
});
const apiUrl = 'http://localhost:3000/api/status/add'; // Replace with the actual API URL
const postForm = document.getElementById('postForm');
const textInput = document.getElementById('textInput');
const imgInput = document.getElementById('imgInput');
postForm.addEventListener('submit', function (e) {
   e.preventDefault();
  
    const postData = {
      text: textInput.value,
      img: imgInput.value,
    };
  
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
     
      .then(response => response.json())
      .then(data => {
        console.log(data);
        textInput.value = '';
        imgInput.value = '';
      })
      .then(data => {
        console.log('API Response:', data);
        // Check the data structure to confirm it contains the new post
        // Update your UI to display the new post here
      })
  });
 
