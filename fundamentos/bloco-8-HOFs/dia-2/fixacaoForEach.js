// 1 - Use o método forEach chamando a callback showEmailList para apresentar os emails
const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
];
  
  const showEmailListt = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};
  
emailListInData.forEach(showEmailListt);

// 2 - Codepen
// Array contendo a lista de emails.
const emailList = [
    "isa@myemail.com",
    "lipe@myemail.com",
    "digo@myemail.com",
    "greg@myemail.com"
  ];
  
  // Função callback que recebe o array emailList como parâmetro.
  const showEmailList = (list) => {
    const div = document.querySelector("#email-list");
    div.innerHTML = '';
    list.forEach((email) => {
      const p = document.createElement("p");
      p.innerHTML = `${email} : Enviado com sucesso!`;
      div.appendChild(p);
    });
  }
  
  const btnFilter = document.querySelector("#btn-filter");
  btnFilter.addEventListener("click", () => showEmailList(emailList));
  