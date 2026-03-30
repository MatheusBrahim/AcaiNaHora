function pedirWhatsApp(produto) {
  const numero = "5513996630337";
  const mensagem = `Olá, quero pedir o ${produto}. Pode me passar os adicionais, frutas e caldas disponíveis?`;
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
}

function copiarPix() {
  const chavePix = document.getElementById("pix-chave").innerText;
  navigator.clipboard.writeText(chavePix)
    .then(() => {
      alert("PIX copiado com sucesso!");
    })
    .catch(() => {
      alert("Não foi possível copiar o PIX.");
    });
}