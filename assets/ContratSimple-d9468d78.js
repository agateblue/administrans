import{u as m}from"./templates-9512fb52.js";import{o as r,c as s,a as n,b as u,t,F as o,d as l,e as c,u as d}from"./index-1ba5e4d6.js";const h={class:"grid--row"},V={class:"grid--column"},v={key:0,class:"adress--sender"},f=n("br",null,null,-1),g=n("br",null,null,-1),y=n("br",null,null,-1),b={key:0,class:"grid--column date"},D={key:0,class:"adress--recipient"},j={__name:"DocumentHeader",props:{data:{type:Object,required:!0},renderValue:{}},setup(e){return(i,a)=>(r(),s(o,null,[n("div",h,[n("div",V,[e.renderValue("adresse")?(r(),s("div",v,[u(t(e.renderValue("prénom"))+" "+t(e.renderValue("nom")),1),f,u(t(e.renderValue("adresse"))+" ",1),e.data.téléphone?(r(),s(o,{key:0},[g,u("Téléphone : "+t(e.renderValue("téléphone")),1)],64)):l("",!0),e.data.email?(r(),s(o,{key:1},[y,u("Email : "+t(e.renderValue("email")),1)],64)):l("",!0)])):l("",!0)]),e.data.villeDocument&&e.data.dateDocument?(r(),s("div",b,t(e.renderValue("villeDocument"))+", le "+t(new Date(e.data.dateDocument).toLocaleDateString("fr-FR")),1)):l("",!0)]),e.renderValue("adresseDestinataire")?(r(),s("div",D,[u(" À l'attention du service client"),e.data.société?(r(),s(o,{key:0},[u(" de "+t(e.renderValue("société",!1)),1)],64)):l("",!0)])):l("",!0)],64))}},p={class:"signature"},k=n("p",null,"Pièces jointes :",-1),$={class:"attachments"},_={__name:"DocumentFooter",props:{data:{type:Object,required:!0},renderValue:{}},setup(e){return(i,a)=>(r(),s(o,null,[n("p",p,t(e.renderValue("prénom"))+" "+t(e.renderValue("nom")),1),e.data.listerPJ?(r(),s(o,{key:0},[k,n("ul",$,[n("li",null," Copie des pièces d'identité de "+t(e.renderValue("prénom"))+" "+t(e.renderValue("nom"))+" et décision de changement de prénom de "+t(e.renderValue("prénom"))+" "+t(e.renderValue("nom")),1)])],64)):l("",!0)],64))}},x=n("p",{class:"subject"},"Objet : Mise à jour de mes informations d'état civil",-1),J=n("p",null,"Madame, Monsieur,",-1),M=n("p",null," En vertu de la décision de changement de prénom délivrée par l'état civil, je vous prie de bien vouloir changer mon prénom dans vos registres. ",-1),C=n("p",null," Je vous remercie de l'aide que vous m'apporterez dans ma démarche et vous prie de bien vouloir croire, Madame, Monsieur, en l'assurance de ma considération, ",-1),B={__name:"ContratSimple",props:{data:{type:Object},structure:{type:Array}},setup(e){const i=e,{renderValue:a}=m(i);return(F,N)=>(r(),s(o,null,[c(j,{data:i.data,renderValue:d(a)},null,8,["data","renderValue"]),x,J,n("p",null," Je suis "+t(d(a)("prénom"))+" "+t(d(a)("nom"))+" et j'ai récemment obtenu mon changement de prénom à l'état civil. Je souhaite faire mettre à jour les informations me concernant dans vos registres. ",1),n("p",null," Je suis titulaire d'un contrat auprès de "+t(d(a)("société","votre société"))+" sous la référence "+t(d(a)("refContrat"))+". Le nom associé actuellement à ce contrat est "+t(d(a)("deadname"))+" "+t(d(a)("nom"))+". ",1),M,C,c(_,{data:i.data,renderValue:d(a)},null,8,["data","renderValue"])],64))}};export{B as default};
