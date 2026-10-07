(() => {
 const filters=[...document.querySelectorAll('[data-filter]')],views=[...document.querySelectorAll('.fleet-view')],dialog=document.querySelector('#fleet-photo-dialog');
 filters.forEach(button=>button.addEventListener('click',()=>{filters.forEach(item=>item.setAttribute('aria-pressed',String(item===button)));let count=0;views.forEach(view=>{view.hidden=button.dataset.filter!=='all'&&view.dataset.category!==button.dataset.filter;if(!view.hidden)count++;});document.querySelector('#fleet-count').textContent=`${count} equipment ${count===1?'view':'views'}`;}));
 document.querySelectorAll('[data-photo]').forEach(button=>button.addEventListener('click',()=>{const img=document.querySelector('#fleet-full-photo');document.querySelector('#fleet-photo-title').textContent=button.dataset.photoTitle;img.src=button.dataset.photo;img.alt=button.dataset.photoAlt;img.removeAttribute('width');img.removeAttribute('height');dialog.showModal();}));
 document.querySelector('#fleet-photo-close').addEventListener('click',()=>dialog.close());
})();
