const header=`<div class="topline">
<div class="container">THIOBEEMS UNIVERSITY · CAMEROON <span>Admissions open for 2026/2027</span>
</div></div><header class="header">
<div class="container nav">
<a class="logo" href="index.html">
<span class="logo-mark">T</span>
<span><b>THIOBEEMS</b><small>UNIVERSITY · CAMEROON</small></span>
</a><button class="menu" id="menu">☰</button><nav id="nav">
<a href="about.html">About</a>
<a href="programmes.html">Programmes</a>
<a href="admission.html">Admissions</a>
<a href="contact.html">Contact</a>
<a href="student-login.html">Student Login</a>
<a class="btn primary" href="admission.html">Apply Now</a>
</nav>
</div>
</header>`;
const footer=`<footer class="footer">
<div class="container footer-grid"><div>
<a class="logo" href="index.html">
<span class="logo-mark">T</span>
<span><b>THIOBEEMS</b><small>UNIVERSITY · CAMEROON</small></span>
</a>
<p>Knowledge · Excellence · Service</p>
</div><div>
<h4>University</h4>
<a href="about.html">About</a>
<a href="programmes.html">Programmes</a>
<a href="admission.html">Admissions</a>
<a href="contact.html">Contact</a>
</div><div>
<h4>Portals</h4>
<a href="student-login.html">Student Login</a>
<a href="admin-login.html">Admin Login</a>
<a href="student-dashboard.html">Student Dashboard</a>
</div><div>
<h4>Cameroon</h4>
<p>THIOBEEMS University<br>Cameroon<br>+237 600 000 000</p>
</div></div>
<div class="bottom">© 2026 THIOBEEMS University · Cameroon</div>
</footer>`;
document.addEventListener('DOMContentLoaded',()=>{
 document.querySelectorAll('#header').forEach(x=>x.innerHTML=header);document.querySelectorAll('#footer').forEach(x=>x.innerHTML=footer);
 const menu=document.getElementById('menu');menu?.addEventListener('click',()=>document.getElementById('nav')?.classList.toggle('open'));
 const programmes=[['BSc Computer Science','Computing','Undergraduate'],['BSc Software Engineering','Computing','Undergraduate'],['MSc Data Science','Computing','Postgraduate'],['BBA Business Administration','Business','Undergraduate'],['BSc Accounting & Finance','Business','Undergraduate'],['MBA Business Leadership','Business','Postgraduate'],['BSc Public Health','Health','Undergraduate'],['MSc Health Systems','Health','Postgraduate'],['BA Economics','Social Sciences','Undergraduate'],['BA Communication','Social Sciences','Undergraduate'],['MA Development Studies','Social Sciences','Postgraduate']];
 const list=document.getElementById('programmeList'),search=document.getElementById('search'),faculty=document.getElementById('faculty');
 function render(){if(!list)return;const q=(search?.value||'').toLowerCase(),f=faculty?.value||'';list.innerHTML=programmes.filter(x=>(!q||x.join(' ').toLowerCase().includes(q))&&(!f||x[1]===f)).map(x=>`<article><div><h3>${x[0]}</h3><p>${x[1]} · ${x[2]}</p></div><a class="link" href="admission.html">Apply →</a></article>`).join('')||'<p>No programmes found.</p>'}search?.addEventListener('input',render);faculty?.addEventListener('change',render);render();
 document.getElementById('admissionForm')?.addEventListener('submit',e=>{e.preventDefault();const id='THB'+new Date().getFullYear()+Math.floor(10000+Math.random()*89999);localStorage.setItem('lastApplication',id);const m=document.getElementById('admissionMessage');m.hidden=false;m.textContent='Application submitted successfully. Your reference is '+id+'.';m.className='message success';e.target.reset()});
 document.getElementById('studentLogin')?.addEventListener('submit',e=>{e.preventDefault();localStorage.setItem('studentAuth','true');location.href='student-dashboard.html'});
 document.getElementById('adminLogin')?.addEventListener('submit',e=>{e.preventDefault();const u=document.getElementById('adminUser').value,p=document.getElementById('adminPassword').value,m=document.getElementById('adminMessage');if(u==='admin'&&p==='admin123'){localStorage.setItem('adminAuth','true');location.href='admin-dashboard.html'}else{m.hidden=false;m.textContent='Invalid demo credentials. Use admin / admin123.';m.className='message error'}});
});
function logout(type){localStorage.removeItem(type==='admin'?'adminAuth':'studentAuth');location.href=type==='admin'?'admin-login.html':'student-login.html'}