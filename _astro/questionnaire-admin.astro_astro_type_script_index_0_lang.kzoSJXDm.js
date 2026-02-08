let d=[],u=null;function b(){const t=localStorage.getItem("bettafilm-questions");t&&(d=JSON.parse(t)),p(),v()}function f(){localStorage.setItem("bettafilm-questions",JSON.stringify(d)),v()}function v(){const t=document.getElementById("share-link");if(t){const e=window.location.origin;t.value=`${e}/projects/bettafilm/questionnaire`}}function E(){const t=document.getElementById("copy-link-btn"),e=document.getElementById("share-link"),n=document.getElementById("copy-message");t?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(e.value),n?.classList.remove("hidden"),setTimeout(()=>{n?.classList.add("hidden")},3e3)}catch{alert("Failed to copy link")}})}function k(){document.getElementById("export-json-btn")?.addEventListener("click",()=>{const e=JSON.stringify(d,null,2),n=new Blob([e],{type:"application/json"}),s=URL.createObjectURL(n),o=document.createElement("a");o.href=s,o.download="bettafilm-questions.json",o.click(),URL.revokeObjectURL(s)})}function x(){const t=document.getElementById("import-json-btn"),e=document.getElementById("json-file-input");t?.addEventListener("click",()=>{e.click()}),e?.addEventListener("change",n=>{const s=n.target.files?.[0];if(!s)return;const o=new FileReader;o.onload=i=>{try{const a=JSON.parse(i.target?.result);Array.isArray(a)?(d=a,f(),p(),alert("Questions imported successfully!")):alert("Invalid JSON format")}catch{alert("Failed to import JSON file")}},o.readAsText(s)})}function L(){const t=document.getElementById("add-question-btn"),e=document.getElementById("question-form"),n=document.getElementById("cancel-question-btn"),s=document.getElementById("save-question-btn"),o=document.getElementById("question-type"),i=document.getElementById("options-container");t?.addEventListener("click",()=>{e?.classList.remove("hidden"),g()}),n?.addEventListener("click",()=>{e?.classList.add("hidden"),g()}),s?.addEventListener("click",w),o?.addEventListener("change",()=>{o.value==="radio"||o.value==="checkbox"?i?.classList.remove("hidden"):i?.classList.add("hidden")})}function g(){document.getElementById("question-text").value="",document.getElementById("question-type").value="text",document.getElementById("question-options").value="",document.getElementById("question-required").checked=!1,document.getElementById("options-container")?.classList.add("hidden"),u=null}function w(){const t=document.getElementById("question-text"),e=document.getElementById("question-type"),n=document.getElementById("question-options"),s=document.getElementById("question-required"),o=t.value.trim(),i=e.value,a=s.checked;if(!o){alert("Please enter a question text");return}let r;if((i==="radio"||i==="checkbox")&&(r=n.value.split(`
`).map(l=>l.trim()).filter(l=>l.length>0),!r||r.length===0)){alert("Please enter at least one option");return}if(u){const l=d.findIndex(c=>c.id===u);l!==-1&&(d[l]={id:u,text:o,type:i,options:r,required:a})}else{const l={id:Date.now().toString(),text:o,type:i,options:r,required:a};d.push(l)}f(),p(),document.getElementById("question-form")?.classList.add("hidden"),g()}function p(){const t=document.getElementById("questions-list");if(t){if(d.length===0){t.innerHTML='<p class="text-center text-gray-500 italic">No questions added yet. Click "Add Question" to get started.</p>';return}t.innerHTML=d.map((e,n)=>`
      <div class="question-item">
        <div class="flex justify-between items-start gap-4">
          <div class="flex-1">
            <div class="flex items-center gap-2 mb-2">
              <span class="font-medium text-lg">${n+1}. ${e.text}</span>
              ${e.required?'<span class="text-red-500 text-sm">(Required)</span>':""}
            </div>
            <p class="text-sm text-gray-600">Type: <span class="font-medium">${B(e.type)}</span></p>
            ${e.options?`<p class="text-sm text-gray-600 mt-1">Options: ${e.options.join(", ")}</p>`:""}
          </div>
          <div class="flex gap-2 flex-wrap">
            <button class="edit-btn" data-id="${e.id}">Edit</button>
            <button class="delete-btn" data-id="${e.id}">Delete</button>
          </div>
        </div>
      </div>
    `).join(""),t.querySelectorAll(".delete-btn").forEach(e=>{e.addEventListener("click",n=>{const s=n.target.getAttribute("data-id");I(s)})}),t.querySelectorAll(".edit-btn").forEach(e=>{e.addEventListener("click",n=>{const s=n.target.getAttribute("data-id");q(s)})})}}function B(t){return{text:"Text Input",textarea:"Long Text",number:"Number",email:"Email",phone:"Phone Number",date:"Date",radio:"Multiple Choice (Single)",checkbox:"Multiple Choice (Multi)"}[t]||t}function I(t){confirm("Are you sure you want to delete this question?")&&(d=d.filter(e=>e.id!==t),f(),p())}function q(t){const e=d.find(n=>n.id===t);e&&(u=t,document.getElementById("question-text").value=e.text,document.getElementById("question-type").value=e.type,document.getElementById("question-required").checked=e.required,e.options&&(document.getElementById("question-options").value=e.options.join(`
`),document.getElementById("options-container")?.classList.remove("hidden")),document.getElementById("question-form")?.classList.remove("hidden"))}function j(){const t=document.querySelectorAll(".tab-btn"),e=document.querySelectorAll(".tab-content");t.forEach(n=>{n.addEventListener("click",()=>{t.forEach(s=>s.classList.remove("active")),n.classList.add("active"),e.forEach(s=>s.classList.add("hidden")),n.id==="tab-questions"?document.getElementById("questions-panel")?.classList.remove("hidden"):n.id==="tab-responses"&&(document.getElementById("responses-panel")?.classList.remove("hidden"),m())})}),document.getElementById("tab-questions")?.classList.add("active")}async function m(){const t=document.getElementById("responses-list");t&&(t.innerHTML=`
        <div class="loading-state">
          <div class="loading-spinner"></div>
          <p class="loading-text">Loading responses...</p>
        </div>
      `);try{const n=await(await fetch("/api/bettafilm/responses.json")).json(),s=document.getElementById("response-count");s&&(s.textContent=n.length.toString()),S(n)}catch(e){console.error("Error loading responses:",e),t&&(t.innerHTML=`
          <div class="error-state">
            <svg class="error-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <p class="error-title">Failed to load responses</p>
            <p class="error-description">Please check your connection and try again.</p>
            <button onclick="window.location.reload()" class="btn-secondary mt-4">Reload Page</button>
          </div>
        `)}}function S(t){const e=document.getElementById("responses-list");if(e){if(t.length===0){e.innerHTML=`
        <div class="empty-state">
          <svg class="empty-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
          <p class="empty-title">No responses yet</p>
          <p class="empty-description">Responses will appear here once clients submit the questionnaire.</p>
        </div>
      `;return}e.innerHTML=t.reverse().map((n,s)=>{const i=new Date(n.timestamp).toLocaleString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),a=Object.keys(n.responses).length;return`
        <div class="response-item" data-response-id="${n.id}">
          <!-- Clickable Header -->
          <div class="response-header" data-toggle-id="${n.id}">
            <div class="flex justify-between items-center gap-4">
              <div class="flex-1 flex items-center gap-4">
                <div class="flex items-center justify-center w-10 h-10 bg-green rounded-full font-medium text-black">
                  #${t.length-s}
                </div>
                <div class="flex-1">
                  <div class="flex items-center gap-3 mb-1">
                    <span class="font-medium text-lg">Response #${t.length-s}</span>
                    <span class="response-badge">${a} answers</span>
                  </div>
                  <div class="flex items-center gap-2 text-sm text-gray-500">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span>${i}</span>
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <svg class="chevron-icon w-6 h-6 text-gray-400 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>
          
          <!-- Response Details (hidden by default) -->
          <div id="response-details-${n.id}" class="response-details hidden">
            <div class="response-content">
              ${Object.entries(n.responses).map(([r,l],c)=>{const h=Array.isArray(l)?l.join(", "):l;return`
                  <div class="response-qa">
                    <div class="flex items-start gap-3">
                      <span class="qa-number">${c+1}</span>
                      <div class="flex-1">
                        <p class="qa-question">${r}</p>
                        <p class="qa-answer">${h}</p>
                      </div>
                    </div>
                  </div>
                `}).join("")}
            </div>
            
            <div class="response-actions">
              <button class="btn-secondary" data-download-id="${n.id}">
                <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
                Download JSON
              </button>
              <button class="delete-btn" data-delete-id="${n.id}">
                <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                </svg>
                Delete
              </button>
            </div>
          </div>
        </div>
      `}).join(""),e.querySelectorAll(".response-header").forEach(n=>{n.addEventListener("click",s=>{const o=s.currentTarget.getAttribute("data-toggle-id"),i=e.querySelector(`[data-response-id="${o}"]`),a=document.getElementById(`response-details-${o}`),r=n.querySelector(".chevron-icon");a&&i&&r&&(a.classList.toggle("hidden"),i.classList.toggle("expanded"),r.classList.toggle("rotate-180"))})}),e.querySelectorAll("[data-delete-id]").forEach(n=>{n.addEventListener("click",s=>{s.stopPropagation();const o=s.currentTarget.getAttribute("data-delete-id");A(o)})}),e.querySelectorAll("[data-download-id]").forEach(n=>{n.addEventListener("click",s=>{s.stopPropagation();const o=s.currentTarget.getAttribute("data-download-id");$(o)})})}}async function A(t){if(confirm("Are you sure you want to delete this response?"))try{if(!(await fetch("/api/bettafilm/responses.json",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t})})).ok)throw new Error("Failed to delete response");m()}catch(e){console.error("Error deleting response:",e),alert("Failed to delete response. Please try again.")}}async function $(t){try{const s=(await(await fetch("/api/bettafilm/responses.json")).json()).find(c=>c.id===t);if(!s)return;const o=JSON.stringify(s,null,2),i=new Blob([o],{type:"application/json"}),a=URL.createObjectURL(i),r=document.createElement("a");r.href=a;const l=new Date(s.timestamp).toISOString().split("T")[0];r.download=`bettafilm-response-${l}.json`,r.click(),URL.revokeObjectURL(a)}catch(e){console.error("Error downloading response:",e),alert("Failed to download response. Please try again.")}}function R(){document.getElementById("export-all-responses-btn")?.addEventListener("click",async()=>{try{const n=await(await fetch("/api/bettafilm/responses.json")).json();if(n.length===0){alert("No responses to export");return}const s=JSON.stringify(n,null,2),o=new Blob([s],{type:"application/json"}),i=URL.createObjectURL(o),a=document.createElement("a");a.href=i;const r=new Date().toISOString().split("T")[0];a.download=`bettafilm-all-responses-${r}.json`,a.click(),URL.revokeObjectURL(i)}catch(e){console.error("Error exporting responses:",e),alert("Failed to export responses. Please try again.")}})}function T(){document.getElementById("clear-responses-btn")?.addEventListener("click",async()=>{if(confirm("Are you sure you want to delete ALL responses? This cannot be undone!"))try{if(!(await fetch("/api/bettafilm/clear-responses.json",{method:"POST"})).ok)throw new Error("Failed to clear responses");m(),alert("All responses have been cleared.")}catch(e){console.error("Error clearing responses:",e),alert("Failed to clear responses. Please try again.")}})}function y(){j(),L(),k(),x(),E(),R(),T(),b(),m()}y();document.addEventListener("astro:after-swap",y);
