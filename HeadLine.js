
     const HEADLINE_BASE_URL = new URL("./", document.currentScript.src).href;

     async function loadHeadLine() {
         const res = await fetch(`${HEADLINE_BASE_URL}topLine.html`)
         const headLineEl = document.getElementById("HeadLine");
         headLineEl.innerHTML = await res.text();
         headLineEl.querySelectorAll("a[href]").forEach(a => {
             a.setAttribute("href", new URL(a.getAttribute("href"), HEADLINE_BASE_URL).href);
         });
         headLineEl.querySelectorAll("img[src]").forEach(img => {
             img.setAttribute("src", new URL(img.getAttribute("src"), HEADLINE_BASE_URL).href);
         });

         const SideShowBtm = document.getElementById('sideShowBtm');
         const shutdownBtm = document.getElementById('SideBackBtm');
         const headLineName = document.getElementById('HeadLineName')
         const sideMenu = document.getElementById('sideMenu')
         const menu_user_name = document.getElementById('menu_user_name');
         headLineName.textContent = document.title

         SideShowBtm.addEventListener('click', () => {
             showMenu()
             SideShowUserName()
         })
         shutdownBtm.addEventListener('click', () => {
             shutdownMenu()
         })
         function showMenu() {
             sideMenu.classList.add('show');
             shutdownBtm.classList.add('show');
         }
         function shutdownMenu() {
             sideMenu.classList.remove('show');
             shutdownBtm.classList.remove('show');
         }
         function SideShowUserName() {
             const name = localStorage.getItem('logPlayerName')
             menu_user_name.textContent = `${name}`;
         }
     }


