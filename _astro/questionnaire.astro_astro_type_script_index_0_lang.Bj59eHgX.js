let d=[],c={};function b(){const o=localStorage.getItem("bettafilm-questions");o&&(d=JSON.parse(o)),m()}function m(){const o=document.getElementById("form-questions"),r=document.getElementById("submit-container");if(o){if(d.length===0){o.innerHTML=`
        <div class="text-center py-8 space-y-4">
          <p class="text-gray-500 text-lg">No questions available at the moment.</p>
          <p class="text-gray-400 text-sm">Please contact the administrator if you believe this is an error.</p>
        </div>
      `,r?.classList.add("hidden");return}r?.classList.remove("hidden"),o.innerHTML=d.map((t,s)=>{const e=`field-${t.id}`;let n="";switch(t.type){case"textarea":n=`<textarea id="${e}" name="${e}" rows="4" ${t.required?"required":""} placeholder="Enter your answer here..." class="w-full px-4 py-3 border border-black rounded-lg outline-none focus:ring-2 focus:ring-green resize-none"></textarea>`;break;case"radio":n=`<div class="space-y-2">${t.options?.map((a,i)=>`
            <label class="flex items-center gap-3 cursor-pointer p-3 border border-gray-300 rounded-lg hover:border-green transition-colors">
              <input type="radio" name="${e}" value="${a}" ${t.required&&i===0?"required":""} class="w-5 h-5 border border-black text-green focus:ring-green">
              <span class="flex-1">${a}</span>
            </label>
          `).join("")}</div>`;break;case"checkbox":n=`<div class="space-y-2">${t.options?.map(a=>`
            <label class="flex items-center gap-3 cursor-pointer p-3 border border-gray-300 rounded-lg hover:border-green transition-colors">
              <input type="checkbox" name="${e}" value="${a}" class="w-5 h-5 border border-black rounded text-green focus:ring-green">
              <span class="flex-1">${a}</span>
            </label>
          `).join("")}</div>`;break;case"number":n=`<input type="number" id="${e}" name="${e}" ${t.required?"required":""} placeholder="Enter a number..." class="w-full px-4 py-3 border border-black rounded-lg outline-none focus:ring-2 focus:ring-green">`;break;case"email":n=`<input type="email" id="${e}" name="${e}" ${t.required?"required":""} placeholder="your@email.com" class="w-full px-4 py-3 border border-black rounded-lg outline-none focus:ring-2 focus:ring-green">`;break;case"phone":n=`<input type="tel" id="${e}" name="${e}" ${t.required?"required":""} placeholder="+1 (555) 000-0000" class="w-full px-4 py-3 border border-black rounded-lg outline-none focus:ring-2 focus:ring-green">`;break;case"date":n=`<input type="date" id="${e}" name="${e}" ${t.required?"required":""} class="w-full px-4 py-3 border border-black rounded-lg outline-none focus:ring-2 focus:ring-green">`;break;default:n=`<input type="text" id="${e}" name="${e}" ${t.required?"required":""} placeholder="Enter your answer..." class="w-full px-4 py-3 border border-black rounded-lg outline-none focus:ring-2 focus:ring-green">`}return`
        <div class="space-y-3 p-6 bg-white rounded-xl border border-gray-200">
          <label class="block text-black font-medium text-lg">
            ${s+1}. ${t.text}
            ${t.required?'<span class="text-red-500">*</span>':'<span class="text-gray-400 text-sm font-normal">(Optional)</span>'}
          </label>
          ${n}
        </div>
      `}).join("")}}async function g(o){try{const r=await fetch("/api/bettafilm/responses.json",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({responses:o})});if(!r.ok)throw new Error("Failed to save response");return await r.json()}catch(r){throw console.error("Error saving response:",r),alert("Failed to save response. Please try again."),r}}function f(){const o=document.getElementById("questionnaire-form");o?.addEventListener("submit",async r=>{r.preventDefault();const t=new FormData(r.target),s={};d.forEach(a=>{const i=`field-${a.id}`;if(a.type==="checkbox"){const l=t.getAll(i);s[a.text]=l.length>0?l:["No answer provided"]}else{const l=t.get(i);s[a.text]=l||"No answer provided"}}),c=s;const e=o.querySelector('button[type="submit"]'),n=e.textContent;e.disabled=!0,e.textContent="Submitting...";try{await g(s),y(s),o.style.display="none"}catch{e.disabled=!1,e.textContent=n}})}function y(o){const r=document.getElementById("responses-display"),t=document.getElementById("responses-content");!r||!t||(r.classList.remove("hidden"),t.innerHTML=Object.entries(o).map(([s,e])=>{const n=Array.isArray(e)?e.join(", "):e||'<em class="text-gray-400">No answer</em>';return`
        <div class="pb-3 border-b border-gray-200 last:border-b-0">
          <p class="font-medium text-gray-800 mb-1">${s}</p>
          <p class="text-gray-600">${n}</p>
        </div>
      `}).join(""),r.scrollIntoView({behavior:"smooth",block:"start"}))}function x(){document.getElementById("download-json-btn")?.addEventListener("click",()=>{const r=new Date().toISOString().split("T")[0],t=JSON.stringify({submittedAt:new Date().toISOString(),responses:c},null,2),s=new Blob([t],{type:"application/json"}),e=URL.createObjectURL(s),n=document.createElement("a");n.href=e,n.download=`bettafilm-responses-${r}.json`,n.click(),URL.revokeObjectURL(e)})}function $(){document.getElementById("download-pdf-btn")?.addEventListener("click",()=>{const r=new Date().toISOString();let t=`BETTA FILM QUESTIONNAIRE RESPONSES
`;t+=`Submitted: ${r}
`,t+=`${"=".repeat(60)}

`,Object.entries(c).forEach(([a,i],l)=>{t+=`${l+1}. ${a}
`;const p=Array.isArray(i)?i.join(", "):i;t+=`   Answer: ${p}

`});const s=new Blob([t],{type:"text/plain"}),e=URL.createObjectURL(s),n=document.createElement("a");n.href=e,n.download=`bettafilm-responses-${r.split("T")[0]}.txt`,n.click(),URL.revokeObjectURL(e)})}function u(){b(),f(),x(),$()}u();document.addEventListener("astro:after-swap",u);
