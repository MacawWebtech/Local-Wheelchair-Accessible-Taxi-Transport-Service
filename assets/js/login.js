/* Credentials stay in the form; no authentication service is connected. */
(() => {
const form=document.querySelector('#login-form'),email=document.querySelector('#login-email'),password=document.querySelector('#login-password'),status=document.querySelector('#login-status'),errors=document.querySelector('#login-errors'),show=document.querySelector('#show-password');
function validate(field){const value=field.value.trim();if(!value)return field===email?'Enter your email address.':'Enter your password.';if(field===email&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))return 'Enter a valid email address.';return '';}
function update(field){const message=validate(field);document.querySelector('#'+field.id+'-error').textContent=message;field.setAttribute('aria-invalid',String(Boolean(message)));return message;}
form.addEventListener('submit',event=>{event.preventDefault();status.hidden=true;const invalid=[email,password].filter(field=>update(field));errors.hidden=!invalid.length;if(invalid.length){errors.textContent='Please correct the highlighted fields.';invalid[0].focus();return;}password.value='';window.location.assign('dashboard.html');});
form.addEventListener('input',event=>{status.hidden=true;if([email,password].includes(event.target)&&event.target.getAttribute('aria-invalid')==='true')update(event.target);});
show.addEventListener('click',()=>{const visible=password.type==='password';password.type=visible?'text':'password';show.setAttribute('aria-pressed',String(visible));show.textContent=visible?'Hide password':'Show password';});
const help=document.querySelector('#account-help');document.querySelector('#forgot-password').addEventListener('click',()=>{help.textContent='Password recovery is not connected yet. Please use the Contact Us page for account-support questions.';help.hidden=false;});
})();
