let navbarList=[{dataId:"home",linkName:"Inicio"},{dataId:"clase01",linkName:"Clase 1. ¿Que es jQuery?"},{dataId:"clase02",linkName:"¿ Clase 2. Es necesario utilizar jQuery en la Actualidad ?"},{dataId:"clase03",linkName:"Clase 3. Práctica Primeros Pasos"}],layoutNavBar=()=>{console.log("\n"),console.warn("-----  layout-navbar.js  -----");var a=$("#layoutNavbar"),l=`

            <nav class="layout__navbar">
                
                <h3 class="navbar__title"> Navigation </h3>
                
                <ul class="navbar__list">
                    
                    ${navbarList.map(a=>`
                        
                        <li class="navbar__item">
                            <a href="#" data-id="${a.dataId}"> ${a.linkName} </a>
                        </li>`).join("")}
                    
                </ul>

            </nav>

        `;a.append(l)};export{layoutNavBar};