function m(e){const r={};e.structure.forEach(n=>{n.isInput&&(r[n.id]=n)});function a(n,t=null){return e.data[n]?e.data[n]:t||(t===!1?"":r[n]?`<${r[n].name}>`:`<${n}>`)}function i(n){return e.data[n]?new Date(e.data[n]).toLocaleDateString("fr-FR"):r[n]?`<${r[n].name}>`:`<${n}>`}function c(n,t="genre",u="e"){return e.data[t]==="féminin"&&(n=`${n}${u}`),n}function d(n,t,u="genre"){return e.data[u]==="féminin"?t:n}function f(){let n=a("prénom");return e.data.deadname&&(n=a("deadname")),`${n} ${a("nom")}
${c("né")} le ${i("dateNaissance")}
à ${a("lieuNaissance")}`}return{renderValue:a,renderDate:i,renderWithGender:c,genderSwitch:d,renderFullDescription:f}}export{m as u};
