
document.querySelectorAll('.faq .q').forEach((el)=>{
  el.addEventListener('click',()=>{
    const a = el.nextElementSibling;
    if(!a) return;
    a.style.display = a.style.display === 'block' ? 'none' : 'block';
  });
});
